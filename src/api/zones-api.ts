// @ts-ignore
import Tabletop from "tabletop";
import { TableTopResponse } from "types";

export function getTableData(): Promise<TableTopResponse> {
    return new Promise((res) => {
        const publicSpreadsheetUrl =
            "https://docs.google.com/spreadsheets/d/1WiCHITHe2RrYocz_xxnoXxwhNDIibQhoIGe6hZpNU6c/edit?usp=sharing";

        const callback = (data: TableTopResponse) => res(data);

        Tabletop.init({ key: publicSpreadsheetUrl, callback, simpleSheet: false });
    });
}
