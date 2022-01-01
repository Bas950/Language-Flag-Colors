import { getNativeName } from "..";

describe("getNativeName()", () => {
	test("Getting the native name of a language given its locale", () => {
		expect(getNativeName("nl-nl")).toStrictEqual("Nederlands");
	});

	test("Getting the native name of a language given its ISO codes", () => {
		expect(getNativeName("pt")).toStrictEqual("Português");
		expect(getNativeName("nld")).toStrictEqual("Nederlands");
		expect(getNativeName("afb")).toStrictEqual("اللهجة البحرينية");
	});

	test("Getting the native name of a language given its name", () => {
		expect(getNativeName("english")).toStrictEqual("English");
	});
});
