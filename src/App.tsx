import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
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

        // map.current.on("load", function () {
        //     // Add source for admin-1 Boundaries
        //     map.current?.addSource("admin-1", {
        //         type: "vector",
        //         url: "mapbox://mapbox.boundaries-adm1-v3",
        //     });

        //     // Add a layer with boundary polygons
        //     map.current?.addLayer(
        //         {
        //             id: "admin-1-fill",
        //             type: "fill",
        //             source: "admin-1",
        //             "source-layer": "boundaries_admin_1",
        //             paint: {
        //                 "fill-color": "#CCCCCC",
        //             },
        //         },
        //         // This final argument indicates that we want to add the Boundaries layer
        //         // before the `waterway-label` layer that is in the map from the Mapbox
        //         // Light style. This ensures the admin polygons will be rendered on top of
        //         // the
        //         "waterway-label",
        //     );
        // });
    }, []);

    return <div id={mapElementID} />;
};
