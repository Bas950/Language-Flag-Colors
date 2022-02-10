import languages from "../../languages";
import findLanguage from "../findLanguage";

/**
 * Gets a country's flag unicode emoji
 * @param country The country, country code, language locale, ISO code or name to get the flag emoji of
 * @returns A flag unicode emoji, `null` if no language is found or `undefined` if the language doesn't have an emoji
 */
export function getEmoji(country: string) {
	const language =
		languages.find(l => l.country.toLowerCase() === country.toLowerCase() && l.flag.emoji) ??
		languages.find(l => l.countryCode.toLowerCase() === country.toLowerCase() && l.flag.emoji) ??
		languages.find(l => l.country.toLowerCase() === country.toLowerCase()) ??
		languages.find(l => l.countryCode.toLowerCase() === country.toLowerCase()) ??
		findLanguage(country);
	return language ? language.flag.emoji : null;
}
