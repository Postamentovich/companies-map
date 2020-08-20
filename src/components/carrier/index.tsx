import React from "react";
import cn from "classnames";
import validate from "validate.js";
import { SpreadSheetElement } from "types";
import "./index.scss";

type Props = {
    data: SpreadSheetElement;
};

const checkUrl = (value: string) => {
    const valid = validate({ website: value }, { website: { url: true } });
    return !valid;
};

const checkEmail = (value: string) => {
    return /@/.test(value);
};

const baseClass = "carrier";

export const Carrier: React.FC<Props> = ({ data }) => {
    const title = data["Carried Name"];

    return (
        <div className={baseClass}>
            <div className={`${baseClass}__title`}>{title}</div>
            {Object.keys(data).map((key, index) => {
                const value = data[key];
                if (key === "Carried Name" || !value) return null;
                const isUrl = checkUrl(value);
                const isEmail = checkEmail(value);
                const valueClass = cn(`${baseClass}__value`, {
                    [`${baseClass}__link`]: isUrl || isEmail,
                });
                return (
                    <div key={index} className={`${baseClass}__row`}>
                        <div className={`${baseClass}__key`} title={key}>
                            {key}
                        </div>
                        {isEmail ? (
                            <a className={valueClass} href={`mailto:${value}`}>
                                {value}
                            </a>
                        ) : isUrl ? (
                            <a className={valueClass} href={value} target="_blank" rel="noreferrer">
                                {value}
                            </a>
                        ) : (
                            <div className={valueClass}>{value}</div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
