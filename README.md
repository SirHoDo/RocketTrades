
<div align="center">

# Rocket Trades

[![Downloads][downloads-badge]][releases]
[![Built with Discord.JS][builtwithdjs-badge]][builtwithdjs]

**RocketTrades**, Discord Charts and Stocks bot.

MORE DETAILS AND UPDATES TO COME SOON<br />

[Getting started](#getting-started) •
[Installation](#installation) •
[Configuration](#configuration) •
[Integrations](#third-party-integrations)

</div>

## Getting started

```sh
Visit Discord Portal         # https://discord.com/developers/applications/
Create Application           # (New Application)

Create Bot User              # (Bot -> Add Bot)
Take not of bot info         # Token && Client ID (number in the URL)
```

## Installation

### *Step 1: Install  dependencies*
``$ npm i``\
Please use `Node.js 16+` and `NPM` version `7`+

### *Step 2: Provide configuration details*
``/src/config.js``\
Fill in all missing config information.

### *Step 3: Starting the bot*
``$ node .``\
Start the bot application using "`node . `"\
Any issues, please [open an issue][issues].

</details>

## Configuration

### Flags

When calling `zoxide init`, the following flags are available:

- `Main Config`
  - Required to start the bot
    | Value     | Description                       |
    | -------- | --------------------------------- |
    | `ownerID`   | Bot Owners User ID.      |
    | `token` | Token Obtained from Discord Developer portal.             |
    | `id`    | Bots Client ID Obtained from Discord Developer portal. |
    | `prefix`    | Bot Trigger Phrase.      *`example ($help)`* |
    | `websiteURL`    | Website URL *`(For Future reference)`* |
    | `embedColor`    | Color of all Embeds the bot will use. |
    | `debug`    | Debug mode, *`(true/false)`* |
        
- `API`
  - Required for Statistics API
    | Value     | Description                       |
    | -------- | --------------------------------- |
    | `port`   | HTTP port for API access.      |
    | `secure` | Decide if API should require token Authentication.             |
    | `token`    | Your secret API access token. *`(Made by you)`* |


[builtwithdjs-badge]: https://img.shields.io/badge/builtwith-djs-7d81f7?style=flat-square
[builtwithdjs]: https://discord.js.org/#/
[downloads-badge]: https://img.shields.io/github/downloads/SirHoDo/RocketTrades/total?style=flat-square
[issues]: https://github.com/SirHoDo/RocketTrades/issues/new
[releases]: https://github.com/SirHoDo/RocketTrades/releases
