export type Country = {
    name: Name;
    tld?: (string)[] | null;
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital?: (string)[] | null;
    altSpellings?: (string)[] | null;
    region: string;
    subregion: string;
    languages: Languages;
    translations: Translations;
    latlng?: (number)[] | null;
    landlocked: boolean;
    borders?: (string)[] | null;
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini: Gini;
    fifa: string;
    car: Car;
    timezones?: (string)[] | null;
    continents?: (string)[] | null;
    flags: FlagsOrCoatOfArms;
    coatOfArms: FlagsOrCoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;
  }
  export type Name = {
    common: string;
    official: string;
    nativeName: NativeName;
  }
  export type NativeName = {
    spa: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
  }
  export type SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho = {
    official: string;
    common: string;
  }
  export type Currencies = {
    DOP: DOP;
  }
  export type DOP = {
    name: string;
    symbol: string;
  }
  export type Idd = {
    root: string;
    suffixes?: (string)[] | null;
  }
  export type Languages = {
    spa: string;
  }
  export type Translations = {
    ara: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    ces: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    cym: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    deu: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    est: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    fin: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    fra: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    hrv: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    hun: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    ita: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    jpn: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    kor: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    nld: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    per: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    pol: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    por: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    rus: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    slk: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    spa: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    swe: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    urd: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
    zho: SpaOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSweOrUrdOrZho;
  }
  export type Demonyms = {
    eng: EngOrFra;
    fra: EngOrFra;
  }
  export type EngOrFra = {
    f: string;
    m: string;
  }
  export type Maps = {
    googleMaps: string;
    openStreetMaps: string;
  }
  export type Gini = {
    2019: number;
  }
  export type Car = {
    signs?: (string)[] | null;
    side: string;
  }
  export type FlagsOrCoatOfArms = {
    png: string;
    svg: string;
  }
  export type CapitalInfo = {
    latlng?: (number)[] | null;
  }
  export type PostalCode = {
    format: string;
    regex: string;
  }
  