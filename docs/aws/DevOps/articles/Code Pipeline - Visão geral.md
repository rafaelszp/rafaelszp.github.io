---
sidebar_label: Code Pipeline - Visão geral
---

# Code Pipeline - Visão geral

Created: 2024-07-03 08:17
Tags: \#devops \#codepipeline \#aws

## Serve para quê?

O serviço da AWS Code Pipeline serve para orquestrar as diferentes etapas de uma pipeline de CI/CD. Uma pipeline é o fluxo que descreve como devem ser processadas as mudanças de um determinado software.

## Quando são iniciadas?

As pipelines são disparadas quando há uma mudança no codigo, declaradas como Source. Quando isto acontece é criada uma `revision` que representa estas mudanças, para que sejam processadas pelas `Executions`

## Componentes de uma pipeline

No Code Pipeline há basicamente 3 componentes básicos sendo:
1. A Pipeline em si
2. Os Stages (estágios) para agrupar Actions que devem ser executadas em conjunto
3. Actions , que servem para definir como manipulamos os artefatos
4. Transitions, são as ligações entre Stages, sempre ocorrendo de forma ascendente, ou seja, do estágio anterior para o seguinte
5. Artifacts, que são os artefatos que são manipulados pelas actions
6. Variáveis
7. Triggers

### Stages

Os Stages são conjuntos de actions que fazem sentido serem executadas de forma agrupada. Para que uma Stage seja executada, deve existir uma transition habilitada, proveniente de um Stage anterior.

### Transitions

As Transitions são as transições entre estagios, sempre de forma ascendente. Estas podem ser desabilitadas, de forma que o próximo Stage não será executado enquanto não houver um "TTL", de 30 dias, ou quando for reabilitada. Durante o período em que uma derminada transition estiver desabilitada, as Executions que estiverem em espera são chamadas de **Inbound Executions**.

É importante ressaltar que se uma transition permanecer desabilita por mais de 30 dias, o processo de retomada de execução é manual, de forma que a pipeline relacionada deve ser executada novamente.
\### Actions

Actions são as ações, ou operações que ocorrem nos artefatos, que podem ser executadas tanto serialmente quanto paralalamente. Por exemplo, uma `build action` pode acionar o serviço (provider) CodeBuild para que os artefatos de entrada (input) sejam utilizados como fonte da compilação (build), gerando um artefato de saída que será utilizada em uma próxima Action, que pode estar dentro do mesmo Stage ou mesmo no subsequente.

As Actions podem ser dos seguintes tipos:
- Source
- Build
- Test
- Deploy
- Approval
- Invoke
- Personalizadas pelo operador

## Executions

As Executions são processos relacionados às operações realizadas nos componentes das pipelines, assim temos:
- Pipeline executions - corresponde a um conjunto de mudanças ocorridas na fonte (Source). Cada uma delas possui um identificador (ID). Suportam várias execuções em paralelo
- Stage operations - embora não seja uma execution em si, mas classificada como operation, faz mais sentido tratar como uma execution. Estas correspondem aos processos de completar as execuções das Actions de um stage.
- Action executions - Referem se ao processo de completar as operações que ocorrem dentro de um action.

Abaixo segue uma tabela com o Status relacionados às executions de uma pipeline:

| Nivel | Estados |
|----|----|
| Pipeline execution | `InProgress`, `Stopping`, `Stopped`, `Succeeded`, `Superseded`, e `Failed`. |
| Stage operations | `InProgress`, `Stopping`, `Stopped`, `Succeeded`, e `Failed` |
| Action executions | `InProgress`, `Abandoned`, `Succeeded`, e `Failed` |
|  |  |

Para os níveis de Pipeline e de Stage, temos 2 tipos de executions, a saber:
- Standard
- Rolled back

### Pipeline Executions

São operações que ocorrem em resposta às mudanças em um Source. Estas podem ser executadas paralelamente ou não. Quando uma Execution está esperando uma transition ser habilidada pra executar um próximo Stage é chamada de `Inbound Execution`

#### Stopped Executions

As executions podem ser paradas manualmente, a qualquer momento durante a execução de uma pipeline. Quando o processo de "parada" é executado, pode ser dos seguintes tipos:
- **Stop and wait** - As actions que estiverem em execução não serão terminadas, de modo que a pipeline transita entre os estados de `Stopping` para `Stopped`. O processo de retry (tentar novamente) é possível
- **Stop and Abandon** - As actions em execução serão "abandonadas", ou seja, terminadas, de modo que a pipeline transita entre os estados de `Abandoned` para `Stopped`.O processo de retry (tentar novamente) é possível

