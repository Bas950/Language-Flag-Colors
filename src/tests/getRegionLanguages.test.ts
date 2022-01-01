import { getRegionLanguages } from "..";

describe("getRegionLanguges()", () => {
	const langs = [
		{
			name: "Scots",
			nativeName: "Scoats leid",
			ids: {
				locale: "sco-GB",
				ISO_639_2: "sco",
				ISO_639_3: "sco",
				androidCode: "sco-rGB",
				osxCode: "sco.lproj",
				osxLocale: "sco",
				glottolog: "scot1243"
			},
			direction: "ltr",
			country: "United Kingdom",
			countryCode: "gb",
			flag: {
				image: "https://crowdin.com/images/flags/sco.png",
				emoji: "🇬🇧",
				primaryColor: { hex: "#005EB8", rgb: [0, 94, 184], cmyk: [100, 49, 0, 28], base10: 24248 },
				flagColors: [
					{ hex: "#005EB8", rgb: [0, 94, 184], cmyk: [100, 56, 0, 3], base10: 24248 },
					{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 }
				]
			},
			region: "Scotland",
			regionCode: "sct"
		},
		{
			name: "Scottish Gaelic",
			nativeName: "Gàidhlig",
			ids: {
				locale: "gd-GB",
				ISO_639_1: "gd",
				ISO_639_2: "gla",
				ISO_639_3: "gla",
				androidCode: "gd-rGB",
				osxCode: "gd.lproj",
				osxLocale: "gd",
				glottolog: "scot1245"
			},
			direction: "ltr",
			country: "United Kingdom",
			countryCode: "gb",
			flag: {
				image: "https://crowdin.com/images/flags/gd.png",
				emoji: "🇬🇧",
				primaryColor: { hex: "#005EB8", rgb: [0, 94, 184], cmyk: [100, 49, 0, 28], base10: 24248 },
				flagColors: [
					{ hex: "#005EB8", rgb: [0, 94, 184], cmyk: [100, 56, 0, 3], base10: 24248 },
					{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 }
				]
			},
			region: "Scotland",
			regionCode: "sct"
		}
	];

	test("Getting all the languages specific to a region given its name", () => {
		expect(getRegionLanguages("scotland")).toStrictEqual(langs);
	});

	test("Getting all the languages specific to a region given its code", () => {
		expect(getRegionLanguages("sct")).toStrictEqual(langs);
	});
});
