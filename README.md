# Playwright + Sveltekit + Synpress + Web3Onboard example

## Running the project

If you're here I am assuming you know what all three things I am using in this example, if not then probably you can go through thier docs:

- [Sveltekit](https://kit.svelte.dev/)
- [Playwright](https://playwright.dev/)
- [Web3Onboard](https://onboard.blocknative.com/)

```bash
# clone the project
git clone <insert_git_url>

# install the dependencies
npm i # or yarn install or pnpm install
```

## Running the tests

Before running the tests you have to install the chromium browser for playwright to use.

```bash
# install the browser
npm run install:chromium
```

and, voila then you can run your tests by using this script

```bash
# creates a [wallet cache](https://synpress.io/docs/guides/wallet-cache) and runs the tests
npm run test
```

> **Note**: for the initial wallet connection you have to manually click on web3onboard popup to connect your wallet. This example is not perfect, but gets the job done :man_shrugging:

## Configuring the test server

Currently the tests are run in such a way that first it creates a build for your project, and then serves that build to run the tests. If you want to change the serving behavior then you can change the `playwright.config.ts`.

```typescript
const config: PlaywrightTestConfig = {
    ...
	webServer: {
		command: 'npm run build && npm run preview', // change this to the command you want to run for serving your app
		port: 4173 // update the port accordingly
	},
	...
};
```
