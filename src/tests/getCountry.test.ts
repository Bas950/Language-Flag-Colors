import { getCountry } from "..";

describe("getCountry()", () => {
	test("Getting the country of a language given its locale", () => {
		expect(getCountry("nl-nl")).toStrictEqual("Netherlands");
	});

	test("Getting the country of a language given its ISO codes", () => {
		expect(getCountry("pt")).toStrictEqual("Portugal");
		expect(getCountry("nld")).toStrictEqual("Netherlands");
		expect(getCountry("afb")).toStrictEqual("Bahrain");
	});

	test("Getting the country of a language given its name", () => {
		expect(getCountry("english")).toStrictEqual("United States");
	});
});
