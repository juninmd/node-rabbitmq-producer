```markdown
# node-rabbitmq-producer

## Description

A standard software project.

## Installation

1.  Clone the repository: `git clone https://github.com/your-username/node-rabbitmq-producer.git`
2.  Navigate to the project directory: `cd node-rabbitmq-producer`
3.  Install dependencies: `npm install`
4.  Configure RabbitMQ:  Follow the instructions in the `config/` directory (e.g., `docker-compose.yml`, `envs/`).
5.  Run the application: `npm start`

## Usage

*   **Define Producer Code:**  Create a new `.ts` file (e.g., `producer.ts`) and implement the core producer logic.
*   **Configure RabbitMQ:**  Ensure the RabbitMQ connection details are correctly configured in the `config/` directory, especially the `envs/` directory.
*   **Run the Application:** Execute the `npm start` command from the project directory.

**Key Files:**

*   `src/index.ts`: Entry point (loads env, starts the HTTP server).
*   `src/server.ts`: Express app setup.
*   `src/api/index.ts`: `GET /` route that publishes test messages to the `log` and `order` queues (returns 500 if RabbitMQ is unreachable).
*   `src/rabbit/`: Singleton RabbitMQ connection (`index.ts`) and queue publisher (`message.rabbit.ts`).
*   `src/configs/index.ts`: RabbitMQ connection URL (default `amqp://guest:guest@localhost:49154/`).
*   `envs/`: Optional `.env-<NODE_ENV>` files loaded by `src/tools/envs.tools.ts`.
*   `docker-compose.yml`: Defines the Docker environment for the application.
*   `package.json`:  Lists dependencies and project metadata.
*   `readme.md`:  Provides documentation for the project.
*   `tsconfig.build.json`:  Build configuration for TypeScript.
*   `tsconfig.json`:  Build configuration for TypeScript.
*   `yarn.lock`:  Version control for dependencies.
```