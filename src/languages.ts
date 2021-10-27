import { Language } from ".";

const languages: Language[] = [
	{
		locale: "ach-UG",
		name: "Acholi",
		country: "Uganda",
		countryCode: "ug",
		hex: "#D90000",
		rgb: [217, 0, 0],
		color: 14221312
	},
	{
		locale: "aa-ER",
		name: "Afar",
		country: "Eritrea",
		countryCode: "er",
		hex: "#3C8BDC",
		rgb: [60, 139, 220],
		color: 3967964
	},
	{
		locale: "af-ZA",
		name: "Afrikaans",
		country: "South Africa",
		countryCode: "za",
		hex: "#FFB81C",
		rgb: [255, 182, 18],
		color: 16758290
	},
	{
		locale: "ak-GH",
		name: "Akan",
		country: "Ghana",
		countryCode: "gh",
		hex: "#CF0921",
		rgb: [207, 9, 33],
		color: 13568289
	},
	{
		locale: "tw-TW",
		name: "Akan, Twi",
		country: "Ghana",
		countryCode: "gh",
		hex: "#CF0921",
		rgb: [207, 9, 33],
		color: 13568289
	},
	{
		locale: "sq-AL",
		name: "Albanian",
		country: "Albania",
		countryCode: "al",
		hex: "#FF0000",
		rgb: [255, 0, 0],
		color: 16711680
	},
	{
		locale: "am-ET",
		name: "Amharic",
		country: "Ethiopia",
		countryCode: "et",
		hex: "#078930",
		rgb: [7, 137, 48],
		color: 493872
	},
	{
		locale: "ar",
		name: "Arabic",
		country: "Jordan",
		countryCode: "jo",
		hex: "#007A3D",
		rgb: [0, 122, 61],
		color: 31293
	},
	{
		locale: "ar-BH",
		name: "Arabic, Bahrain",
		country: "Bahrain",
		countryCode: "bh",
		hex: "#F21731",
		rgb: [242, 23, 49],
		color: 15865649
	},
	{
		locale: "ar-EG",
		name: "Arabic, Egypt",
		country: "Egypt",
		countryCode: "eg",
		hex: "#CE1126",
		rgb: [206, 17, 38],
		color: 13504806
	},
	{
		locale: "ar-SA",
		name: "Arabic, Saudi Arabia",
		country: "Saudi Arabia",
		countryCode: "sa",
		hex: "#006C35",
		rgb: [0, 108, 53],
		color: 27701
	},
	{
		locale: "ar-YE",
		name: "Arabic, Yemen",
		country: "Yemen",
		countryCode: "ye",
		hex: "#CE1126",
		rgb: [206, 17, 38],
		color: 13504806
	},
	{
		locale: "an-ES",
		name: "Aragonese",
		country: "Spain",
		countryCode: "es",
		region: "Aragon",
		regionCode: "ar",
		hex: "#FFDA0C",
		rgb: [255, 218, 12],
		color: 16767500
	},
	{
		locale: "hy-AM",
		name: "Armenian",
		country: "Armenia",
		countryCode: "am",
		hex: "#D90012",
		rgb: [217, 0, 18],
		color: 14221330
	},
	{
		locale: "frp-IT",
		name: "Arpitan",
		country: "Italy",
		countryCode: "it",
		region: "Arpitania",
		regionCode: "frp",
		hex: "#EB1C24",
		rgb: [235, 28, 36],
		color: 15408164
	},
	{
		locale: "as-IN",
		name: "Assamese",
		country: "India",
		countryCode: "in",
		region: "Assam",
		regionCode: "as",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "ast-ES",
		name: "Asturian",
		country: "Spain",
		countryCode: "es",
		region: "Asturias",
		regionCode: "as",
		hex: "#0066FF",
		rgb: [0, 102, 255],
		color: 26367
	},
	{
		locale: "tay-TW",
		name: "Atayal",
		country: "Taiwan",
		countryCode: "tw",
		hex: "#FE0000",
		rgb: [254, 0, 0],
		color: 16646144
	},
	{
		locale: "av-DA",
		name: "Avaric",
		country: "Russia",
		countryCode: "ru",
		region: "Dagestan",
		regionCode: "da",
		hex: "#0039A6",
		rgb: [0, 57, 166],
		color: 14758
	},
	{
		locale: "ae-IR",
		name: "Avestan",
		country: "Iran",
		countryCode: "ir",
		region: "Avesta",
		regionCode: "ae",
		hex: "#da0000",
		rgb: [218, 0, 0],
		color: 14286848
	},
	{
		locale: "ay-BO",
		name: "Aymara",
		country: "Bolivia",
		countryCode: "bo",
		region: "Andes Mountains",
		regionCode: "ay",
		hex: "#FFFFFF",
		rgb: [255, 255, 255],
		color: 16777215
	},
	{
		locale: "az-AZ",
		name: "Azerbaijani",
		country: "Azerbaijan",
		countryCode: "az",
		hex: "#0092BC",
		rgb: [0, 146, 188],
		color: 37564
	},
	{
		locale: "ban-ID",
		name: "Balinese",
		country: "Indonesia",
		countryCode: "id",
		region: "Bali",
		regionCode: "ban",
		hex: "#FF0000",
		rgb: [255, 0, 0],
		color: 16711680
	},
	{
		locale: "bal-BA",
		name: "Balochi",
		country: "Pakistan",
		countryCode: "pk",
		region: "Balochistan",
		regionCode: "ba",
		hex: "#004226",
		rgb: [0, 66, 38],
		color: 16934
	},
	{
		locale: "bm-ML",
		name: "Bambara",
		country: "Mali",
		countryCode: "ml",
		region: "Bamana",
		regionCode: "bm",
		hex: "#FCD116",
		rgb: [20, 181, 58],
		color: 1357114
	},
	{
		locale: "ba-RU",
		name: "Bashkir",
		country: "Russia",
		countryCode: "ru",
		region: "Bashkortostan",
		regionCode: "ba",
		hex: "#0070FF",
		rgb: [0, 112, 255],
		color: 28927
	},
	{
		locale: "eu-ES",
		name: "Basque",
		country: "Spain",
		countryCode: "es",
		region: "Basque Country",
		regionCode: "pv",
		hex: "#009B48",
		rgb: [0, 155, 72],
		color: 39752
	},
	{
		locale: "be-BY",
		name: "Belarusian",
		country: "Belarus",
		countryCode: "by",
		hex: "#CF101A",
		rgb: [207, 16, 26],
		color: 13570074
	},
	{
		locale: "bn-BD",
		name: "Bengali",
		country: "Bangladesh",
		countryCode: "bn",
		hex: "#006747",
		rgb: [0, 103, 71],
		color: 26439
	},
	{
		locale: "bn-IN",
		name: "Bengali, India",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "ber-DZ",
		name: "Berber",
		country: "Argelia",
		countryCode: "dk",
		region: "Berber",
		regionCode: "ber",
		hex: "#99CC33",
		rgb: [153, 204, 51],
		color: 10079283
	},
	{
		locale: "bh-IN",
		name: "Bihari",
		country: "India",
		countryCode: "in",
		region: "Bihar",
		regionCode: "br",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "bfo-BF",
		name: "Birifor",
		country: "Burkina Faso",
		countryCode: "bf",
		hex: "#009E49",
		rgb: [0, 158, 73],
		color: 40521
	},
	{
		locale: "bi-VU",
		name: "Bislama",
		country: "Vanuatu",
		countryCode: "vu",
		hex: "#FDCE12",
		rgb: [253, 206, 18],
		color: 16633362
	},
	{
		locale: "bs-BA",
		name: "Bosnian",
		country: "Bosnia and Herzegovina",
		countryCode: "ba",
		hex: "#001489",
		rgb: [0, 20, 137],
		color: 5257
	},
	{
		locale: "br-FR",
		name: "Breton",
		country: "France",
		countryCode: "fr",
		region: "Brittany",
		regionCode: "e",
		hex: "#000000",
		rgb: [0, 0, 0],
		color: 0
	},
	{
		locale: "bg-BG",
		name: "Bulgarian",
		country: "Bulgaria",
		countryCode: "bg",
		hex: "#009B74",
		rgb: [0, 155, 116],
		color: 39796
	},
	{
		locale: "my-MM",
		name: "Burmese",
		country: "Myanmar",
		countryCode: "mm",
		hex: "#EA2839",
		rgb: [234, 40, 57],
		color: 15345721
	},
	{
		locale: "ca-ES",
		name: "Catalan",
		country: "Spain",
		countryCode: "es",
		region: "Catalonia",
		regionCode: "ca",
		hex: "#DA121A",
		rgb: [218, 18, 26],
		color: 14291482
	},
	{
		locale: "ceb-PH",
		name: "Cebuano",
		country: "Philippines",
		countryCode: "ph",
		region: "Central Visayas",
		regionCode: "07",
		hex: "#0038A8",
		rgb: [0, 56, 168],
		color: 14504
	},
	{
		locale: "ch-GU",
		name: "Chamorro",
		country: "Guam",
		countryCode: "gu",
		hex: "#00257C",
		rgb: [0, 37, 124],
		color: 9596
	},
	{
		locale: "ce-CE",
		name: "Chechen",
		country: "Russia",
		countryCode: "es",
		region: "Chechnya",
		regionCode: "ce",
		hex: "#2B7338",
		rgb: [43, 115, 56],
		color: 2847544
	},
	{
		locale: "chr-US",
		name: "Cherokee",
		country: "United States",
		countryCode: "us",
		region: "Oklahoma",
		regionCode: "ok",
		hex: "#0A3161",
		rgb: [10, 49, 97],
		color: 668001
	},
	{
		locale: "ny-MW",
		name: "Chewa",
		country: "Malawi",
		countryCode: "mw",
		hex: "#CE1126",
		rgb: [206, 17, 38],
		color: 13504806
	},
	{
		locale: "zh-CN",
		name: "Chinese Simplified",
		country: "China",
		countryCode: "cn",
		hex: "#EE1C25",
		rgb: [238, 28, 37],
		color: 15604773
	},
	{
		locale: "zh-TW",
		name: "Chinese Traditional",
		country: "Taiwan",
		countryCode: "tw",
		hex: "#FE0000",
		rgb: [254, 0, 0],
		color: 16646144
	},
	{
		locale: "zh-HK",
		name: "Chinese Traditional, Hong Kong",
		country: "Hong Kong",
		countryCode: "hk",
		hex: "#DE2408",
		rgb: [222, 36, 8],
		color: 14558216
	},
	{
		locale: "zh-MO",
		name: "Chinese Traditional, Macau",
		country: "Macau",
		countryCode: "mo",
		hex: "#00795E",
		rgb: [0, 121, 94],
		color: 31070
	},
	{
		locale: "zh-SG",
		name: "Chinese Traditional, Singapore",
		country: "Singapore",
		countryCode: "sg",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "cv-CU",
		name: "Chuvash",
		country: "Russia",
		countryCode: "ru",
		region: "Chuvashia",
		regionCode: "cu",
		hex: "#FFDF00",
		rgb: [255, 223, 0],
		color: 16768768
	},
	{
		locale: "kw-GB",
		name: "Cornish",
		country: "United Kingdom",
		countryCode: "gb",
		region: "Cornwall",
		regionCode: "con",
		hex: "#000000",
		rgb: [0, 0, 0],
		color: 0
	},
	{
		locale: "co-FR",
		name: "Corsican",
		country: "France",
		countryCode: "fr",
		region: "Corsica",
		regionCode: "co",
		hex: "#000000",
		rgb: [0, 0, 0],
		color: 0
	},
	{
		locale: "cr-NT",
		name: "Cree",
		country: "Canada",
		countryCode: "ca",
		region: "Northwest Territories",
		regionCode: "nt",
		hex: "#2A317D",
		rgb: [42, 49, 125],
		color: 2765181
	},
	{
		locale: "hr-HR",
		name: "Croatian",
		country: "Croatia",
		countryCode: "hr",
		hex: "#C8102E",
		rgb: [200, 16, 46],
		color: 13111342
	},
	{
		locale: "cs-CZ",
		name: "Czech",
		country: "Czech Republic",
		countryCode: "cz",
		hex: "#D7141A",
		rgb: [215, 20, 26],
		color: 14095386
	},
	{
		locale: "da-DK",
		name: "Danish",
		country: "Denmark",
		countryCode: "dk",
		hex: "#C60C30",
		rgb: [198, 12, 48],
		color: 12979248
	},
	{
		locale: "fa-AF",
		name: "Dari",
		country: "Afghanistan",
		countryCode: "af",
		hex: "#D32011",
		rgb: [211, 32, 17],
		color: 13836305
	},
	{
		locale: "dv-MV",
		name: "Dhivehi",
		country: "Maldives",
		countryCode: "mv",
		hex: "#D21034",
		rgb: [210, 16, 52],
		color: 13766708
	},
	{
		locale: "nl-NL",
		name: "Dutch",
		country: "Netherlands",
		countryCode: "nl",
		hex: "#FF4F00",
		rgb: [255, 79, 0],
		color: 16731904
	},
	{
		locale: "nl-BE",
		name: "Dutch, Belgium",
		country: "Belgium",
		countryCode: "be",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "nl-SR",
		name: "Dutch, Suriname",
		country: "Suriname",
		countryCode: "sr",
		hex: "#B40A2D",
		rgb: [180, 10, 45],
		color: 11799085
	},
	{
		locale: "dz-BT",
		name: "Dzongkha",
		country: "Bhutan",
		countryCode: "bt",
		hex: "#FF4E12",
		rgb: [255, 78, 18],
		color: 16731666
	},
	{
		locale: "en",
		name: "English",
		country: "United Kingdom",
		countryCode: "gb",
		hex: "#00247D",
		rgb: [0, 36, 125],
		color: 9341
	},
	{
		locale: "en-UD",
		name: "English (upside down)",
		country: "United States",
		countryCode: "us",
		hex: "#0A3161",
		rgb: [10, 49, 97],
		color: 668001
	},
	{
		locale: "en-AR",
		name: "English, Arabia",
		country: "United Arab Emirates",
		countryCode: "ae",
		hex: "#FF0000",
		rgb: [255, 0, 0],
		color: 16711680
	},
	{
		locale: "en-AU",
		name: "English, Australia",
		country: "Australia",
		countryCode: "au",
		hex: "#FFCD00",
		rgb: [255, 205, 0],
		color: 16764160
	},
	{
		locale: "en-BZ",
		name: "English, Belize",
		country: "Belize",
		countryCode: "bz",
		hex: "#003F87",
		rgb: [0, 63, 135],
		color: 16263
	},
	{
		locale: "en-CA",
		name: "English, Canada",
		country: "Canada",
		countryCode: "ca",
		hex: "#FF0000",
		rgb: [255, 0, 0],
		color: 16711680
	},
	{
		locale: "en-CB",
		name: "English, Caribbean",
		country: "United States",
		countryCode: "us",
		region: "Caribbean",
		regionCode: "cb",
		hex: "#0A3161",
		rgb: [10, 49, 97],
		color: 668001
	},
	{
		locale: "en-CN",
		name: "English, China",
		country: "China",
		countryCode: "cn",
		hex: "#EE1C25",
		rgb: [238, 28, 37],
		color: 15604773
	},
	{
		locale: "en-DK",
		name: "English, Denmark",
		country: "Denmark",
		countryCode: "dk",
		hex: "#C60C30",
		rgb: [198, 12, 48],
		color: 12979248
	},
	{
		locale: "en-HK",
		name: "English, Hong Kong",
		country: "Hong Kong",
		countryCode: "hk",
		hex: "#DE2408",
		rgb: [222, 36, 8],
		color: 14558216
	},
	{
		locale: "en-IN",
		name: "English, India",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "en-ID",
		name: "English, Indonesia",
		country: "Indonesia",
		countryCode: "id",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "en-IE",
		name: "English, Ireland",
		country: "Ireland",
		countryCode: "ie",
		hex: "#169B62",
		rgb: [22, 155, 98],
		color: 1481570
	},
	{
		locale: "en-JM",
		name: "English, Jamaica",
		country: "Jamaica",
		countryCode: "jm",
		hex: "#009B3A",
		rgb: [0, 155, 58],
		color: 39738
	},
	{
		locale: "en-JA",
		name: "English, Japan",
		country: "Japan",
		countryCode: "ja",
		hex: "#BC002D",
		rgb: [188, 0, 45],
		color: 12320813
	},
	{
		locale: "en-MY",
		name: "English, Malaysia",
		country: "Malaysia",
		countryCode: "my",
		hex: "#FFCC00",
		rgb: [255, 204, 0],
		color: 16763904
	},
	{
		locale: "en-NZ",
		name: "English, New Zealand",
		country: "New Zealand",
		countryCode: "nz",
		hex: "#000000",
		rgb: [0, 0, 0],
		color: 0
	},
	{
		locale: "en-NO",
		name: "English, Norway",
		country: "Norway",
		countryCode: "no",
		hex: "#BA0C2F",
		rgb: [186, 12, 47],
		color: 12192815
	},
	{
		locale: "en-PH",
		name: "English, Philippines",
		country: "Philippines",
		countryCode: "ph",
		hex: "#0038A8",
		rgb: [0, 56, 168],
		color: 14504
	},
	{
		locale: "en-PR",
		name: "English, Puerto Rico",
		country: "Puerto Rico",
		countryCode: "pr",
		hex: "#E92228",
		rgb: [233, 34, 40],
		color: 15278632
	},
	{
		locale: "en-SG",
		name: "English, Singapore",
		country: "Singapore",
		countryCode: "sg",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "en-ZA",
		name: "English, South Africa",
		country: "South Africa",
		countryCode: "za",
		hex: "#FFB81C",
		rgb: [255, 182, 18],
		color: 16758290
	},
	{
		locale: "en-SE",
		name: "English, Sweden",
		country: "Sweden",
		countryCode: "se",
		hex: "#FECC02",
		rgb: [254, 204, 2],
		color: 16698370
	},
	{
		locale: "en-GB",
		name: "English, United Kingdom",
		country: "United Kingdom",
		countryCode: "gb",
		hex: "#00247D",
		rgb: [0, 36, 125],
		color: 9341
	},
	{
		locale: "en-US",
		name: "English, United States",
		country: "United States",
		countryCode: "us",
		hex: "#0A3161",
		rgb: [10, 49, 97],
		color: 668001
	},
	{
		locale: "en-ZW",
		name: "English, Zimbabwe",
		country: "Zimbabwe",
		countryCode: "zw",
		hex: "#FFD200",
		rgb: [255, 210, 0],
		color: 16765440
	},
	{
		locale: "eo-UY",
		name: "Esperanto",
		country: "International",
		countryCode: "uy",
		hex: "#009900",
		rgb: [0, 153, 0],
		color: 39168
	},
	{
		locale: "et-EE",
		name: "Estonian",
		country: "Estonia",
		countryCode: "ee",
		hex: "#0072CE",
		rgb: [0, 114, 206],
		color: 29390
	},
	{
		locale: "ee-GH",
		name: "Ewe",
		country: "Ghana",
		countryCode: "gh",
		hex: "#CF0921",
		rgb: [207, 9, 33],
		color: 13568289
	},
	{
		locale: "fo-FO",
		name: "Faroese",
		country: "Faroe Islands",
		countryCode: "fo",
		hex: "#0165BF",
		rgb: [1, 101, 191],
		color: 91583
	},
	{
		locale: "fj-FJ",
		name: "Fijian",
		country: "Fiji Islands",
		countryCode: "fj",
		hex: "#68bfe5",
		rgb: [104, 191, 229],
		color: 6864869
	},
	{
		locale: "fil-PH",
		name: "Filipino",
		country: "Philippines",
		countryCode: "ph",
		hex: "#0038A8",
		rgb: [0, 56, 168],
		color: 14504
	},
	{
		locale: "fi-FI",
		name: "Finnish",
		country: "Finland",
		countryCode: "fi",
		hex: "#002F6C",
		rgb: [0, 47, 108],
		color: 12140
	},
	{
		locale: "vls-BE",
		name: "Flemish",
		country: "Belgium",
		countryCode: "be",
		region: "Flanders",
		regionCode: "vlg",
		hex: "#FEEA28",
		rgb: [254, 234, 40],
		color: 16706088
	},
	{
		locale: "fra-DE",
		name: "Franconian",
		country: "Germany",
		countryCode: "de",
		region: "Franconia",
		regionCode: "fra",
		hex: "#CE1126",
		rgb: [206, 17, 38],
		color: 13504806
	},
	{
		locale: "fr-FR",
		name: "French",
		country: "French",
		countryCode: "fr",
		hex: "#318CE7",
		rgb: [49, 140, 231],
		color: 3247335
	},
	{
		locale: "fr-BE",
		name: "French, Belgium",
		country: "Belgium",
		countryCode: "be",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "fr-CA",
		name: "French, Canada",
		country: "Canada",
		countryCode: "ca",
		hex: "#FF0000",
		rgb: [255, 0, 0],
		color: 16711680
	},
	{
		locale: "fr-LU",
		name: "French, Luxembourg",
		country: "Luxembourg",
		countryCode: "lu",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "fr-QC",
		name: "French, Quebec",
		country: "Canada",
		countryCode: "ca",
		region: "Quebec",
		regionCode: "qc",
		hex: "#003DA5",
		rgb: [0, 61, 165],
		color: 15781
	},
	{
		locale: "fr-CH",
		name: "French, Switzerland",
		country: "Switzerland",
		countryCode: "ch",
		hex: "#DA291C",
		rgb: [218, 41, 28],
		color: 14297372
	},
	{
		locale: "fy-NL",
		name: "Frisian",
		country: "Netherlands",
		countryCode: "nl",
		region: "Friesland",
		regionCode: "fr",
		hex: "#0155A5",
		rgb: [1, 85, 165],
		color: 87461
	},
	{
		locale: "fur-IT",
		name: "Friulian",
		country: "Italy",
		countryCode: "it",
		region: "Friuli",
		regionCode: "fur",
		hex: "#196DB6",
		rgb: [25, 109, 182],
		color: 1666486
	},
	{
		locale: "ff-ZA",
		name: "Fula",
		country: "South Africa",
		countryCode: "za",
		hex: "#FFB81C",
		rgb: [255, 182, 18],
		color: 16758290
	},
	{
		locale: "gaa-GH",
		name: "Ga",
		country: "Ghana",
		countryCode: "gh",
		hex: "#CF0921",
		rgb: [207, 9, 33],
		color: 13568289
	},
	{
		locale: "gl-ES",
		name: "Galician",
		country: "Spain",
		countryCode: "es",
		region: "Galiza",
		regionCode: "ga",
		hex: "#0099CC",
		rgb: [0, 153, 204],
		color: 39372
	},
	{
		locale: "ka-GE",
		name: "Georgian",
		country: "Georgia",
		countryCode: "ge",
		hex: "#FF0000",
		rgb: [255, 0, 0],
		color: 16711680
	},
	{
		locale: "de-DE",
		name: "German",
		country: "Germany",
		countryCode: "de",
		hex: "#DD0000",
		rgb: [221, 0, 0],
		color: 14483456
	},
	{
		locale: "de-AT",
		name: "German, Austria",
		country: "Austria",
		countryCode: "at",
		hex: "#ED2939",
		rgb: [237, 41, 57],
		color: 15542585
	},
	{
		locale: "de-BE",
		name: "German, Belgium",
		country: "Belgium",
		countryCode: "be",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "de-LI",
		name: "German, Liechtenstein",
		country: "Liechtenstein",
		countryCode: "li",
		hex: "#002780",
		rgb: [0, 39, 128],
		color: 10112
	},
	{
		locale: "de-LU",
		name: "German, Luxembourg",
		country: "Luxembourg",
		countryCode: "lu",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "de-CH",
		name: "German, Switzerland",
		country: "Switzerland",
		countryCode: "ch",
		hex: "#DA291C",
		rgb: [218, 41, 28],
		color: 14297372
	},
	{
		locale: "got-DE",
		name: "Gothic",
		country: "Germany",
		countryCode: "de",
		hex: "#800080",
		rgb: [128, 0, 128],
		color: 8388736
	},
	{
		locale: "el-GR",
		name: "Greek",
		country: "Greece",
		countryCode: "gr",
		hex: "#0D5EAF",
		rgb: [13, 94, 175],
		color: 876207
	},
	{
		locale: "el-CY",
		name: "Greek, Cyprus",
		country: "Cyprus",
		countryCode: "cy",
		hex: "#D57800",
		rgb: [213, 120, 0],
		color: 13989888
	},
	{
		locale: "kl-GL",
		name: "Greenlandic",
		country: "Denmark",
		countryCode: "dk",
		region: "Greenland",
		regionCode: "gl",
		hex: "#C60C30",
		rgb: [198, 12, 48],
		color: 12979248
	},
	{
		locale: "gn-PY",
		name: "Guarani",
		country: "Paraguay",
		countryCode: "py",
		hex: "#D52B1E",
		rgb: [213, 43, 30],
		color: 13970206
	},
	{
		locale: "gu-IN",
		name: "Gujarati",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "ht-HT",
		name: "Haitian Creole",
		country: "Haiti",
		countryCode: "ht",
		hex: "#00209F",
		rgb: [0, 32, 159],
		color: 8351
	},
	{
		locale: "ha-HG",
		name: "Hausa",
		country: "Nigeria",
		countryCode: "ng",
		hex: "#008753",
		rgb: [0, 135, 83],
		color: 34643
	},
	{
		locale: "haw-US",
		name: "Hawaiian",
		country: "United States",
		countryCode: "us",
		region: "Hawaii",
		regionCode: "hi",
		hex: "#00247D",
		rgb: [0, 36, 125],
		color: 9341
	},
	{
		locale: "he-IL",
		name: "Hebrew",
		country: "Israel",
		countryCode: "il",
		hex: "#0038b8",
		rgb: [0, 56, 184],
		color: 14520
	},
	{
		locale: "hz-NA",
		name: "Herero",
		country: "Namibia",
		countryCode: "na",
		hex: "#D21034",
		rgb: [210, 16, 52],
		color: 13766708
	},
	{
		locale: "hil-PH",
		name: "Hiligaynon",
		country: "Philippines",
		countryCode: "ph",
		region: "Western Visayas",
		regionCode: "06",
		hex: "#0038A8",
		rgb: [0, 56, 168],
		color: 14504
	},
	{
		locale: "hi-IN",
		name: "Hindi",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "ho-PG",
		name: "Hiri Motu",
		country: "Papua New Guinea",
		countryCode: "pg",
		hex: "#CE1126",
		rgb: [206, 17, 38],
		color: 13504806
	},
	{
		locale: "hmn-CN",
		name: "Hmong",
		country: "China",
		countryCode: "cn",
		hex: "#EE1C25",
		rgb: [238, 28, 37],
		color: 15604773
	},
	{
		locale: "hu-HU",
		name: "Hungarian",
		country: "Hungary",
		countryCode: "hu",
		hex: "#CE2939",
		rgb: [206, 41, 57],
		color: 13510969
	},
	{
		locale: "is-IS",
		name: "Icelandic",
		country: "Iceland",
		countryCode: "is",
		hex: "#02529C",
		rgb: [2, 82, 156],
		color: 152220
	},
	{
		locale: "io-EN",
		name: "Ido",
		country: "International",
		countryCode: "en",
		hex: "#127ec9",
		rgb: [18, 126, 201],
		color: 1212105
	},
	{
		locale: "ig-NG",
		name: "Igbo",
		country: "Nigeria",
		countryCode: "ng",
		hex: "#008753",
		rgb: [0, 135, 83],
		color: 34643
	},
	{
		locale: "ilo-PH",
		name: "Ilokano",
		country: "Philippines",
		countryCode: "ph",
		hex: "#0038A8",
		rgb: [0, 56, 168],
		color: 14504
	},
	{
		locale: "id-ID",
		name: "Indonesian",
		country: "Indonesia",
		countryCode: "id",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "iu-NU",
		name: "Inuktitut",
		country: "Canada",
		countryCode: "ca",
		region: "Nunavut",
		regionCode: "nu",
		hex: "#D51516",
		rgb: [213, 21, 22],
		color: 13964566
	},
	{
		locale: "ga-IE",
		name: "Irish",
		country: "Ireland",
		countryCode: "ie",
		hex: "#169B62",
		rgb: [22, 155, 98],
		color: 1481570
	},
	{
		locale: "it-IT",
		name: "Italian",
		country: "Italy",
		countryCode: "it",
		hex: "#008C45",
		rgb: [0, 140, 69],
		color: 35909
	},
	{
		locale: "it-CH",
		name: "Italian, Switzerland",
		country: "Switzerland",
		countryCode: "ch",
		hex: "#DA291C",
		rgb: [218, 41, 28],
		color: 14297372
	},
	{
		locale: "ja-JP",
		name: "Japanese",
		country: "Japan",
		countryCode: "ja",
		hex: "#BC002D",
		rgb: [188, 0, 45],
		color: 12320813
	},
	{
		locale: "jv-ID",
		name: "Javanese",
		country: "Indonesia",
		countryCode: "id",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "quc-GT",
		name: "K'iche'",
		country: "Guatemala",
		countryCode: "gt",
		hex: "#4997D0",
		rgb: [73, 151, 208],
		color: 4822992
	},
	{
		locale: "kab-KAB",
		name: "Kabyle",
		country: "Algeria",
		countryCode: "dz",
		region: "Kabylia",
		regionCode: "kab",
		hex: "#CD263E",
		rgb: [205, 38, 62],
		color: 13444670
	},
	{
		locale: "kn-IN",
		name: "Kannada",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "pam-PH",
		name: "Kapampangan",
		country: "Philippines",
		countryCode: "ph",
		hex: "#81007F",
		rgb: [129, 0, 127],
		color: 8454271
	},
	{
		locale: "ks-IN",
		name: "Kashmiri",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "ks-PK",
		name: "Kashmiri, Pakistan",
		country: "Pakistan",
		countryCode: "pk",
		hex: "#00401A",
		rgb: [0, 64, 26],
		color: 16410
	},
	{
		locale: "csb-PL",
		name: "Kashubian",
		country: "Poland",
		countryCode: "pl",
		hex: "#FFFF00",
		rgb: [255, 255, 0],
		color: 16776960
	},
	{
		locale: "kk-KZ",
		name: "Kazakh",
		country: "Kazakhstan",
		countryCode: "kz",
		hex: "#00AFCA",
		rgb: [0, 175, 202],
		color: 45002
	},
	{
		locale: "km-KH",
		name: "Khmer",
		country: "Cambodia",
		countryCode: "kh",
		hex: "#032EA1",
		rgb: [3, 46, 161],
		color: 208545
	},
	{
		locale: "rw-RW",
		name: "Kinyarwanda",
		country: "Rwanda",
		countryCode: "rw",
		hex: "#E5BE01",
		rgb: [229, 190, 1],
		color: 15056385
	},
	{
		locale: "tlh-AA",
		name: "Klingon",
		country: "United States",
		countryCode: "us",
		hex: "#008852",
		rgb: [0, 136, 82],
		color: 34898
	},
	{
		locale: "kv-KO",
		name: "Komi",
		country: "Russia",
		countryCode: "ru",
		region: "Komi",
		regionCode: "ko",
		hex: "#009B3A",
		rgb: [0, 155, 58],
		color: 39738
	},
	{
		locale: "kg-CG",
		name: "Kongo",
		country: "Congo",
		countryCode: "cd",
		hex: "#009543",
		rgb: [0, 149, 67],
		color: 38211
	},
	{
		locale: "kok-IN",
		name: "Konkani",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "ko-KR",
		name: "Korean",
		country: "South Korea",
		countryCode: "kr",
		hex: "#CD2E3A",
		rgb: [205, 46, 58],
		color: 13446714
	},
	{
		locale: "ku-TR",
		name: "Kurdish",
		country: "Iran",
		countryCode: "ir",
		region: "Kurdistan",
		regionCode: "ku",
		hex: "#278E43",
		rgb: [39, 138, 65],
		color: 2591297
	},
	{
		locale: "kmr-TR",
		name: "Kurmanji (Kurdish)",
		country: "Iran",
		countryCode: "ir",
		region: "Kurdistan",
		regionCode: "ku",
		hex: "#278E43",
		rgb: [39, 138, 65],
		color: 2591297
	},
	{
		locale: "kj-AO",
		name: "Kwanyama",
		country: "Angola",
		countryCode: "ao",
		hex: "#C8102E",
		rgb: [204, 9, 47],
		color: 13371695
	},
	{
		locale: "ky-KG",
		name: "Kyrgyz",
		country: "Kyrgyzstan",
		countryCode: "kg",
		hex: "#FF0000",
		rgb: [255, 0, 0],
		color: 16711680
	},
	{
		locale: "lo-LA",
		name: "Lao",
		country: "Laos",
		countryCode: "la",
		hex: "#CE1126",
		rgb: [206, 17, 38],
		color: 13504806
	},
	{
		locale: "la-LA",
		name: "Latin",
		country: "Vatican City",
		countryCode: "va",
		hex: "#FFE000",
		rgb: [255, 224, 0],
		color: 16769024
	},
	{
		locale: "lv-LV",
		name: "Latvian",
		country: "Latvia",
		countryCode: "lv",
		hex: "#A4343A",
		rgb: [164, 52, 58],
		color: 10761274
	},
	{
		locale: "lij-IT",
		name: "Ligurian",
		country: "Italy",
		countryCode: "it",
		region: "Liguria",
		regionCode: "lij",
		hex: "#009C31",
		rgb: [0, 156, 49],
		color: 39985
	},
	{
		locale: "li-LI",
		name: "Limburgish",
		country: "Netherlands",
		countryCode: "nl",
		region: "Limburg",
		regionCode: "li",
		hex: "#2D558E",
		rgb: [45, 85, 142],
		color: 2971022
	},
	{
		locale: "ln-CD",
		name: "Lingala",
		country: "Congo",
		countryCode: "cd",
		hex: "#0085CA",
		rgb: [0, 133, 202],
		color: 34250
	},
	{
		locale: "lt-LT",
		name: "Lithuanian",
		country: "Lithuania",
		countryCode: "lt",
		hex: "#FDB913",
		rgb: [253, 185, 19],
		color: 16627987
	},
	{
		locale: "jbo-EN",
		name: "Lojban",
		country: "United States",
		countryCode: "us",
		hex: "#000063",
		rgb: [0, 0, 99],
		color: 99
	},
	{
		locale: "lol-US",
		name: "LOLCAT",
		country: "United States",
		countryCode: "us",
		hex: "#B8D251",
		rgb: [184, 210, 81],
		color: 12112465
	},
	{
		locale: "nds-DE",
		name: "Low German",
		country: "Germany",
		countryCode: "de",
		hex: "#DD0000",
		rgb: [221, 0, 0],
		color: 14483456
	},
	{
		locale: "dsb-DE",
		name: "Lower Sorbian",
		country: "Germany",
		countryCode: "de",
		hex: "#0C4076",
		rgb: [12, 64, 118],
		color: 802934
	},
	{
		locale: "lg-UG",
		name: "Luganda",
		country: "Uganda",
		countryCode: "ug",
		hex: "#D90000",
		rgb: [217, 0, 0],
		color: 14221312
	},
	{
		locale: "luy-KE",
		name: "Luhya",
		country: "Kenya",
		countryCode: "ke",
		hex: "#BB0000",
		rgb: [187, 0, 0],
		color: 12255232
	},
	{
		locale: "lb-LU",
		name: "Luxembourgish",
		country: "Luxembourg",
		countryCode: "lu",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "mk-MK",
		name: "Macedonian",
		country: "North Macedonia",
		countryCode: "mk",
		hex: "#CE2028",
		rgb: [206, 32, 40],
		color: 13508648
	},
	{
		locale: "mai-IN",
		name: "Maithili",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "mg-MG",
		name: "Malagasy",
		country: "Madagascar",
		countryCode: "mg",
		hex: "#00843D",
		rgb: [0, 132, 61],
		color: 33853
	},
	{
		locale: "ms-MY",
		name: "Malay",
		country: "Malaysia",
		countryCode: "my",
		hex: "#FFCC00",
		rgb: [255, 204, 0],
		color: 16763904
	},
	{
		locale: "ms-BN",
		name: "Malay, Brunei",
		country: "Brunei",
		countryCode: "bn",
		hex: "#FCE300",
		rgb: [252, 227, 0],
		color: 16573184
	},
	{
		locale: "ml-IN",
		name: "Malayalam",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "mt-MT",
		name: "Maltese",
		country: "Malta",
		countryCode: "mt",
		hex: "#C01B22",
		rgb: [192, 27, 34],
		color: 12589858
	},
	{
		locale: "gv-IM",
		name: "Manx",
		country: "United Kingdom",
		countryCode: "gb",
		region: "Isle of Man",
		regionCode: "im",
		hex: "#CF142B",
		rgb: [207, 20, 43],
		color: 13571115
	},
	{
		locale: "mi-NZ",
		name: "Maori",
		country: "New Zealand",
		countryCode: "nz",
		hex: "#000000",
		rgb: [0, 0, 0],
		color: 0
	},
	{
		locale: "arn-CL",
		name: "Mapudungun",
		country: "Chile",
		countryCode: "cl",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "mr-IN",
		name: "Marathi",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "mh-MH",
		name: "Marshallese",
		country: "Marshall Islands",
		countryCode: "mh",
		hex: "#003087",
		rgb: [0, 48, 135],
		color: 12423
	},
	{
		locale: "moh-CA",
		name: "Mohawk",
		country: "Canada",
		countryCode: "ca",
		hex: "#D0021B",
		rgb: [208, 2, 27],
		color: 13632027
	},
	{
		locale: "mn-MN",
		name: "Mongolian",
		country: "Mongolia",
		countryCode: "mn",
		hex: "#DA2032",
		rgb: [218, 32, 50],
		color: 14295090
	},
	{
		locale: "sr-Cyrl-ME",
		name: "Montenegrin (Cyrillic)",
		country: "Montenegro",
		countryCode: "me",
		hex: "#C40308",
		rgb: [196, 3, 8],
		color: 12845832
	},
	{
		locale: "me-ME",
		name: "Montenegrin (Latin)",
		country: "Montenegro",
		countryCode: "me",
		hex: "#C40308",
		rgb: [196, 3, 8],
		color: 12845832
	},
	{
		locale: "mos-MOS",
		name: "Mossi",
		country: "Burkina Faso",
		countryCode: "bf",
		hex: "#009E49",
		rgb: [0, 158, 73],
		color: 40521
	},
	{
		locale: "na-NR",
		name: "Nauru",
		country: "Nauru",
		countryCode: "nr",
		hex: "#012169",
		rgb: [1, 33, 105],
		color: 74089
	},
	{
		locale: "ng-NA",
		name: "Ndonga",
		country: "Namibia",
		countryCode: "na",
		hex: "#C8102E",
		rgb: [200, 16, 46],
		color: 13111342
	},
	{
		locale: "ne-NP",
		name: "Nepali",
		country: "Nepal",
		countryCode: "np",
		hex: "#DC143C",
		rgb: [220, 20, 60],
		color: 14423100
	},
	{
		locale: "ne-IN",
		name: "Nepali, India",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "pcm-NG",
		name: "Nigerian Pidgin",
		country: "Nigeria",
		countryCode: "ng",
		hex: "#008753",
		rgb: [0, 135, 83],
		color: 34643
	},
	{
		locale: "se-NO",
		name: "Northern Sami",
		country: "Norway",
		countryCode: "no",
		hex: "#144997",
		rgb: [20, 73, 151],
		color: 1329559
	},
	{
		locale: "ns-ZA",
		name: "Northern Sotho",
		country: "South Africa",
		countryCode: "za",
		hex: "#FFB81C",
		rgb: [255, 182, 18],
		color: 16758290
	},
	{
		locale: "no-NO",
		name: "Norwegian",
		country: "Norway",
		countryCode: "no",
		hex: "#BA0C2F",
		rgb: [186, 12, 47],
		color: 12192815
	},
	{
		locale: "nb-NO",
		name: "Norwegian Bokmal",
		country: "Norway",
		countryCode: "no",
		hex: "#BA0C2F",
		rgb: [186, 12, 47],
		color: 12192815
	},
	{
		locale: "nn-NO",
		name: "Norwegian Nynorsk",
		country: "Norway",
		countryCode: "no",
		hex: "#BA0C2F",
		rgb: [186, 12, 47],
		color: 12192815
	},
	{
		locale: "oc-FR",
		name: "Occitan",
		country: "France",
		countryCode: "fr",
		region: "Occitanie",
		regionCode: "oc",
		hex: "#C40026",
		rgb: [196, 0, 38],
		color: 12845094
	},
	{
		locale: "or-IN",
		name: "Odia",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "oj-CA",
		name: "Ojibwe",
		country: "Canada",
		countryCode: "ca",
		region: "Ojibwewaki",
		regionCode: "oj",
		hex: "#000000",
		rgb: [0, 0, 0],
		color: 0
	},
	{
		locale: "om-ET",
		name: "Oromo",
		country: "Ethiopia",
		countryCode: "et",
		hex: "#009A44",
		rgb: [0, 154, 68],
		color: 39492
	},
	{
		locale: "os-SE",
		name: "Ossetian",
		country: "Russia",
		countryCode: "ru",
		region: "North Ossetia–Alania",
		regionCode: "os",
		hex: "#EF4135",
		rgb: [250, 60, 50],
		color: 16399410
	},
	{
		locale: "pi-IN",
		name: "Pali",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "pap-PAP",
		name: "Papiamento",
		country: "Aruba",
		countryCode: "aw",
		hex: "#FBE122",
		rgb: [251, 225, 34],
		color: 16507170
	},
	{
		locale: "ps-AF",
		name: "Pashto",
		country: "Afghanistan",
		countryCode: "af",
		hex: "#D32011",
		rgb: [211, 32, 17],
		color: 13836305
	},
	{
		locale: "fa-IR",
		name: "Persian",
		country: "Iran",
		countryCode: "ir",
		hex: "#DA0000",
		rgb: [218, 0, 0],
		color: 14286848
	},
	{
		locale: "en-PT",
		name: "Pirate English",
		country: "United Kingdom",
		countryCode: "gb",
		hex: "#000000",
		rgb: [0, 0, 0],
		color: 0
	},
	{
		locale: "pl-PL",
		name: "Polish",
		country: "Poland",
		countryCode: "pl",
		hex: "#D22730",
		rgb: [210, 39, 48],
		color: 13772592
	},
	{
		locale: "pt-PT",
		name: "Portuguese",
		country: "Portugal",
		countryCode: "pt",
		hex: "#FF0000",
		rgb: [255, 0, 0],
		color: 16711680
	},
	{
		locale: "pt-BR",
		name: "Portuguese, Brazilian",
		country: "Brazil",
		countryCode: "br",
		hex: "#009C3B",
		rgb: [0, 156, 59],
		color: 39995
	},
	{
		locale: "pa-IN",
		name: "Punjabi",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "pa-PK",
		name: "Punjabi, Pakistan",
		country: "Pakistan",
		countryCode: "pk",
		hex: "#00401A",
		rgb: [0, 64, 26],
		color: 16410
	},
	{
		locale: "qu-PE",
		name: "Quechua",
		country: "Peru",
		countryCode: "pe",
		hex: "#D91023",
		rgb: [217, 16, 35],
		color: 14225443
	},
	{
		locale: "qya-AA",
		name: "Quenya",
		country: "Middle-earth",
		countryCode: "aa",
		hex: "#008852",
		rgb: [0, 136, 82],
		color: 34898
	},
	{
		locale: "ro-RO",
		name: "Romanian",
		country: "Romania",
		countryCode: "ro",
		hex: "#FCD116",
		rgb: [252, 209, 22],
		color: 16568598
	},
	{
		locale: "rm-CH",
		name: "Romansh",
		country: "Switzerland",
		countryCode: "ch",
		hex: "#DA291C",
		rgb: [218, 41, 28],
		color: 14297372
	},
	{
		locale: "rn-BI",
		name: "Rundi",
		country: "Republic of Burundi",
		countryCode: "bi",
		hex: "#18B637",
		rgb: [24, 182, 55],
		color: 1619511
	},
	{
		locale: "ru-RU",
		name: "Russian",
		country: "Russia",
		countryCode: "ru",
		hex: "#DB0D20",
		rgb: [219, 13, 32],
		color: 14355744
	},
	{
		locale: "ru-BY",
		name: "Russian, Belarus",
		country: "Belarus",
		countryCode: "by",
		hex: "#CF101A",
		rgb: [207, 16, 26],
		color: 13570074
	},
	{
		locale: "ru-MD",
		name: "Russian, Moldova",
		country: "Moldova",
		countryCode: "md",
		hex: "#0046AE",
		rgb: [0, 70, 174],
		color: 18094
	},
	{
		locale: "ru-UA",
		name: "Russian, Ukraine",
		country: "Ukraine",
		countryCode: "ua",
		hex: "#FFD700",
		rgb: [255, 215, 0],
		color: 16766720
	},
	{
		locale: "ry-UA",
		name: "Rusyn",
		country: "Ukraine",
		countryCode: "ua",
		hex: "#FFD700",
		rgb: [255, 215, 0],
		color: 16766720
	},
	{
		locale: "sah-SAH",
		name: "Sakha",
		country: "Russia",
		countryCode: "ru",
		region: "Republic of Sakha (Yakutia)",
		regionCode: "sah",
		hex: "#1199FF",
		rgb: [17, 153, 255],
		color: 1153535
	},
	{
		locale: "sg-CF",
		name: "Sango",
		country: "Central African Republic",
		countryCode: "cf",
		hex: "#003082",
		rgb: [0, 48, 130],
		color: 12418
	},
	{
		locale: "sa-IN",
		name: "Sanskrit",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "sat-IN",
		name: "Santali",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "sc-IT",
		name: "Sardinian",
		country: "Italy",
		countryCode: "it",
		region: "Sardinia",
		regionCode: "sc",
		hex: "#D81921",
		rgb: [216, 25, 33],
		color: 14162209
	},
	{
		locale: "sco-GB",
		name: "Scots",
		country: "United Kingdom",
		countryCode: "gb",
		region: "Scotland",
		regionCode: "sct",
		hex: "#005EB8",
		rgb: [0, 94, 184],
		color: 24248
	},
	{
		locale: "gd-GB",
		name: "Scottish Gaelic",
		country: "United Kingdom",
		countryCode: "gb",
		region: "Scotland",
		regionCode: "sct",
		hex: "#005EB8",
		rgb: [0, 94, 184],
		color: 24248
	},
	{
		locale: "sr-SP",
		name: "Serbian (Cyrillic)",
		country: "Serbia",
		countryCode: "rs",
		hex: "#C6363C",
		rgb: [198, 54, 60],
		color: 12990012
	},
	{
		locale: "sr-CS",
		name: "Serbian (Latin)",
		country: "Serbia",
		countryCode: "rs",
		hex: "#C6363C",
		rgb: [198, 54, 60],
		color: 12990012
	},
	{
		locale: "sh-HR",
		name: "Serbo-Croatian",
		country: "Croatia",
		countryCode: "hr",
		hex: "#C8102E",
		rgb: [200, 16, 46],
		color: 13111342
	},
	{
		locale: "crs-SC",
		name: "Seychellois Creole",
		country: "Seychelles",
		countryCode: "sc",
		hex: "#D72323",
		rgb: [215, 35, 35],
		color: 14099235
	},
	{
		locale: "sn-ZW",
		name: "Shona",
		country: "Zimbabwe",
		countryCode: "zw",
		hex: "#FCE300",
		rgb: [252, 227, 0],
		color: 16573184
	},
	{
		locale: "ii-CN",
		name: "Sichuan Yi",
		country: "China",
		countryCode: "cn",
		hex: "#EE1C25",
		rgb: [238, 28, 37],
		color: 15604773
	},
	{
		locale: "sd-PK",
		name: "Sindhi",
		country: "Pakistan",
		countryCode: "pk",
		hex: "#00401A",
		rgb: [0, 64, 26],
		color: 16410
	},
	{
		locale: "si-LK",
		name: "Sinhala",
		country: "Sri Lanka",
		countryCode: "lk",
		hex: "#FFBF24",
		rgb: [255, 191, 36],
		color: 16760612
	},
	{
		locale: "sk-SK",
		name: "Slovak",
		country: "Slovakia",
		countryCode: "sk",
		hex: "#EE1620",
		rgb: [238, 22, 32],
		color: 15603232
	},
	{
		locale: "sl-SI",
		name: "Slovenian",
		country: "Slovenia",
		countryCode: "si",
		hex: "#005CE6",
		rgb: [0, 92, 230],
		color: 23782
	},
	{
		locale: "so-SO",
		name: "Somali",
		country: "Somalia",
		countryCode: "so",
		hex: "#4189DD",
		rgb: [65, 137, 221],
		color: 4295133
	},
	{
		locale: "son-ZA",
		name: "Songhay",
		country: "South Africa",
		countryCode: "za",
		hex: "#FFB81C",
		rgb: [255, 182, 18],
		color: 16758290
	},
	{
		locale: "ckb-IR",
		name: "Sorani (Kurdish)",
		country: "Iran",
		countryCode: "ir",
		region: "Kurdistan",
		regionCode: "ku",
		hex: "#278E43",
		rgb: [39, 138, 65],
		color: 2591297
	},
	{
		locale: "nr-ZA",
		name: "Southern Ndebele",
		country: "South Africa",
		countryCode: "za",
		hex: "#FFB81C",
		rgb: [255, 182, 18],
		color: 16758290
	},
	{
		locale: "sma-NO",
		name: "Southern Sami",
		country: "Norway",
		countryCode: "no",
		hex: "#BA0C2F",
		rgb: [186, 12, 47],
		color: 12192815
	},
	{
		locale: "st-ZA",
		name: "Southern Sotho",
		country: "South Africa",
		countryCode: "za",
		hex: "#FFB81C",
		rgb: [255, 182, 18],
		color: 16758290
	},
	{
		locale: "es-ES",
		name: "Spanish",
		country: "Spain",
		countryCode: "es",
		hex: "#AA151B",
		rgb: [170, 21, 27],
		color: 11146523
	},
	{
		locale: "es-EM",
		name: "Spanish (Modern)",
		country: "Spain",
		countryCode: "es",
		hex: "#AA151B",
		rgb: [170, 21, 27],
		color: 11146523
	},
	{
		locale: "es-AR",
		name: "Spanish, Argentina",
		country: "Argentina",
		countryCode: "ar",
		hex: "#6CACE4",
		rgb: [108, 172, 228],
		color: 7122148
	},
	{
		locale: "es-BO",
		name: "Spanish, Bolivia",
		country: "Bolivia",
		countryCode: "bo",
		hex: "#007A33",
		rgb: [0, 122, 51],
		color: 31283
	},
	{
		locale: "es-CL",
		name: "Spanish, Chile",
		country: "Chile",
		countryCode: "cl",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "es-CO",
		name: "Spanish, Colombia",
		country: "Colombia",
		countryCode: "co",
		hex: "#FCD116",
		rgb: [252, 209, 22],
		color: 16568598
	},
	{
		locale: "es-CR",
		name: "Spanish, Costa Rica",
		country: "Costa Rica",
		countryCode: "cr",
		hex: "#CE1126",
		rgb: [206, 17, 38],
		color: 13504806
	},
	{
		locale: "es-DO",
		name: "Spanish, Dominican Republic",
		country: "Dominican Republic",
		countryCode: "do",
		hex: "#002D62",
		rgb: [0, 45, 98],
		color: 11618
	},
	{
		locale: "es-EC",
		name: "Spanish, Ecuador",
		country: "Ecuador",
		countryCode: "ec",
		hex: "#FFD100",
		rgb: [255, 209, 0],
		color: 16765184
	},
	{
		locale: "es-SV",
		name: "Spanish, El Salvador",
		country: "El Salvador",
		countryCode: "sv",
		hex: "#0047AB",
		rgb: [0, 71, 171],
		color: 18347
	},
	{
		locale: "es-GT",
		name: "Spanish, Guatemala",
		country: "Guatemala",
		countryCode: "gt",
		hex: "#4997D0",
		rgb: [73, 151, 208],
		color: 4822992
	},
	{
		locale: "es-HN",
		name: "Spanish, Honduras",
		country: "Honduras",
		countryCode: "hn",
		hex: "#0072CE",
		rgb: [0, 114, 206],
		color: 29390
	},
	{
		locale: "es-419",
		name: "Spanish, Latin America",
		country: "Spain",
		countryCode: "es",
		hex: "#AA151B",
		rgb: [170, 21, 27],
		color: 11146523
	},
	{
		locale: "es-MX",
		name: "Spanish, Mexico",
		country: "Mexico",
		countryCode: "mx",
		hex: "#006847",
		rgb: [0, 104, 71],
		color: 26695
	},
	{
		locale: "es-NI",
		name: "Spanish, Nicaragua",
		country: "Nicaragua",
		countryCode: "ni",
		hex: "#0067C6",
		rgb: [0, 103, 198],
		color: 26566
	},
	{
		locale: "es-PA",
		name: "Spanish, Panama",
		country: "Panama",
		countryCode: "pa",
		hex: "#DA121A",
		rgb: [218, 18, 26],
		color: 14291482
	},
	{
		locale: "es-PY",
		name: "Spanish, Paraguay",
		country: "Paraguay",
		countryCode: "py",
		hex: "#D52B1E",
		rgb: [213, 43, 30],
		color: 13970206
	},
	{
		locale: "es-PE",
		name: "Spanish, Peru",
		country: "Peru",
		countryCode: "pe",
		hex: "#D91023",
		rgb: [217, 16, 35],
		color: 14225443
	},
	{
		locale: "es-PR",
		name: "Spanish, Puerto Rico",
		country: "Puerto Rico",
		countryCode: "pr",
		hex: "#E92228",
		rgb: [233, 34, 40],
		color: 15278632
	},
	{
		locale: "es-US",
		name: "Spanish, United States",
		country: "United States",
		countryCode: "us",
		hex: "#0A3161",
		rgb: [10, 49, 97],
		color: 668001
	},
	{
		locale: "es-UY",
		name: "Spanish, Uruguay",
		country: "Uruguay",
		countryCode: "uy",
		hex: "#0038A8",
		rgb: [0, 56, 168],
		color: 14504
	},
	{
		locale: "es-VE",
		name: "Spanish, Venezuela",
		country: "Venezuela",
		countryCode: "ve",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "su-ID",
		name: "Sundanese",
		country: "Indonesia",
		countryCode: "id",
		hex: "#EF3340",
		rgb: [239, 51, 64],
		color: 15676224
	},
	{
		locale: "sw",
		name: "Swahili",
		country: "Kenya",
		countryCode: "ke",
		hex: "#BB0000",
		rgb: [187, 0, 0],
		color: 12255232
	},
	{
		locale: "sw-KE",
		name: "Swahili, Kenya",
		country: "Kenya",
		countryCode: "ke",
		hex: "#BB0000",
		rgb: [187, 0, 0],
		color: 12255232
	},
	{
		locale: "sw-TZ",
		name: "Swahili, Tanzania",
		country: "Tanzania",
		countryCode: "tz",
		hex: "#00A3DD",
		rgb: [0, 163, 221],
		color: 41949
	},
	{
		locale: "ss-ZA",
		name: "Swati",
		country: "Eswatini",
		countryCode: "sz",
		hex: "#3E5EB9",
		rgb: [62, 94, 185],
		color: 4087481
	},
	{
		locale: "sv-SE",
		name: "Swedish",
		country: "Sweden",
		countryCode: "se",
		hex: "#FECC02",
		rgb: [254, 204, 2],
		color: 16698370
	},
	{
		locale: "sv-FI",
		name: "Swedish, Finland",
		country: "Finland",
		countryCode: "fi",
		hex: "#002F6C",
		rgb: [0, 47, 108],
		color: 12140
	},
	{
		locale: "syc-SY",
		name: "Syriac",
		country: "Syria",
		countryCode: "sy",
		hex: "#CE1126",
		rgb: [206, 17, 38],
		color: 13504806
	},
	{
		locale: "tl-PH",
		name: "Tagalog",
		country: "Philippines",
		countryCode: "ph",
		hex: "#0038A8",
		rgb: [0, 56, 168],
		color: 14504
	},
	{
		locale: "ty-PF",
		name: "Tahitian",
		country: "French Polynesia",
		countryCode: "pf",
		hex: "#CE1126",
		rgb: [206, 17, 38],
		color: 13504806
	},
	{
		locale: "tg-TJ",
		name: "Tajik",
		country: "Tajikistan",
		countryCode: "tj",
		hex: "#CC0000",
		rgb: [204, 0, 0],
		color: 13369344
	},
	{
		locale: "tzl-TZL",
		name: "Talossan",
		country: "Talossa",
		countryCode: "tzl",
		hex: "#707070",
		rgb: [112, 112, 112],
		color: 7368816
	},
	{
		locale: "ta-IN",
		name: "Tamil",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "tt-RU",
		name: "Tatar",
		country: "Russia",
		countryCode: "ru",
		region: "Tatarstan",
		regionCode: "ta",
		hex: "#008000",
		rgb: [0, 128, 0],
		color: 32768
	},
	{
		locale: "te-IN",
		name: "Telugu",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "kdh-KDH",
		name: "Tem (Kotokoli)",
		country: "Togo",
		countryCode: "tg",
		hex: "#006A4A",
		rgb: [0, 106, 74],
		color: 27210
	},
	{
		locale: "th-TH",
		name: "Thai",
		country: "Thailand",
		countryCode: "th",
		hex: "#00247D",
		rgb: [0, 36, 125],
		color: 9341
	},
	{
		locale: "bo-BT",
		name: "Tibetan",
		country: "Bhutan",
		countryCode: "bt",
		hex: "#29166F",
		rgb: [41, 22, 111],
		color: 2692719
	},
	{
		locale: "ti-ER",
		name: "Tigrinya",
		country: "Eritrea",
		countryCode: "er",
		hex: "#43B02A",
		rgb: [67, 176, 42],
		color: 4436010
	},
	{
		locale: "ts-ZA",
		name: "Tsonga",
		country: "South Africa",
		countryCode: "za",
		hex: "#FFB81C",
		rgb: [255, 182, 18],
		color: 16758290
	},
	{
		locale: "tn-ZA",
		name: "Tswana",
		country: "Botswana",
		countryCode: "bw",
		hex: "#ABCAE9",
		rgb: [171, 202, 233],
		color: 11258601
	},
	{
		locale: "tr-TR",
		name: "Turkish",
		country: "Turkey",
		countryCode: "tr",
		hex: "#E30A17",
		rgb: [227, 10, 23],
		color: 14879255
	},
	{
		locale: "tr-CY",
		name: "Turkish, Cyprus",
		country: "Cyprus",
		countryCode: "cy",
		hex: "#D57800",
		rgb: [213, 120, 0],
		color: 13989888
	},
	{
		locale: "tk-TM",
		name: "Turkmen",
		country: "Turkmenistan",
		countryCode: "tm",
		hex: "#009639",
		rgb: [0, 150, 57],
		color: 38457
	},
	{
		locale: "uk-UA",
		name: "Ukrainian",
		country: "Ukraine",
		countryCode: "ua",
		hex: "#FFD700",
		rgb: [255, 215, 0],
		color: 16766720
	},
	{
		locale: "hsb-DE",
		name: "Upper Sorbian",
		country: "Germany",
		countryCode: "de",
		hex: "#0C4076",
		rgb: [12, 64, 118],
		color: 802934
	},
	{
		locale: "ur-IN",
		name: "Urdu, India",
		country: "India",
		countryCode: "in",
		hex: "#FF9933",
		rgb: [255, 153, 51],
		color: 16750899
	},
	{
		locale: "ur-PK",
		name: "Urdu, Pakistan",
		country: "Pakistan",
		countryCode: "pk",
		hex: "#00401A",
		rgb: [0, 64, 26],
		color: 16410
	},
	{
		locale: "ug-CN",
		name: "Uyghur",
		country: "China",
		countryCode: "cn",
		region: "Xinjiang",
		regionCode: "ug",
		hex: "#0099FF",
		rgb: [0, 153, 255],
		color: 39423
	},
	{
		locale: "uz-UZ",
		name: "Uzbek",
		country: "Uzbekistan",
		countryCode: "uz",
		hex: "#009AB6",
		rgb: [0, 154, 182],
		color: 39606
	},
	{
		locale: "val-ES",
		name: "Valencian",
		country: "Spain",
		countryCode: "es",
		region: "Valencia",
		regionCode: "val",
		hex: "#FF0000",
		rgb: [255, 0, 0],
		color: 16711680
	},
	{
		locale: "ve-ZA",
		name: "Venda",
		country: "South Africa",
		countryCode: "za",
		hex: "#FFB81C",
		rgb: [255, 182, 18],
		color: 16758290
	},
	{
		locale: "vec-IT",
		name: "Venetian",
		country: "Italy",
		countryCode: "it",
		region: "Venice",
		regionCode: "vec",
		hex: "#980000",
		rgb: [152, 0, 0],
		color: 9961472
	},
	{
		locale: "vi-VN",
		name: "Vietnamese",
		country: "Vietnam",
		countryCode: "vn",
		hex: "#DA251D",
		rgb: [218, 37, 29],
		color: 14296349
	},
	{
		locale: "wa-BE",
		name: "Walloon",
		country: "Belgium",
		countryCode: "be",
		region: "Wallonia",
		regionCode: "wa",
		hex: "#FFFF00",
		rgb: [255, 255, 0],
		color: 16776960
	},
	{
		locale: "cy-GB",
		name: "Welsh",
		country: "United Kingdom",
		countryCode: "gb",
		region: "Wales",
		regionCode: "cy",
		hex: "#D30731",
		rgb: [211, 7, 49],
		color: 13829937
	},
	{
		locale: "wo-SN",
		name: "Wolof",
		country: "Senegal",
		countryCode: "sn",
		hex: "#009639",
		rgb: [0, 150, 57],
		color: 38457
	},
	{
		locale: "xh-ZA",
		name: "Xhosa",
		country: "South Africa",
		countryCode: "za",
		hex: "#FFB81C",
		rgb: [255, 182, 18],
		color: 16758290
	},
	{
		locale: "yi-DE",
		name: "Yiddish",
		country: "Germany",
		countryCode: "de",
		hex: "#000000",
		rgb: [0, 0, 0],
		color: 0
	},
	{
		locale: "yo-NG",
		name: "Yoruba",
		country: "Nigeria",
		countryCode: "ng",
		hex: "#008753",
		rgb: [0, 135, 83],
		color: 34643
	},
	{
		locale: "zea-ZEA",
		name: "Zeelandic",
		country: "Netherlands",
		countryCode: "nl",
		region: "Zeeland",
		regionCode: "zea",
		hex: "#123484",
		rgb: [18, 52, 132],
		color: 1193092
	},
	{
		locale: "zu-ZA",
		name: "Zulu",
		country: "South Africa",
		countryCode: "za",
		hex: "#FFB81C",
		rgb: [255, 182, 18],
		color: 16758290
	}
];

export default languages;
