import languages from "../languages";

/**
 * Gets an array with all the languages belonging to a given country
 * @param country The country name or code to find
 * @returns An array with all the languages belonging to that country or null if none are found
 */
export function getCountryLanguages(country: string) {
	const countryLangs = languages.filter(
		l => l.country.toLowerCase() === country.toLowerCase() || l.countryCode.toLowerCase() === country.toLowerCase()
	);
	return countryLangs.length ? countryLangs : null;
}
