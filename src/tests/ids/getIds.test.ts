import { getIds } from "../..";

describe("getIds()", () => {
	test("Getting the ids of a language given its locale", () => {
		expect(getIds("nl-nl")).toStrictEqual({
			locale: "nl-NL",
			ISO_639_1: "nl",
			ISO_639_2: "nld",
			ISO_639_3: "nld",
			androidCode: "nl-rNL",
			osxCode: "nl.lproj",
			osxLocale: "nl",
			glottolog: "mode1257"
		});
	});

	test("Getting the ids of a language given its ISO codes", () => {
		expect(getIds("pt")).toStrictEqual({
			locale: "pt-PT",
			ISO_639_1: "pt",
			ISO_639_2: "por",
			ISO_639_3: "por",
			androidCode: "pt-rPT",
			osxCode: "pt.lproj",
			osxLocale: "pt",
			glottolog: "port1283"
		});
		expect(getIds("nld")).toStrictEqual({
			locale: "nl-NL",
			ISO_639_1: "nl",
			ISO_639_2: "nld",
			ISO_639_3: "nld",
			androidCode: "nl-rNL",
			osxCode: "nl.lproj",
			osxLocale: "nl",
			glottolog: "mode1257"
		});
		expect(getIds("afb")).toStrictEqual({
			locale: "ar-BH",
			ISO_639_1: "ar",
			ISO_639_2: "ara",
			ISO_639_3: "afb",
			androidCode: "ar-rBH",
			osxCode: "ar-BH.lproj",
			osxLocale: "ar_BH",
			glottolog: "gulf1241"
		});
	});

	test("Getting the ids of a language given its name", () => {
		expect(getIds("english")).toStrictEqual({
			locale: "en",
			ISO_639_1: "en",
			ISO_639_2: "eng",
			ISO_639_3: "eng",
			androidCode: "en-rUS",
			osxCode: "en.lproj",
			osxLocale: "en",
			glottolog: "stan1293"
		});
	});
});
