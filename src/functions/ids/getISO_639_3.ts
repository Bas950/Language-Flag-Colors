import findLanguage from "../findLanguage";

/**
 * Gets the [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code of a language
 * @param lang The locale, ISO code or name of the language to find the ISO 639-3 of
 * @returns The ISO 639-3 code of the language, `null` if it is not found or `undefined` if the language doesn't have the code
 */
export function getISO_639_3(lang: string) {
	const language = findLanguage(lang);
	return language ? language.ids.ISO_639_3 : null;
}
