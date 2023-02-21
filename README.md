<h1 align="center">🚀🚀🚀 NAF 🚀🚀🚀</h1>

## Before You Begin

- Install **Node.js 14 LTS** (_via **NVM** (highly recommend)_)
- Install **Yarn**
- Install **Git**
- Install **Visual Studio Code** and all recommended extensions

## Project Structure

```
public
   |-- icons
   |-- images
src
   |-- components
       |-- ui
   |-- configs
   |-- contexts
   |-- hooks
   |-- layouts
   |-- modules
   |-- pages
   |-- shared
       |-- constances
       |-- repositories
       |-- utils
.env.local
```

## Getting Started

1. Install all dependencies with Yarn

```bash
$ yarn install
```

2. Set up `.env.local`

```bash
$ cp .env.local.example .env.local
```

3. Run the development server with terminal

```bash
$ yarn dev
# or you can specify your development port as below:
$ yarn dev -p YOUR_PORT
```

4. **(Alternative)** Run the development server with **VS Code Debug**

- Click the little "Run and Debug" on the **VS Code Activity Bar** or press `Ctrl + Shift + D` to access the debugging menu.
- Or start server with press `F5`
- To custom server port, we update PORT value in `.env.local` file

5. **(Optional)** Run Storybook on the local

```bash
$ yarn storybook
# Or run with VS Code Debug
# 1. Choose Storybook Starter
# 2. Press start button
```

## Production Build

1. Build Storybook

```bash
$ yarn build-storybook
```

2. Build Next application

```bash
$ yarn build
```

3. Try running the production on the local

```bash
$ yarn start
```

## Testing

You can easily run the tests as below:

\*_Note: you need to stop running Storybook development first_

```bash
$ yarn test
```

If not, please try finding the problem and resolve it.

## Troubleshoot

- **Command not found when commit code from VSCode Source Control** (https://typicode.github.io/husky/#/?id=command-not-found)
