# Azure Web Apps Kudu Client (az-kudu)

The `az-kudu` module provides a simple client for interacting with the [Kudu API](https://github.com/projectkudu/kudu/wiki), which you can conceptually think of as the "management plane" of Azure Web Apps. It allows you to programmatically perform common operations such as uploading/downloading files, running remote commands and streaming the output logs of a specific Azure Web App instance (kind of like a PaaS equivalent of SSH/SCP). It's meant to be used along with `az-login`, which handles the Azure authentication process, and allows instantianting `az-kudu` instances like any other client API in the [Azure Node.js SDK](https://github.com/Azure/azure-sdk-for-node).

## Pre-requisites

* [Node.js](https://nodejs.org/en/) v6.9.0+ (which is the current LTS release, and you should be using anyways!)

## Getting Started

```javascript
const kudu = require("az-kudu");
const { login } = require("az-login");

const { clientFactory } = await login();
const { runCommand } = clientFactory(kudu, "web-app-name");
const response = await runCommand("npm install -g gulp");
```

## API Reference

The `az-kudu` module exports a single object, which represents the factory method for creating client instances (as illustrated in the [`Getting Started`](#getting-started) section). Once constructed via the `clientFactory`, the returned client object has the following methods:

## deleteFile

## getFileContents

## openLogStream

## runCommand

## uploadZip