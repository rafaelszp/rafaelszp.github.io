---
sidebar_label: AWS Lambda - Visão geral
---

# AWS Lambda - Visão geral

Created: 2024-05-29 07:04

Tags: `#aws` `#servless` `#lambda`

## O que é?

Segundo a documentação da fabricante *"O AWS Lambda é um serviço de computação que permite executar código sem o provisionamento ou gerenciamento de servidores."* Basicamente, o intuito desta Cloud Provider é fornecer um serviço que reduz as "preocupações" dos clientes somente com o código da rotina que desejam executar, pois o provisionamento de infraestrutura, servidores, configurações e toda a parafernália necessária fica abstraída para "longe das vistas" do cliente.

É importante ressaltar que mesmo que seja categorizado como servless, não significa que não há servidores e infraestrutura por traz deste serviço. O que esse termo "servless" traz consigo é o conceito de "foque no que precisa fazer", a estrutura necessária fica cargo da AWS.

## Como funciona?

O serviço é executado em microcontêineres, assim a cada requisição ou evento para uma determinada função Lambda, é iniciado o microcontêiner correspondente que irá responder por aquela requisição. Estes microcontêineres são reaproveitados desde que não estejam desalocados e estejam ociosos.

Quando um microcontêiner é iniciado pela primeira vez e inicializado ele passa por um processo chamado **Cold Start** que é basicamente condensado nos seguintes passos:

<figure>
<img src="AWS_LAMBDA_VISAO_GERAL_MEDIA/AWS Lambda Coldstart.excalidraw.svg" title="wikilink"
/>
<figcaption
aria-hidden="true">AWSLambdaColdstart.excalidraw.svg</figcaption>
</figure>

Um importante aspecto a considerar que o Cold Start precisa de um tempo para ser concluído, isto significa que as primeiras requisições levarão mais tempo para concluir. Para termos uma idéia, devido ao processo de inicialização, as 5% requisições mais lentas do Lambda são mais lentas que o serviço AWS Fargate.

## Detalhes internos

### Uso de microcontêineres

Os microntêineres executam somente uma função por vez, para que suporte mais requisições, mais ambientes devem ser criados para que haja paralelismo, isto significa que haverá **Cold start** para cada contêiner que responsável por responder às requisições.

Basicamente, as funções são executadas a partir do código escrito na função `handler`, sendo possível utilizar o **global scope**, desta forma outras execuções do mesmo microcontêiner podem se aproveitar das variáveis, constantes e funções que lá forem declaradas. Ainda sobre o **global scope**, é importante ressaltar que ele utiliza muitos recursos de CPU e memória, além disto os primeiros 10s de execução neste escopo não são cobrados.

### IAM

Durante a execução, as funções as lambda functions utilizam uma Execution Role para acessarem serviços serviços e recursos da AWS, como por exemplo enviar trace data para o AWS X-Ray. Desta forma as funções Lambda irão **assumir** este role, de modo que não é preciso chamar o `sts:AssumeRole` manualmente dentro da função, pois a AWS faz isso automaticamente.

### Autenticidade do código

No quesito segurança da informação, é possível utilizar o serviço AWS Signer para garantir a autenticidade do código mediante uso de um *Signing profile* apropriado. Basicamente são utilizados 2 buckets S3, sendo um para armazenar os objetos que serão assinados e outro bucket para guardar os objetos assinados, assim o AWS Signer utilizará um *signing job* para capturar os objetos não assinados, assiná-los e guardar no bucket apropriado.

## Múltiplas versões em paralelo

Uma funcionalidade importante das Lambda Functions é que é possível manter várias versões da mesma função sendo executadas em paralelo, de modo que podemos manter a compatibilidade com aplicações que utilizam versões mais antigas das funções.

Para utilizar esta estratégia, podemos referenciar as funções das seguintes formas:
- Pelo ARN da função, que mantêm nos últimos blocos a referência da revisão utilizada
- Por meio de aliases/apelidos da função, deixando revisão com caráter mais mnemônico.

## Uso de VPC

Existem serviços que residem dentro de uma VPC e só podem ser acessados por recursos que estiverem alocados nela, por isso, caso seja necessário comunicar com algum destes desses serviços através de funções Lambda, devemos associá-las às VPCs ondem residem esses recursos.

Associar as funções à VPC implica maiores custos, por exemplo:
- Haverá custo de transferência de dados entre as lambdas e os serviços acessados;
- Haverá custo de storage;
- Haverá maior custo referente ao ColdStart;

## Variáveis de ambiente

As funções Lambda utilizam variáveis de ambiente durante sua execução, de modo que dentro do código da função é possível executar as rotinas padrão da runtime escolhida para ler os valores das variáveis de ambiente, por exemplo:

