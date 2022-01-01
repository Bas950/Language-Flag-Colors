import findLanguage from "../findLanguage";

/**
 * Gets the OS X locale used to name translated resources (i.e. uk, zh-Hans, zh_HK)
 * @param lang The locale, ISO code or name of the language to find the OS X locale of
 * @returns The OS X locale of the language, or `null` if it is not found
 */
export default function getOSXLocale(lang: string) {
	const language = findLanguage(lang);
	return language?.ids.osxLocale ?? null;
}
