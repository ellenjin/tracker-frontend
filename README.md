# tracker-frontend

Frontend repository for an accountability tracker. Uses Vite/React framework.

## Project initialization

To enable auto-formatting and linting on save:

1. Install these VS Code extensions:

   - [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Create a `.vscode/settings.json` file (not inside of `app`) and add this content to it if not already existing:

```json
{
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": ["javascript", "javascriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Note: A type warning may be shown for the last two lines; as long as it is just
a yellow warning and not red, this error can be safely ignored (or settings can
be adjusted to remove the warning as well).

3. Once in the project directory, run the following commands:

```
npm install
npm run dev
```
