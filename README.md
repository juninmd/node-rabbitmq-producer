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

*   `src/producer.ts`: Contains the producer logic.
*   `src/config/envs.json`:  Configures RabbitMQ connection parameters.
*   `src/config/rabbitmq.env`:  RabbitMQ connection string.
*   `docker-compose.yml`: Defines the Docker environment for the application.
*   `package.json`:  Lists dependencies and project metadata.
*   `readme.md`:  Provides documentation for the project.
*   `tsconfig.build.json`:  Build configuration for TypeScript.
*   `tsconfig.json`:  Build configuration for TypeScript.
*   `yarn.lock`:  Version control for dependencies.
```