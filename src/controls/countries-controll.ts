import { IControl } from "mapbox-gl";
import { zones, ZoneCode } from "../zones";
import { ZoneLayer } from "layers/country-layer";

export class CountriesControll implements IControl {
    map: mapboxgl.Map | null = null;
    container: HTMLDivElement | null = null;
    layers = new Map<ZoneCode, ZoneLayer>();
    highlightedZone: null | ZoneCode = null;
    zones: Array<{ [key: string]: string }> = [];

    constructor(private setActiveZone: (zone: ZoneCode | null) => void) {}

    public setZones(zones: Array<{ [key: string]: string }>) {
        this.zones = zones;
        this.zones.forEach((zone) => {
            const layer = this.layers.get(zone.code as ZoneCode);
            layer?.setInfo(zone);
        });
    }

    public onAdd(map: mapboxgl.Map) {
        this.map = map;
        this.container = document.createElement("div");
        map.on("load", this.init);
        return this.container;
    }

    public onRemove() {
        this.container?.parentNode?.removeChild(this.container);
        this.map?.off("mousemove", this.onMouseMove);
        this.map?.off("click", this.onMouseClick);
        this.map?.off("mouseleave", this.onLeaveZone);
        this.map?.off("mouseout", this.onLeaveZone);
        this.map = null;
    }

    private onLeaveZone = () => {
        if (this.highlightedZone) {
            const oldLayer = this.layers.get(this.highlightedZone);
            oldLayer?.removeHighLight();
            this.highlightedZone = null;
        }
    };

    private onEnterZone = (code: ZoneCode) => {
        const layer = this.layers.get(code);
        layer?.addHighlight();
        this.highlightedZone = code;
    };

    private onClickZone = (code: ZoneCode) => {
        this.setActiveZone(code);
    };

    private onMouseMove = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
        const feature = this.getZoneFeature(e);
        if (!feature) return this.onLeaveZone();
        const code = feature?.properties?.zoneCode as ZoneCode;
        if (this.highlightedZone === code) return;
        this.onLeaveZone();
        this.onEnterZone(code);
    };

    private onMouseClick = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
        this.onMouseMove(e);
        const feature = this.getZoneFeature(e);
        if (!feature) return;
        const code = feature?.properties?.zoneCode as ZoneCode;
        this.onClickZone(code);
    };

    private getZoneFeature = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
        const features = this.map?.queryRenderedFeatures(e.point);
        const feature = features?.shift();
        if (feature?.layer.id.match(/zone-layer-\w/i)) return feature;
    };

    private init = () => {
        if (!this.map) return;
        zones.forEach((zone) => {
            const info = this.zones.find((el) => el.code === zone.code);
            const layer = new ZoneLayer(this.map!, zone.code, info);
            layer.add(zone.collection);
            this.layers.set(zone.code, layer);
        });
        this.map.on("mousemove", this.onMouseMove);
        this.map.on("click", this.onMouseClick);
        this.map.on("mouseleave", this.onLeaveZone);
        this.map.on("mouseout", this.onLeaveZone);
    };
}
