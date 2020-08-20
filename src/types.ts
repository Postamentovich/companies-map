export type SpreadSheetElement = {
    code: string;
    [key: string]: string;
};
export type SpreadSheet = Array<SpreadSheetElement>;
export type TableTopResponse = {
    [key: string]: {
        elements: SpreadSheet;
    };
};
