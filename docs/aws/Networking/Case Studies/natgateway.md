---
sidebar_label: 'Estudo de caso 1 - NAT Gateway'
---

# AWS - Estudo de caso - NAT Gateway


## Introdução

Desde abril/2024 tenho feito imersão na Cloud Provider AWS com intuito de certificar-me como Arquiteto de Soluções em um futuro não tão distante. Para encurtar o caminho estou realizando um treinamento na CloudFaster, que possui um método bem interessante chamado [Método ADVC](https://cloudfaster.academy/curso/advc). 

Com isso comecei a me atentar para um tema que até pouco tempo atrás gerava pouco interesse: redes, subredes e roteamento. Assim, ao adentrar neste assunto me deparei com as seguintes dúvidas:
- Como conectar duas VPCs de forma que as instâncias e serviços possam comunicar entre si?
- Para quê serve o NAT Gateway? Não é a mesma coisa que o Internet Gateway?
- E as rotas? Elas funcionam realmente em todas as AZ's ou somente dentro das subnets a elas associadas?

Então, como um tecnicista com viés que tende ao pragmatismo, resolvi elaborar dois estudos de caso, sendo um referente ao NAT Gateway e um ao Transit Gateway. Todavia, neste artigo tratarei somente do NAT Gateway.

<mark>**Atenção**: Esta solução foi elaborada com intuito de aprender como funcionam os serviços de rede da AWS, por isso **NÃO DEVE SER ADOTADA DE FORMA ALGUMA** como prática ou como referência arquitetural.</mark>

## Caso 1 - NAT Gateway

Neste caso, resolvi me desafiar ao definir a seguinte circunstância a ser tratada:  Desenvolver uma arquitetura que deve atender as seguintes especificações a seguir.

### Especificações
Desenvolver uma arquitetura de redes, baseadas na Cloud Provider AWS, em que haja:
- Duas (2) VPCs, nomeadas `VPC-A` e `VPC-B`, criadas de forma manualmente;
- As VPCs devem possuir cada uma:
	- Uma subnet privada
	- Uma subnet pública
- Sobre a conectividade:
	- As instâncias e/ou serviços alocados nas As subnets privadas das VPCs `VPC-A` e `VPC-B` devem comunicar entre si
	- Todo o tráfego de saída para a internet deve, obrigatoriamente, ser roteado para subnet pública de cada VPC

Além destas especificações, é importante contemplar também:
1. NAT Gateway para fazer o tráfego de saída das subnets públicas
2. Todas as subnets devem estar em zonas distintas
3. Um teste deve ser realizado para averiguar se subnets públicas da VPC-A conseguem comunicar com os hosts de subnets privadas de VPC-B e vice-versa
	- Caso não haja tráfego, deve ser determinada a solução de contorno
4. Um teste deve ser realizado para averiguar se é possível acessar a internet através do NAT Gateway associado à outra VPC
5. Um teste deve ser realizado para averiguar se os NAT Gateway provê conectividade às subnets de uma mesma VPC, independente da AZ de cada subnet
6. Mesmo que haja um NAT Gateway, ainda é preciso configurar um Internet Gateway para possibilitar o tráfego com a Internet

Para finalizar este desafio é imprescindível entender e descrever:
- Tabelas de rotas de cada subnet;
- ENIs associadas aos serviços de conectividade com a Internet;
- EIPs associados aos recursos de conectividade com a Internet;
- Endereçamento das VPCs;
- Gateways utilizados nesta solução;
- Security groups utilizados;

## Solução adotada

Para desenvolver esta solução, me baseei em um dos labs fornecidos pelo curso Método ADVC, que foi crucial para o entendimento e construção da solução. Abaixo segue o diagrama:

![diagrama](assets/AWS%20-%20Estudo%20de%20caso%20-%20NAT%20Gateway%20-%20estendido.png)


### Outras informações
Para esta solução ressalto ainda:
- Fora adotada o serviço VPC Peering, para estabelecer conectividade entre as VPCs A e B sendo:
	- VPC-A - requester
	- VPC-B - accepter
- Somente estabelecer o peering não era suficiente para que a conectividade fosse possível, para isso realizei as seguintes ações:
	- No console da AWS, na seção relativa ao peering, foi preciso aceitar a configuração criada;
	- Foi necessário criar uma entrada em cada subnet privada, sendo que o destino era o CIDR da VPC adjacente e o target era a configuração de peering criada
- Para cada NAT Gateway, foi associada uma ENI (Elastic Network Interface) pública, ou seja, um EIP (Elastic IP)  foi conectado à ENI referente ao NAT Gateway;
- Dois security groups foram criados, uma vez que são recursos de VPC:
	- sgA - referente às ENIs das instâncias EC2 associadas à subnet pvt-sub-a permitindo comunicação SSH e ICMP para o CIDR `0.0.0.0/0`
	- sgB - referente às ENIs das instâncias EC2 associadas à subnet pvt-sub-b permitindo comunicação SSH e ICMP  para o CIDR `0.0.0.0/0`

## Validando a solução

Para validar a arquitetura proposta realizei alguns testes, sendo:
- Foi possível realizar icmp(ping) em todas as instancias das subnets privadas das VPCs A e B
- O NAT Gateway, conforme consta na documentação oficial da AWS, permitiu conectividade à internet à VPC adjacente (VPC-A &lt;&gt; VPC-B );
- O NAT Gateway possibilitou o tráfego de saída para as subnets privadas da VPC associada, desta forma é possível utilizar o mesmo gateway para tráfego de saída, desde que seja na VPC onde fora associado e que haja rota configurada
- Na configuração do diagrama proposto, o ping (icmp) foi bem sucedido para o seguinte caso:
	- **origem:** instância EC2 criada na subnet pvt-sub-a1
	- **destino:** instância EC2 criada na subnet pvt-sub-b1
- Na configuração da solução proposta, não foi possível pingar fazer ping de:
	- **origem:** instância EC2 associada à subnet pub-sub-a1
	- **destino:** instância EC2 associada à subnet pvt-sub-b1
	- Para que a comunicação fosse estabelecida, foi preciso:
		- Criar uma entrada na rota `pub-sub-a` com destino  ao CIDR `10.1.0.0/16` (VPC-B)  além de definir o peering  (pcx-abc) como target(alvo)
		- Não foi necessário acrescentar entrada na `pvt-sub-b` apontando para o CIDR da VPC-A, porém acredito que seja uma boa prática acrescentar esta entrada;

### Questões a serem respondidas
- Na documentação é mencionado o NGW Privado para fazer conexão entre VPC's, mas como fazer essa conexão? Será via Transit Gateway, se sim como deve ser feito isso??
	- Como tentativa, criei um NAT Gateway privado e rotas associadas a ele, mas não obtive sucesso. 
	- Ao tentar associar uma ENI avulsa ao NGW Privado, não era possível pois não este recurso não era listado
- E se precisar conectar uma VPN (Site to Site). Qual serviço seria utilizado para isso? Um Virtual Private Gateway? Como seria a tabela de roteamento entre a VPC e a rede On Premises?

## TODO
Toda a configuração foi utilizada por meio da prática ClickOps, que não é recomendada, assim o próximo desafio é escrever um IaC que represente esta arquitetura proposta. Além disto, é importante validar no Well Architected se as práticas desta solução são adequadas.

## Referências

1. https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-scenarios.html

