import languages from "../languages";

/**
 * Gets an array with all the languages belonging to a given region
 * @param region The region name or code to find
 * @returns An array with all the languages belonging to that region or null if none are found
 */
export default function getRegionLanguages(region: string) {
	const regionLangs = languages.filter(l => l.region?.toLowerCase() === region.toLowerCase() || l.regionCode?.toLowerCase() === region.toLowerCase());
	return regionLangs.length ? regionLangs : null;
}
