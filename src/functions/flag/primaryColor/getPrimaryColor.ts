import findLanguage from "../../findLanguage";

/**
 * Gets the primary color of a language
 * @param lang The locale, ISO code or name of the language to find the color of
 * @returns An object with the HEX, RGB, CMYK and base-10 color values of the language, or `null` if it is not found
 */
export function getPrimaryColor(lang: string) {
	const language = findLanguage(lang);
	return language?.flag.primaryColor ?? null;
}
