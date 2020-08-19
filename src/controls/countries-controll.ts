import { IControl } from "mapbox-gl";
import { zones, ZoneCode } from "../zones";
import { ZoneLayer } from "layers/country-layer";

export class CountriesControll implements IControl {
    map: mapboxgl.Map | null = null;
    container: HTMLDivElement | null = null;
    layers = new Map<ZoneCode, ZoneLayer>();
    highlightedZone: null | ZoneCode = null;

    onAdd(map: mapboxgl.Map) {
        this.map = map;
        this.container = document.createElement("div");
        map.on("load", this.init);
        return this.container;
    }

    onRemove() {
        this.container?.parentNode?.removeChild(this.container);
        this.map = null;
    }

    removeHighlightedZone = () => {
        if (this.highlightedZone) {
            const oldLayer = this.layers.get(this.highlightedZone);
            oldLayer?.removeHighLight();
        }
    };

    onMouseMove = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
        const features = this.map?.queryRenderedFeatures(e.point);
        const feature = features?.shift();
        if (!feature?.layer.id.match(/zone-layer-\w/i)) {
            this.removeHighlightedZone();
            this.highlightedZone = null;
            return;
        }
        const code = feature?.properties?.zoneCode as ZoneCode;
        if (this.highlightedZone === code) return;
        this.removeHighlightedZone();
        const layer = this.layers.get(code);
        layer?.addHighLight();
        this.highlightedZone = code;
    };

    init = () => {
        if (!this.map) return;
        zones.forEach((zone) => {
            const layer = new ZoneLayer(this.map!, zone.code);
            layer.add(zone.collection);
            this.layers.set(zone.code, layer);
        });
        this.map.on("mousemove", this.onMouseMove);
    };
}
