type typeOptions = {
    [key: string]: string | {};
};

const PLANET_TYPE: typeOptions = {
    "0": { type: "CAPITAL" },
    "1": { type: "MILITARY" },
    "2": { type: "AGRARIAN" },
    "3": { type: "INDUSTRIAL" },
    "4": { type: "MIXED" },
    "5": { type: "LEISURE" },
}

const PLANET_POP: typeOptions = {
    "0": { description: "None", pop: "0" },
    "1": { description: "Few", pop: "1+" },
    "2": { description: "Hundreds", pop: "100+" },
    "3": { description: "Thousands", pop: "1,000+" },
    "4": { description: "Tens of thousands", pop: "10,000+" },
    "5": { description: "Hundreds of thousands", pop: "100,000+" },
    "6": { description: "Millions", pop: "1,000,000+" },
    "7": { description: "Tens of millions", pop: "10,000,000+" },
    "8": { description: "Hundreds of millions", pop: "100,000,000+" },
    "9": { description: "Billions", pop: "1,000,000,000+" },
    "A": { description: "Tens of billions", pop: "10,000,000,000+" },
    "B": { description: "Hundreds of billions", pop: "100,000,000,000+" },
    "C": { description: "Trillions", pop: "1,000,000,000,000+" },
}

const PLANET_OWNER: typeOptions = {
    "0": { type: "INDEPENDENT" },
    "1": { type: "EMPIRE" },
    "2": { type: "JOTUN" },
    "3": { type: "OLYMPUS" },
}

const PLANET_SIZE: typeOptions = {
    "0": { diameter: "Less than 1000 km", example: "Asteroid, orbital complex", gravity: "Negligible" },
    "1": { diameter: "1,600 km", example: "Triton", gravity: "0.05" },
    "2": { diameter: "3,200 km", example: "Luna, Europa", gravity: "0.15" },
    "3": { diameter: "4,800 km", example: "Mercury, Ganymede", gravity: "0.25" },
    "4": { diameter: "6,400 km", example: "", gravity: "0.35" },
    "5": { diameter: "8,000 km", example: "Mars", gravity: "0.45" },
    "6": { diameter: "9,600 km", example: "", gravity: "0.7" },
    "7": { diameter: "11,200 km", example: "", gravity: "0.9" },
    "8": { diameter: "12,800 km", example: "Earth", gravity: "1.0" },
    "9": { diameter: "14,400 km", example: "", gravity: "1.25" },
    "A": { diameter: "16,000 km", example: "", gravity: "1.4" },
}

const PLANET_ATMOSPHERE: typeOptions = {
    "0": { composition: "None", example: "Moon", pressure: "0.00", gear: "Vacc Suit" },
    "1": { composition: "Trace", example: "Mars", pressure: "0.001 to 0.09", gear: "Vacc Suit" },
    "2": { composition: "Very Thin, Tainted", example: "", pressure: "0.1 to 0.42", gear: "Respirator, Filter" },
    "3": { composition: "Very Thin", example: "", pressure: "0.1 to 0.42", gear: "Respirator" },
    "4": { composition: "Thin, Tainted", example: "", pressure: "0.43 to 0.7", gear: "Filter" },
    "5": { composition: "Thin", example: "", pressure: "0.43 to 0.7", gear: "" },
    "6": { composition: "Standard", example: "Earth", pressure: "0.71-1.49", gear: "" },
    "7": { composition: "Standard, Tainted", example: "", pressure: "0.71-1.49", gear: "Filter" },
    "8": { composition: "Dense", example: "", pressure: "1.5 to 2.49", gear: "" },
    "9": { composition: "Dense, tainted", example: "", pressure: "1.5 to 2.49", gear: "Filter" },
    "A": { composition: "Exotic", example: "", pressure: "Varies", gear: "Air Supply" },
    "B": { composition: "Corrosive", example: "Venus", pressure: "Varies", gear: "Vacc Suit" },
    "C": { composition: "Insidious", example: "", pressure: "Varies", gear: "Vacc Suit" },
    "D": { composition: "Very Dense", example: "", pressure: "2.5+", gear: "" },
    "E": { composition: "Low", example: "", pressure: "0.5 or less", gear: "" },
    "F": { composition: "Unusual", example: "", pressure: "Varies", gear: "Varies" },
}

