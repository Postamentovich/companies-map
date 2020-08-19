import * as turf from "@turf/turf";
import Popup from "popup";

export class ZoneLayer {
    sourceId: string;
    layerId: string;
    isHighlighted = false;
    popup: Popup;
    info: { [key: string]: string } | null = null;

    constructor(private map: mapboxgl.Map, private zone: string) {
        this.sourceId = `zone-source-${zone}`;
        this.layerId = `zone-layer-${zone}`;
        this.popup = new Popup(this.map, { layerId: this.layerId });
    }

    add(data: turf.helpers.FeatureCollection) {
        this.addSource(data);
        this.addLayer();
        this.popup.add();
    }

    addHighlight = () => {
        if (this.isHighlighted) return;
        this.map.setPaintProperty(this.layerId, "fill-opacity", 0.5);
        this.map.getCanvas().style.cursor = "pointer";
        this.isHighlighted = true;
    };

    setInfo = (info: { [key: string]: string }) => {
        this.info = info;
    };

    removeHighLight = () => {
        if (!this.isHighlighted) return;
        this.map.setPaintProperty(this.layerId, "fill-opacity", 0);
        this.map.getCanvas().style.cursor = "";
        this.isHighlighted = false;
    };

    addSource(data: turf.helpers.FeatureCollection) {
        const source = this.getSource();
        if (source) {
            // @ts-ignore
            source.setData(data);
        } else {
            // @ts-ignore
            this.map.addSource(this.sourceId, { type: "geojson", data });
        }
    }

    addLayer() {
        if (this.gerLayer()) return;

        this.map.addLayer({
            id: this.layerId,
            type: "fill",
            source: this.sourceId,
            paint: {
                "fill-color": "#088",
                "fill-opacity": 0,
            },
        });
    }

    remove() {
        if (this.gerLayer()) this.map.removeLayer(this.layerId);
        if (this.getSource()) this.map.removeSource(this.sourceId);
    }

    getSource(): mapboxgl.AnySourceData {
        return this.map.getSource(this.sourceId);
    }

    gerLayer() {
        return this.map.getLayer(this.layerId);
    }
}
