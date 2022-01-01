import { getAndroidCode } from "../..";

describe("getAndroidCode()", () => {
	test("Getting the Android code of a language given its locale", () => {
		expect(getAndroidCode("nl-nl")).toStrictEqual("nl-rNL");
	});

	test("Getting the Android code of a language given its ISO codes", () => {
		expect(getAndroidCode("pt")).toStrictEqual("pt-rPT");
		expect(getAndroidCode("nld")).toStrictEqual("nl-rNL");
		expect(getAndroidCode("afb")).toStrictEqual("ar-rBH");
	});

	test("Getting the Android code of a language given its name", () => {
		expect(getAndroidCode("english")).toStrictEqual("en-rUS");
	});
});