const PLANET_HYDRO: typeOptions = {
    "0": { hydro: "0 % -5    %", description: "Desert world" },
    "1": { hydro: "6 % -15   %", description: "Dry world" },
    "2": { hydro: "16 % -25  %", description: "A few small seas." },
    "3": { hydro: "26 % -35  %", description: "Small seas and oceans." },
    "4": { hydro: "36 % -45  %", description: "Wet world" },
    "5": { hydro: "46 % -55  %", description: "Large oceans" },
    "6": { hydro: "56 % -65  %", description: "Large oceans" },
    "7": { hydro: "66 % -75  %", description: "Earth - like world" },
    "8": { hydro: "76 % -85  %", description: "Water world" },
    "9": { hydro: "86 % -95  %", description: "Only a few small islands and archipelagos." },
    "A": { hydro: "96% - 100 %", description: "Almost entirely water." },
}

const PLANET_SPACEPORT: typeOptions = {
    "0": { type: "A", quality: "Excellent", cost: "1d x Cr1000", fuel: "Refined", facilities: "Shipyard (all), Repair", bases: "Naval 8+, Scout 10+, Research 8+, TAS" },
    "1": { type: "B", quality: "Good", cost: "1d x Cr500", fuel: "Refined", facilities: "Shipyard (spacecraft), Repair", bases: "Naval 8+, Scout 8+, Research 10+, TAS" },
    "2": { type: "C", quality: "Routine", cost: "1d x Cr100", fuel: "Unrefined", facilities: "Shipyard (small craft), Repair", bases: "Naval 8+, Scout 10+, Research 10+, TAS" },
    "3": { type: "D", quality: "Poor", cost: "1d X Cr10", fuel: "Unrefined", facilities: "Limited Repair", bases: "Scout 7+" },
    "4": { type: "E", quality: "Frontier", cost: "0", fuel: "None", facilities: "None", bases: "None" },
    "5": { type: "X", quality: "No Starport", cost: "0", fuel: "None", facilities: "None", bases: "None" },
}

const PLANET_TEMPERATURE: typeOptions = {
    "0": { type: "Frozen", avgTemp: "-51º or less", description: "Frozen world. No liquid water, very dry atmosphere." },
    "1": { type: "Cold", avgTemp: "-51º to 0º", description: "Icy world. Little liquid water, extensive ice caps, few clouds." },
    "2": { type: "Temperate", avgTemp: "0º-30º", description: "Temperate world. Earth- like.Liquid & vaporized water are common, moderate ice caps." },
    "3": { type: "Hot", avgTemp: "31º-80º", description: "Hot world. Small or no ice caps, little liquid water.Most water in the form of clouds." },
    "4": { type: "Boiling", avgTemp: "81º+", description: "Boiling world. No ice caps, little liquid water." },
}

