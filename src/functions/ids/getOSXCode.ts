import findLanguage from "../findLanguage";

/**
 * Gets the OS X locale identifier used to name ".lproj" directories
 * @param lang The locale, ISO code or name of the language to find the OS X code of
 * @returns The OS X code of the language, or `null` if it is not found
 */
export default function getOSXCode(lang: string) {
	const language = findLanguage(lang);
	return language?.ids.osxCode ?? null;
}
