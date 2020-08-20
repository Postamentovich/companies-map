import React, { useMemo } from "react";
import "./index.scss";
import { Carrier } from "components/carrier";
import { ZoneCode } from "zones";
import { SpreadSheet } from "types";
import { ZoneInfo } from "components/zone-info";

const baseClass = "zone-card";

type Props = {
    zones: SpreadSheet;
    carriers: SpreadSheet;
    activeZone: ZoneCode | null;
};
export const ZoneCard: React.FC<Props> = ({ zones, carriers, activeZone }) => {
    const zone = useMemo(() => {
        return zones.find((el) => el.code === activeZone);
    }, [zones, activeZone]);

    const filteredCarriers = useMemo(() => {
        if (!zone) return [];
        const zoneValues = Object.values(zone);
        return carriers.filter((el) => {
            return zoneValues.includes(el["Carried Name"]);
        });
    }, [carriers, zone]);

    return (
        <div className={baseClass}>
            <span className={`${baseClass}__title`}>{zone ? zone["Zone name"] : "Please select zone on map"}</span>
            {activeZone && <ZoneInfo zone={zone} />}
            {activeZone && filteredCarriers.map((carrier, index) => <Carrier data={carrier} key={index} />)}
        </div>
    );
};
