import findLanguage from "../findLanguage";

/**
 * Gets the locale of a language
 * @param lang The locale, ISO code or name of the language to find the locale of
 * @returns The locale of the language, or `null` if it is not found
 */
export default function getLocale(lang: string) {
	const language = findLanguage(lang);
	return language?.ids.locale ?? null;
}
