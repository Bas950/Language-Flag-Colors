import findLanguage from "../findLanguage";

/**
 * Gets the ids of a language
 * @param lang The locale, ISO code or name of the language to find the ids of
 * @returns The ids of the language, or `null` if it is not found
 */
export default function getIds(lang: string) {
	const language = findLanguage(lang);
	return language?.ids ?? null;
}
