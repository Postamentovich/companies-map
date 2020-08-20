// @ts-ignore
import Tabletop from "tabletop";
import { TableTopResponse } from "types";

export function getTableData(): Promise<TableTopResponse> {
    return new Promise((res) => {
        const callback = (data: TableTopResponse) => res(data);
        Tabletop.init({ key: process.env.REACT_APP_GOOGLE_SHEET_URL, callback, simpleSheet: false });
    });
}
