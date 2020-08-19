import React from "react";
import "./index.scss";
import { Carrier } from "components/carrier";

const baseClass = "zone-card";

type Props = {
    zones: Array<{ [key: string]: string }>;
    carriers: Array<{ [key: string]: string }>;
};
export const ZoneCard: React.FC<Props> = ({ zones, carriers }) => {
    return (
        <div className={baseClass}>
            ZoneCard
            {carriers.map((carrier, index) => (
                <Carrier data={carrier} key={index} />
            ))}
        </div>
    );
};
