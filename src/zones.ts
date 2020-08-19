import * as turf from "@turf/turf";
import belgium from "./assets/countries/belgium.json";
import netherlands from "./assets/countries/netherlands.json";
import luxembourg from "./assets/countries/luxembourg.json";
import germany from "./assets/countries/germany.json";
import france from "./assets/countries/france.json";
import uk from "./assets/countries/united_kingdom.json";
import ireland from "./assets/countries/ireland.json";
import austria from "./assets/countries/austria.json";
import switzerland from "./assets/countries/switzerland.json";
import portugal from "./assets/countries/portugal.json";
import spain from "./assets/countries/spain.json";
import italy from "./assets/countries/italy.json";
import belarus from "./assets/countries/belarus.json";
import bosnia from "./assets/countries/bosnia_and_herzegovina.json";
import bulgaria from "./assets/countries/bulgaria.json";
import croatia from "./assets/countries/croatia.json";
import czech from "./assets/countries/czech.json";
import denmark from "./assets/countries/denmark.json";
import estonia from "./assets/countries/estonia.json";
import finland from "./assets/countries/finland.json";
import hungary from "./assets/countries/hungary.json";
import latvia from "./assets/countries/latvia.json";
import lithuania from "./assets/countries/lithuania.json";
import moldova from "./assets/countries/moldova.json";
import montenegro from "./assets/countries/montenegro.json";
import macedonia from "./assets/countries/north_macedonia.json";
import norway from "./assets/countries/norway.json";
import poland from "./assets/countries/poland.json";
import romania from "./assets/countries/romania.json";
import serbia from "./assets/countries/serbia.json";
import slovenia from "./assets/countries/slovenia.json";
import sweden from "./assets/countries/sweden.json";
import ukraine from "./assets/countries/ukraine.json";
import albania from "./assets/countries/albania.json";

export enum ZoneCode {
    Benelux = "Benelux",
    Germany = "Germany",
    France = "France",
    UKIreland = "UKIreland",
    Austria = "Austria",
    Switzerland = "Switzerland",
    PortugalSpain = "PortugalSpain",
    Italy = "Italy",
    EasternEuropeBalkan = "EasternEuropeBalkan",
    ScandinaviaBaltics = "ScandinaviaBaltics",
}

type Zone = {
    name: string;
    code: ZoneCode;
    collection: turf.helpers.FeatureCollection;
};

export const zones: Zone[] = [];

const createZone = (name: string, code: ZoneCode, collection: turf.helpers.FeatureCollection) => {
    zones.push({ name, code, collection });
};

const createCollection = (zones: any[], zoneCode: ZoneCode) => {
    return turf.featureCollection(zones.map((zone) => ({ ...zone, properties: { zoneCode } })));
};

createZone(
    "Benelux",
    ZoneCode.Benelux,
    createCollection([...belgium, ...netherlands, ...luxembourg], ZoneCode.Benelux),
);
createZone("Germany", ZoneCode.Germany, createCollection(germany, ZoneCode.Germany));
createZone("France", ZoneCode.France, createCollection(france, ZoneCode.France));
createZone("UK/Ireland", ZoneCode.UKIreland, createCollection([...uk, ...ireland], ZoneCode.UKIreland));
createZone("Austria", ZoneCode.Austria, createCollection(austria, ZoneCode.Austria));
createZone("Switzerland", ZoneCode.Switzerland, createCollection(switzerland, ZoneCode.Switzerland));
createZone("Portugal/Spain", ZoneCode.PortugalSpain, createCollection([...portugal, ...spain], ZoneCode.PortugalSpain));
createZone("Italy", ZoneCode.Italy, createCollection(italy, ZoneCode.Italy));
createZone(
    "Eastern Europe & Balkan",
    ZoneCode.EasternEuropeBalkan,
    createCollection(
        [
            ...slovenia,
            ...hungary,
            ...romania,
            ...croatia,
            ...bosnia,
            ...montenegro,
            ...albania,
            ...macedonia,
            ...bulgaria,
            ...serbia,
            ...poland,
            ...czech,
            ...moldova,
            ...belarus,
            ...ukraine,
        ],
        ZoneCode.EasternEuropeBalkan,
    ),
);
createZone(
    "Scandinavia & Baltics",
    ZoneCode.ScandinaviaBaltics,
    createCollection(
        [...sweden, ...norway, ...finland, ...denmark, ...estonia, ...latvia, ...lithuania],
        ZoneCode.ScandinaviaBaltics,
    ),
);
