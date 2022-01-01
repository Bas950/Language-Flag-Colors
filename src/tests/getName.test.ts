import { getName } from "..";

describe("getName()", () => {
	test("Getting the name of a language given its locale", () => {
		expect(getName("nl-nl")).toStrictEqual("Dutch");
	});

	test("Getting the name of a language given its ISO codes", () => {
		expect(getName("pt")).toStrictEqual("Portuguese");
		expect(getName("nld")).toStrictEqual("Dutch");
		expect(getName("afb")).toStrictEqual("Arabic, Bahrain");
	});

	test("Getting the name of a language given its name", () => {
		expect(getName("english")).toStrictEqual("English");
	});
});
