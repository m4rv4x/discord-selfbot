
# shodan-selfbot
A simple discord selfbot, coded in javascript, using discord.js v13.

## Download it
```
git clone https://github.com/m4rv4x/selfbot
cd selfbot
npm install
```
## Configure it
```
cp config.example.json config.json
nano config.json
```
## Run it
```
node .
```

## Run Standalone
Added standalones scripts for testing purposes : 

```
node chatty.js
node voice.js
```

## Disclaimer
Using selfbots is against the Discord ToS. I am not responsible for anything that could happend to your Discord account if you use this program. This is for educational purposes only.

## Features
```
>btc-price
>cat (message)
>delete
>disable
>gpt [instruction]
>kill
>like
>message [user#tag] [message]
>more-news [tag]
>news
>picture
>ping
>status
>troll
>uptime
>version
```


## Work in progress
```
>reset
>pwned : check if email was pwned
>purge
>voice [message]
>youtube [url]
>invoke [???]
>gas : find lowest gas at postal code
>hangman
```

## Get Token ?

<strong>Run code (Discord Console - [Ctrl + Shift + I])</strong>

```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

Credits:

 <img src="https://cdn.discordapp.com/emojis/889092230063734795.png" alt="." width="16" height="16"/> [<strong>hxr404</strong>](https://github.com/hxr404/Discord-Console-hacks)

<img src="https://cdn.discordapp.com/emojis/889092230063734795.png" alt="." width="16" height="16"/> [<strong>aiko-chan</strong>](https://github.com/aiko-chan-ai/discord.js-selfbot-v13)

<img src="https://cdn.discordapp.com/emojis/889092230063734795.png" alt="." width="16" height="16"/> [<strong>astr0</strong>](https://github.com/astr0-tutorials/astr0-v2/tree/main)