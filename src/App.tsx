/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { CountriesControll } from "controls/countries-controll";
import { ZoneCard } from "components/zone-card";
import { getTableData } from "api/zones-api";
import { ZoneCode } from "zones";
import { SpreadSheet } from "types";
import "mapbox-gl/dist/mapbox-gl.css";

const mapElementID = "map-element-id";
export const App: React.FC = () => {
    const map = useRef<mapboxgl.Map>();
    const controll = useRef<CountriesControll>();
    const [zones, setZones] = useState<SpreadSheet>([]);
    const [carriers, setCarriers] = useState<SpreadSheet>([]);
    const [activeZone, setActiveZone] = useState<ZoneCode | null>(null);

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN as string;
        map.current = new mapboxgl.Map({
            container: mapElementID,
            style: "mapbox://styles/mapbox/light-v10",
            center: new mapboxgl.LngLat(12.250433670745679, 48.352383758494454),
            zoom: 4,
            maxZoom: 17,
        });
        controll.current = new CountriesControll(setActiveZone);
        map.current.addControl(controll.current);
    }, []);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getTableData();
                setZones(data.Zones.elements);
                controll.current?.setZones(data.Zones.elements);
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
            <ZoneCard zones={zones} carriers={carriers} activeZone={activeZone} />
        </>
    );
};
