// @ts-ignore
import Tabletop from "tabletop";

export function getTableData() {
    return new Promise((res) => {
        const publicSpreadsheetUrl =
            "https://docs.google.com/spreadsheets/d/1WiCHITHe2RrYocz_xxnoXxwhNDIibQhoIGe6hZpNU6c/edit#gid=1139380687";

        Tabletop.init({ key: publicSpreadsheetUrl, callback: showInfo, simpleSheet: false });

        function showInfo(data: unknown) {
            res(data);
        }
    });
}
