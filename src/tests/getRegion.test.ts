import { getRegion } from "..";

describe("getRegion()", () => {
	test("Getting the region of a language given its locale", () => {
		expect(getRegion("sco-GB")).toStrictEqual("Scotland");
	});

	test("Getting the region of a language given its ISO codes", () => {
		expect(getRegion("gd")).toStrictEqual("Scotland");
		expect(getRegion("sco")).toStrictEqual("Scotland");
		expect(getRegion("ckb")).toStrictEqual("Kurdistan");
	});

	test("Getting the region of a language given its name", () => {
		expect(getRegion("scottish")).toStrictEqual("Scotland");
	});
});