#### Failed Executions

Quando uma execution não completa devido a algum problema o estado é alterado para `Failed`, de modo que o processo de rollback é possível.

#### Execution modes

As executions tem 3 modos de operação, a saber:
1. `SUPERSEDED`, neste modo as executions serão substituídas pelas posteriores. Esse processo ocorrerá durante as transitions, de forma que os stages em execução não serão interrompidos, porém os susbsequentes terão execuções substituídas pelas mais recentes. Este é modo padrão das pipelines, ressaltando que haverá somente uma requisição por stage ao mesmo tempo.
2. `QUEUED`, neste modo, disponível somente na versão 2 (V2) das pipelines, as execuções serão enfileiradas na ordem de criação.
3. `PARALLEL`, neste modo, disponível somente na versão 2 (V2) das pipelines, não há espera, pois as executions operam em paralelo, sem interferirem entre si. Este modo é recomendado, por exemplo, para múltiplos ambientes de desenvolvimento em que é preciso testar várias alterações em paralelo.

### Artifacts

São os arquivos que são manipulados pelas Actions, sendo que podem ser `input` ou `output` artifacts, definidos na etapa de criação da action. Durante a transição de artifacts entre actions o Code Pipeline precisa utilizar um bucket do `Amazon S3` para esta operação, isto implica custos de acesso e armazenamento do serviço S3.

Alguns exemplos de artifacts são:
1. Source code
2. Dependencies
3. Definition files
4. Templates
5. Built applications and packages

Além disto, é essencial que o bucket esteja na mesma região e conta da pipeline, caso não exista, o Code Pipeline criará automaticamente, sendo que a cada nova criação de pipeline, um bucket poderá ser criado para este fim caso não encontre um existente com um padrão de nomes pré-definidos, a saber: `code-pipeline-<region>-`, assim, caso um bucket com esse padrão de nomenclatura seja encontrado, este será utilizado em vez de criado um novo. Ressaltando que Cross-region pipelines terão este mesmo comportamento.

Ainda sobre a escolha automática do bucket baseda no padrão de nomenclatura, se houver mais de um bucket com nome de mesmo padrão, o Code Pipeline escolherá automaticamente o primeiro encontrado, ordenado lexicograficamente, ou seja, por ordem alfabética.

Também é possível definir via CLI, ou IaC (ex. Terraform) o nome do bucket que será utilizado para fazer o armazenamento de Artifacts, sendo possível também definir a forma de encriptação dos objetos.

## Triggers

São gatilhos que são utilizados para dispararem uma pipeline, por exemplo, quando um evento Clouwatch está associado ao ARN de uma Pipeline, como event target rule, uma source code revision irá representar às mudanças relacionadas àquele evento e iniciará a pipeline.

Os gatilhos de execução podem ser:
1. Manual, via console ou CLI, por exemplo
2. CloudWatch events, sendo que o ARN da pipeline será o target de uma event rule
3. Webhooks do GIT, na versão 2 (V2), para que serviços terceiros como Github ou Gitlab possam diparar pipelines

## Variables

As variáveis são muito úteis para deixar as pipelines mais dinâmicas, por exemplo, é possível definir parâmetros diferenciados por ambiente (produção, homologação).

As variáveis podem ser declaradas diretamente no nível de pipeline ou emitidas pelas actions. Sendo que as variáveis emitidas por actions são disponibilizadas logo após a execução com sucesso das mesmas.

### Namespaces

As variáveis podem pertencer a escopos específicos, garantindo que elas serão unicamente referenciadas. Os namespaces são dos seguintes tipos:
1. `codepipeline` , ex.:`#{codepipeline.PipelineExecutionId}`. Neste caso são variáveis implícitas (reservadas) da pipeline em si, disponíveis no início de cada execution.
2. `variables`, ex.: `#{variables.variable_name}`. Neste caso são variáveis que ficam no escopo da pipeline
3. Ex.: `#{SourceVariables.VersionId}`. Neste caso são variáveis definidas e produzidas na execução das actions, um namespace precisa ser definido neste escopo e não pode conflitar com outras variáveis da pipeline, aqui foi definido um namespace para a action referente ao CodeCommit que utiliza o namespace `SourceVariables`. Outro exemplo seria o CodeBuild que utiliza o namespace `BuildVariables` para produzir output variables
\## Serviços que podem ser integrados

