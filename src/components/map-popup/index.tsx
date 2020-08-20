import React from "react";
import "./index.scss";
import { ZoneInfo } from "components/zone-info";
import { SpreadSheetElement } from "types";

type Props = {
    info: SpreadSheetElement;
};
const baseClass = "map-popup";

export const MapPopup: React.FC<Props> = ({ info }) => {
    if (!info) return null;
    return (
        <div className={baseClass}>
            <span className={`${baseClass}__title`}>{info["Zone name"]}</span>
            <ZoneInfo zone={info} />
        </div>
    );
};
