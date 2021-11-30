import languages, {
  getColor,
  getCountryLanguages,
  getEmoji,
  getHex,
  getLanguage,
  getLocale,
  getName,
  getRegionLanguages,
  getRGB,
} from ".";

describe("Languages array", () => {
	test("Expect languages to be an array with length", () => {
		expect(languages).toBeInstanceOf(Array);
		expect(languages[0]).toBeInstanceOf(Object);
		expect(languages.length).toBeTruthy();
	});
});

describe("getLanguage()", () => {
	test("Getting a single language", () => {
		const dutch = languages.find(l => l.locale === "nl-NL");
		expect(getLanguage("NL")).toStrictEqual(dutch);
		expect(getLanguage("nl-nl")).toStrictEqual(dutch);
		expect(getLanguage("dutch")).toStrictEqual(dutch);
	});

	test("Getting multiple languages", () => {
		const dutch = languages.find(l => l.locale === "nl-NL"),
			portuguese = languages.find(l => l.locale === "pt-PT");

		expect(getLanguage(["nl", "PORTUGUESE"])).toStrictEqual([dutch, portuguese]);
		expect(getLanguage(["nl-nl", "portuguese"])).toStrictEqual([dutch, portuguese]);
		expect(getLanguage(["dutch", "pt-pt"])).toStrictEqual([dutch, portuguese]);
	});
});

describe("getLocale()", () => {
	test("Getting the locale of a language", () => {
		expect(getLocale("dutch")).toStrictEqual("nl-NL");
	});
});

describe("getName()", () => {
	test("Getting the name of a language given its locale", () => {
		expect(getName("pt-PT")).toStrictEqual("Portuguese");
	});
});

describe("getEmoji()", () => {
	test("Getting the emoji of a language given its country's name", () => {
		expect(getEmoji("United Kingdom")).toStrictEqual("🇬🇧");
	});

	test("Getting the emoji of a language given its country's code", () => {
		expect(getEmoji("us")).toStrictEqual("🇺🇸");
	});

	test("Getting the emoji of a language given its locale", () => {
		expect(getEmoji("pt-pt")).toStrictEqual("🇵🇹");
	});

	test("Getting the emoji of a language given its name", () => {
		expect(getEmoji("Dutch")).toStrictEqual("🇳🇱");
	});
});

describe("getColor()", () => {
	test("Getting the color of a language given its locale", () => {
		expect(getColor("pt-pt")).toStrictEqual(16711680);
	});

	test("Getting the color of a language given its name", () => {
		expect(getColor("Dutch")).toStrictEqual(16731904);
	});
});

describe("getHex()", () => {
	test("Getting the hexadecimal color value for a language given its locale", () => {
		expect(getHex("pt-pt")).toStrictEqual("#FF0000");
	});

	test("Getting the hexadecimal color value for a language given its name", () => {
		expect(getHex("dutch")).toStrictEqual("#FF4F00");
	});
});

describe("getRGB()", () => {
	test("Getting the RGB color values of a language given its locale", () => {
		expect(getRGB("pt-pt")).toStrictEqual([255, 0, 0]);
	});

	test("Getting the RGB color values of a language given its name", () => {
		expect(getRGB("Dutch")).toStrictEqual([255, 79, 0]);
	});
});

describe("getCountryLanguges()", () => {
	const dutch = languages.find(l => l.locale === "nl-NL"),
		frisian = languages.find(l => l.locale === "fy-NL"),
		limburgish = languages.find(l => l.locale === "li-LI"),
		zeelandic = languages.find(l => l.locale === "zea-ZEA");

	test("Getting the county's languages given its code", () => {
		expect(getCountryLanguages("nl")).toStrictEqual([dutch, frisian, limburgish, zeelandic]);
	});

	test("Getting the county's languages given its name", () => {
		expect(getCountryLanguages("Netherlands")).toStrictEqual([dutch, frisian, limburgish, zeelandic]);
	});
});

describe("getRegionLanguges()", () => {
	const scots = languages.find(l => l.locale === "sco-GB"),
		scottishGaelic = languages.find(l => l.locale === "gd-GB");

	test("Getting all the languages specific to a region given its name", () => {
		expect(getRegionLanguages("scotland")).toBeInstanceOf(Array);
		expect(getRegionLanguages("scotland")?.[0]).toBeInstanceOf(Object);
		expect(getRegionLanguages("scotland")?.length).toStrictEqual(2);
		expect(getRegionLanguages("scotland")).toStrictEqual([scots, scottishGaelic]);
	});

	test("Getting all the languages specific to a region given its code", () => {
		expect(getRegionLanguages("sct")).toBeInstanceOf(Array);
		expect(getRegionLanguages("sct")?.[0]).toBeInstanceOf(Object);
		expect(getRegionLanguages("sct")?.length).toStrictEqual(2);
		expect(getRegionLanguages("sct")).toStrictEqual([scots, scottishGaelic]);
	});
});
