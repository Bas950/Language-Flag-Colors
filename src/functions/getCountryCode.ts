import findLanguage from "./findLanguage";

/**
 * Gets the code of a language's country
 * @param lang The locale, ISO code or name of the language to find the country code of
 * @returns The code of the language's country, or `null` if it is not found
 */
export default function getCountryCode(lang: string) {
	const language = findLanguage(lang);
	return language?.countryCode ?? null;
}
