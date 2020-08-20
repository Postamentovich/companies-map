import React from "react";
import { SpreadSheetElement } from "types";
import "./index.scss";

type Props = {
    zone?: SpreadSheetElement;
};
const baseClass = "zone-info";

export const ZoneInfo: React.FC<Props> = ({ zone }) => {
    if (!zone) return null;
    return (
        <div className={baseClass}>
            {Object.keys(zone).map((key, index) => {
                const value = zone[key];
                if (key === "code" || key === "Zone name" || !value) return null;
                return (
                    <div key={index} className={`${baseClass}__row`}>
                        <div className={`${baseClass}__name`} title={key}>
                            {key}
                        </div>
                        <div className={`${baseClass}__value`}>{value}</div>
                    </div>
                );
            })}
        </div>
    );
};
