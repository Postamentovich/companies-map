/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef } from "react";
// import belfium from "./assets/countries/netherlands.json";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { CountriesControll } from "controls/countries-controll";

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
        // window.BIG_MAP = map.current;

        // map.current.on("load", function () {
        //     map.current?.addSource("maine", {
        //         type: "geojson",
        //         // @ts-ignore
        //         data: belfium,
        //     });
        //     map.current?.addLayer({
        //         id: "maine",
        //         type: "fill",
        //         source: "maine",
        //         layout: {},
        //         paint: {
        //             "fill-color": "#088",
        //             "fill-opacity": 0.8,
        //         },
        //     });
        // });
    }, []);

    return <div id={mapElementID} />;
};
