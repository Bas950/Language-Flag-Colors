import { getPrimaryColor } from "../../..";

describe("getPrimaryColor()", () => {
	test("Getting the primary color of a language given its locale", () => {
		expect(getPrimaryColor("nl-nl")).toStrictEqual({ hex: "#FF4F00", rgb: [255, 79, 0], cmyk: [0, 69, 100, 0], base10: 16731904 });
	});

	test("Getting the primary color of a language given its ISO codes", () => {
		expect(getPrimaryColor("pt")).toStrictEqual({ hex: "#FF0000", rgb: [255, 0, 0], cmyk: [0, 100, 100, 0], base10: 16711680 });
		expect(getPrimaryColor("nld")).toStrictEqual({ hex: "#FF4F00", rgb: [255, 79, 0], cmyk: [0, 69, 100, 0], base10: 16731904 });
		expect(getPrimaryColor("afb")).toStrictEqual({ hex: "#F21731", rgb: [242, 23, 49], cmyk: [0, 91, 80, 5], base10: 15865649 });
	});

	test("Getting the primary color of a language given its name", () => {
		expect(getPrimaryColor("english")).toStrictEqual({ hex: "#0A3161", rgb: [10, 49, 97], cmyk: [90, 49, 0, 62], base10: 668001 });
	});
});
