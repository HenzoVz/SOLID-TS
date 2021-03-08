# SOLID

Estudo sobre principios S.O.L.I.D em Typescript


### Single Responsibility Principle (Princípio da responsabilidade única)

- Esse princípio zela que uma classe deve possuir apenas uma responsabilidade. Alterar essa classe não deve influênciar
  o funcionamento de outros códigos. Classes com uma única responsabilidade são mais legíveis e testáveis. Este princípio
  está intimamente ligado com outro, conhecido como Separation of Concerns.

### Open Closed Principle (Princípio do aberto/fechado)

- Módulos, classes, objetos e operações devem estar abertor para extensão, mas fechados para modificações.

### Liskov Substitution Principle (Princípio da substituição de Liskov)

- Esse princípio defende o uso de polimorfismo, para estabelecer que um objeto pode ser substituído por qualquer outro do mesmo tipo sem danificar o comportamento da aplicação. Quando há um relacionamento de herança de uma super classe para uma subclasse, estendendo uma classe ou implementando uma interface.
  Podemos, pensar na seguinte coisa os metódos implementados na classe pai, devem ser capazes de ser implementados na classe filho. Se isso não ocorre, estamos violando o LSP.

### Interface Segregation Principle (Princípio de segregação de interface)

- Clientes não devem ser forçados a depender de métodos que não usam. Ou seja, múltiplas interfaces específicas são melhores do que uma interface com múltiplas definições.

### Dependency Inversion Principle (Princípio da inversão de dependência)
- Classes de alto nível não deveriam depender de classes de baixo nível. Ambas devem depender de abstrações. As abstrações não devem depender de detalhes. Detalhes
devem depender de abstrações. Em suma teremos que criar abstrações que desacoplam as duas classes, dessa forma respeitando também o princípio do aberto fechado.

* **Classes de baixo nível** implementam operações básicas tais como trabalhar com um disco, transferindo dados pela rede, conectar-se a uma base de dados, etc.
* **Classes de alto nível** contém lógica de negócio complexa que direcionam classes de baixo nível para fazerem algo.
