import findLanguage from "../findLanguage";

/**
 * Gets the Android locale identifier used to name "values-" directories in Android-based OSs
 * @param lang The locale, ISO code or name of the language to find the Android code of
 * @returns The Android code of the language, or `null` if it is not found
 */
export default function getAndroidCode(lang: string) {
	const language = findLanguage(lang);
	return language?.ids.androidCode ?? null;
}
