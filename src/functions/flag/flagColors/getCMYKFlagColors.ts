import findLanguage from "../../findLanguage";

/**
 * Gets the CMYK colors in a language's flag
 * @param lang The locale, ISO code or name of the language to find the colors of
 * @returns An array with all the CMYK colors in the language's flag, or `null` if it is not found
 */
export function getCMYKFlagColors(lang: string) {
	const language = findLanguage(lang);
	return language?.flag.flagColors.map(c => c.cmyk) ?? null;
}
