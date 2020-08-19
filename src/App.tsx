/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { CountriesControll } from "controls/countries-controll";
import "mapbox-gl/dist/mapbox-gl.css";

const mapElementID = "map-element-id";
export const App: React.FC = () => {
    const map = useRef<mapboxgl.Map>();

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN as string;

        map.current = new mapboxgl.Map({
            container: mapElementID,
            style: "mapbox://styles/mapbox/light-v10",
            center: new mapboxgl.LngLat(12.250433670745679, 48.352383758494454),
            zoom: 4,
        });

        const countriesControll = new CountriesControll();

        map.current.addControl(countriesControll);

        // @ts-ignore
        window.BIG_MAP = map.current;
    }, []);

    return <div id={mapElementID} />;
};