| Runtime | Rotina            |
|---------|-------------------|
| Java    | `System.getenv()` |
| Python  | `os.environ`      |
| NodeJS  | `process.env`     |

Durante a execução das funções lambda, são injetadas variáveis padrão da AWS, como: `AWS_REGION`, `X_AMZN_TRACE_ID` e `AWS_LAMBDA_FUNCION_VERSION`

## Modos de invocação

### Sincronicidade

As funções Lambda podem ser invocadas das seguintes formas:
- `InvocationType: Event`, ou seja, de modo assíncrono. Isto significa que retornam imediatamente uma resposta, bem ao estilo *Fire and Forget*
- `InvocationType: RequestResponse`, ou seja síncrono, no modelo RPC, em que esperada umas resposta após o término do processamento.

### Meios de invocação

É possível realizar a invocação de funções lambda por vários meios a saber:
- EventBrige, através de regra de agendamento periódico
- API Gateway
- Outras funções lambda via AWS SDK
- Aplicações, via AWS SDK
- Chamadas de API
- AWS CLI
- SQS Queue

### Controlando falhas de funções assíncronas

Caso uma invocação assíncrona de função falhe ou que expire sem que haja processamento, é possível realizar as seguintes ações:
1. Utilizar o mecanismo padrão de on-failure destination (SNS Queue, SNS Topic, EventBridge, outra função Lambda)
2. Configurar uma Dead-letter-queue (DLQ) para registrar esses eventos e ter um maior controle como gerenciar as falhas, levando em conta que as SQS Queues tem tempo de vida, mesmo as DLQs.

## Plataformas e arquiteturas suportadas

Nativamente as funções AWS Lambda suportam as seguintes plataformas de desenvolvimento (até a presente data):
- NodeJS, 20, 18, 16
- Python: 3.8-12
- Java: 21,17,11,8
- .Net: 6-8
- Ruby: 3.2 e 3.3

Caso seja preciso utilizar outras plataformas de progração, como Rust ou Go, é necessário providenciar uma runtime para executar as funções Lambda, em formato de arquivo zip.

Em relação às arquiteturas suportadas, até o presente momento, temos:
- x86_64, baseada em processadores x86
- arm64, baseada no processador AWS Graviton2

Também é possível provisionar runtimes de outras plataformas de programação em formato de imagens Docker.

## Garantindo capacidades e diminuindo o cold start

Para diminuir o impacto do cold start, referente ao tempo de resposta aumentado em consequência do bootstrap da função, podemos utilizar as seguintes estratégias:
- Utilizar o **Reserved Concurrency**, em que indica o número máximo de execuções paralelas para uma função específica. A definição deste parâmetro consome o limite de funções em execução por região;
- Utilizar o **provisioned concurrency**, que são instâncias pré-inicializadas e já prontas para responder as requisições rapidamente.
- Realizar, periodicamente, health checks estratégicos por meio de EventBridge Scheduling rules, desta forma teremos "quase sempre" instâncias ativas, levando em conta que em algum momento, mesmo com esta estratégia, as instâncias serão desprovisionadas automaticamente pela AWS

### Cold Start na plataforma Java

O cold start na plataforma Java é consideravelmente maior do que nas plataformas baseadas em script como NodeJs e Python. Por isso, ao considerar esta plataforma devemos considerar o uso do **SnapStart** para melhorar o tempo de inicialização em até 10x, além disto, o uso de provisioned concurrency também deve ser considerado.

Para que o tempo de cold start seja diminuído, o SnapStart "tira" um snapshot da memória e do estado do disco, aprimorando o tempo de boot em até 10 vezes.

## Uso de Layers para dependências

Para um uso mais efetivo das lambda functions, diminuindo os tempos de packaging e de cold start, é importante utilizar Layers para armazenar as dependências da aplicação. São basicamente arquivos zip que são carregados na configuração das lambda functions.

É importante frisar que os pacotes de dependências devem estar nas pastas corretas, por exemplo o NodeJS precisa que o `node_modules` esteja na pasta `nodejs`, localizada na raiz do projeto.

## Uso de storage externo

É possível utilizar serviços de storage da AWS nas modalidades EFS e S3. Sendo que para o EFS, devemos considerar:
- Haverá custo de tráfego entre o lambda e o EFS
- É preciso associar uma lambda à VPC, pois o EFS é regional
- Haverá custo de throughput
- Haverá custo de armazenamento no EFS

## Limites

