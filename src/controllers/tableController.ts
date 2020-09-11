import thunk, {ThunkAction} from "redux-thunk";
import request, {Response} from "superagent";
import {setTableData, useLoader} from "../reduxActions/table";
import {getHost} from "../utils/commonUtils";
import {Action, Dispatch} from "redux";
import {RootReducer} from "../reduxStore";

const getTableData = (): ThunkAction<void, RootReducer, unknown, Action> => dispatch => {
    dispatch(useLoader(true));
    return request.get(getHost() + "tableData")
        .then((res: any): TableDto[] => res.json())
        .then((data: TableDto[]):void => {
            dispatch(setTableData(data));
            dispatch(useLoader(false));
        })
        .catch((err: any) => {
            console.error(err.stack);
            dispatch(useLoader(false));
        })
}


export const TableController = {
    get: getTableData,
};

// export class TableController {
//
//     public static getTableData = (dispatch: Dispatch) => (state: any, getProps: () => any):Promise<void> => {
//         console.log("start to get table data...");
//         dispatch(useLoader(true));
//         return request.get(getHost() + "/tableData")
//             .then((res: any): TableDto[] => res.json())
//             .then((data: TableDto[]) => {
//                 dispatch(setTableData(data));
//                 dispatch(useLoader(false));
//             })
//             .catch((err: any) => {
//                 console.error(err.stack);
//                 dispatch(useLoader(false));
//             })
//     }
//
// }