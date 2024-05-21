---
sidebar_label: ECS Fargate Container Deployment
---

# ECS Fargate Container Deployment

Created: 2024-05-21 06:56

Tags: \#aws \#ecs \#devops

## O que é ECS

É o serviço de orquestração de contêiners da AWS que utiliza um componente chave para execução de aplicações: Docker.
As principais características deste serviço são:
- Premissa de não se preocupar com a infraestrutura ao executar aplicações no [AWS Fargate](AWS Fargate "wikilink")
- Totalmente integrado ao [IAM](03 - Contas, acessos e IAM "wikilink")
- Integrado ao Cloudwatch para integração com uso de métricas, logs e monitoramento
- O modelo de deployment que utiliza o [AWS Fargate](AWS Fargate "wikilink") é o que é realmente considerado Cloud Native
### Termos chave
- Tasks
- Task Definitions
- Services
- Clusters
## ECS: Conceitos

### ECS: Task Definition

É o blueprint (planta, plano de execução) para execução das Tasks.
Em relação às propriedades da Task Definition:
- **Launch type**, tipo de serviço que será utilizado para executar o contêineres: EC2, Fargate ou External
- **Roles**, necessários 2 roles principais para execução:
- **Task Definition roles**, com permissões requeridas para execução de contêiners em uma task, por exemplo: pull de imagens no ECR, injetar segredos do SecretsManager
- **Task roles**, que são atribuídas à task em si, utilizadas em runtime, ou seja, durante execução dos contêiners, por exemplo: query no DynamoDB, acessar um arquivo no S3, montar EFS, enviar mensagens ao SQS
- **Container image**, URL da imagem docker a ser executada, ex.: URL do ECR
- **vCPU e memória alocados**, quanto de recurso será necessário para executar uma task. Vale destacar que se houver necessidade de maior processamento, o tipo LaunchType EC2 é mais apropriado, o Fargate deve ser utilizado para uso "mais modesto" de recursos o quando não é possível predeterminar os valores de alocação
- **Variáveis de ambiente**, variáveis de ambientes que serão utilizadas nos contêineres associados à task
- **Secrets**, é possível injetar dados sensíveis a partir do AWS Secrets Manager ou do Systems Manager Parameter Store
- **Logging configuration** Definição do "log driver"
- Fargate: awslogs, splunk e awsfirelens
- ECS: fluentd, json-file
- **Exposed ports**: Quais as portas que o contêiner utiliza para tráfego de entrada

## ECS: Task

Uma task é a execução baseada nas definições, é composta de um conjunto de contêineres executados no mesmo host. A definição é no formato Docker Compose.
Ex.:
![Pasted image 20240521093327.png](ECS%20Fargate%20Deployment-media/7d00f780b3fdd7f31b3d44386bd67c230535c1bf.png "wikilink")

Além disto, é possível executar a Task de diretamente(manualmente), que permanecerá ativa até que seja manualmente finalizada ou que finalize por si mesma. Neste tipo de execução, não haverá reposição (replacement).

### ECS: Service
Um gerenciador de ciclo de vida de Tasks, lembra um pouco o Deployment do K8s. Possui health check e reposição de instâncias "não saudáveis"

### ECS: Clusters
É um agrupamento de Services e Tasks, lembra o namespace do K8s.

### ECS: Launch Types (LT)

São 3 tipos de Launch Types, ou seja, Workloads: EC2, Fargate e External

#### ECS - LT: EC2

Onde o usuário deve controlar a infraestrutura da Task, como volumes, CPU, Alocação, SO, Security groups, etc. Recomendável para workloads que precisem de alto processamento

#### ECS - LT: Fargate

Recomendável para Tasks que possuem baixo processamento e que tenha um range menor de elasticidade. Também é recomendável quando não é sabida a quantidade de recursos necessários para o workload. Low Overhead(custo adicional de recursos - hw, sw, rede, security) e bursts ocasionais.
![ECS FARGATE.excalidraw.svg](ECS%20Fargate%20Deployment-media/ecs_fargate.svg)

#### LT: External
Este caso é para rodar os workload OnPremises, mas com a orquestração do ECS.

### ECS: Task Scheduling
É o processo de associar as tasks a contêineres dentro de um cluster, determinando quais instâncias de contêiner são apropriadas para executá-las.

#### Estados na Lifecycle

![ECS - Task States lifecycle.excalidraw.svg](ECS%20Fargate%20Deployment-media/task_states.svg)

Descrevendo o ciclo de vida, então:
- **Provisioning**: Progresso de pré-condições, alocações de recurso da AWS. Ex.: anexando ENI
- **Pending:** Aguardando disponibilidade de recursos
- **Activating:** Executando últimas etapas/passos antes de partir para status de Running (acredito que o health check fica aqui, init-containers também). Ex.: Registrando nos target groups do ALB
- **Running:** A task está em execução
- **Deactivating**: Executando passos antes de parar, por exemplo: desalocar os target groups no ALB
- **Stopping**: Finalizando com **SIGTERM**, se 'estourar' o timeout(graceful time) o contêiner receberá um **SIGKILL**
- **Deprovisioning**: Passos finais para transição para o estado de **Stopped**, ex: desalocando ENI
- **Stopped**: Task foi finalizada com sucesso

#### EventBrigde e agendamento regular
O agendamento das tarefas baseado em horários regulares é executada pelo serviço [Event Bridge](O que é event bridge "wikilink"). É importante que este serviço possua permissões para executar as tasks nos tempos pré-determinados.

#### Execução on demand

É a modalidade onde executamos as Tasks de forma standalone, sem um service scheduler. Ideal para quando precisamos fazer algum teste da Task ou quando é uma execução muito pontual.
**Ponto importante** Dependendo do modo de rede, é preciso fornecer detalhes da VPC desejada.

### ECS: Uso do ECR

O tipo Fargate depende das imagens de contêiner, por um registro de imagens, porém, o mais indicado seria utilizar o ECR, devido ao baixo custo e alta integração(nativa) com o Fargate.
**Ponto importante** O Fargate não gera custos de download de imagens quando usando o ECR, pois o tráfego não passa pela internet, mas pela rede interna da AWS. Outro detalhe é que a cobrança do ECR é basicamente por armazenamento e por tráfego para Internet.

------------------------------------------------------------------------

## ECS: Detalhes ao executar uma aplicação no ECS Fargate

![ECS - Esquema básico de uma aplicação NodeJS com Fargate .excalidraw.svg](ECS%20Fargate%20Deployment-media/nodejs.svg)


## References

1.  AWS Fundamentals - Running and Orchestrating Containers with ECS Fargate página 85 (ebook)
2.  Deploy applications on Amazon ECS using Docker Compose https://aws.amazon.com/blogs/containers/deploy-applications-on-amazon-ecs-using-docker-compose/
3.  Deploy applications on Amazon ECS using Docker Compose https://www.docker.com/blog/docker-compose-from-local-to-amazon-ecs/
