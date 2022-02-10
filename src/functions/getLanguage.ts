import findLanguage from "./findLanguage";

import type { Language } from "..";

/**
 * Gets a full language object matching the given input, or an array of languages if input is an array
 * @param lang The locale(s), ISO code(s) or name(s) of the language(s) to find
 * @returns An array of language objects or `null` if input is an array, otherwise a language object or `null`
 */
export function getLanguage(lang: string): Language | null;
export function getLanguage<T extends readonly string[] | []>(langs: T): { [P in keyof T]: Language | null };
export function getLanguage(lang: string | string[]) {
	if (Array.isArray(lang)) {
		return lang.map(l => findLanguage(l) ?? null);
	} else return findLanguage(lang) ?? null;
}
