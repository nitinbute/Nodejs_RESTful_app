## ----- RESTful API Node Server ---- ##

## Installation & Run Application

# Install pagckages
- npm install

# Copy .env file
- cp .env.example .env

# Migrations
- npm install -g sequelize-cli (To use sequelize command without local folder)
	
- sequelize db:migrate --url 'postgres://postgres:admin@localhost/demo_db'
						OR
- node_modules/.bin/sequelize --url 'postgres://postgres:admin@localhost/demo_db'

# Create New Model and Migration when need to extend project.
- sequelize model:create --name Wishlist --attributes name:string,description:string
						OR
- node_modules/.bin/sequelize model:create --name Wishlist --attributes name:string,description:string

# Start app locally
- npm run dev

# Start app for production (pm2)
- npm start

# Eslint command
- npm run lint

# Unit test
- npm run test
- npm run test:watch

# Code coverage
- npm run coverage
- npm run coverage:coveralls

## Features
- **ExpressJs**: [Expressjs](https://expressjs.com/)
- **Postgresql database**: [PostgreSql](https://www.postgresql.org/about/)
- **Authentication and authorization**: using [passport-jwt](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **API documentation**: [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: [NPM]
- **Environment variables**: [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **CI**: continuous integration with [Travis CI](https://travis-ci.org)
- **Code coverage**: using [coveralls](https://coveralls.io)
- **Code quality**: with [Codacy](https://www.codacy.com)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Project Structure
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--migrations\     # DB table schema migrations
 |--models\         # Database models (data layer)
 |--routes\         # API Routes
 |--seeders\        # Initialize db table data if needed
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
tests\              # Unit & Integration testing with Jest
