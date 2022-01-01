import { getCountryCode } from "..";

describe("getCountryCode()", () => {
	test("Getting the country code of a language given its locale", () => {
		expect(getCountryCode("nl-nl")).toStrictEqual("nl");
	});

	test("Getting the country code of a language given its ISO codes", () => {
		expect(getCountryCode("pt")).toStrictEqual("pt");
		expect(getCountryCode("nld")).toStrictEqual("nl");
		expect(getCountryCode("afb")).toStrictEqual("bh");
	});

	test("Getting the country code of a language given its name", () => {
		expect(getCountryCode("english")).toStrictEqual("us");
	});
});
