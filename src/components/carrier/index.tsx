import React from "react";

type Props = {
    data: { [key: string]: string };
};

export const Carrier: React.FC<Props> = ({ data }) => {
    return (
        <div>
            {Object.keys(data).map((key, index) => {
                return (
                    <div key={index}>
                        {key} {data[key]}
                    </div>
                );
            })}
        </div>
    );
};
