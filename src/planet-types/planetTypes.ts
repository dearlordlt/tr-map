type typeOptions = {
    [key: string]: string | {};
};

const PLANET_TYPE: typeOptions = {
    "0": "CAPITAL",
    "1": "MILITARY",
    "2": "AGRARIAN",
    "3": "INDUSTRIAL",
    "4": "MIXED",
    "5": "LEISURE",
}

const PLANET_POP: typeOptions = {
    "0": { inhabitants: "None", pop: "0" },
    "1": { inhabitants: "Few", pop: "1+" },
    "2": { inhabitants: "Hundreds", pop: "100+" },
    "3": { inhabitants: "Thousands", pop: "1,000+" },
    "4": { inhabitants: "Tens of thousands", pop: "10,000+" },
    "5": { inhabitants: "Hundreds of thousands", pop: "100,000+" },
    "6": { inhabitants: "Millions", pop: "1,000,000+" },
    "7": { inhabitants: "Tens of millions", pop: "10,000,000+" },
    "8": { inhabitants: "Hundreds of millions", pop: "100,000,000+" },
    "9": { inhabitants: "Billions", pop: "1,000,000,000+" },
    "A": { inhabitants: "Tens of billions", pop: "10,000,000,000+" },
    "B": { inhabitants: "Hundreds of billions", pop: "100,000,000,000+" },
    "C": { inhabitants: "Trillions", pop: "1,000,000,000,000+" },
}

const PLANET_OWNER: typeOptions = {
    "0": "INDEPENDENT",
    "1": "EMPIRE",
    "2": "JOTUN",
    "3": "OLYMPUS",
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
    "A": { quality: "Excellent", cost: "1d x Cr1000", fuel: "Refined", facilities: "Shipyard (all), Repair", bases: "Naval 8+, Scout 10+, Research 8+, TAS" },
    "B": { quality: "Good", cost: "1d x Cr500", fuel: "Refined", facilities: "Shipyard (spacecraft), Repair", bases: "Naval 8+, Scout 8+, Research 10+, TAS" },
    "C": { quality: "Routine", cost: "1d x Cr100", fuel: "Unrefined", facilities: "Shipyard (small craft), Repair", bases: "Naval 8+, Scout 10+, Research 10+, TAS" },
    "D": { quality: "Poor", cost: "1d X Cr10", fuel: "Unrefined", facilities: "Limited Repair", bases: "Scout 7+" },
    "E": { quality: "Frontier", cost: "0", fuel: "None", facilities: "None", bases: "None" },
    "X": { quality: "No Starport", cost: "0", fuel: "None", facilities: "None", bases: "None" },
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

export {
    planetType,
    planetPop,
    planetOwner,
    planetSize,
    planetAtmosphere,
    planetHydro,
    planetSpaceport,
    PLANET_TYPE,
    PLANET_POP,
    PLANET_OWNER,
    PLANET_SIZE,
    PLANET_ATMOSPHERE,
    PLANET_HYDRO,
    PLANET_SPACEPORT,
}