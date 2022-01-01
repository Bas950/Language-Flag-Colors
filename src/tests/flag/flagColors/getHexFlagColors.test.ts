import { getHexFlagColors } from "../../..";

describe("getHexFlagColors()", () => {
	test("Getting the Hex flag colors of a language given its locale", () => {
		expect(getHexFlagColors("nl-nl")).toStrictEqual(["#C8102E", "#FFFFFF", "#003DA5"]);
	});

	test("Getting the Hex flag colors of a language given its ISO codes", () => {
		expect(getHexFlagColors("pt")).toStrictEqual(["#046A38", "#DA291C", "#FFE900", "#002D72", "#FFFFFF", "#000000"]);
		expect(getHexFlagColors("nld")).toStrictEqual(["#C8102E", "#FFFFFF", "#003DA5"]);
		expect(getHexFlagColors("afb")).toStrictEqual(["#CE1126", "#FFFFFF"]);
	});

	test("Getting the Hex flag colors of a language given its name", () => {
		expect(getHexFlagColors("english")).toStrictEqual(["#B31942", "#FFFFFF", "#0A3161"]);
	});
});
