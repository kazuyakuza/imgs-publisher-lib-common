# NPM Library Boilerplate

A boilerplate for creating and publishing TypeScript libraries to NPM. This template provides a foundation for your next project, including a pre-configured setup for linting, and automated publishing via GitHub Actions.

## Features

- **TypeScript:** Write your library with the power of static typing.
- **ESLint:** Maintain code quality with a pre-configured linter.
- **GitHub Actions:** Automated NPM publishing when you merge to the `main` branch.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1.  **Fork or Clone:**
    - Fork this repository to your GitHub account.
    - Clone your forked repository:
      ```sh
      git clone https://github.com/YOUR_USERNAME/your-repo-name.git
      ```
2.  **Install Dependencies:**
    ```sh
    npm install
    # or
    yarn install
    ```

## Usage

This boilerplate is designed to be a starting point for your library.

1.  **Update `package.json`:**
    - Change the fields to match your library.
    - _Its important_ to keep base name "@pacer-dev/" to be able to publish it to npm.
2.  **Start Coding:**
    - Your library's source code goes into the `src` directory. The entry point is `src/index.ts`.

## Publishing

This boilerplate is configured to automatically publish your library to NPM when a feature branch is merged into `main`.

### Preventing Publishing

To prevent automatic publishing to NPM, you can set a repository variable named `PREVENT_PUBLISH` to `true`. When this variable is set, the NPM publish job will be skipped.
