import { getBase10FlagColors } from "../../..";

describe("getBase10FlagColors()", () => {
	test("Getting the base-10 flag colors of a language given its locale", () => {
		expect(getBase10FlagColors("nl-nl")).toStrictEqual([13111342, 16777215, 15781]);
	});

	test("Getting the base-10 flag colors of a language given its ISO codes", () => {
		expect(getBase10FlagColors("pt")).toStrictEqual([289336, 14297372, 16771328, 11634, 16777215, 0]);
		expect(getBase10FlagColors("nld")).toStrictEqual([13111342, 16777215, 15781]);
		expect(getBase10FlagColors("afb")).toStrictEqual([13504806, 16777215]);
	});

	test("Getting the base-10 flag colors of a language given its name", () => {
		expect(getBase10FlagColors("english")).toStrictEqual([11737410, 16777215, 668001]);
	});
});
