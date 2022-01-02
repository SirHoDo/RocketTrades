
<div align="center">

# Rocket Trades

[![Downloads][downloads-badge]][releases]
[![Built with Discord.JS][builtwithdjs-badge]][builtwithdjs]

zoxide is a **smarter cd command**, inspired by z and autojump.

It remembers which directories you use most frequently, so you can "jump" to
them in just a few keystrokes.<br />
zoxide works on all major shells.

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




[issues]: https://github.com/SirHoDo/RocketTrades/issues/new