const PLANET_GOVERNMENT: typeOptions = {
    "0": { type: "None", description: "No government structure. In many cases, family bonds predominate", examples: "Family, Clan, Anarchy", commonContraband: "None" },
    "1": { type: "Company/Corporation", description: "Ruling functions are assumed by a company managerial elite, and most citizenry are company employees or dependents", examples: "Corporate outpost, asteroid mine, feudal domain", commonContraband: "Weapons, Drugs, Travellers" },
    "2": { type: "Participating Democracy", description: "Ruling functions are reached by the advice and consent of the citizenry directly", examples: "Collective, tribal council, commlinked consensus", commonContraband: "Drugs" },
    "3": { type: "Self-Perpetuating Oligarchy", description: "Ruling functions are performed by a restricted minority, with little or no input from the mass of citizenry", examples: "Plutocracy, hereditary ruling caste", commonContraband: "Technology, Weapons, Travellers" },
    "4": { type: "Representative Democracy", description: "Ruling functions are performed by elected representatives", examples: "Republic, democracy", commonContraband: "Drugs, Weapons, Psionics" },
    "5": { type: "Feudal Technocracy", description: "Ruling functions are performed by specific individuals for persons who agree to be ruled by them.Relationships are based on the performance of technical activities which are mutually beneficial", examples: "Those with access to higher technology tend to have higher social status", commonContraband: "Technology, Weapons, Computers" },
    "6": { type: "Captive Government", description: "Ruling functions are performed by an imposed leadership answerable to an outside group", examples: "A colony or conquered area", commonContraband: "Weapons, Technology, Travellers" },
    "7": { type: "Balkanisation", description: "No central authority exists; rival governments complete for control.Law level refers to the government nearest the starport", examples: "Multiple governments, civil war", commonContraband: "Varies" },
    "8": { type: "Civil Service Bureaucracy", description: "Ruling functions are performed by government agencies employing individuals selected for their expertise", examples: "Technocracy, Communism", commonContraband: "Drugs, Weapons," },
    "9": { type: "Impersonal Bureaucracy", description: "Ruling functions are performed by agencies which have become insulated from the governed citizens", examples: "Entrenched castes of bureaucrats, decaying empire", commonContraband: "Technology, Weapons, Drugs, Travellers, Psionics" },
    "A": { type: "Charismatic Dictator", description: "Ruling functions are performed by agencies directed by a single leader who enjoys the overwhelming confidence of the citizens", examples: "Revolutionary leader, messiah, emperor", commonContraband: "None" },
    "B": { type: "Non-Charismatic Leader", description: "A previous charismatic dictator has been replaced by a leader through normal channels", examples: "Military dictatorship, hereditary kingship", commonContraband: "Weapons, Technology, Computers" },
    "C": { type: "Charismatic Oligarchy", description: "Ruling functions are performed by a select group of members of an organization or class which enjoys the overwhelming confidence of the citizenry", examples: "Junta, revolutionary council", commonContraband: "Weapons" },
    "D": { type: "Religious Dictatorship", description: "Ruling functions are performed by a religious organization without regard to the specific individual needs of the citizenry", examples: "Cult, transcendent philosophy, psionic group mind", commonContraband: "Varies" },
    "E": { type: "Religious Autocracy", description: "Government by a single religious leader having absolute power over the citizenry", examples: "Messiah", commonContraband: "Varies" },
    "F": { type: "Totalitarian Oligarchy", description: "Government by an all-powerful minority which maintains absolute control through widespread coercion and oppresion", examples: "World church, Ruthless corporation", commonContraband: "Varies" },
}

const planetType = (type: string | number) => {
    return PLANET_TYPE[`${type}`];
}

const planetPop = (type: string | number) => {
    return PLANET_POP[`${type}`];
}

const planetOwner = (type: string | number) => {
    return PLANET_OWNER[`${type}`];
}

const planetSize = (type: string | number) => {
    return PLANET_SIZE[`${type}`];
}

const planetAtmosphere = (type: string | number) => {
    return PLANET_ATMOSPHERE[`${type}`];
}

const planetHydro = (type: string | number) => {
    return PLANET_HYDRO[`${type}`];
}

const planetSpaceport = (type: string | number) => {
    return PLANET_SPACEPORT[`${type}`];
}

const planetTemperature = (type: string | number) => {
    return PLANET_TEMPERATURE[`${type}`];
}

const planetGovernment = (type: string | number) => {
    return PLANET_GOVERNMENT[`${type}`];
}

export {
    planetType,
    planetPop,
    planetOwner,
    planetSize,
    planetAtmosphere,
    planetHydro,
    planetSpaceport,
    planetTemperature,
    planetGovernment,
    PLANET_TYPE,
    PLANET_POP,
    PLANET_OWNER,
    PLANET_SIZE,
    PLANET_ATMOSPHERE,
    PLANET_HYDRO,
    PLANET_SPACEPORT,
    PLANET_TEMPERATURE,
    PLANET_GOVERNMENT,
}