```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines are designed to ensure the consistent, efficient, and high-quality development of all AI coding agents within this repository. Adherence to these principles is mandatory for all development activities.

## 1. DRY (Don't Repeat Yourself)

- Every function, class, and module should have a single, well-defined purpose.
- Avoid duplicating code across different files or modules.
- Leverage existing code patterns and libraries when appropriate.
- When a solution is found once, it should be implemented and documented.

## 2. KISS (Keep It Simple, Stupid)

- Prioritize clarity and readability over complex or overly-optimized solutions.
- Use concise and straightforward code.
- Minimize cognitive load for the AI agent.
- Make the code easily understandable by both the AI agent and future maintainers.

## 3. SOLID Principles

- **Single Responsibility Principle:** Each class and module should have one, and only one, reason to change.
- **Open/Closed Principle:** The system should be extensible without modifying the existing code.  New features should be added through new classes or modules, not by modifying existing ones.
- **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
- **Interface Segregation Principle:** Clients shouldn't be forced to depend on methods they don’t use.  Interface implementation should be minimized.
- **Dependency Inversion Principle:** High-level modules should not depend on low-level modules. They should be independent and abstract.

## 4. YAGNI (You Aren’t Gonna Need It)

- Avoid implementing functionality that is not currently required.
- Focus development on essential aspects of the agent’s design.
- Refactor code incrementally, only adding new functionality as needed.
- Don't introduce unnecessary complexity.

## 5. Development Workflow & Best Practices

- **Code Reviews:** All changes must undergo mandatory code reviews before merging into the main branch.
- **Unit Tests:**  Comprehensive unit tests will be rigorously executed and expanded to cover all critical paths.  Tests should prioritize covering edge cases and potentially failure scenarios.
- **Integration Tests:** Integrate new code with existing modules and data sets to ensure stability and functionality.
- **Version Control:** Use Git with careful branching strategies. Commit frequently with meaningful messages.
- **Documentation:**  Provide clear documentation for each module, class, and function, including expected inputs, outputs, and potential limitations.
- **Error Handling:**  Implement robust error handling and logging for all operations.
- **Data Validation:**  Ensure all data inputs are validated and sanitized to prevent vulnerabilities.
- **Performance Profiling:**  Periodically profile the agent's performance to identify bottlenecks and optimize for speed.

## 6. Code Structure & Constraints

- **File Limits:** Each file's maximum code length is 180 lines.
- **Component Separation:**  Break down complex tasks into smaller, manageable components.
- **Data Management:**  Use appropriate data structures to represent entities and relationships efficiently.
- **State Management:**  Consider using a state management system to handle the agent's internal state.
- **Algorithm Integration:**  All algorithms must be clearly documented and testable.  Consider using a specialized algorithmic library.
- **Abstraction:**  Favor abstraction over direct implementation whenever possible.

## 7. Testing

- **All tests must be performed automatically and continuously.**
- **Tests will include both unit and integration tests.**
- **Test coverage will be met as a minimum of 80%.**
- **Test frameworks will be used consistently.**
- **Negative testing will be implemented.**  Failures will be verified.

## 8.  Framework & Tooling

- Utilize [Specify Framework Name] for [Specific Purpose].
- Employ [Specify Tool Name] for [Specific Task].
- Ensure all dependencies are documented and managed.

## 9.  Reporting & Metrics

- Track code coverage with [Specify Tool].
- Monitor key metrics (e.g., performance, error rates) to identify areas for improvement.
- Generate regular reports on development progress.

## 10.  Documentation Requirements

- Document API endpoints, data formats, and error codes.
- Provide clear explanations of algorithms and data structures.
- Describe the purpose of each module and class.

These guidelines are intended to provide a framework for efficient and maintainable AI coding agent development.  Any deviation from these principles requires careful consideration and justification.
```

<!-- base-actions-main-policy -->
## GitHub Actions — padrão obrigatório (@main)

- Referencie as actions internas sempre pelo branch, nunca por SHA:
  - `uses: juninmd/base-actions/<action>@main`
  - `uses: juninmd/base-actions/.github/workflows/<arquivo>.yml@main`
- Não fixe `@<sha>` em `juninmd/base-actions`: a atualização é centralizada no
  `main` e passa a valer no próximo run.
- PRs cujos checks não iniciam por billing/spending limit são mesclados pelo bot central
  `juninmd/base-actions/.github/workflows/auto-merge-billing-blocked.yml`.
  Para impedir o merge automático de um PR, aplique a label `do-not-merge`.