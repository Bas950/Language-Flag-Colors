import { getPrimaryRGB } from "../../..";

describe("getPrimaryRGB()", () => {
	test("Getting the primary RGB color of a language given its locale", () => {
		expect(getPrimaryRGB("nl-nl")).toStrictEqual([255, 79, 0]);
	});

	test("Getting the primary RGB color of a language given its ISO codes", () => {
		expect(getPrimaryRGB("pt")).toStrictEqual([255, 0, 0]);
		expect(getPrimaryRGB("nld")).toStrictEqual([255, 79, 0]);
		expect(getPrimaryRGB("afb")).toStrictEqual([242, 23, 49]);
	});

	test("Getting the primary RGB color of a language given its name", () => {
		expect(getPrimaryRGB("english")).toStrictEqual([10, 49, 97]);
	});
});
