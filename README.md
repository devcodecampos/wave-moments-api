<h3 align="center">{ Wave Moments API }</h1>

<p align="center">
  <a href="#techs">Techs</a>&nbsp;|&nbsp;
  <a href="#estrutura">Estrutura do Projeto</a>&nbsp;|&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;|&nbsp;
  <a href="#execucao">Execução</a>&nbsp;|&nbsp;
  <a href="#dependencias">Dependencias</a>&nbsp;|&nbsp;
  <a href="#license">Licença</a>
</p>
<br>

## 🎮 Techs <a name="techs"></a>
Este projeto está sendo desenvolvido utilizando as seguintes tecnologias:
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/pt-br)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [Postgres](https://www.postgresql.org/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Git](https://git-scm.com/)

## 🧱 Estrutura do Projeto <a name="estrutura"></a>
```
src      
└───modules
      └───users
            └───controller
                  └───user.controller.ts
            └───entities
                  └───user.entity.ts
            └───routes
                  └───user.routes.ts
└───services
      └───database
            └───data.source.ts
└───app.ts
└───index.ts
.env
.env.example
.eslintrc.json
.gitignore
package.json
README.md
tsconfig.json
yarn.lock
```

## 🚩 Funcionalidades <a name="funcionalidades"></a>
**Entidades Principais:**

- [X] **Usuário:** Com informações como nome de usuário, senha, e-mail, bio e número de seguidores/seguindo. 
- [ ] **Publicação:** Contendo dados como imagem, legenda, data/hora de postagem.
- [ ] **Comentário:** Relacionado a uma publicação e a um usuário, com texto e data/hora de postagem.
- [ ] **Curtida:** Associada a uma publicação e a um usuário.
- [ ] **Bônus:** Story

**Relacionamentos Principais:**

- [ ] Um usuário pode ter **muitas publicações**.
- [ ] Uma publicação pode receber **muitos comentários** e **muitas curtidas**.
- [ ] Um comentário está **associado a um único usuário e a uma única publicação**.

**Requisitos Funcionais Básicos:**

- [ ] **Autenticação de Usuário:** Permitir que usuários se cadastrem e façam login.
- [ ] **Publicar Conteúdo:** Usuários podem criar publicações com uma legenda.
- [ ] **Comentar Publicações:** Comentar e remover comentários em publicações existentes.
- [ ] **Curtir e descurtir Publicações:** Usuários podem dar "like" em publicações.
- [ ] **Feed de Publicações:** Mostrar as publicações dos usuários que o usuário atual segue.

## 🕹️ Execução do Projeto <a name="execucao"></a>
``` 
git clone https://github.com/devcodecampos/wave-moments-api

cd wave-moments-api

yarn install

yarn dev
```

Criar arquivo .env na raiz do projeto com as seguintes variáveis de ambiente, lembrando que são apenas exemplos, configure de acordo com seu ambiente
```ts
DATABASE_HOST = localhost "O endereço do host do seu banco"
DATABASE_USERNAME = postgres "O nome de usuário usado para autenticar no banco"
DATABASE_PASSWORD = 123456 "A senha associada ao usuário do banco"
DATABASE_NAME = wave_moments "O nome do banco ao qual deseja se conectar"
SERVER_PORT=3333 "A porta na qual o servidor do seu aplicativo será executado"
```

## 📚 Dependencias <a name="dependencias"></a>
[Typescript](https://www.typescriptlang.org/download)
```
yarn add -D typescript
```
[ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
```
yarn add -D ts-node-dev
```
[ESLint](https://eslint.org/docs/latest/use/getting-started)
```
yarn add -D eslint
yarn run eslint --init
```
[Express](https://expressjs.com/)
```
yarn add express
```
[TypeORM](https://typeorm.io/)
```
yarn add typeorm 
yarn add reflect-metadata
```
[Postgres](https://www.postgresql.org/)
```
yarn add pg pg-hstore
```
[Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
```
yarn add bcrypt
```
[Cors](https://github.com/expressjs/cors)
```
yarn add cors
```
[Dotenv](https://www.npmjs.com/package/dotenv)
```
yarn add dotenv
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)