Existem limites nas Lambda Functions que devem ser observados:
- Tamanho máximo de uma função, contemplando Layers e projeto: 50mb para arquivos zipados e 250mb decompactado;
- Tempo máximo de execução de uma função: 15min. Este limite não é ajustável
- Limite de funções operando concorrentemente: 1000 para contas antigas
- Storage para funções: 75GB por região
- Uma função pode usar entre 128mb e 10204mb de RAM. Este limite não é ajustável
- Uma função pode ter, no máximo 5 layers. Este limite não é ajustável
- Payload máximo assíncrono: 256Kb
- Payload máximo síncrono: 6mb

Os limites acima são os mais relevantes, porém é recomendável observar todos os limites na [documentação oficial](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html).

## Monitoramento

O monitoramento das execuções das funções lambda pode ser realizado pelo AWS Cloudwatch de forma que podemos monitorar as seguintes métricas:
- **Invocations**, numero de invocações
- **Duration**, tempo de processamento (avg, min, max)
- **Error count** e **success rate(%)**
- **Throttles** - Número de falhas devido a problemas de limites de concorrência
- **IteratorAge**, para stream event sources, a idade do último item no batch quando o Lambda o recebeu e invocou a função
- **Async delivery failure**s, número de erros ao tentar gravar no destino ou na DLQ
- **Concurrent executions**, numero de instâncias que estão processando eventos

## Custo

A cobrança das funções lambda é baseada nos seguintes parâmetros:
- Memória configurada
- Tempo de execução
- Uso de storage temporário (ephemeral storage)

## Pontos a observar e práticas recomendadas

Sobre o uso de lambda há alguns pontos que devemos nos atentar como:
- Ao usar DLQs, atente-se para o TTL dos eventos lá registrados para eventos importantes não sejam perdidos
- Os primeiros 10s de processamento do *global scope* não é cobrado, então é boa prática utilizá-lo para diminuir custos de operação
- Regularmente, invoque health-checks estratégicos, para diminuir o impacto dos cold starts
- Mesmo com health-checks estratégicos, as instâncias são desprovisionadas automaticamente pela AWS
- Caso seja imperativo manter um tempo de resposta baixo, utilize a estratégia de **preserved concurrency**
- O uso e preserved concurrency acarreta:
- Maior tempo de deployment
- Maior custo
- Quanto maior a memória definida para a função lambda, maior será o custo financeiro atrelado ao aumento de recursos de de processamento e de memória
- Sempre considere o tempo máximo de execução de uma função, que é de 15 minutos e não é ajustável
- Funções assíncronas não tem retorno imediato de falha, é preciso utilizar os mecanismos apropriados para monitorar os erros
- Para invocar outras funções lambda a permissão `lambda:InvokeFuncion` é requerida na execution role da função
- Atente-se para o timeout correto esperado da função, ajustando o valor apropriado para não incorrer em erros de timeout
- É possível publicar uma função direto na Internet, sem uso de um API Gateway, por meio de uma URL de acesso
- O acesso direto pela Internet deve vir junto com a configuração de *Authentication type* para `node`, para que o IAM não negue o acesso
- Caso precisemos dimunir a latência é possível utilizar o serviço Lambda@Edge integrado ao CloudFront
- O Lambda@Edge não possui todas as funcionalidades, então é preciso arquitetar bem o uso desta característica
- Existe proteção de recursão, para evitar loops infinitos e consequentemente custos não esperados. Este recurso é parametrizável e habilitado por padrão, sendo que o limite padrão de recursão é 16, suportando outros serviços como SQS e SNS
- Caso não haja nenhum microcontêiner ocioso, ocorrerá cold start de novas instâncias, aumentando o tempo da requisição
- Até o presente momento o SnapStart **Não está** disponível para arm64

## Considerações pessoais sobre o uso

Basicamente, Lambda deve ser utilizada para processamentos rápidos, de baixo tthroughput, baixo grau de paralelismo e nenhum acoplamento. Acredito que os melhores usos são para:
- Transformações rápidas
- encaminhamento de processamento
- encarregado de "saber" para quem entregar (orquestrador)
- Descarregar DLQs

## Referências

1.  https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html
2.  https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html
3.  https://docs.aws.amazon.com/pt_br/lambda/latest/dg/images-create.html
4.  https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html
5.  https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html
6.  https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-run-lambda-schedule.html
7.  https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html
8.  https://docs.aws.amazon.com/lambda/latest/dg/example_lambda_Invoke_section.html
9.  https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html
10. https://aws.amazon.com/blogs/compute/implementing-aws-lambda-error-handling-patterns/
11. https://docs.aws.amazon.com/signer/latest/developerguide/lambda-workflow.html
12. https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html
13. https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html
