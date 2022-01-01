import { getImage } from "../..";

describe("getImage()", () => {
	test("Getting the image of a language given its country", () => {
		expect(getImage("netherlands")).toStrictEqual("https://crowdin.com/images/flags/nl.png");
	});

	test("Getting the image of a language given its country code", () => {
		expect(getImage("nl")).toStrictEqual("https://crowdin.com/images/flags/nl.png");
	});

	test("Getting the image of a language given its locale", () => {
		expect(getImage("nl-nl")).toStrictEqual("https://crowdin.com/images/flags/nl.png");
	});

	test("Getting the image of a language given its ISO codes", () => {
		expect(getImage("pt")).toStrictEqual("https://crowdin.com/images/flags/pt-PT.png");
		expect(getImage("nld")).toStrictEqual("https://crowdin.com/images/flags/nl.png");
		expect(getImage("afb")).toStrictEqual("https://crowdin.com/images/flags/ar-BH.png");
	});

	test("Getting the image of a language given its name", () => {
		expect(getImage("english")).toStrictEqual("https://crowdin.com/images/flags/en.png");
	});
});
