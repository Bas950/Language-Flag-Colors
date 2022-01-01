import { getCountryLanguages } from "..";

describe("getCountryLanguages()", () => {
	test("Getting the country languages of a language given its country name", () => {
		expect(getCountryLanguages("netherlands")).toStrictEqual([
			{
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
			{
				name: "Frisian",
				nativeName: "Frysk",
				ids: {
					locale: "fy-NL",
					ISO_639_1: "fy",
					ISO_639_2: "fry",
					ISO_639_3: "fry",
					androidCode: "fy-rNL",
					osxCode: "fy.lproj",
					osxLocale: "fy",
					glottolog: "fris1239"
				},
				direction: "ltr",
				country: "Netherlands",
				countryCode: "nl",
				flag: {
					image: "https://crowdin.com/images/flags/fy-NL.png",
					emoji: "🇳🇱",
					primaryColor: { hex: "#0155A5", rgb: [1, 85, 165], cmyk: [99, 48, 0, 35], base10: 87461 },
					flagColors: [
						{ hex: "#0155A5", rgb: [1, 85, 165], cmyk: [99, 48, 0, 35], base10: 87461 },
						{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 },
						{ hex: "#EE3E34", rgb: [238, 62, 52], cmyk: [0, 74, 78, 7], base10: 15613492 }
					]
				},
				region: "Friesland",
				regionCode: "fr"
			},
			{
				name: "Limburgish",
				nativeName: "Limburgs",
				ids: {
					locale: "li-LI",
					ISO_639_1: "li",
					ISO_639_2: "lim",
					ISO_639_3: "lim",
					androidCode: "li-rLI",
					osxCode: "li.lproj",
					osxLocale: "li",
					glottolog: "limb1263"
				},
				direction: "ltr",
				country: "Netherlands",
				countryCode: "nl",
				flag: {
					image: "https://crowdin.com/images/flags/li.png",
					emoji: "🇳🇱",
					primaryColor: { hex: "#2D558E", rgb: [45, 85, 142], cmyk: [68, 40, 0, 44], base10: 2971022 },
					flagColors: [
						{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 },
						{ hex: "#2D558E", rgb: [45, 85, 142], cmyk: [68, 40, 0, 44], base10: 2971022 },
						{ hex: "#F8C60B", rgb: [248, 198, 11], cmyk: [0, 20, 96, 3], base10: 16303627 },
						{ hex: "#E34220", rgb: [227, 66, 32], cmyk: [0, 71, 86, 11], base10: 14893600 }
					]
				},
				region: "Limburg",
				regionCode: "li"
			},
			{
				name: "Zeelandic",
				nativeName: "Zeêuws",
				ids: { locale: "zea-ZEA", ISO_639_3: "zea", androidCode: "zea-rZEA", osxCode: "zea.lproj", osxLocale: "zea", glottolog: "zeeu1238" },
				direction: "ltr",
				country: "Netherlands",
				countryCode: "nl",
				flag: {
					image: "https://crowdin.com/images/flags/zea.png",
					emoji: "🇳🇱",
					primaryColor: { hex: "#1E09A2", rgb: [30, 9, 162], cmyk: [81, 94, 0, 36], base10: 1968546 },
					flagColors: [
						{ hex: "#1E09A2", rgb: [30, 9, 162], cmyk: [81, 94, 0, 36], base10: 1968546 },
						{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 },
						{ hex: "#F3E01B", rgb: [243, 224, 27], cmyk: [0, 8, 89, 5], base10: 15982619 },
						{ hex: "#CC182C", rgb: [204, 24, 44], cmyk: [0, 88, 78, 20], base10: 13375532 }
					]
				},
				region: "Zeeland",
				regionCode: "zea"
			}
		]);
	});

	test("Getting the country languages of a language given its country code", () => {
		expect(getCountryLanguages("us")).toStrictEqual([
			{
				name: "Cherokee",
				nativeName: "ᏣᎳᎩ",
				ids: {
					locale: "chr-US",
					ISO_639_2: "chr",
					ISO_639_3: "chr",
					androidCode: "chr-rUS",
					osxCode: "chr.lproj",
					osxLocale: "chr",
					glottolog: "cher1273"
				},
				direction: "ltr",
				country: "United States",
				countryCode: "us",
				flag: {
					image: "https://crowdin.com/images/flags/chr.png",
					emoji: "🇺🇸",
					primaryColor: { hex: "#0A3161", rgb: [10, 49, 97], cmyk: [90, 49, 0, 62], base10: 668001 },
					flagColors: [
						{ hex: "#B31942", rgb: [179, 25, 66], cmyk: [0, 100, 66, 13], base10: 11737410 },
						{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 },
						{ hex: "#0A3161", rgb: [10, 49, 97], cmyk: [100, 68, 0, 54], base10: 668001 }
					]
				},
				region: "Oklahoma",
				regionCode: "ok"
			},
			{
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
			},
			{
				name: "English (upside down)",
				nativeName: "ɥsıןƃuƎ",
				ids: { locale: "en-UD", androidCode: "en-rUD", osxCode: "en-UD.lproj", osxLocale: "en_UD" },
				direction: "ltr",
				country: "United States",
				countryCode: "us",
				flag: {
					image: "https://crowdin.com/images/flags/en-UD.png",
					emoji: "🇺🇸",
					primaryColor: { hex: "#0A3161", rgb: [10, 49, 97], cmyk: [90, 49, 0, 62], base10: 668001 },
					flagColors: [
						{ hex: "#B31942", rgb: [179, 25, 66], cmyk: [0, 100, 66, 13], base10: 11737410 },
						{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 },
						{ hex: "#0A3161", rgb: [10, 49, 97], cmyk: [100, 68, 0, 54], base10: 668001 }
					]
				}
			},
			{
				name: "English, Caribbean",
				nativeName: "English, Caribbean",
				ids: {
					locale: "en-CB",
					ISO_639_1: "en",
					ISO_639_2: "eng",
					ISO_639_3: "eng",
					androidCode: "en-rCB",
					osxCode: "en-CB.lproj",
					osxLocale: "en_CB",
					glottolog: "stan1293"
				},
				direction: "ltr",
				country: "United States",
				countryCode: "us",
				flag: {
					image: "https://crowdin.com/images/flags/en-CB.png",
					emoji: "🇺🇸",
					primaryColor: { hex: "#0A3161", rgb: [10, 49, 97], cmyk: [90, 49, 0, 62], base10: 668001 },
					flagColors: [
						{ hex: "#B31942", rgb: [179, 25, 66], cmyk: [0, 100, 66, 13], base10: 11737410 },
						{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 },
						{ hex: "#0A3161", rgb: [10, 49, 97], cmyk: [100, 68, 0, 54], base10: 668001 }
					]
				},
				region: "Caribbean",
				regionCode: "cb"
			},
			{
				name: "English, United States",
				nativeName: "English, United States",
				ids: {
					locale: "en-US",
					ISO_639_1: "en",
					ISO_639_2: "eng",
					ISO_639_3: "eng",
					androidCode: "en-rUS",
					osxCode: "en-US.lproj",
					osxLocale: "en_US",
					glottolog: "stan1293"
				},
				direction: "ltr",
				country: "United States",
				countryCode: "us",
				flag: {
					image: "https://crowdin.com/images/flags/en-US.png",
					emoji: "🇺🇸",
					primaryColor: { hex: "#0A3161", rgb: [10, 49, 97], cmyk: [90, 49, 0, 62], base10: 668001 },
					flagColors: [
						{ hex: "#B31942", rgb: [179, 25, 66], cmyk: [0, 100, 66, 13], base10: 11737410 },
						{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 },
						{ hex: "#0A3161", rgb: [10, 49, 97], cmyk: [100, 68, 0, 54], base10: 668001 }
					]
				}
			},
			{
				name: "Hawaiian",
				nativeName: "Ōlelo Hawaiʻi",
				ids: {
					locale: "haw-US",
					ISO_639_2: "haw",
					ISO_639_3: "haw",
					androidCode: "haw-rUS",
					osxCode: "haw.lproj",
					osxLocale: "haw",
					glottolog: "hawa1245"
				},
				direction: "ltr",
				country: "United States",
				countryCode: "us",
				flag: {
					image: "https://crowdin.com/images/flags/haw.png",
					emoji: "🇺🇸",
					primaryColor: { hex: "#00247D", rgb: [0, 36, 125], cmyk: [100, 71, 0, 51], base10: 9341 },
					flagColors: [
						{ hex: "#012169", rgb: [1, 33, 105], cmyk: [99, 69, 0, 59], base10: 74089 },
						{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 },
						{ hex: "#C8102E", rgb: [200, 16, 46], cmyk: [0, 92, 77, 22], base10: 13111342 }
					]
				},
				region: "Hawaii",
				regionCode: "hi"
			},
			{
				name: "Klingon",
				nativeName: " ",
				ids: {
					locale: "tlh-AA",
					ISO_639_2: "tlh",
					ISO_639_3: "tlh",
					androidCode: "tlh-rAA",
					osxCode: "tlh.lproj",
					osxLocale: "tlh",
					glottolog: "klin1234"
				},
				direction: "ltr",
				country: "United States",
				countryCode: "us",
				flag: {
					image: "https://crowdin.com/images/flags/tlh-AA.png",
					emoji: "🇺🇸",
					primaryColor: { hex: "#008852", rgb: [0, 136, 82], cmyk: [100, 0, 40, 47], base10: 34898 },
					flagColors: [
						{ hex: "#008852", rgb: [0, 136, 82], cmyk: [100, 0, 40, 47], base10: 34898 },
						{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 }
					]
				}
			},
			{
				name: "Lojban",
				nativeName: "La .lojban.",
				ids: {
					locale: "jbo-EN",
					ISO_639_2: "jbo",
					ISO_639_3: "jbo",
					androidCode: "jbo-rEN",
					osxCode: "jbo.lproj",
					osxLocale: "jbo",
					glottolog: "lojb1234"
				},
				direction: "ltr",
				country: "United States",
				countryCode: "us",
				flag: {
					image: "https://crowdin.com/images/flags/jbo.png",
					emoji: "🇺🇸",
					primaryColor: { hex: "#000063", rgb: [0, 0, 99], cmyk: [100, 100, 0, 61], base10: 99 },
					flagColors: [
						{ hex: "#209E6C", rgb: [32, 158, 108], cmyk: [80, 0, 32, 38], base10: 2137708 },
						{ hex: "#960016", rgb: [150, 0, 22], cmyk: [0, 100, 85, 41], base10: 9830422 },
						{ hex: "#000063", rgb: [0, 0, 99], cmyk: [100, 100, 0, 61], base10: 99 }
					]
				}
			},
			{
				name: "LOLCAT",
				nativeName: "LOLCAT",
				ids: { locale: "lol-US", androidCode: "lol-rUS", osxCode: "lol.lproj", osxLocale: "lol" },
				direction: "ltr",
				country: "United States",
				countryCode: "us",
				flag: {
					image: "https://crowdin.com/images/flags/lol.png",
					emoji: "🇺🇸",
					primaryColor: { hex: "#B8D251", rgb: [184, 210, 81], cmyk: [12, 0, 61, 18], base10: 12112465 },
					flagColors: [
						{ hex: "#B8D251", rgb: [184, 210, 81], cmyk: [12, 0, 61, 18], base10: 12112465 },
						{ hex: "#509C89", rgb: [80, 156, 137], cmyk: [49, 0, 12, 39], base10: 5282953 },
						{ hex: "#5CB59F", rgb: [92, 181, 159], cmyk: [49, 0, 12, 29], base10: 6075807 },
						{ hex: "#19909B", rgb: [25, 144, 155], cmyk: [84, 7, 0, 39], base10: 1675419 }
					]
				}
			},
			{
				name: "Spanish, United States",
				nativeName: "Español estadounidense",
				ids: {
					locale: "es-US",
					ISO_639_1: "es",
					ISO_639_2: "spa",
					ISO_639_3: "spa",
					androidCode: "es-rUS",
					osxCode: "es-US.lproj",
					osxLocale: "es_US",
					glottolog: "stan1288"
				},
				direction: "ltr",
				country: "United States",
				countryCode: "us",
				flag: {
					image: "https://crowdin.com/images/flags/es-US.png",
					emoji: "🇺🇸",
					primaryColor: { hex: "#0A3161", rgb: [10, 49, 97], cmyk: [90, 49, 0, 62], base10: 668001 },
					flagColors: [
						{ hex: "#B31942", rgb: [179, 25, 66], cmyk: [0, 100, 66, 13], base10: 11737410 },
						{ hex: "#FFFFFF", rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], base10: 16777215 },
						{ hex: "#0A3161", rgb: [10, 49, 97], cmyk: [100, 68, 0, 54], base10: 668001 }
					]
				}
			}
		]);
	});
});
