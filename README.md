# node-magic-link-example

An example application demonstrating how Magic Link works with WorkOS and Node.

## Clone and Install

Clone this repo and install dependencies:

```sh
git clone git@github.com:workos-inc/node-magic-link-example.git && cd node-magic-link-example && npm install
```

## Configure your environment

1. Grab your [API Key](https://dashboard.workos.com/api-keys).
2. Get your [Project ID](https://dashboard.workos.com/configuration).
3. Create a `.env` file at the root of the project and populate with the
following environment variables (using values found above):

```typescript
WORKOS_API_KEY=your_api_key_here
WORKOS_PROJECT_ID=your_project_id_here
```

4. Set your [Default Redirect Link](https://dashboard.workos.com/configuration) to `http://localhost:8000/success`.

## Run the server

```sh
npm start
```

Head to `http://localhost:8000/` and enter the email address to which you want to send the Magic Link!

For more information, see the [WorkOS Magic Link documentation](https://workos.com/docs/magic-link/guide/introduction).
