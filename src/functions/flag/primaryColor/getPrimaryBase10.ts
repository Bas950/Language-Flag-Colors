import findLanguage from "../../findLanguage";

/**
 * Gets the base-10 color of a language
 * @param lang The locale, ISO code or name of the language to find the color of
 * @returns The base-10 color of the language, or `null` if it is not found
 */
export default function getPrimaryBase10(lang: string) {
	const language = findLanguage(lang);
	return language?.flag.primaryColor.base10 ?? null;
}
