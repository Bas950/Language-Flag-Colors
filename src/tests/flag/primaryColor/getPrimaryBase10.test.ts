import { getPrimaryBase10 } from "../../..";

describe("getPrimaryBase10()", () => {
	test("Getting the primary base-10 color of a language given its locale", () => {
		expect(getPrimaryBase10("nl-nl")).toStrictEqual(16731904);
	});

	test("Getting the primary base-10 color of a language given its ISO codes", () => {
		expect(getPrimaryBase10("pt")).toStrictEqual(16711680);
		expect(getPrimaryBase10("nld")).toStrictEqual(16731904);
		expect(getPrimaryBase10("afb")).toStrictEqual(15865649);
	});

	test("Getting the primary base-10 color of a language given its name", () => {
		expect(getPrimaryBase10("english")).toStrictEqual(668001);
	});
});
