import findLanguage from "../findLanguage";

/**
 * Gets the [ISO 639-2](https://en.wikipedia.org/wiki/ISO_639-2) code of a language
 * @param lang The locale, ISO code or name of the language to find the ISO 639-2 of
 * @returns The ISO 639-2 code of the language, `null` if it is not found or `undefined` if the language doesn't have the code
 */
export function getISO_639_2(lang: string) {
	const language = findLanguage(lang);
	return language ? language.ids.ISO_639_2 : null;
}
