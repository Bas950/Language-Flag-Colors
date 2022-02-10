export * from "./functions/flag/flagColors/getBase10FlagColors";
export * from "./functions/flag/flagColors/getCMYKFlagColors";
export * from "./functions/flag/flagColors/getFlagColors";
export * from "./functions/flag/flagColors/getHexFlagColors";
export * from "./functions/flag/flagColors/getRGBFlagColors";
export * from "./functions/flag/getEmoji";
export * from "./functions/flag/getFlag";
export * from "./functions/flag/getImage";
export * from "./functions/flag/primaryColor/getPrimaryBase10";
export * from "./functions/flag/primaryColor/getPrimaryCMYK";
export * from "./functions/flag/primaryColor/getPrimaryColor";
export * from "./functions/flag/primaryColor/getPrimaryHex";
export * from "./functions/flag/primaryColor/getPrimaryRGB";
export * from "./functions/getCountry";
export * from "./functions/getCountryCode";
export * from "./functions/getCountryLanguages";
export * from "./functions/getDirection";
export * from "./functions/getLanguage";
export * from "./functions/getName";
export * from "./functions/getNativeName";
export * from "./functions/getRegion";
export * from "./functions/getRegionCode";
export * from "./functions/getRegionLanguages";
export * from "./functions/ids/getAndroidCode";
export * from "./functions/ids/getGlottolog";
export * from "./functions/ids/getIds";
export * from "./functions/ids/getISO_639_1";
export * from "./functions/ids/getISO_639_2";
export * from "./functions/ids/getISO_639_3";
export * from "./functions/ids/getLocale";
export * from "./functions/ids/getOSXCode";
export * from "./functions/ids/getOSXLocale";
import languages from "./languages";

export default languages;

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
