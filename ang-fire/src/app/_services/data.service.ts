import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

    private selectedSource = new BehaviorSubject<string>('');
    selected = this.selectedSource.asObservable(); 

    public CountryList: any;
    private _list: any;

    constructor(){
        this._list = new Array;
    }

    getContinentList(){
        return [
            { "name": "Africa"},
            { "name": "Antarctica"},
            { "name": "Asia"},
            { "name": "Europe"},
            { "name": "North America"},
            { "name": "Oceania"},
            { "name": "South America"}
          ];
    }

    getCountriesWithContinent(){
        return [
            {
                "country": "Afghanistan",
                "continent": "Asia"
            },
            {
                "country": "Albania",
                "continent": "Europe"
            },
            {
                "country": "Algeria",
                "continent": "Africa"
            },
            {
                "country": "American Samoa",
                "continent": "Oceania"
            },
            {
                "country": "Andorra",
                "continent": "Europe"
            },
            {
                "country": "Angola",
                "continent": "Africa"
            },
            {
                "country": "Anguilla",
                "continent": "North America"
            },
            {
                "country": "Antarctica",
                "continent": "Antarctica"
            },
            {
                "country": "Antigua and Barbuda",
                "continent": "North America"
            },
            {
                "country": "Argentina",
                "continent": "South America"
            },
            {
                "country": "Armenia",
                "continent": "Asia"
            },
            {
                "country": "Aruba",
                "continent": "North America"
            },
            {
                "country": "Australia",
                "continent": "Oceania"
            },
            {
                "country": "Austria",
                "continent": "Europe"
            },
            {
                "country": "Azerbaijan",
                "continent": "Asia"
            },
            {
                "country": "Bahamas",
                "continent": "North America"
            },
            {
                "country": "Bahrain",
                "continent": "Asia"
            },
            {
                "country": "Bangladesh",
                "continent": "Asia"
            },
            {
                "country": "Barbados",
                "continent": "North America"
            },
            {
                "country": "Belarus",
                "continent": "Europe"
            },
            {
                "country": "Belgium",
                "continent": "Europe"
            },
            {
                "country": "Belize",
                "continent": "North America"
            },
            {
                "country": "Benin",
                "continent": "Africa"
            },
            {
                "country": "Bermuda",
                "continent": "North America"
            },
            {
                "country": "Bhutan",
                "continent": "Asia"
            },
            {
                "country": "Bolivia",
                "continent": "South America"
            },
            {
                "country": "Bosnia and Herzegovina",
                "continent": "Europe"
            },
            {
                "country": "Botswana",
                "continent": "Africa"
            },
            {
                "country": "Bouvet Island",
                "continent": "Antarctica"
            },
            {
                "country": "Brazil",
                "continent": "South America"
            },
            {
                "country": "British Indian Ocean Territory",
                "continent": "Africa"
            },
            {
                "country": "Brunei",
                "continent": "Asia"
            },
            {
                "country": "Bulgaria",
                "continent": "Europe"
            },
            {
                "country": "Burkina Faso",
                "continent": "Africa"
            },
            {
                "country": "Burundi",
                "continent": "Africa"
            },
            {
                "country": "Cambodia",
                "continent": "Asia"
            },
            {
                "country": "Cameroon",
                "continent": "Africa"
            },
            {
                "country": "Canada",
                "continent": "North America"
            },
            {
                "country": "Cape Verde",
                "continent": "Africa"
            },
            {
                "country": "Cayman Islands",
                "continent": "North America"
            },
            {
                "country": "Central African Republic",
                "continent": "Africa"
            },
            {
                "country": "Chad",
                "continent": "Africa"
            },
            {
                "country": "Chile",
                "continent": "South America"
            },
            {
                "country": "China",
                "continent": "Asia"
            },
            {
                "country": "Christmas Island",
                "continent": "Oceania"
            },
            {
                "country": "Cocos (Keeling) Islands",
                "continent": "Oceania"
            },
            {
                "country": "Colombia",
                "continent": "South America"
            },
            {
                "country": "Comoros",
                "continent": "Africa"
            },
            {
                "country": "Congo",
                "continent": "Africa"
            },
            {
                "country": "Cook Islands",
                "continent": "Oceania"
            },
            {
                "country": "Costa Rica",
                "continent": "North America"
            },
            {
                "country": "Croatia",
                "continent": "Europe"
            },
            {
                "country": "Cuba",
                "continent": "North America"
            },
            {
                "country": "Cyprus",
                "continent": "Asia"
            },
            {
                "country": "Czech Republic",
                "continent": "Europe"
            },
            {
                "country": "Denmark",
                "continent": "Europe"
            },
            {
                "country": "Djibouti",
                "continent": "Africa"
            },
            {
                "country": "Dominica",
                "continent": "North America"
            },
            {
                "country": "Dominican Republic",
                "continent": "North America"
            },
            {
                "country": "East Timor",
                "continent": "Asia"
            },
            {
                "country": "Ecuador",
                "continent": "South America"
            },
            {
                "country": "Egypt",
                "continent": "Africa"
            },
            {
                "country": "El Salvador",
                "continent": "North America"
            },
            {
                "country": "England",
                "continent": "Europe"
            },
            {
                "country": "Equatorial Guinea",
                "continent": "Africa"
            },
            {
                "country": "Eritrea",
                "continent": "Africa"
            },
            {
                "country": "Estonia",
                "continent": "Europe"
            },
            {
                "country": "Ethiopia",
                "continent": "Africa"
            },
            {
                "country": "Falkland Islands",
                "continent": "South America"
            },
            {
                "country": "Faroe Islands",
                "continent": "Europe"
            },
            {
                "country": "Fiji Islands",
                "continent": "Oceania"
            },
            {
                "country": "Finland",
                "continent": "Europe"
            },
            {
                "country": "France",
                "continent": "Europe"
            },
            {
                "country": "French Guiana",
                "continent": "South America"
            },
            {
                "country": "French Polynesia",
                "continent": "Oceania"
            },
            {
                "country": "French Southern territories",
                "continent": "Antarctica"
            },
            {
                "country": "Gabon",
                "continent": "Africa"
            },
            {
                "country": "Gambia",
                "continent": "Africa"
            },
            {
                "country": "Georgia",
                "continent": "Asia"
            },
            {
                "country": "Germany",
                "continent": "Europe"
            },
            {
                "country": "Ghana",
                "continent": "Africa"
            },
            {
                "country": "Gibraltar",
                "continent": "Europe"
            },
            {
                "country": "Greece",
                "continent": "Europe"
            },
            {
                "country": "Greenland",
                "continent": "North America"
            },
            {
                "country": "Grenada",
                "continent": "North America"
            },
            {
                "country": "Guadeloupe",
                "continent": "North America"
            },
            {
                "country": "Guam",
                "continent": "Oceania"
            },
            {
                "country": "Guatemala",
                "continent": "North America"
            },
            {
                "country": "Guinea",
                "continent": "Africa"
            },
            {
                "country": "Guinea-Bissau",
                "continent": "Africa"
            },
            {
                "country": "Guyana",
                "continent": "South America"
            },
            {
                "country": "Haiti",
                "continent": "North America"
            },
            {
                "country": "Heard Island and McDonald Islands",
                "continent": "Antarctica"
            },
            {
                "country": "Holy See (Vatican City State)",
                "continent": "Europe"
            },
            {
                "country": "Honduras",
                "continent": "North America"
            },
            {
                "country": "Hong Kong",
                "continent": "Asia"
            },
            {
                "country": "Hungary",
                "continent": "Europe"
            },
            {
                "country": "Iceland",
                "continent": "Europe"
            },
            {
                "country": "India",
                "continent": "Asia"
            },
            {
                "country": "Indonesia",
                "continent": "Asia"
            },
            {
                "country": "Iran",
                "continent": "Asia"
            },
            {
                "country": "Iraq",
                "continent": "Asia"
            },
            {
                "country": "Ireland",
                "continent": "Europe"
            },
            {
                "country": "Israel",
                "continent": "Asia"
            },
            {
                "country": "Italy",
                "continent": "Europe"
            },
            {
                "country": "Ivory Coast",
                "continent": "Africa"
            },
            {
                "country": "Jamaica",
                "continent": "North America"
            },
            {
                "country": "Japan",
                "continent": "Asia"
            },
            {
                "country": "Jordan",
                "continent": "Asia"
            },
            {
                "country": "Kazakhstan",
                "continent": "Asia"
            },
            {
                "country": "Kenya",
                "continent": "Africa"
            },
            {
                "country": "Kiribati",
                "continent": "Oceania"
            },
            {
                "country": "Kuwait",
                "continent": "Asia"
            },
            {
                "country": "Kyrgyzstan",
                "continent": "Asia"
            },
            {
                "country": "Laos",
                "continent": "Asia"
            },
            {
                "country": "Latvia",
                "continent": "Europe"
            },
            {
                "country": "Lebanon",
                "continent": "Asia"
            },
            {
                "country": "Lesotho",
                "continent": "Africa"
            },
            {
                "country": "Liberia",
                "continent": "Africa"
            },
            {
                "country": "Libyan Arab Jamahiriya",
                "continent": "Africa"
            },
            {
                "country": "Liechtenstein",
                "continent": "Europe"
            },
            {
                "country": "Lithuania",
                "continent": "Europe"
            },
            {
                "country": "Luxembourg",
                "continent": "Europe"
            },
            {
                "country": "Macao",
                "continent": "Asia"
            },
            {
                "country": "North Macedonia",
                "continent": "Europe"
            },
            {
                "country": "Madagascar",
                "continent": "Africa"
            },
            {
                "country": "Malawi",
                "continent": "Africa"
            },
            {
                "country": "Malaysia",
                "continent": "Asia"
            },
            {
                "country": "Maldives",
                "continent": "Asia"
            },
            {
                "country": "Mali",
                "continent": "Africa"
            },
            {
                "country": "Malta",
                "continent": "Europe"
            },
            {
                "country": "Marshall Islands",
                "continent": "Oceania"
            },
            {
                "country": "Martinique",
                "continent": "North America"
            },
            {
                "country": "Mauritania",
                "continent": "Africa"
            },
            {
                "country": "Mauritius",
                "continent": "Africa"
            },
            {
                "country": "Mayotte",
                "continent": "Africa"
            },
            {
                "country": "Mexico",
                "continent": "North America"
            },
            {
                "country": "Micronesia, Federated States of",
                "continent": "Oceania"
            },
            {
                "country": "Moldova",
                "continent": "Europe"
            },
            {
                "country": "Monaco",
                "continent": "Europe"
            },
            {
                "country": "Mongolia",
                "continent": "Asia"
            },
            {
                "country": "Montenegro",
                "continent": "Europe"
            },
            {
                "country": "Montserrat",
                "continent": "North America"
            },
            {
                "country": "Morocco",
                "continent": "Africa"
            },
            {
                "country": "Mozambique",
                "continent": "Africa"
            },
            {
                "country": "Myanmar",
                "continent": "Asia"
            },
            {
                "country": "Namibia",
                "continent": "Africa"
            },
            {
                "country": "Nauru",
                "continent": "Oceania"
            },
            {
                "country": "Nepal",
                "continent": "Asia"
            },
            {
                "country": "Netherlands",
                "continent": "Europe"
            },
            {
                "country": "Netherlands Antilles",
                "continent": "North America"
            },
            {
                "country": "New Caledonia",
                "continent": "Oceania"
            },
            {
                "country": "New Zealand",
                "continent": "Oceania"
            },
            {
                "country": "Nicaragua",
                "continent": "North America"
            },
            {
                "country": "Niger",
                "continent": "Africa"
            },
            {
                "country": "Nigeria",
                "continent": "Africa"
            },
            {
                "country": "Niue",
                "continent": "Oceania"
            },
            {
                "country": "Norfolk Island",
                "continent": "Oceania"
            },
            {
                "country": "North Korea",
                "continent": "Asia"
            },
            {
                "country": "Northern Ireland",
                "continent": "Europe"
            },
            {
                "country": "Northern Mariana Islands",
                "continent": "Oceania"
            },
            {
                "country": "Norway",
                "continent": "Europe"
            },
            {
                "country": "Oman",
                "continent": "Asia"
            },
            {
                "country": "Pakistan",
                "continent": "Asia"
            },
            {
                "country": "Palau",
                "continent": "Oceania"
            },
            {
                "country": "Palestine",
                "continent": "Asia"
            },
            {
                "country": "Panama",
                "continent": "North America"
            },
            {
                "country": "Papua New Guinea",
                "continent": "Oceania"
            },
            {
                "country": "Paraguay",
                "continent": "South America"
            },
            {
                "country": "Peru",
                "continent": "South America"
            },
            {
                "country": "Philippines",
                "continent": "Asia"
            },
            {
                "country": "Pitcairn",
                "continent": "Oceania"
            },
            {
                "country": "Poland",
                "continent": "Europe"
            },
            {
                "country": "Portugal",
                "continent": "Europe"
            },
            {
                "country": "Puerto Rico",
                "continent": "North America"
            },
            {
                "country": "Qatar",
                "continent": "Asia"
            },
            {
                "country": "Reunion",
                "continent": "Africa"
            },
            {
                "country": "Romania",
                "continent": "Europe"
            },
            {
                "country": "Russian Federation",
                "continent": "Europe"
            },
            {
                "country": "Rwanda",
                "continent": "Africa"
            },
            {
                "country": "Saint Helena",
                "continent": "Africa"
            },
            {
                "country": "Saint Kitts and Nevis",
                "continent": "North America"
            },
            {
                "country": "Saint Lucia",
                "continent": "North America"
            },
            {
                "country": "Saint Pierre and Miquelon",
                "continent": "North America"
            },
            {
                "country": "Saint Vincent and the Grenadines",
                "continent": "North America"
            },
            {
                "country": "Samoa",
                "continent": "Oceania"
            },
            {
                "country": "San Marino",
                "continent": "Europe"
            },
            {
                "country": "Sao Tome and Principe",
                "continent": "Africa"
            },
            {
                "country": "Saudi Arabia",
                "continent": "Asia"
            },
            {
                "country": "Scotland",
                "continent": "Europe"
            },
            {
                "country": "Senegal",
                "continent": "Africa"
            },
            {
                "country": "Serbia",
                "continent": "Europe"
            },
            {
                "country": "Seychelles",
                "continent": "Africa"
            },
            {
                "country": "Sierra Leone",
                "continent": "Africa"
            },
            {
                "country": "Singapore",
                "continent": "Asia"
            },
            {
                "country": "Slovakia",
                "continent": "Europe"
            },
            {
                "country": "Slovenia",
                "continent": "Europe"
            },
            {
                "country": "Solomon Islands",
                "continent": "Oceania"
            },
            {
                "country": "Somalia",
                "continent": "Africa"
            },
            {
                "country": "South Africa",
                "continent": "Africa"
            },
            {
                "country": "South Georgia and the South Sandwich Islands",
                "continent": "Antarctica"
            },
            {
                "country": "South Korea",
                "continent": "Asia"
            },
            {
                "country": "South Sudan",
                "continent": "Africa"
            },
            {
                "country": "Spain",
                "continent": "Europe"
            },
            {
                "country": "Sri Lanka",
                "continent": "Asia"
            },
            {
                "country": "Sudan",
                "continent": "Africa"
            },
            {
                "country": "Suriname",
                "continent": "South America"
            },
            {
                "country": "Svalbard and Jan Mayen",
                "continent": "Europe"
            },
            {
                "country": "Swaziland",
                "continent": "Africa"
            },
            {
                "country": "Sweden",
                "continent": "Europe"
            },
            {
                "country": "Switzerland",
                "continent": "Europe"
            },
            {
                "country": "Syria",
                "continent": "Asia"
            },
            {
                "country": "Tajikistan",
                "continent": "Asia"
            },
            {
                "country": "Tanzania",
                "continent": "Africa"
            },
            {
                "country": "Thailand",
                "continent": "Asia"
            },
            {
                "country": "The Democratic Republic of Congo",
                "continent": "Africa"
            },
            {
                "country": "Togo",
                "continent": "Africa"
            },
            {
                "country": "Tokelau",
                "continent": "Oceania"
            },
            {
                "country": "Tonga",
                "continent": "Oceania"
            },
            {
                "country": "Trinidad and Tobago",
                "continent": "North America"
            },
            {
                "country": "Tunisia",
                "continent": "Africa"
            },
            {
                "country": "Turkey",
                "continent": "Asia"
            },
            {
                "country": "Turkmenistan",
                "continent": "Asia"
            },
            {
                "country": "Turks and Caicos Islands",
                "continent": "North America"
            },
            {
                "country": "Tuvalu",
                "continent": "Oceania"
            },
            {
                "country": "Uganda",
                "continent": "Africa"
            },
            {
                "country": "Ukraine",
                "continent": "Europe"
            },
            {
                "country": "United Arab Emirates",
                "continent": "Asia"
            },
            {
                "country": "United Kingdom",
                "continent": "Europe"
            },
            {
                "country": "United States",
                "continent": "North America"
            },
            {
                "country": "United States Minor Outlying Islands",
                "continent": "Oceania"
            },
            {
                "country": "Uruguay",
                "continent": "South America"
            },
            {
                "country": "Uzbekistan",
                "continent": "Asia"
            },
            {
                "country": "Vanuatu",
                "continent": "Oceania"
            },
            {
                "country": "Venezuela",
                "continent": "South America"
            },
            {
                "country": "Vietnam",
                "continent": "Asia"
            },
            {
                "country": "Virgin Islands, British",
                "continent": "North America"
            },
            {
                "country": "Virgin Islands, U.S.",
                "continent": "North America"
            },
            {
                "country": "Wales",
                "continent": "Europe"
            },
            {
                "country": "Wallis and Futuna",
                "continent": "Oceania"
            },
            {
                "country": "Western Sahara",
                "continent": "Africa"
            },
            {
                "country": "Yemen",
                "continent": "Asia"
            },
            {
                "country": "Zambia",
                "continent": "Africa"
            },
            {
                "country": "Zimbabwe",
                "continent": "Africa"
            }
        ];
    }

    getCountriesWithCode(){
        return [
            {
                "country": "Afghanistan",
                "abbreviation": "AF"
            },
            {
                "country": "Albania",
                "abbreviation": "AL"
            },
            {
                "country": "Algeria",
                "abbreviation": "DZ"
            },
            {
                "country": "American Samoa",
                "abbreviation": "AS"
            },
            {
                "country": "Andorra",
                "abbreviation": "AD"
            },
            {
                "country": "Angola",
                "abbreviation": "AO"
            },
            {
                "country": "Anguilla",
                "abbreviation": "AI"
            },
            {
                "country": "Antarctica",
                "abbreviation": "AQ"
            },
            {
                "country": "Antigua and Barbuda",
                "abbreviation": "AG"
            },
            {
                "country": "Argentina",
                "abbreviation": "AR"
            },
            {
                "country": "Armenia",
                "abbreviation": "AM"
            },
            {
                "country": "Aruba",
                "abbreviation": "AW"
            },
            {
                "country": "Australia",
                "abbreviation": "AU"
            },
            {
                "country": "Austria",
                "abbreviation": "AT"
            },
            {
                "country": "Azerbaijan",
                "abbreviation": "AZ"
            },
            {
                "country": "Bahamas",
                "abbreviation": "BS"
            },
            {
                "country": "Bahrain",
                "abbreviation": "BH"
            },
            {
                "country": "Bangladesh",
                "abbreviation": "BD"
            },
            {
                "country": "Barbados",
                "abbreviation": "BB"
            },
            {
                "country": "Belarus",
                "abbreviation": "BY"
            },
            {
                "country": "Belgium",
                "abbreviation": "BE"
            },
            {
                "country": "Belize",
                "abbreviation": "BZ"
            },
            {
                "country": "Benin",
                "abbreviation": "BJ"
            },
            {
                "country": "Bermuda",
                "abbreviation": "BM"
            },
            {
                "country": "Bhutan",
                "abbreviation": "BT"
            },
            {
                "country": "Bolivia",
                "abbreviation": "BO"
            },
            {
                "country": "Bosnia and Herzegovina",
                "abbreviation": "BA"
            },
            {
                "country": "Botswana",
                "abbreviation": "BW"
            },
            {
                "country": "Bouvet Island",
                "abbreviation": "BV"
            },
            {
                "country": "Brazil",
                "abbreviation": "BR"
            },
            {
                "country": "British Indian Ocean Territory",
                "abbreviation": "IO"
            },
            {
                "country": "Brunei",
                "abbreviation": "BN"
            },
            {
                "country": "Bulgaria",
                "abbreviation": "BG"
            },
            {
                "country": "Burkina Faso",
                "abbreviation": "BF"
            },
            {
                "country": "Burundi",
                "abbreviation": "BI"
            },
            {
                "country": "Cambodia",
                "abbreviation": "KH"
            },
            {
                "country": "Cameroon",
                "abbreviation": "CM"
            },
            {
                "country": "Canada",
                "abbreviation": "CA"
            },
            {
                "country": "Cape Verde",
                "abbreviation": "CV"
            },
            {
                "country": "Cayman Islands",
                "abbreviation": "KY"
            },
            {
                "country": "Central African Republic",
                "abbreviation": "CF"
            },
            {
                "country": "Chad",
                "abbreviation": "TD"
            },
            {
                "country": "Chile",
                "abbreviation": "CL"
            },
            {
                "country": "China",
                "abbreviation": "CN"
            },
            {
                "country": "Christmas Island",
                "abbreviation": "CX"
            },
            {
                "country": "Cocos (Keeling) Islands",
                "abbreviation": "CC"
            },
            {
                "country": "Colombia",
                "abbreviation": "CO"
            },
            {
                "country": "Comoros",
                "abbreviation": "KM"
            },
            {
                "country": "Congo",
                "abbreviation": "CG"
            },
            {
                "country": "Cook Islands",
                "abbreviation": "CK"
            },
            {
                "country": "Costa Rica",
                "abbreviation": "CR"
            },
            {
                "country": "Croatia",
                "abbreviation": "HR"
            },
            {
                "country": "Cuba",
                "abbreviation": "CU"
            },
            {
                "country": "Cyprus",
                "abbreviation": "CY"
            },
            {
                "country": "Czech Republic",
                "abbreviation": "CZ"
            },
            {
                "country": "Denmark",
                "abbreviation": "DK"
            },
            {
                "country": "Djibouti",
                "abbreviation": "DJ"
            },
            {
                "country": "Dominica",
                "abbreviation": "DM"
            },
            {
                "country": "Dominican Republic",
                "abbreviation": "DO"
            },
            {
                "country": "East Timor",
                "abbreviation": "TP"
            },
            {
                "country": "Ecuador",
                "abbreviation": "EC"
            },
            {
                "country": "Egypt",
                "abbreviation": "EG"
            },
            {
                "country": "El Salvador",
                "abbreviation": "SV"
            },
            {
                "country": "Equatorial Guinea",
                "abbreviation": "GQ"
            },
            {
                "country": "Eritrea",
                "abbreviation": "ER"
            },
            {
                "country": "Estonia",
                "abbreviation": "EE"
            },
            {
                "country": "Ethiopia",
                "abbreviation": "ET"
            },
            {
                "country": "Falkland Islands",
                "abbreviation": "FK"
            },
            {
                "country": "Faroe Islands",
                "abbreviation": "FO"
            },
            {
                "country": "Fiji Islands",
                "abbreviation": "FJ"
            },
            {
                "country": "Finland",
                "abbreviation": "FI"
            },
            {
                "country": "France",
                "abbreviation": "FR"
            },
            {
                "country": "French Guiana",
                "abbreviation": "GF"
            },
            {
                "country": "French Polynesia",
                "abbreviation": "PF"
            },
            {
                "country": "French Southern territories",
                "abbreviation": "TF"
            },
            {
                "country": "Gabon",
                "abbreviation": "GA"
            },
            {
                "country": "Gambia",
                "abbreviation": "GM"
            },
            {
                "country": "Georgia",
                "abbreviation": "GE"
            },
            {
                "country": "Germany",
                "abbreviation": "DE"
            },
            {
                "country": "Ghana",
                "abbreviation": "GH"
            },
            {
                "country": "Gibraltar",
                "abbreviation": "GI"
            },
            {
                "country": "Greece",
                "abbreviation": "GR"
            },
            {
                "country": "Greenland",
                "abbreviation": "GL"
            },
            {
                "country": "Grenada",
                "abbreviation": "GD"
            },
            {
                "country": "Guadeloupe",
                "abbreviation": "GP"
            },
            {
                "country": "Guam",
                "abbreviation": "GU"
            },
            {
                "country": "Guatemala",
                "abbreviation": "GT"
            },
            {
                "country": "Guernsey",
                "abbreviation": "GG"
            },
            {
                "country": "Guinea",
                "abbreviation": "GN"
            },
            {
                "country": "Guinea-Bissau",
                "abbreviation": "GW"
            },
            {
                "country": "Guyana",
                "abbreviation": "GY"
            },
            {
                "country": "Haiti",
                "abbreviation": "HT"
            },
            {
                "country": "Heard Island and McDonald Islands",
                "abbreviation": "HM"
            },
            {
                "country": "Holy See (Vatican City State)",
                "abbreviation": "VA"
            },
            {
                "country": "Honduras",
                "abbreviation": "HN"
            },
            {
                "country": "Hong Kong",
                "abbreviation": "HK"
            },
            {
                "country": "Hungary",
                "abbreviation": "HU"
            },
            {
                "country": "Iceland",
                "abbreviation": "IS"
            },
            {
                "country": "India",
                "abbreviation": "IN"
            },
            {
                "country": "Indonesia",
                "abbreviation": "ID"
            },
            {
                "country": "Iran",
                "abbreviation": "IR"
            },
            {
                "country": "Iraq",
                "abbreviation": "IQ"
            },
            {
                "country": "Ireland",
                "abbreviation": "IE"
            },
            {
                "country": "Isle of Man",
                "abbreviation": "IM"
            },
            {
                "country": "Israel",
                "abbreviation": "IL"
            },
            {
                "country": "Italy",
                "abbreviation": "IT"
            },
            {
                "country": "Ivory Coast",
                "abbreviation": "CI"
            },
            {
                "country": "Jamaica",
                "abbreviation": "JM"
            },
            {
                "country": "Japan",
                "abbreviation": "JP"
            },
            {
                "country": "Jersey",
                "abbreviation": "JE"
            },
            {
                "country": "Jordan",
                "abbreviation": "JO"
            },
            {
                "country": "Kazakhstan",
                "abbreviation": "KZ"
            },
            {
                "country": "Kenya",
                "abbreviation": "KE"
            },
            {
                "country": "Kiribati",
                "abbreviation": "KI"
            },
            {
                "country": "Kuwait",
                "abbreviation": "KW"
            },
            {
                "country": "Kyrgyzstan",
                "abbreviation": "KG"
            },
            {
                "country": "Laos",
                "abbreviation": "LA"
            },
            {
                "country": "Latvia",
                "abbreviation": "LV"
            },
            {
                "country": "Lebanon",
                "abbreviation": "LB"
            },
            {
                "country": "Lesotho",
                "abbreviation": "LS"
            },
            {
                "country": "Liberia",
                "abbreviation": "LR"
            },
            {
                "country": "Libyan Arab Jamahiriya",
                "abbreviation": "LY"
            },
            {
                "country": "Liechtenstein",
                "abbreviation": "LI"
            },
            {
                "country": "Lithuania",
                "abbreviation": "LT"
            },
            {
                "country": "Luxembourg",
                "abbreviation": "LU"
            },
            {
                "country": "Macao",
                "abbreviation": "MO"
            },
            {
                "country": "North Macedonia",
                "abbreviation": "MK"
            },
            {
                "country": "Madagascar",
                "abbreviation": "MG"
            },
            {
                "country": "Malawi",
                "abbreviation": "MW"
            },
            {
                "country": "Malaysia",
                "abbreviation": "MY"
            },
            {
                "country": "Maldives",
                "abbreviation": "MV"
            },
            {
                "country": "Mali",
                "abbreviation": "ML"
            },
            {
                "country": "Malta",
                "abbreviation": "MT"
            },
            {
                "country": "Marshall Islands",
                "abbreviation": "MH"
            },
            {
                "country": "Martinique",
                "abbreviation": "MQ"
            },
            {
                "country": "Mauritania",
                "abbreviation": "MR"
            },
            {
                "country": "Mauritius",
                "abbreviation": "MU"
            },
            {
                "country": "Mayotte",
                "abbreviation": "YT"
            },
            {
                "country": "Mexico",
                "abbreviation": "MX"
            },
            {
                "country": "Micronesia, Federated States of",
                "abbreviation": "FM"
            },
            {
                "country": "Moldova",
                "abbreviation": "MD"
            },
            {
                "country": "Monaco",
                "abbreviation": "MC"
            },
            {
                "country": "Mongolia",
                "abbreviation": "MN"
            },
            {
                "country": "Montenegro",
                "abbreviation": "ME"
            },
            {
                "country": "Montserrat",
                "abbreviation": "MS"
            },
            {
                "country": "Morocco",
                "abbreviation": "MA"
            },
            {
                "country": "Mozambique",
                "abbreviation": "MZ"
            },
            {
                "country": "Myanmar",
                "abbreviation": "MM"
            },
            {
                "country": "Namibia",
                "abbreviation": "NA"
            },
            {
                "country": "Nauru",
                "abbreviation": "NR"
            },
            {
                "country": "Nepal",
                "abbreviation": "NP"
            },
            {
                "country": "Netherlands",
                "abbreviation": "NL"
            },
            {
                "country": "Netherlands Antilles",
                "abbreviation": "AN"
            },
            {
                "country": "New Caledonia",
                "abbreviation": "NC"
            },
            {
                "country": "New Zealand",
                "abbreviation": "NZ"
            },
            {
                "country": "Nicaragua",
                "abbreviation": "NI"
            },
            {
                "country": "Niger",
                "abbreviation": "NE"
            },
            {
                "country": "Nigeria",
                "abbreviation": "NG"
            },
            {
                "country": "Niue",
                "abbreviation": "NU"
            },
            {
                "country": "Norfolk Island",
                "abbreviation": "NF"
            },
            {
                "country": "North Korea",
                "abbreviation": "KP"
            },
            {
                "country": "Northern Ireland",
                "abbreviation": "GB"
            },
            {
                "country": "Northern Mariana Islands",
                "abbreviation": "MP"
            },
            {
                "country": "Norway",
                "abbreviation": "NO"
            },
            {
                "country": "Oman",
                "abbreviation": "OM"
            },
            {
                "country": "Pakistan",
                "abbreviation": "PK"
            },
            {
                "country": "Palau",
                "abbreviation": "PW"
            },
            {
                "country": "Palestine",
                "abbreviation": "PS"
            },
            {
                "country": "Panama",
                "abbreviation": "PA"
            },
            {
                "country": "Papua New Guinea",
                "abbreviation": "PG"
            },
            {
                "country": "Paraguay",
                "abbreviation": "PY"
            },
            {
                "country": "Peru",
                "abbreviation": "PE"
            },
            {
                "country": "Philippines",
                "abbreviation": "PH"
            },
            {
                "country": "Pitcairn",
                "abbreviation": "PN"
            },
            {
                "country": "Poland",
                "abbreviation": "PL"
            },
            {
                "country": "Portugal",
                "abbreviation": "PT"
            },
            {
                "country": "Puerto Rico",
                "abbreviation": "PR"
            },
            {
                "country": "Qatar",
                "abbreviation": "QA"
            },
            {
                "country": "Reunion",
                "abbreviation": "RE"
            },
            {
                "country": "Romania",
                "abbreviation": "RO"
            },
            {
                "country": "Russian Federation",
                "abbreviation": "RU"
            },
            {
                "country": "Rwanda",
                "abbreviation": "RW"
            },
            {
                "country": "Saint Helena",
                "abbreviation": "SH"
            },
            {
                "country": "Saint Kitts and Nevis",
                "abbreviation": "KN"
            },
            {
                "country": "Saint Lucia",
                "abbreviation": "LC"
            },
            {
                "country": "Saint Pierre and Miquelon",
                "abbreviation": "PM"
            },
            {
                "country": "Saint Vincent and the Grenadines",
                "abbreviation": "VC"
            },
            {
                "country": "Samoa",
                "abbreviation": "WS"
            },
            {
                "country": "San Marino",
                "abbreviation": "SM"
            },
            {
                "country": "Sao Tome and Principe",
                "abbreviation": "ST"
            },
            {
                "country": "Saudi Arabia",
                "abbreviation": "SA"
            },
            {
                "country": "Senegal",
                "abbreviation": "SN"
            },
            {
                "country": "Serbia",
                "abbreviation": "RS"
            },
            {
                "country": "Seychelles",
                "abbreviation": "SC"
            },
            {
                "country": "Sierra Leone",
                "abbreviation": "SL"
            },
            {
                "country": "Singapore",
                "abbreviation": "SG"
            },
            {
                "country": "Slovakia",
                "abbreviation": "SK"
            },
            {
                "country": "Slovenia",
                "abbreviation": "SI"
            },
            {
                "country": "Solomon Islands",
                "abbreviation": "SB"
            },
            {
                "country": "Somalia",
                "abbreviation": "SO"
            },
            {
                "country": "South Africa",
                "abbreviation": "ZA"
            },
            {
                "country": "South Georgia and the South Sandwich Islands",
                "abbreviation": "GS"
            },
            {
                "country": "South Korea",
                "abbreviation": "KR"
            },
            {
                "country": "South Sudan",
                "abbreviation": "SS"
            },
            {
                "country": "Spain",
                "abbreviation": "ES"
            },
            {
                "country": "Sri Lanka",
                "abbreviation": "LK"
            },
            {
                "country": "Sudan",
                "abbreviation": "SD"
            },
            {
                "country": "Suriname",
                "abbreviation": "SR"
            },
            {
                "country": "Svalbard and Jan Mayen",
                "abbreviation": "SJ"
            },
            {
                "country": "Swaziland",
                "abbreviation": "SZ"
            },
            {
                "country": "Sweden",
                "abbreviation": "SE"
            },
            {
                "country": "Switzerland",
                "abbreviation": "CH"
            },
            {
                "country": "Syria",
                "abbreviation": "SY"
            },
            {
                "country": "Tajikistan",
                "abbreviation": "TJ"
            },
            {
                "country": "Tanzania",
                "abbreviation": "TZ"
            },
            {
                "country": "Thailand",
                "abbreviation": "TH"
            },
            {
                "country": "The Democratic Republic of Congo",
                "abbreviation": "CD"
            },
            {
                "country": "Timor-Leste",
                "abbreviation": "TL"
            },
            {
                "country": "Togo",
                "abbreviation": "TG"
            },
            {
                "country": "Tokelau",
                "abbreviation": "TK"
            },
            {
                "country": "Tonga",
                "abbreviation": "TO"
            },
            {
                "country": "Trinidad and Tobago",
                "abbreviation": "TT"
            },
            {
                "country": "Tunisia",
                "abbreviation": "TN"
            },
            {
                "country": "Turkey",
                "abbreviation": "TR"
            },
            {
                "country": "Turkmenistan",
                "abbreviation": "TM"
            },
            {
                "country": "Turks and Caicos Islands",
                "abbreviation": "TC"
            },
            {
                "country": "Tuvalu",
                "abbreviation": "TV"
            },
            {
                "country": "Uganda",
                "abbreviation": "UG"
            },
            {
                "country": "Ukraine",
                "abbreviation": "UA"
            },
            {
                "country": "United Arab Emirates",
                "abbreviation": "AE"
            },
            {
                "country": "United Kingdom",
                "abbreviation": "UK"
            },
            {
                "country": "United States",
                "abbreviation": "US"
            },
            {
                "country": "United States Minor Outlying Islands",
                "abbreviation": "UM"
            },
            {
                "country": "Uruguay",
                "abbreviation": "UY"
            },
            {
                "country": "Uzbekistan",
                "abbreviation": "UZ"
            },
            {
                "country": "Vanuatu",
                "abbreviation": "VU"
            },
            {
                "country": "Venezuela",
                "abbreviation": "VE"
            },
            {
                "country": "Vietnam",
                "abbreviation": "VN"
            },
            {
                "country": "Virgin Islands, British",
                "abbreviation": "VG"
            },
            {
                "country": "Virgin Islands, U.S.",
                "abbreviation": "VI"
            },
            {
                "country": "Wallis and Futuna",
                "abbreviation": "WF"
            },
            {
                "country": "Western Sahara",
                "abbreviation": "EH"
            },
            {
                "country": "Yemen",
                "abbreviation": "YE"
            },
            {
                "country": "Zambia",
                "abbreviation": "ZM"
            },
            {
                "country": "Zimbabwe",
                "abbreviation": "ZW"
            }
        ];
    }

    changeSelected(s: string){
        this.selectedSource.next(s)
    }

    getList(){
        return JSON.parse(localStorage.getItem('countryList'));
    }

    setList(arr){
        localStorage.removeItem('countryList')
        localStorage.setItem('countryList', JSON.stringify(arr));
    }

    isExist(country){
        return this._list.some(function (el) {
            return el.country === country
        })
    };

    getByCode(code){
        this._list = this.getList();
        return this._list.filter(function(c){
            return c.country === code
        })
    }

    removeItem(country){
        this._list = this.getList();
        let el: any;

        if(this.isExist(country)){
            for(el in this._list){
                if(this._list[el].country === country){
                    this._list.splice(el,1)
                }
            }
        }

        this.setList(this._list)
    }

    updateNote(country,note){
        this._list = this.getList();
        let el: any;

        if(this.isExist(country)){
            for(el in this._list){
                if(this._list[el].country === country){
                    this._list[el].note = this._list[el].note + note;
                }
            }
        } else {
            const tempObj = {country: country,name: name, ithalat: false, ihracat: false,note: note};
            
            this._list.push(tempObj);
        }

        this.setList(this._list)
    }

    updateList(country: string,name: string,type: string,addFlag: boolean){
        this._list = this.getList();
        let el: any;

        if(this.isExist(country)){
            for(el in this._list){
                if(this._list[el].country === country){
                    if(type === "ith"){
                        this._list[el].ithalat = addFlag;
                    }else{
                        this._list[el].ihracat = addFlag;
                    }
                }
            }
        } else {
            const tempObj = {country: country,name: name, ithalat: false, ihracat: false, note: ''};
            
            if(type === "ith"){
                tempObj.ithalat = addFlag;
            }else{
                tempObj.ihracat = addFlag;
            }
            this._list.push(tempObj);
        }

        this.setList(this._list)
    }

}