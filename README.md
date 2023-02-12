
# TrybeSmith

Para este projeto, foi criado uma loja de itens medievais, no formato de uma API, utilizando Typescript.

Desenvolvido todas as camadas da aplicação (Models, Service e Controllers), será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou CRUD, para as pessoas mais íntimas - Create, Read, Update e Delete).

Foi criado alguns endpoints que irão ler e escrever em um banco de dados, utilizando o MySQL.


## Stack utilizada

**Back-end:** Node, Express, Typescript, JWT, MySQL2


## Rodando O Docker
Rode os serviços node e db com o comando ```docker-compose up -d```.

Lembre-se de parar o mysql se estiver usando localmente na porta padrão (3306), ou adapte, caso queria fazer uso da aplicação em containers.

Esses serviços irão inicializar um container chamado ```trybesmith``` e outro chamado ```trybesmith_db```.
A partir daqui você pode rodar o container ```trybesmith``` via CLI ou abri-lo no VS Code.
Use o comando ```docker exec -it trybesmith bash```.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
Instale as dependências "Caso existam" com ```npm install```

:warning: Atenção :warning: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

:warning: Atenção :warning: O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

:warning: Atenção :warning: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

:warning: Atenção :warning: Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro:

```bash
The Compose file './docker-compose.yml' is invalid because:
Unsupported config option for services.db: 'platform'
Unsupported config option for services.node: 'platform'
```
Foram encontradas 2 possíveis soluções para este problema:
* Você pode adicionar manualmente a option platform: linux/amd64 no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.
* Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha export DOCKER_DEFAULT_PLATFORM=linux/amd64, essa é uma solução global. As soluções foram com base nesta fonte.
## Documentação da API

#### Login na aplicação

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório no body**. User cadastrado no banco de dados |
| `password` | `string` | **Obrigatório no body**. Password cadastrado no banco de dados |

#### Criar um user

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `username`      | `string` | **Obrigatório no body**. User para cadastrar |
| `vocation`      | `string` | **Obrigatório no body**. Vocation para cadastrar |
| `level`      | `number` | **Obrigatório no body**. Level para cadastrar |
| `password`      | `string` | **Obrigatório no body**. Password para cadastrar |

#### Criar pedidos da loja

```http
  POST /orders
  ```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório no Header**. Key Recebida no login ou na hora de criar um usuario |
| `productsIds`      | `Array<Number>` | **Obrigatório no body**. ProductsIds existentes no banco de dados |

#### Criar produtos na loja

```http
  POST /products
  ```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório no Header**. Key Recebida no login ou na hora de criar um usuario |
| `name`      | `string` | **Obrigatório no body**. Nome do produto |
| `amount`      | `number` | **Obrigatório no body**. Quantidade do produto |

#### Pegar produtos da loja

```http
  GET /products
  ```
#### Pegar orders da loja

```http
  GET /orders
  ```

Qualquer duvida entre em contato comigo:

E-mail: programadorthiagolopes@gmail.com

Linkedin: https://www.linkedin.com/in/thiago-lopes-dev-/
