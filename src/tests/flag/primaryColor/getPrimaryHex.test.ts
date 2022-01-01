import { getPrimaryHex } from "../../..";

describe("getPrimaryHex()", () => {
	test("Getting the primary Hex color of a language given its locale", () => {
		expect(getPrimaryHex("nl-nl")).toStrictEqual("#FF4F00");
	});

	test("Getting the primary Hex color of a language given its ISO codes", () => {
		expect(getPrimaryHex("pt")).toStrictEqual("#FF0000");
		expect(getPrimaryHex("nld")).toStrictEqual("#FF4F00");
		expect(getPrimaryHex("afb")).toStrictEqual("#F21731");
	});

	test("Getting the primary Hex color of a language given its name", () => {
		expect(getPrimaryHex("english")).toStrictEqual("#0A3161");
	});
});
