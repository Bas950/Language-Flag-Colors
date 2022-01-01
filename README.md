# Language-Flag-Colors [![Version](https://img.shields.io/npm/v/language-flag-colors.svg)](https://www.npmjs.com/package/language-flag-colors)

A package with the color of every language's flag

## Instalation

```bash
# npm
npm install language-flag-colors

# yarn
yarn add language-flag-colors
```

## Usage

### Importing

#### TypeScript

```ts
// Here we're importing the default export "languages", which is an array with all the language objects
// as well as the getLanguage function which is used to get a language object or an array of language objects
import languages, { getLanguage } from "language-flag-colors";
```

#### JavaScript

```js
// Here we're importing the default export "languages", which is an array with all the language objects
// as well as the getLanguage function which is used to get a language object or an array of language objects
const { getLanguage, default: languages } = require("language-flag-colors");
```

Or, if you only want the default array export

```js
const languages = require("language-flag-colors");
```

Or if you only want a function

```js
const { getLanguage } = require("language-flag-colors");
```

### Using our custom methods

```js
// Every method's input is case-insensitive!

// Getting the full language object for one language
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const dutch = getLanguage("Dutch");
const portuguese = getLanguage("pt-pt");

// Getting an array of language objects for multiple languages
const [dutch, portuguese] = getLanguage(["nl-nl", "portuguese"]); // This will return an array with the language objects corresponding to Dutch and Portuguese

// Getting the name of a language
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptName = getName("pt-pt"); // Will return "Portuguese"

// Getting the native name of a language
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptNativeName = getNativeName("pt-pt"); // Will return "Português"

// Getting a language's IDs. This will return an object with the language's locale, ISO_639_1, ISO_639_2, ISO_639_3 codes, androidCode, osxCode, osxLocale and glottolog ID
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const dutchIds = getIds("nld");

// Getting the locale of a language
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const dutchLocale = getLocale("dutch"); // Will return "nl-NL"

// Getting the language's ISO 639-1 code
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptISO_639_1 = getISO_639_1("PORTUGUESE"); // Will return "pt"

// Getting the language's ISO 639-2 code
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const dutchISO_639_2 = getISO_639_2("dutch"); // Will return "nld"

// Getting the language's ISO 639-3 code
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const englishISO_639_3 = getISO_639_3("English"); // Will return "eng"

// Getting the language's Android code. This is used to name "values-" directories in Android-based OSs
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptAndroidCode = getAndroidCode("PORTUGUESE"); // Will return "pt-rPT"

// Getting the language's OS X code
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const dutchOSXCode = getOSXCode("nl-nl"); // Will return "nl.lproj"

// Getting the language's OS X locale
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const englishOSXLocale = getOSXLocale("eng"); // Will return "en"

// Getting the language's Glottolog ID. This will return the link to the glottolog page on the language provided if the second parameter is passed as true
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptGlottologUrl = getGlottolog("pt-pt", true); // Will return "https://glottolog.org/resource/languoid/id/port1283"
const dutchGlottologId = getGlottolog("nl-nl"); // Will return "mode1257"

// Getting a language's text direction. This can be "rtl" or "ltr" for "right-to-left" and "left-to-right" respectively
const dutchDirection = getDirection("Dutch"); // Will return "ltr"
const arabicDirection = getDirection("ar"); // Will return "rtl"

// Getting the language's country name
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptCountry = getCountry("pt"); // Will return "Portugal"

// Getting the language's country code
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const dutchCountryCode = getCountryCode("dutch"); // Will return "nl"

// Getting all the languages in a country
const netherlandsLangs = getCountryLanguages("netherlands"); // Will return an array with the language objects for Dutch, Frisian, Limburgish and Zeelandic

// Getting the language's flag. This will return an object with a link to the language's flag image from Crowdin, the flag's unicode emoji, if any, the flag's primaryColor and flagColors all in hexadecimal, RGB, CMYK and base-10
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptFlag = getFlag("pt");

// Getting the language's flag image URL
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const dutchFlagImage = getImage("nl"); // Will return "https://crowdin.com/images/flags/nl.png"

// Getting the flag unicode emoji of a language
// This method accepts a country's name or code, or a language's name, locale or ISO 639-(1/2/3) code
const ptEmoji = getEmoji("pt-pt"); // Will return "🇵🇹"
const dutchEmoji = getEmoji("dutch"); // Will return "🇳🇱"
const ukEmoji = getEmoji("United Kingdom"); // Will return "🇬🇧"
const usEmoji = getEmoji("us"); // Will return "🇺🇸"

// Getting the language's primary color. This will return an object with the language's primary color in hexadecimal, RGB, CMYK and base-10
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptPrimaryColor = getPrimaryColor("pt");

// Getting the primary hexadecimal color value for a language.
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptPrimaryHex = getPrimaryHex("pt-pt"); // Will return "#FF0000"
const dutchPrimaryHex = getPrimaryHex("dutch"); // Will return "#FF4F00"

// Getting the primary RGB color values for a language.
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptPrimaryRGB = getPrimaryRGB("pt-pt"); // Will return [255, 0, 0]
const dutchPrimaryRGB = getPrimaryRGB("dutch"); // Will return [255, 79, 0]

// Getting the primary CMYK color values for a language.
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptPrimaryCMYK = getPrimaryCMYK("pt-pt"); // Will return [0, 100, 100, 0]
const dutchPrimaryCMYK = getPrimaryCMYK("dutch"); // Will return [0, 69, 100, 0]

// Getting the primary base-10 color value for a language.
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptPrimaryBase10 = getPrimaryBase10("pt-pt"); // Will return 16711680
const dutchPrimaryBase10 = getPrimaryBase10("dutch"); // Will return 16731904

// Getting the language's flag colors. This will return an array of objects with the language's primary color in hexadecimal, RGB, CMYK and base-10
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const dutchFlagColors = getFlagColors("nl");

// Getting the hexadecimal color values for a language.
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptHexFlagColors = getHexFlagColors("pt-pt");
const dutchHexFlagColors = getHexFlagColors("dutch");

// Getting the RGB color values for a language.
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptRGBFlagColors = getRGBFlagColors("pt-pt");
const dutchRGBFlagColors = getRGBFlagColors("dutch");

// Getting the CMYK color values for a language.
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptCMYKFlagColors = getCMYKFlagColors("pt-pt");
const dutchCMYKFlagColors = getCMYKFlagColors("dutch");

// Getting the base-10 color values for a language.
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const ptBase10FlagColors = getBase10FlagColors("pt-pt");
const dutchBase10FlagColors = getBase10FlagColors("dutch");

// Getting the language's region name, if any
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const sardinianRegion = getRegion("Sardinian"); // Will return "Sardinia"

// Getting the language's region code, if any
// This method accepts a language's name, locale or ISO 639-(1/2/3) code
const basqueRegionCode = getRegionCode("eu-ES"); // Will return "pv"

// Getting all the languages specific to a region
const scotlandLangs = getRegionLanguages("scotland"); // Will return an array with the language objects for Scots and Scottish Gaelic
```

### Contributing

Due to the large amount of languages we support in this package, it is possible that some information may be inaccurate. If you believe so, feel free to [open a pull request](https://github.com/Bas950/Language-Flag-Colors/compare).

### Inspiration

We got all the language names and locale from [Crowdin](https://crowdin.com)'s officially supported languages (with some minor differences) and added all the colors, countries and regions manually. We hope to keep this list updated whenever they add new languages, but we may also add other ones not supported by them if these are requested by anyone. This package was created by [Bas950](https://github.com/Bas950) and [Rodry](https://github.com/ImRodry) and is not officially endorsed by Crowdin nor affiliated with the company in any way.