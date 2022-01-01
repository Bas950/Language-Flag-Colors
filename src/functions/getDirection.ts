import findLanguage from "./findLanguage";

/**
 * Gets the direction of a language's text
 * @param lang The locale, ISO code or name of the language to find the direction of
 * @returns The direction of the language's text, or `null` if it is not found
 */
export default function getDirection(lang: string) {
	const language = findLanguage(lang);
	return language?.direction ?? null;
}
