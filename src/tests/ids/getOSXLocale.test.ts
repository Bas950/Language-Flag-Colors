import { getOSXLocale } from "../..";

describe("getOSXLocale()", () => {
	test("Getting the OS X locale of a language given its locale", () => {
		expect(getOSXLocale("nl-nl")).toStrictEqual("nl");
	});

	test("Getting the OS X locale of a language given its ISO codes", () => {
		expect(getOSXLocale("pt")).toStrictEqual("pt");
		expect(getOSXLocale("nld")).toStrictEqual("nl");
		expect(getOSXLocale("afb")).toStrictEqual("ar_BH");
	});

	test("Getting the OS X locale of a language given its name", () => {
		expect(getOSXLocale("english")).toStrictEqual("en");
	});
});
