# Language-Flag-Colors [![Version](https://img.shields.io/npm/v/language-flag-colors.svg?maxAge=3600)](https://www.npmjs.com/package/language-flag-colors)
A package with the color of every language's flag

## Instalation
```bash
# npm
npm install languages-flag-colors

# yarn
yarn add languages-flag-colors
```

## Usage
### Importing

#### TypeScript
```ts
// Here we're importing the default export "languages", which is an array with all the language objects
// as well as the getLanguage function which is used to get a language object or an array of language objects
import languages, { getLanguage } from "language-flag-colors"
```

#### JavaScript
```js
// Here we're importing the default export "languages", which is an array with all the language objects
// as well as the getLanguage function which is used to get a language object or an array of language objects
const { getLanguage, default: languages } = require("language-flag-colors")
```
Or, if you only want the default array export
```js
const languages = require("language-flag-colors")
```
Or if you only want a function
```js
const { getLanguage } = require("language-flag-colors")
```

### Using our custom methods

```js
// Every method's input is case-insensitive!

// Getting the full language object for one language
// This method accepts a language's name or locale
const dutch = getLanguage("Dutch")
const portuguese = getLanguage("pt-pt")

// Getting an array of language objects for multiple languages
const [dutch, portuguese] = getLanguage(["nl-nl", "portuguese"]) // This will return an array with the language objects corresponding to Dutch and Portuguese

// Getting the locale of a language given its name
const dutchLocale = getLocale("dutch") // Will return "nl-NL"

// Getting the name of a language given its locale
const ptName = getName("pt-pt") // Will return "Portuguese"

// Getting the base-10 color value for a language. This method accepts both locales and names
const ptColor = getColor("pt-pt") // Will return 16711680
const dutchColor = getColor("dutch") // Will return 16731904

// Getting the hexadecimal color value for a language. This method accepts both locales and names
const ptHex = getHex("pt-pt") // Will return "#FF0000"
const dutchHex = getHex("dutch") // Will return "#FF4F00"

// Getting the RGB color values for a language. This method accepts both locales and names
const ptRGB = getRGB("pt-pt") // Will return [255, 0, 0]
const dutchRGB = getRGB("dutch") // Will return [255, 79, 0]

// Getting all the languages in a country
const netherlandsLangs = getCountryLanguages("netherlands") // Will return an array with the language objects for Dutch, Frisian, Limburgish and Zeelandic

// Getting all the languages specific to a region
const scotlandLangs = getRegionLanguages("scotland") // Will return an array with the language objects for Scots and Scottish Gaelic
```

### Contributing

Due to the large amount of languages we support in this package, it is possible that some information may be inaccurate. If you believe so, feel free to [open a pull request](https://github.com/Bas950/Language-Flag-Colors/compare).

### Inspiration

We got all the language names and locale from [Crowdin](https://crowdin.com)'s officially supported languages (with some minor differences) and added all the colors, countries and regions manually. We hope to keep this list updated whenever they add new languages, but we may also add other ones not supported by them if these are requested by anyone. This package was created by [Bas950](https://github.com/Bas950) and [Rodry](https://github.com/ImRodry) and is not officially endorsed by Crowdin nor affiliated with the company in any way.
