import React from "react";
import "./index.scss";

type Props = {
    info: { [key: string]: string };
};
const baseClass = "map-popup";

export const MapPopup: React.FC<Props> = ({ info }) => {
    console.log(info);
    return (
        <div className={baseClass}>
            <span className={`${baseClass}__title`}>{info["Zone name"]}</span>
            {Object.keys(info).map((key, index) => {
                const value = info[key];
                if (key === "code" || key === "Zone name" || !value) return;
                return (
                    <div key={index} className={`${baseClass}__row`}>
                        <div key={index} className={`${baseClass}__name`}>
                            {key}
                        </div>
                        <div key={index} className={`${baseClass}__value`}>
                            {value}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
