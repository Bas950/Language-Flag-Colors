import { getGlottolog } from "../..";

describe("getGlottolog()", () => {
	test("Getting the Glottolog code of a language given its locale", () => {
		expect(getGlottolog("nl-nl")).toStrictEqual("mode1257");
	});

	test("Getting the Glottolog code of a language given its ISO codes", () => {
		expect(getGlottolog("pt")).toStrictEqual("port1283");
		expect(getGlottolog("nld")).toStrictEqual("mode1257");
		expect(getGlottolog("afb")).toStrictEqual("gulf1241");
	});

	test("Getting the Glottolog code of a language given its name", () => {
		expect(getGlottolog("english")).toStrictEqual("stan1293");
	});
});

describe("getGlottolog(url: true)", () => {
	test("Getting the Glottolog URL of a language given its locale", () => {
		expect(getGlottolog("nl-nl", true)).toStrictEqual("https://glottolog.org/resource/languoid/id/mode1257");
	});

	test("Getting the Glottolog URL of a language given its ISO codes", () => {
		expect(getGlottolog("pt", true)).toStrictEqual("https://glottolog.org/resource/languoid/id/port1283");
		expect(getGlottolog("nld", true)).toStrictEqual("https://glottolog.org/resource/languoid/id/mode1257");
		expect(getGlottolog("afb", true)).toStrictEqual("https://glottolog.org/resource/languoid/id/gulf1241");
	});

	test("Getting the Glottolog URL of a language given its name", () => {
		expect(getGlottolog("english", true)).toStrictEqual("https://glottolog.org/resource/languoid/id/stan1293");
	});
});
