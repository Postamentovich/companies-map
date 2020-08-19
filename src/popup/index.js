import React from "react";
import mapboxgl from "mapbox-gl";
import ReactDOMServer from "react-dom/server";
import { MapPopup } from "components/map-popup";

export default class Popup {
    constructor(map, options = {}) {
        this.map = map;
        this.layerId = options.layerId;
        this.pointsPopupTimeout = null;
        this.popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
        });
        this.handleMoveMouse = this.handleMoveMouse.bind(this);
        this.info = options.info;
    }

    setInfo(info) {
        this.info = info;
    }

    getPopupHTML() {
        return ReactDOMServer.renderToString(<MapPopup info={this.info} />);
    }

    showPopup(e, props) {
        const popupHTML = this.getPopupHTML(props);
        const lngLat = props.lng && props.lat ? [props.lng, props.lat] : e.lngLat;
        this.popup.setLngLat(lngLat).setHTML(popupHTML).addTo(this.map);
    }

    removePopup() {
        if (this.popup) this.popup.remove();
    }

    onMouseEnter(e, props) {
        if (typeof this.pointsPopupTimeout === "number") clearTimeout(this.pointsPopupTimeout);

        this.removePopup(this.map);
        this.pointsPopupTimeout = setTimeout(() => {
            this.showPopup(e, props);
        }, 250);
    }

    onMouseLeave = () => {
        if (typeof this.pointsPopupTimeout === "number") clearTimeout(this.pointsPopupTimeout);

        this.removePopup();
    };

    handleMoveMouse(e) {
        let checkLayer;

        if (Array.isArray(this.layers) && this.layers.length > 0)
            checkLayer = this.layers.find((el) => this.map.getLayer(el));
        else if (this.layerId) checkLayer = this.map.getLayer(this.layerId);

        if (checkLayer) {
            const width = 3;
            const height = 3;

            const features = this.map.queryRenderedFeatures([
                [e.point.x - width / 2, e.point.y - height / 2],
                [e.point.x + width / 2, e.point.y + height / 2],
            ]);

            if (features.length > 0) {
                let topLayer = features[0].layer.id;
                let props = features[0].properties;

                if (Array.isArray(this.layers) && this.layers.length > 0 && this.layers.includes(topLayer))
                    this.onMouseEnter(e, props);
                else if (topLayer === this.layerId) this.onMouseEnter(e, props);
                else this.onMouseLeave();
            } else this.onMouseLeave();
        } else this.onMouseLeave();
    }

    add() {
        this.map.on("mousemove", this.handleMoveMouse);
        this.map.on("mouseleave", this.onMouseLeave);
        this.map.on("mouseout", this.onMouseLeave);
    }

    remove() {
        this.map.off("mousemove", this.handleMoveMouse);
        this.map.off("mouseleave", this.onMouseLeave);
        this.map.off("mouseout", this.onMouseLeave);
        this.removePopup();
    }
}
