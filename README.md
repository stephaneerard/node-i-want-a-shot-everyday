# About

Scheduling captures of Qwant SERPs from CLI with a list of keywords

* Qwant.com API
* Lite Qwant.com Screenshot (JPG, multiple resolutions possible)
* QwantJunior.com API
* Qwant Junior "Education Nationale" API

# Installation

```bash
npm i -g i-want-a-shot-everyday
```

# Usage

```bash
$ node bin/take-a-shot-everyday.ts shot --help
take-a-shot-everyday.ts shot

take a qwant shot list !

Options:
  --help         Show help                                             [boolean]
  --version      Show version number                                   [boolean]
  --schedule     Take a Shot List Everyday !         [string] [default: "* * *"]
  --daemon       Take it to the back !                 [boolean] [default: true]
  --query        Take a Shot List !                        [array] [default: []]
  --lite         Take a LITE shot !                    [boolean] [default: true]
  --api          Take an API shot !                    [boolean] [default: true]
  --edu          Take a JUNIOR/EDU shot !              [boolean] [default: true]
  --egp          Take a JUNIOR/EGP shot !              [boolean] [default: true]
  --bing         Take a BING shot !                    [boolean] [default: true]
  --ecosia       Take a LILO shot !                    [boolean] [default: true]
  --pages                                                  [number] [default: 4]
  --path                     [string] [default: "C:\code\i-want-a-shot-journal"]
  --user-agent
    [string] [default: "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail
                                                        Firefox/firefoxversion"]
  --resolutions                                 [array] [default: ["1920x1080"]]
```

## Example

```bash
take-a-shot-everyday.ts shot --schedule "*/5 * * * *" --query "mere et fils" --query "ligue du lol"
```
