import languages from "../languages";

/**
 * Finds a language given its locale, ISO code or name
 * @param lang The language to find
 * @returns The corresponding language, or undefined if none is found
 * @private
 */
export default function findLanguage(lang: string) {
	return (
		languages.find(l => l.ids.locale.toLowerCase() === lang.toLowerCase()) ??
		languages.find(l => l.ids.ISO_639_1 === lang.toLowerCase()) ??
		languages.find(l => l.ids.ISO_639_2 === lang.toLowerCase()) ??
		languages.find(l => l.ids.ISO_639_3 === lang.toLowerCase()) ??
		languages.find(l => l.ids.locale.toLowerCase().includes(lang.toLowerCase())) ??
		languages.find(l => l.name.toLowerCase() === lang.toLowerCase()) ??
		languages.find(l => l.name.toLowerCase().includes(lang.toLowerCase()))
	);
}
