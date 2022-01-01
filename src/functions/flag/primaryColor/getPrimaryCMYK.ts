import findLanguage from "../../findLanguage";

/**
 * Gets the CMYK color of a language
 * @param lang The locale, ISO code or name of the language to find the color of
 * @returns The CMYK array of colors of the language, or `null` if it is not found
 */
export default function getPrimaryCMYK(lang: string) {
	const language = findLanguage(lang);
	return language?.flag.primaryColor.cmyk ?? null;
}