Durante a execução da pipeline é possível integrar-se a certos serviços da AWS, sendo possível também integrá-la a serviços terceiros, como por exemplo:
1. Fontes de origem: Github, Gitlab, AWS Code Commit, Amazon S3, Outros serviços GIt via Webhooks V2
2. Compilação e construção de pacotes: AWS Code Build e Jenkins
3. Publicação: AWS Code Deploy
4. Notificações e eventos: AWS CloudWatch, AWS Event Bridge, Amazon SNS

## Boas práticas e exemplo

Ao estruturar uma pipeline é recomendável agrupar actions de uma revision em um mesmo Stage, desde que haja uma relação entre elas. Por exemplo, no processo de build as actions de `build` e `test` devem estar agrupados em um mesmo stage, para que os testes sejam executados relativos àquela revision.

Então, seguindo as recomendações da documentação oficial, um modelo básico de pipeline seria o seguinte:
![100%](Code%20Pipeline%20-%20Vis%C3%A3o%20geral-media/CodePipelineExample.excalidraw.svg "wikilink")

## Versões de pipeline

O Code Pipeline possui 2 versões de pipeline, V1 e V2, sendo que é preferível utilizar a V2, pois expande quantidade de funcionalidades em relação à V1, além de ter um custo menor. Para ambas versões a estrutra é no formato JSON, contendo Stages e Actions parametrizadas.

Na versão 2, temos as seguintes funcionalidades a mais:
1. Menor custo
2. Variáveis a nível de Pipeline
3. Modos de execução `QUEUED` e `PARALLEL`
4. Possibilidade de fazer rollback em nível de Stage
5. Sobrescrita de Source Revision
6. Triggers, filtragens por: tags, GIT Pull Requests, GIT branches ou Path

## Como é a aprovação manual?

A aprovação manual nada menos é que uma Action do tipo (categoria) `Approval`. Conforme estrutura JSON abaixo:

``` json
{
  "name": "MyApprovalStage",
  "actions": [
    {
      "name": "MyApprovalAction",
      "actionTypeId": {
        "category": "Approval",
        "owner": "AWS",
        "version": "1",
        "provider": "Manual"
      },
      "inputArtifacts": [],
      "outputArtifacts": [],
      "configuration": {
        "NotificationArn": "arn:aws:sns:us-east-2:80398EXAMPLE:MyApprovalTopic",
        "ExternalEntityLink": "http://example.com",
        "CustomData": "The latest changes include feedback from Bob."
      },
      "runOrder": 1
    }
  ]
}
```

Com base na configuração acima percebemos os seguintes detalhes:
- O parâmetro `runOrder` define a sequência de execução das actions de um Stage
- Existe um tópico SNS associado às notificações para os responsáveis (subscribers) pela aprovação da pipeline
- Uma URL de revisão pode ser acrescentada, caso o aprovador queira visualizar a aplicação no ambiente de QA
- É preciso que haja permissões para que a Code Pipeline grave no tópico em questão
- É preciso que o aprovador tenha permissão para visualizar e realizar a aprovação
- Enquanto a aprovação não ocorre, a pipeline execution não prossegue para os próximos passos, além disto a Action permanece no status `Waiting for approval`
- Caso não haja aprovação dentro de 7 dias, a pipeline transita para o status `Failed`

Abaixo segue um exemplo de tela de aprovação via console:
![300](Code%20Pipeline%20-%20Vis%C3%A3o%20geral-media/3f18c917ec72bc0d90440f8d80fa34afa85840b6.png "wikilink")

Caso a aprovação seja pelo CLI, um arquivo de JSON de aprovação[^1] deve ser enviado, conforme exemplo abaixo;

``` json
{
  "pipelineName": "MyFirstPipeline",
  "stageName": "MyApprovalStage",
  "actionName": "MyApprovalAction",
  "token": "1a2b3c4d-573f-4ea7-a67E-XAMPLETOKEN",
  "result": {
    "status": "Approved",
    "summary": "The new design looks good. Ready to release to customers."
  }
}
```

## Monitoramento

