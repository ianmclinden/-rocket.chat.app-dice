# Rocket.Chat Dice / Roll App

## Attribution

Based on Ian McLinden's [Rocket.Chat ToDo App](https://github.com/ianmclinden/rocket.chat.app-todo).

Based in part on Diego Sampaio's [Rocket.Chat Poll App](https://github.com/sampaiodiego/rocket.chat.app-poll).

## Requirements

Rocket.Chat Version: **^1.4.0**

## Installing

Rocket.Chat Dice / Roll App is not yet provided via Rocket.Chat Marketplace https://rocket.chat/marketplace.

To install Dice / Roll on your Rocket.Chat server, you have to turn on the setting `Enable development mode` on the Rocket.Chat server under `Admin > General > Apps`.

Then you can then upload a release .zip from the [Releases Page](https://github.com/ianmclinden/rocket.chat.app-dice/releases/latest).

## Usage

Use the slash commands `/dice` or `/roll` to roll the dice:

```
/dice <sides> <rolls>
/roll <sides> <rolls>
```

For example, to roll a d6
```
/dice 6
```

![d6 1 roll](https://user-images.githubusercontent.com/8931381/99611629-aa7ea280-29d9-11eb-8361-f0632d279ea0.png)

Or, to roll a d20 3 times

```
/dice 20 3
```

![d20 3 rolls](https://user-images.githubusercontent.com/8931381/99611638-ac486600-29d9-11eb-8c65-86eedb644448.png)

## Contributing

You'll need to set up the Rocket.Chat Apps dev environment, please see https://rocket.chat/docs/developer-guides/developing-apps/getting-started/

To install the using the command line, you have to turn on the setting `Enable development mode` on the Rocket.Chat server under `Admin > General > Apps`.

Then you can clone this repo and then:

```bash
npm install
rc-apps deploy
```

Follow the instructions and when you're done, the app will be installed on your Rocket.Chat server.
