var regions = {
	"Africa" : ["bi", "km", "dj", "er", "et", "ke", "mg", "mw", "mu", "mz", "re", "rw", "sc", "so", "ug", "tz", "zm", "zw", "bj", "bf", "cv", "ci", "gm", "gh", "gn", "gw", "lr", "ml", "mr", "ne", "ng", "sn", "sl", "tg", "bw", "ls", "na", "za", "sz", "dz", "eg", "ly", "ma", "sd", "tn", "ao", "cm", "cf", "td", "cg", "cd", "gq", "ga", "st"],
	"Asia" :["cn", "kp", "jp", "ru", "mn", "kr", "af", "bd", "bt", "in", "ir", "kz", "kg", "mv", "np", "pk", "lk", "tj", "tm", "uz", "bn", "kh", "tl", "id", "la", "my", "mm", "ph", "th", "vn", "az", "am", "cy", "ge", "iq", "il", "jo", "kw", "lb", "om", "qa", "sa", "sy", "tr", "ae", "ye"],
	"Europe" :["by", "bg", "cz", "hu", "pl", "md", "ro", "sk", "ua", "at", "be", "fr", "de", "nl", "ch", "al", "ba", "hr", "gr", "it", "mt", "pt", "si", "es", "mk", "rs", "dk", "ee", "fi", "is", "ie", "lv", "lt", "no", "se", "gb"],
	"southAmerica" :["ar", "bo", "br", "cl", "co", "ec", "fk", "gy", "gf", "pe", "py", "sr", "uy", "ve"],
	"northAmerica" :["ca", "gl", "us", "bz", "cr", "sv", "gt", "hn", "mx", "ni", "pa", "bs", "dm", "ag", "ds", "bb", "cu", "dn", "do", "gd", "ht", "jm", "kn", "lc", "tt"],
	"australia" :["au", "nz", "fj", "sb", "pg", "vu", "nc", "pf", "tv"]
};

function getCountriesInRegion(cc) {
	for (var region in regions)
	{
		for(var country in regions[region])
		{
			if (cc == country)
				return regions[region];
		}
	}
}

Channel Islands (UK)
Denmark
Estonia
Faeroe Islands (DK)
Finland
Iceland
Ireland
Isle of Man (UK)
Latvia
Lithuania
Norway
Sweden
United Kingdom
