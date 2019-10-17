
![](https://img.shields.io/badge/Status-Under%20Development-green)


# Bug x Hunter

[![](http://files.softicons.com/download/culture-icons/anime-icons-i-ii-by-samir-chajia/png/128x128/Hunter%20x%20Hunter.png)](#)

- Link para o repositorio backend do projeto --> https://github.com/brailog/backend-bxh 
- Link para o site --> https://bughunter-front.herokuapp.com/
- O Bug X Hunter é Projeto da disciplina de [engenharia de software](https://github.com/IF977/if977) do Centro de informática da UFPE

## Sumário

* [Objetivo](#Objetivo)
* [Equipe](#Equipe)
* [Desenvolvimento](#Desenvolvimento)
    * [Metodologias de Desenvolvimento](#metodologia-de-desenvolvimento)
    * [Controle de código](#controle-de-código)
* [Entregas](https://github.com/vsla/BugHunter/blob/master/docs/iteracoes.md)

## Objetivo

O objetivo do Bug x Hunter é baratear o custo de segurança para empresa pequenas/startups. Testes de seguranças são relativamente caros, assim empresas recém criadas e startups que não tem condições financeiras para pagar por testes, por mais que elas implementem sua própria segurança, não existe todo esse dinheiro para consultoria ou pentest profissional.

Então, "Bug x Hunter" serve para desenvolvedores que querem começar no mundo da segurança, começando a fazer [BugBounty](https://github.com/vsla/teste/wiki/Bug-x-Hunter-Wiki) e  pequenas empresas que estão dispostas a disponibilizar suas plataformas para esses desenvolvedores, e recompensá-los por seus achados, mesmo que seja uma quantia menor. Assim Desenvolvedores podem melhorar suas habilidades e empresas melhorarem suas aplicações.

## Equipe

| Nome| Função |
| :-: | :-------------------------: |
|  Adriana Alves dos Santos  | Engenheiro de teste |
|  Gabriel Ramos R. Oliveira  | Engenheiro de Back End |
|  Giovanni veloso  | Engenheiro de DevOps |
| Joao Gabriel Silva de Andrade  | Product Owner |
| Thiago Prazeres Bezerra  | Engenheiro de Front End |
|  Victor Sena de Lima Attar  | Scrum Master |

## Desenvolvimento

Para desenvolver essa aplicação web usaremos a metodologia SCRUM utilizando sprints semanais.

### Metodologia de Desenvolvimento

O scrum utilizado irá funcionar da seguinte maneira:

* *Segundas-feiras:* Teremos o fechamento da sprint, com o feedback de possíveis problemas encontrados na sprint e o Sprint Planning para discutir o que será feito na sprint.

* Diariamente, os integrantes farão um status report do que farão no dia, ou caso não façam nada, dirão o motivo.

No *Desenvolvimento em si*, após o levantamento das histórias do usuário teremos as funcionalidades principais a serem implantadas no *MVP*.

Essas atividades a serem feitas serão discutidas nas aberturas de sprint semanalmente e jogadas no backlog da sprint.

### Controle de código

Usaremos a plataforma do [Git Flow](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04), pois a mesma facilita a gestão das versões do código.

### GQM

#### O que é?

O paradigma GQM é baseado na teoria de que todas as medições devems ser orientadas em objetivos, tem que ser racionais e necessitam que sejam coletadas métricas. CAda métrica coletada é mapeada para maiores objetivos, perguntas são então derivadas dos objetivos para determinar se os mesmos foram atingidos.

#### Casos

1. caso 1
    * Objetivo: Diminuir o atraso das entregas
    * Perguntas
        * Quais os principais impasses para realizar tarefas?
        * Quem são as pessoas que não estão realizando?
    * Métricas
        * Tarefas executadas por sprint
        * Tempo de atrado das tarefas
2. caso 2
    * Objetivo: Assegurar confiabilidade da aplicação.
    * Perguntas
        * O código está sendo testado?
    * Métricas
        * Cobertura de código de testes

3. caso 3
    * Objetivo: Sistema com operacionalidade aceitável
    * Perguntas
        * O sistema cai muito do ar?
        * O sistema apresenta muitos erros durante a navegação?
    * Métricas
        * Tempo inativo do sstema
        * Número de reports de falhas no sistema

4. caso 4
    * Objetivo: Prover segurança dos dados dos usuário do sistema
    * Perguntas
        * Como assgurar a segurança dos dados?
        * Onde armazenar os dados dos usuários?
        * Como trafegar os dados na internet?
    * Métricas
        * Testes assegurando confiabilidade do sistema

5. caso 5
    * Objetivo: Assegurar que o bughunter vai receber sua recompensa.
    * Perguntas
        * Como o bughunter vai ter confiança no sistema?
        * Qual o processo de recompensa do bughunter?
        * Como o bughunter vai receber sua recompensa?
    * Métricas
        * Feedback positivo dos bughunters

6. caso 6
    * Objetivo: Diminuir o atraso das entregas
    * Perguntas
        * Quais os principais impasses para realizar tarefas?
        * Quem são as pessoas que não estão realizando?
    * Métricas
        * Tarefas executadas por sprint
        * Tempo de atrado das tarefas

7. caso 7
    * Objetivo: Assegurar que a empresa não será cobrada por um erro do administrados.
    * Perguntas
        * Quais a principal razão de um erro do admin?
        * Como será o sistema de contestação?
    * Métricas
        * Quantidade de contestações de valores de projeto

8. caso 8
    * Objetivo: Aumentar o conhecimento dos integrantes nas tecnologias usadas.
    * Perguntas
        * Quais os níveis de conhecimento?
        * Qual a melhor forma de aprender as tecnologias usadas no projeto?
    * Métricas
        * Diminuição de tempo feitos em cada atividade.
        * DIminuição de bugs no sistema.

9. caso 9
    * Objetivo: Aumento de bugRequests
    * Perguntas
        * Houve um aumento de bugRequests, indicando maior utilização do sistema?
        * Houve um aumento de bugRequests por categoria de aplicação?
    * Métricas
        * Quantidade de bugRequests por categoria de aplicação.
