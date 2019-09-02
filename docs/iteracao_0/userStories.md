> # User Stories
>
> ## Cliente: Antonio Lima
>
> Para entender o Bug x Hunter, é crucial conhecer certos conceitos, tais como:
>
> - Bug Bounty: É uma prática de recompensa por bugs relatados, popular em diversas empresas, como Facebook e Google.
> - Bug Hunter: São os Hackers que procuram por bugs, para assim, poder ganhar alguma recompensa (geralmente, o bug Hunter ganha uma certa quantia de dinheiro por bug relatado)
>
> Apesar de bastante útil, testes de segurança são relativamente caros, sendo assim, nossa aplicação promete aproximar empresas pequenas e desenvolvedores autônomos, garantindo à segurança e privacidade dos dados dos projetos à serem testados
>
> ## Como funciona:
>
> <p>&nbsp;&nbsp;&nbsp;&nbsp;De maneira geral, é importante entender que plataforma terá dois tipos de cliente, as empresas e os bug hunters. As empresas vão ser responsáveis por colocar seus projetos para serem testados, e então, os bug hunters terão à possibilidade de procurar falhas e poder relatá-las. Confirmado o bug, à empresa recompensará o bug hunter, através da plataforma, a partir do padrão de ranqueamento de falhas, o CVSS</p>
>
> ## Requisitos solicitados pelo cliente:
>
> - Existirá apenas dois tipos de usuários: A empresa, que colocará seus projetos para serem testados. E o Bug Hunter, o desenvolvedor autônomo que poderá entrar em todos os projetos disponíveis e ir atrás de bugs, sejam eles qual for
> - A plataforma vai ter um cadastro de login, sendo feita de forma segura. E assim, poderemos identificar todos usuários presentes e seu histórico de ações na plataforma
> - Todo usuário do tipo bug hunter tem de fazer uma prova de avaliação no momento do cadastro, devendo o mesmo adquirir pelo menos 70% de acerto para devida aprovação. Assim, garantimos à qualidade dos desenvolvedores presentes na plataforma
> - Para cada bug confirmado, a empresa pagará ao bug hunter, através do próprio sistema, e uma porcentagem desse valor ficará para o cliente
> - Não deve existir uma comunicação direta entre as empresas e os bug hunters. Dessa forma, evitamos que os pagamentos sejam feitos fora da plataforma e abaixo do valor devido
> - Para garantir a segurança, o aplicativo deve estar dentro das normas da Lei Geral de Proteção de Dados
> - Qualquer usuário que infringir os Termos de Uso, seja ele uma empresa ou um bug hunter, será suspenso permanentemente da plataforma
>
> ## User Story - Company:
>
> <p>&nbsp;&nbsp;&nbsp;&nbsp;Vamos imaginar uma startup de tecnologia iniciante no mercado. Após procurar por empresas especialistas em testes, ela percebe que não têm condições de custear o valor pedido. Então, ela decide procurar por opções e encontra o termo bug bounty, na qual o desenvolvedor só é recompensado se encontrar algum bug na aplicação</p>
> <p>&nbsp;&nbsp;&nbsp;&nbsp;A empresa percebe que o programa de recompensas por bugs seria bastante útil e econômico para a mesma, visto que só há necessidade de pagar o desenvolvedor se ele encontrar alguma falha. O único problema é que à startup não é tão conhecida no mercado e precisa encontrar um meio onde diversos desenvolvedores possam atuar em seus projetos atrás de bugs, sem ter sua privacidade e segurança comprometida</p>
> <p>&nbsp;&nbsp;&nbsp;&nbsp;Além disso, a empresa também precisa ter à ciência toda vez que um bug for relatado, para assim, poder fazer à melhoria em seus projetos. Outra questão importante para ela é saber em que momento o desenvolvedor relatou o bug, pois, existe a possibilidade de dois desenvolvedores relatarem o mesmo bug, e para ser justo, a empresa deve apenas recompensar o primeiro</p>
> <p>&nbsp;&nbsp;&nbsp;&nbsp;Ademais, o pagamento para cada bug tem que ser fundamentado no Sistema de Pontuação de Vulnerabilidade Comum (CVSS), para não haver cobrança imprópria em nenhuma das partes. Para finalizar, seria interessante para à startup ter conhecimento do total de seus pagamentos e bugs resolvidos, para assim, à mesma saber se o programa de recompensa por bugs está valendo à pena</p>
>
> Sendo assim, podemos extrair diversas funcionalidades que o usuário do tipo empresa necessita, tais como:
>
> | ID  |  User   |      Feature      |                                                              Descrição                                                              |
> | :-: | :-----: | :---------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
> |  1  | Company |       Login       |                         Gostaria de cadastrar minha aplicação web para que ela seja testada de forma segura                         |
> |  2  | Company | Database Security |                                     Gostaria de ter a garantia que meus dados não serão vazados                                     |
> |  3  | Company |   Notifications   |                   Gostaria de receber uma notificação toda vez que um bug hunter relatar algo da minha aplicação                    |
> |  4  | Company |    Bug History    | Gostaria de saber o histórico de relatos dos problemas. Para assim, recompensar apenas o bug hunter que relatou o problema primeiro |
> |  5  | Company | Types of Rewards  |                          Gostaria de recompensar o bug hunter à partir do padrão de ranqueamento de falhas                          |
> |  6  | Company |    Fixed Bugs     |        Gostaria de visualizar todos os bugs resolvidos para cada aplicação e o total do quanto já paguei para os bug hunters        |
>
> ## User Story - Bug Hunter:
>
> <p>&nbsp;&nbsp;&nbsp;&nbsp;Vamos supor um desenvolvedor recém formado que quer se especializar em testes e na arte de encontrar bugs. Para isso, ele procura por sites que tem o programa de recompensas por bugs encontrados, porém, é difícil encontrar tantas aplicações assim e também, ter a certeza que o mesmo será pago pelo trabalho feito</p>
> <p>&nbsp;&nbsp;&nbsp;&nbsp;Além disso, o desenvolvedor está à procura de um meio que possibilite fazer networking e trocar ideias com outros desenvolvedores da mesma área, para assim, ele conseguir melhorar suas habilidades. Junto disso, é importante para ele ter conhecimento seus relatos de bugs para ele entender quais tipos de bugs ele encontra com uma maior facilidade e o quanto ele está lucrando com eles</p>
> <p>&nbsp;&nbsp;&nbsp;&nbsp;Para direcionar seu trabalho em plataformas que tem poucos relatos de bugs (ou seja, podem ter mais falhas não relatadas), é crucial à divulgação da quantidade de erros encontrados em cada plataforma e quais bugs foram corrigidos nas aplicações. Além do mais, o valor pago para cada bug é importante para o desenvolvedor entender que tipos de bugs pagam mais e também, o valor total pago por cada empresa, para ele ter à ciência de empresas que tem uma política forte de recompensamento por falhas relatadas</p>
>
> Sendo assim, podemos extrair diversas funcionalidades que o usuário do tipo Bug Hunter necessita, tais como:
>
> | ID  |    User    |      Feature       |                                                                    Descrição                                                                    |
> | :-: | :--------: | :----------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
> |  7  | Bug Hunter | Partners Companies | Gostaria de saber quais empresas são parceiras da plataforma, para assim, direcionar melhor meu esforço e consequentemente, maximizar meu lucro |
> |  8  | Bug Hunter |    Social Forum    |                Gostaria de ter como discutir técnicas de bug hunter com outros usuários, para assim, melhorar minhas habilidades                |
> |  9  | Bug Hunter |    Bug Details     |                                   Gostaria de visualizar todos os meus relatos e o quanto lucrei com cada uma                                   |
> | 10  | Bug Hunter | Amount of Reports  |                                  Gostaria de saber a quantidade de relatos que foram feitos em cada aplicação                                   |
> | 11  | Bug Hunter |     Fixed Bugs     |                 Gostaria de saber os bugs que foram corrigidos nas aplicações junto com o valor pago à quem resolveu o problema                 |
> | 12  | Bug Hunter |   Total Rewards    |                                       Gostaria de saber o total de recompensas que cada empresa já pagou                                        |
