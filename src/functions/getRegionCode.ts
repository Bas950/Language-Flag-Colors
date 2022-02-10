import findLanguage from "./findLanguage";

/**
 * Gets the code of a language's region, if any
 * @param lang The locale, ISO code or name of the language to find the region code of
 * @returns The language's region code, `null` if no language is found
 * or `undefined` if the language doesn't have a region
 */
export function getRegionCode(lang: string) {
	const language = findLanguage(lang);
	return language ? language.regionCode : null;
}
