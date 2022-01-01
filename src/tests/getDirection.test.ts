import { getDirection } from "..";

describe("getDirection()", () => {
	test("Getting the direction of a language given its locale", () => {
		expect(getDirection("nl-nl")).toStrictEqual("ltr");
	});

	test("Getting the direction of a language given its ISO codes", () => {
		expect(getDirection("pt")).toStrictEqual("ltr");
		expect(getDirection("nld")).toStrictEqual("ltr");
		expect(getDirection("afb")).toStrictEqual("rtl");
	});

	test("Getting the direction of a language given its name", () => {
		expect(getDirection("english")).toStrictEqual("ltr");
	});
});
