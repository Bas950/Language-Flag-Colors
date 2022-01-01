import languages from "../../languages";
import findLanguage from "../findLanguage";

/**
 * Gets a country's flag image URL
 * @param country The country, country code, language locale, ISO code or name to get the flag image URL of
 * @returns The flag image URL of the language, or `null` if it is not found
 */
export default function getImage(country: string) {
	const language =
		languages.find(l => l.country.toLowerCase() === country.toLowerCase()) ??
		languages.find(l => l.countryCode.toLowerCase() === country.toLowerCase()) ??
		findLanguage(country);
	return language?.flag.image ?? null;
}
