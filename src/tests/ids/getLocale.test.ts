import { getLocale } from "../..";

describe("getLocale()", () => {
	test("Getting the locale of a language given its locale", () => {
		expect(getLocale("nl-nl")).toStrictEqual("nl-NL");
	});

	test("Getting the locale of a language given its ISO codes", () => {
		expect(getLocale("pt")).toStrictEqual("pt-PT");
		expect(getLocale("nld")).toStrictEqual("nl-NL");
		expect(getLocale("afb")).toStrictEqual("ar-BH");
	});

	test("Getting the locale of a language given its name", () => {
		expect(getLocale("english")).toStrictEqual("en");
	});
});
