import languages from "../..";
import findLanguage from "../findLanguage";

/**
 * Gets the flag of a language
 * @param country The country, country code, language locale, ISO code or name to find the flag of
 * @returns The flag object of the language, or `null` if it is not found
 */
export function getFlag(country: string) {
	const language =
		languages.find(l => l.country.toLowerCase() === country.toLowerCase()) ??
		languages.find(l => l.countryCode.toLowerCase() === country.toLowerCase()) ??
		findLanguage(country);
	return language?.flag ?? null;
}
