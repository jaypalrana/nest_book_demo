
# Book Management Project


- REST API with [TypeORM](http://typeorm.io) support 
- Folder structure, code samples and best practices

## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of [NestJS](https://docs.nestjs.com/) and NPM
- A database such as  PostgreSQL. 

### 1.2 Project configuration

cd ./book-management-nest-backend
npm install

For a standard development configuration, you can leave the default values for `API_PORT`, `API_PREFIX` and `API_CORS` under the `Api configuration` section. The `SWAGGER_ENABLE` rule allows you to control the Swagger documentation module for NestJS. Leave it to `1` when starting this example.

Next comes to the TypeORM configuration: change everything according to your own database setup. It may be also useful to turn `TYPEORM_SYNCHRONIZE` to `true` in order to avoid migrations during the development phase. Do not modify the values in the `TypeORM internals` section, unless you change the folder structure.

Last but not least, define a `JWT_SECRET` to sign the JWT tokens or leave the default value in a development environment. Update the `JWT_ISSUER` to the correct value as set in the JWT. 

### 1.3 Launch and discover

You are now ready to launch the NestJS application using the command below.

```sh
# Perform migrations in your database using TypeORM
npm run migration:run

# Launch the development server with TSNode
npm run start:dev
```


## 2. Project structure

This template was made with a well-defined directory structure.

```sh
src/
    .
    ├── dist
    ├── Dockerfile
    ├── nest-cli.json
    ├── package.json
    ├── package-lock.json
    ├── src
    │  ├── app
    │  │  └── book_management
    │  │      ├── book_management.controller.ts
    │  │      ├── book_management.module.ts
    │  │      ├── book_management.service.ts
    │  │      └── dto
    │  │          ├── create-book_management.dto.ts
    │  │          └── update-book_management.dto.ts
    │  ├── app.module.ts
    │  ├── common
    │  │  ├── common.service.ts
    │  │  ├── messages.json
    │  │  ├── response.service.ts
    │  │  ├── validation-exception.filter.ts
    │  │  └── validation.pipe.ts
    │  ├── config
    │  │  └── database.config.ts
    │  ├── entities
    │  │  └── book_management.entity.ts
    │  ├── main.ts
    │  └── middlewares
    │      └── logger.middleware.ts
    ├── test
    │  └── jest-e2e.json
    ├── tsconfig.build.json
    └── tsconfig.json
```

## 3. Default NPM commands

The NPM commands below are already included with this template and can be used to quickly run, build and test your project.

```sh
# Start the application using the transpiled NodeJS
npm run start

# Run the application using "ts-node"
npm run dev

# Transpile the TypeScript files
npm run build


# Run the project' functional tests
npm run test

# Lint the project files using TSLint
npm run lint

# Create a new migration named MyMigration
npm run migration:create [MyMigration]

# Run the TypeORM migrations
npm run migration:run

# Revert the TypeORM migrations
npm run migration:revert
```

## 4. Project goals

The goal of this project is to provide a clean and up-to-date "starter pack" for REST API projects that are built with NestJS.

## 5. Roadmap

The following improvements are currently in progress : 

- [x] Configuration validation
- [x] Project structure documentation
- [x] TypeORM migration support
- [ ] Better logging configuration with environment variables
- [ ] Working further on examples for production instructions