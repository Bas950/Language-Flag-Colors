import { getEmoji } from "../..";

describe("getEmoji()", () => {
	test("Getting the emoji of a language given its country", () => {
		expect(getEmoji("netherlands")).toStrictEqual("π³π±");
	});

	test("Getting the emoji of a language given its country code", () => {
		expect(getEmoji("nl")).toStrictEqual("π³π±");
	});

	test("Getting the emoji of a language given its locale", () => {
		expect(getEmoji("nl-nl")).toStrictEqual("π³π±");
	});

	test("Getting the emoji of a language given its ISO codes", () => {
		expect(getEmoji("pt")).toStrictEqual("π΅πΉ");
		expect(getEmoji("nld")).toStrictEqual("π³π±");
		expect(getEmoji("afb")).toStrictEqual("π§π­");
	});

	test("Getting the emoji of a language given its name", () => {
		expect(getEmoji("english")).toStrictEqual("πΊπΈ");
	});
});
