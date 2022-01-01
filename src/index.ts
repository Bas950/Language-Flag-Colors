import getBase10FlagColors from "./functions/flag/flagColors/getBase10FlagColors";
import getCMYKFlagColors from "./functions/flag/flagColors/getCMYKFlagColors";
import getFlagColors from "./functions/flag/flagColors/getFlagColors";
import getHexFlagColors from "./functions/flag/flagColors/getHexFlagColors";
import getRGBFlagColors from "./functions/flag/flagColors/getRGBFlagColors";
import getEmoji from "./functions/flag/getEmoji";
import getFlag from "./functions/flag/getFlag";
import getImage from "./functions/flag/getImage";
import getPrimaryBase10 from "./functions/flag/primaryColor/getPrimaryBase10";
import getPrimaryCMYK from "./functions/flag/primaryColor/getPrimaryCMYK";
import getPrimaryColor from "./functions/flag/primaryColor/getPrimaryColor";
import getPrimaryHex from "./functions/flag/primaryColor/getPrimaryHex";
import getPrimaryRGB from "./functions/flag/primaryColor/getPrimaryRGB";
import getCountry from "./functions/getCountry";
import getCountryCode from "./functions/getCountryCode";
import getCountryLanguages from "./functions/getCountryLanguages";
import getDirection from "./functions/getDirection";
import getLanguage from "./functions/getLanguage";
import getName from "./functions/getName";
import getNativeName from "./functions/getNativeName";
import getRegion from "./functions/getRegion";
import getRegionCode from "./functions/getRegionCode";
import getRegionLanguages from "./functions/getRegionLanguages";
import getAndroidCode from "./functions/ids/getAndroidCode";
import getGlottolog from "./functions/ids/getGlottolog";
import getIds from "./functions/ids/getIds";
import getISO_639_1 from "./functions/ids/getISO_639_1";
import getISO_639_2 from "./functions/ids/getISO_639_2";
import getISO_639_3 from "./functions/ids/getISO_639_3";
import getLocale from "./functions/ids/getLocale";
import getOSXCode from "./functions/ids/getOSXCode";
import getOSXLocale from "./functions/ids/getOSXLocale";
import languages from "./languages";

export default languages;

export {
	getLanguage,
	getName,
	getNativeName,
	getIds,
	getLocale,
	getISO_639_1,
	getISO_639_2,
	getISO_639_3,
	getAndroidCode,
	getOSXCode,
	getOSXLocale,
	getGlottolog,
	getDirection,
	getCountry,
	getCountryCode,
	getCountryLanguages,
	getFlag,
	getImage,
	getEmoji,
	getPrimaryColor,
	getPrimaryHex,
	getPrimaryRGB,
	getPrimaryCMYK,
	getPrimaryBase10,
	getFlagColors,
	getHexFlagColors,
	getRGBFlagColors,
	getCMYKFlagColors,
	getBase10FlagColors,
	getRegion,
	getRegionCode,
	getRegionLanguages
};

export interface Language {
	name: string;
	nativeName: string;
	ids: LanguageIds;
	direction: "ltr" | "rtl";
	country: string;
	countryCode: string;
	flag: LanguageFlag;
	region?: string;
	regionCode?: string;
}

export interface LanguageIds {
	locale: string;
	ISO_639_1?: string;
	ISO_639_2?: string;
	ISO_639_3?: string;
	androidCode: string;
	osxCode: string;
	osxLocale: string;
	glottolog?: string;
}

export interface LanguageFlag {
	image: `https://crowdin.com/images/flags/${string}.png`;
	emoji?: string;
	primaryColor: Color;
	flagColors: Color[];
}

export interface Color {
	hex: `#${string}`;
	rgb: [number, number, number];
	cmyk: [number, number, number, number];
	base10: number;
}
