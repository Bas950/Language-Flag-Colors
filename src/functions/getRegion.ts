import findLanguage from "./findLanguage";

/**
 * Gets the name of a language's region, if any
 * @param lang The locale, ISO code or name of the language to find the region name of
 * @returns The language's region name, `null` if no language is found
 * or `undefined` if the language doesn't have a region
 */
export function getRegion(lang: string) {
	const language = findLanguage(lang);
	return language ? language.region : null;
}
