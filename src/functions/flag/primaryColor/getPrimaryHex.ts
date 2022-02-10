import findLanguage from "../../findLanguage";

/**
 * Gets the HEX color of a language
 * @param lang The locale, ISO code or name of the language to find the color of
 * @returns The HEX color of the language, or `null` if it is not found
 */
export function getPrimaryHex(lang: string) {
	const language = findLanguage(lang);
	return language?.flag.primaryColor.hex ?? null;
}
