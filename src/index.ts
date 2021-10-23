import languages from "./languages";

export default languages;

/**
 * Gets a full language object matching the given input, or an array of languages if input is an array
 * @param {string|string[]} lang The locale(s) or name(s) of the language(s) to find
 * @returns {Language|(Language | null)[]|null} null if no languages are found, otherwise a Language object or an array of Language objects
 */
export function getLanguage(lang: string): Language | null;
export function getLanguage(lang: string[]): (Language | null)[];
export function getLanguage(
	lang: string | string[]
): Language | null | (Language | null)[] {
	if (Array.isArray(lang)) {
		return lang.map(l => findLanguage(l));
	} else return findLanguage(lang);
}

/**
 * Gets the locale of a language given its name
 * @param {string} name The name of the language to get the locale from
 * @returns {string|null} The locale of the language, or null if none is found
 */
export function getLocale(name: string) {
	const language = languages.find(
		l => l.name.toLowerCase() === name.toLowerCase()
	);
	return language?.locale ?? null;
}

/**
 * Gets the name of a language given its locale
 * @param {string} locale The locale to get the name of
 * @returns {string|null} The name of the language, or null if none is found
 */
export function getName(locale: string) {
	const language = languages.find(
		l => l.locale.toLowerCase() === locale.toLowerCase()
	);
	return language?.name ?? null;
}

/**
 * Gets the base-10 color of a language
 * @param {string} lang The locale or name of the language to find the color of
 * @returns {number|null} The base-10 color of the language, or null if no language is found
 */
export function getColor(lang: string) {
	const language = findLanguage(lang);
	return language?.color ?? null;
}

/**
 * Gets the HEX color of a language
 * @param {string} lang The locale or name of the language to find the color of
 * @returns {string|null} The HEX color of the language, or null if no language is found
 */
export function getHex(lang: string) {
	const language = findLanguage(lang);
	return language?.hex ?? null;
}

/**
 * Gets the RGB color of a language
 * @param {string} lang The locale or name of the language to find the color of
 * @returns {[number, number, number]|null} The RGB array of colors of the language, or null if no language is found
 */
export function getRGB(lang: string) {
	const language = findLanguage(lang);
	return language?.rgb ?? null;
}

/**
 * Gets an array with all the languages belonging to a given country
 * @param {string} country The country name or code to find
 * @returns {Language[]|null} An array with all the languages belonging to that country or null if none are found
 */
export function getCountryLanguges(country: string) {
	const countryLangs = languages.filter(
		l =>
			l.country.toLowerCase() === country.toLowerCase() ||
			l.countryCode.toLowerCase() === country.toLowerCase()
	);
	return countryLangs.length ? countryLangs : null;
}

/**
 * Gets an array with all the languages belonging to a given region
 * @param {string} region The region name or code to find
 * @returns {Language[]|null} An array with all the languages belonging to that region or null if none are found
 */
export function getRegionLanguges(region: string) {
	const regionLangs = languages.filter(
		l =>
			l.region?.toLowerCase() === region.toLowerCase() ||
			l.regionCode?.toLowerCase() === region.toLowerCase()
	);
	return regionLangs.length ? regionLangs : null;
}

export interface Language {
	locale: string;
	name: string;
	country: string;
	countryCode: string;
	region?: string;
	regionCode?: string;
	hex: `#${string}`;
	rgb: [number, number, number];
	color: number;
}

/**
 * Finds a language given its locale or name
 * @param {string} lang The language to find
 * @returns {Language|null} The corresponding language, or null if none is found
 * @private
 */
function findLanguage(lang: string) {
	let language = languages.find(
		l => l.locale.toLowerCase() === lang.toLowerCase()
	);
	language ??= languages.find(l => l.name.toLowerCase() === lang.toLowerCase());
	language ??= languages.find(l =>
		l.name.toLowerCase().includes(lang.toLowerCase())
	);
	return language ?? null;
}
