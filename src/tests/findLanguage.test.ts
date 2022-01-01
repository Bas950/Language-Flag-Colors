import findLanguage from "../functions/findLanguage";

const NL = {
		name: "Dutch",
		nativeName: "Nederlands",
		ids: {
			locale: "nl-NL",
			ISO_639_1: "nl",
			ISO_639_2: "nld",
			ISO_639_3: "nld",
			androidCode: "nl-rNL",
			osxCode: "nl.lproj",
			osxLocale: "nl",
			glottolog: "mode1257"
		},
		direction: "ltr",
		country: "Netherlands",
		countryCode: "nl",
		flag: {
			image: "https://crowdin.com/images/flags/nl.png",
			emoji: "🇳🇱",
			primaryColor: { hex: "#FF4F00", rgb: [255, 79, 0], cmyk: [0, 69, 100, 0], base10: 16731904 },
			flagColors: [
				{ hex: "#C8102E", rgb: [200, 16, 46], cmyk: [0, 100, 80, 5], base10: 13111342 },
				{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 },
				{ hex: "#003DA5", rgb: [0, 61, 165], cmyk: [100, 76, 0, 9], base10: 15781 }
			]
		}
	},
	PT = {
		name: "Portuguese",
		nativeName: "Português",
		ids: {
			locale: "pt-PT",
			ISO_639_1: "pt",
			ISO_639_2: "por",
			ISO_639_3: "por",
			androidCode: "pt-rPT",
			osxCode: "pt.lproj",
			osxLocale: "pt",
			glottolog: "port1283"
		},
		direction: "ltr",
		country: "Portugal",
		countryCode: "pt",
		flag: {
			image: "https://crowdin.com/images/flags/pt-PT.png",
			emoji: "🇵🇹",
			primaryColor: { hex: "#FF0000", rgb: [255, 0, 0], cmyk: [0, 100, 100, 0], base10: 16711680 },
			flagColors: [
				{ hex: "#046A38", rgb: [4, 106, 56], cmyk: [85, 3, 91, 44], base10: 289336 },
				{ hex: "#DA291C", rgb: [218, 41, 28], cmyk: [0, 95, 100, 0], base10: 14297372 },
				{ hex: "#FFE900", rgb: [255, 233, 0], cmyk: [0, 3, 97, 0], base10: 16771328 },
				{ hex: "#002D72", rgb: [0, 45, 114], cmyk: [100, 79, 0, 37], base10: 11634 },
				{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 },
				{ hex: "#000000", rgb: [0, 0, 0], cmyk: [0, 0, 0, 100], base10: 0 }
			]
		}
	},
	BH = {
		name: "Arabic, Bahrain",
		nativeName: "اللهجة البحرينية",
		ids: {
			locale: "ar-BH",
			ISO_639_1: "ar",
			ISO_639_2: "ara",
			ISO_639_3: "afb",
			androidCode: "ar-rBH",
			osxCode: "ar-BH.lproj",
			osxLocale: "ar_BH",
			glottolog: "gulf1241"
		},
		direction: "rtl",
		country: "Bahrain",
		countryCode: "bh",
		flag: {
			image: "https://crowdin.com/images/flags/ar-BH.png",
			emoji: "🇧🇭",
			primaryColor: { hex: "#F21731", rgb: [242, 23, 49], cmyk: [0, 91, 80, 5], base10: 15865649 },
			flagColors: [
				{ hex: "#CE1126", rgb: [206, 17, 38], cmyk: [0, 95, 100, 0], base10: 13504806 },
				{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 }
			]
		}
	},
	EN = {
		name: "English",
		nativeName: "English",
		ids: {
			locale: "en",
			ISO_639_1: "en",
			ISO_639_2: "eng",
			ISO_639_3: "eng",
			androidCode: "en-rUS",
			osxCode: "en.lproj",
			osxLocale: "en",
			glottolog: "stan1293"
		},
		direction: "ltr",
		country: "United States",
		countryCode: "us",
		flag: {
			image: "https://crowdin.com/images/flags/en.png",
			emoji: "🇺🇸",
			primaryColor: { hex: "#0A3161", rgb: [10, 49, 97], cmyk: [90, 49, 0, 62], base10: 668001 },
			flagColors: [
				{ hex: "#B31942", rgb: [179, 25, 66], cmyk: [0, 100, 66, 13], base10: 11737410 },
				{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 },
				{ hex: "#0A3161", rgb: [10, 49, 97], cmyk: [100, 68, 0, 54], base10: 668001 }
			]
		}
	};

describe("findLanguage()", () => {
	test("Finding the language of a language given its locale", () => {
		expect(findLanguage("nl-nl")).toStrictEqual(NL);
	});

	test("Finding the language of a language given its ISO codes", () => {
		expect(findLanguage("pt")).toStrictEqual(PT);
		expect(findLanguage("nld")).toStrictEqual(NL);
		expect(findLanguage("afb")).toStrictEqual(BH);
	});

	test("Finding the language of a language given its name", () => {
		expect(findLanguage("english")).toStrictEqual(EN);
	});
});