Do ponto de vista de observabilidade, o Code Pipeline pode ser monitorado pelos seguintes meios:
- Via [Amazon Event Bridge](Amazon Event Bridge "wikilink")
- AWS Developer Tools console
- AWS Cloudtrail
- Console e CLI

### Event Bridge

O monitoramento pelo Event Bridge utiliza o mesmo mecanismo que o Cloudwatch na camada inferior de serviços da AWS, porém possui uma gama maior de funcionalidades do ponto de vista de orquestração de eventos.

Assim, para o monitoramento das pipelines os eventos capturados serão os referentes à mudança de estado nos componentes a saber:
- Pipelines
- Stages
- Actions

Quando um evento for capturado, ele será enviado para targets específicos, podendo ser:
- Lambda Function
- AWS SNS
- Outros serviços compatíveis com Event Bridge

#### Mas o que são Eventos?

Do ponto de vista do Code Pipeline, são um conjunto de rules (regras) referentes às mudanças de estado da pipeline. Diante disto, podemos fazer a seguinte relação:
- Eventos são um conjunto de `Rules`
- As Rules são compostas de:
- `Event pattern`, representando o Source e o Type dos eventos a monitorar. De modo que, o Code Pipeline seria o Source, enquanto o Type representa o tipo de mudança que deve ser capturado (Stage, Action, Pipeline)
- `Target`, representa o canal de notificação, que pode, por exemplo um tópico do AWS SNS. Além disto, a notificação é realizada com sucesso mediante a permissão de `Invoke` no serviço destino

Recaptulando, os eventos são disparados na mudança de estados de um dos seguintes tipos (Types):
- Pipeline Executions [^2]
- Stage Executions[^3]https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html#detect-state-events-stage
- Action Executions [^4]

Sendo que cada um destes tipos possui seu conjunto de estados que podem ser monitorados.

### Detail type

É o atributo que define quais tipos de mudança de estados serão monitoradas, sendo que para cada um deles é possível monitorar somente em pipelines específicas ou em todas.

Abaixo segue um exemplo da configuração JSON referente a um determinado evento de mudança de estado de uma Stage Execution:

``` json
{
  "version": "0",
  "id": "01234567-EXAMPLE",
  "detail-type": "CodePipeline Stage Execution State Change",
  "source": "aws.codepipeline",
  "account": 123456789012,
  "time": "2020-01-24T22:03:07Z",
  "region": "us-east-1",
  "resources": [
    "arn:aws:codepipeline:us-east-1:123456789012:myPipeline"
  ],
  "detail": {
    "pipeline": "myPipeline",
    "version": 1.0,
    "execution-id": "12345678-1234-5678-abcd-12345678abcd",
    "start-time": "2023-10-26T13:49:39.208Z",
    "stage": "Prod",
    "state": "STARTED",
    "pipeline-execution-attempt": 1.0
  }
}
```

### Developer Tools

O Developer Tools Console [^5] É um conjunto de serviços da AWS para auxiliar no desenvolvimento.

O monitoramento pelo Developer Tools ocorre por meio de subscrição no tópico SNS referente aos eventos emitidos pelas pipelines.

### Cloudtrail

O Serviço AWS CloudTrail pode ser utilizado para realizar o monitoramento, porém é necessário que haja um bucket é requerido para que os logs sejam armazenados (despejados). Caso não haja o bucket, será utilizado um `placeholder bucket` para despejo dos logs.

Se a estratégia do placeholder bucket for utilizada, não será possível acessar dados dos logs, somente se for definido um bucket personalizado para despejo dos logs.

## References

1.  Code Pipeline - Visão Geral - Literature notes (personal Obsidian vault)
2.  https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html
3.  https://docs.aws.amazon.com/codepipeline/latest/userguide/action-types.html
4.  https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-variables.html#reference-variables-concepts
5.  https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works.html
6.  https://docs.aws.amazon.com/codepipeline/latest/userguide/approvals-json-format.html

[^1]: JSON Structure for manual approval: https://docs.aws.amazon.com/codepipeline/latest/usergu2de/approvals-json-format.html

[^2]: https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html#detect-state-events-pipeline

[^3]: 

[^4]: https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html#detect-state-events-action

[^5]: Developer tools console: https://docs.aws.amazon.com/pt_br/dtconsole/latest/userguide/what-is-dtconsole.html
