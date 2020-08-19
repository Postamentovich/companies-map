/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { CountriesControll } from "controls/countries-controll";
import { ZoneCard } from "components/zone-card";
import { getTableData } from "api/zones-api";
import "mapbox-gl/dist/mapbox-gl.css";

const mapElementID = "map-element-id";
export const App: React.FC = () => {
    const map = useRef<mapboxgl.Map>();
    const [zones, setZones] = useState<Array<{ [key: string]: string }>>([]);
    const [carriers, setCarriers] = useState<Array<{ [key: string]: string }>>([]);

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN as string;
        map.current = new mapboxgl.Map({
            container: mapElementID,
            style: "mapbox://styles/mapbox/light-v10",
            center: new mapboxgl.LngLat(12.250433670745679, 48.352383758494454),
            zoom: 4,
            maxZoom: 17,
            fadeDuration: 100,
        });

        const countriesControll = new CountriesControll();

        map.current.addControl(countriesControll);
    }, []);

    useEffect(() => {
        const getData = async () => {
            try {
                const data: any = await getTableData();
                setZones(data.Zones.elements);
                setCarriers(data.Carriers.elements);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);

    return (
        <>
            <div id={mapElementID} />
            <ZoneCard zones={zones} carriers={carriers} />
        </>
    );
};
