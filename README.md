# Azure Web Apps Kudu Client (az-kudu)

The `az-kudu` module provides a simple client for interacting with the [Kudu API](https://github.com/projectkudu/kudu/wiki), which you can conceptually think of as the "management plane" of Azure Web Apps. It allows you to programmatically perform common operations such as uploading/downloading files, running remote commands, and streaming the output logs for a specific Azure Web App instance (kind of like a PaaS equivalent of SSH/SCP). It is meant to be used along with the [`az-login`](https://github.com/lostintangent/az-login) module, which handles the Azure authentication process, and allows instantianting `az-kudu` instances just like any other client API in the [Azure Node.js SDK](https://github.com/Azure/azure-sdk-for-node).

## Pre-requisites

* [Node.js](https://nodejs.org/en/) v6.9.0+ (which is the current LTS release, and you should be using anyways!)
* [az-login](https://github.com/lostintangent/az-login), which you can install by simply running `npm i az-login`

## Getting Started

In order to install the `az-kudu` module, simply run the following command within your app's directory:

```shell
npm i --save az-kudu
```

> Note: If you're using NPM 5+, you can omit the `--save` flag, since installed dependencies are automatically saved!

From within your app code, import the `az-kudu` module, and pass it (along with the name of the web app that you wish to manage) to the `clientFactory` method that is returned after logging in with `az-login`:

```javascript
const kudu = require("az-kudu");
const { login } = require("az-login");

const { clientFactory } = await login();
const kuduClient = clientFactory(kudu, "web-app-name");
```

Use the client to perform management operations, such as running a remote command within the context of the specified web app instance:

```javascript
const response = await kuduClient.runCommand("npm install -g gulp");
```

And that's it! For more details on what capabilities are available from the Kudu client, refer to the API reference section below.

## API Reference

The `az-kudu` module exports a single object, which represents the factory method for creating client instances (as illustrated in the [`Getting Started`](#getting-started) section). Once constructed via the `clientFactory`, the returned client object has the following methods:

## deleteFile

## getFileContents

## openLogStream

## runCommand

## uploadZip