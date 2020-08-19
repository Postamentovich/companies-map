import { IControl } from "mapbox-gl";

export class CountriesControll implements IControl {
    map: mapboxgl.Map | null = null;
    container: HTMLDivElement | null = null;

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

    init = () => {};
}
