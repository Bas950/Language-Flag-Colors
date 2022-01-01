import { getRegionCode } from "..";

describe("getRegion()", () => {
	test("Getting the region code of a language given its locale", () => {
		expect(getRegionCode("sco-GB")).toStrictEqual("sct");
	});

	test("Getting the region code of a language given its ISO codes", () => {
		expect(getRegionCode("gd")).toStrictEqual("sct");
		expect(getRegionCode("sco")).toStrictEqual("sct");
		expect(getRegionCode("ckb")).toStrictEqual("ku");
	});

	test("Getting the region code of a language given its name", () => {
		expect(getRegionCode("scottish")).toStrictEqual("sct");
	});
});
