# Contributing to Lumark

Thanks for your interest in contributing! Here's everything you need to get started.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/)
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri v2 prerequisites](https://v2.tauri.app/start/prerequisites/) for your OS

## Getting Started

1. Fork the repo and clone your fork
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Run the app in dev mode:
   ```bash
   yarn tauri dev
   ```

## Working on an Issue

1. Pick an issue (check ones labeled `good first issue` if it's your first time)
2. On the issue page click **Create a branch** - this gives you a branch name based on the issue title
3. Copy that branch name and create it locally in your fork:
   ```bash
   git checkout -b <branch-name>
   ```
4. Make your changes
5. Open a PR to `main`

## Code Style

- Run `yarn lint` before committing to catch any issues
- Run `yarn lint:fix` to auto-fix what can be fixed
- Keep changes focused on the issue you're working on

## Need Help?

Feel free to ask questions in the issue thread - happy to help!