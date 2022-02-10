import findLanguage from "../findLanguage";

/**
 * Gets the [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code of a language
 * @param lang The locale, ISO code or name of the language to find the ISO 639-1 of
 * @returns The ISO 639-1 code of the language, `null` if it is not found or `undefined` if the language doesn't have the code
 */
export function getISO_639_1(lang: string) {
	const language = findLanguage(lang);
	return language ? language.ids.ISO_639_1 : null;
}
