import { getOSXCode } from "../..";

describe("getOSXCode()", () => {
	test("Getting the OS X code of a language given its locale", () => {
		expect(getOSXCode("nl-nl")).toStrictEqual("nl.lproj");
	});

	test("Getting the OS X code of a language given its ISO codes", () => {
		expect(getOSXCode("pt")).toStrictEqual("pt.lproj");
		expect(getOSXCode("nld")).toStrictEqual("nl.lproj");
		expect(getOSXCode("afb")).toStrictEqual("ar-BH.lproj");
	});

	test("Getting the OS X code of a language given its name", () => {
		expect(getOSXCode("english")).toStrictEqual("en.lproj");
	});
});
