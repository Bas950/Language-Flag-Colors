import findLanguage from "./findLanguage";

/**
 * Gets the name of a language's country
 * @param lang The locale, ISO code or name of the language to find the country name of
 * @returns The name of the language's country, or `null` if it is not found
 */
export function getCountry(lang: string) {
	const language = findLanguage(lang);
	return language?.country ?? null;
}
