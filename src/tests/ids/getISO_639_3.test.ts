import { getISO_639_3 } from "../..";

describe("getISO_639_3()", () => {
	test("Getting the ISO 639-3 code of a language given its locale", () => {
		expect(getISO_639_3("nl-nl")).toStrictEqual("nld");
	});

	test("Getting the ISO 639-3 code of a language given its ISO codes", () => {
		expect(getISO_639_3("pt")).toStrictEqual("por");
		expect(getISO_639_3("nld")).toStrictEqual("nld");
		expect(getISO_639_3("afb")).toStrictEqual("afb");
	});

	test("Getting the ISO 639-3 code of a language given its name", () => {
		expect(getISO_639_3("english")).toStrictEqual("eng");
	});
});
