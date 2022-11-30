import {Item} from "./item";
import{ResortData} from "./resorts"
export interface BillData {

    id: number;
    totalCost: number;
    creationData: string;
    curort: ResortData;
    itemList: [Item]




}


