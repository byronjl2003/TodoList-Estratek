import { types } from '../types/types';

/*
{
    statedialog: 1 / 0,
    confirmstate: 1/0,
    statedialogconfirm: 1/0
}

*/
const initialstate = { statedialog: 0, confirmstate: 0, statedialogconfirm: 0 }
export const uiReducer = (state = initialstate, action) => {

    switch (action.type) {

        case types.closedialog:
            return {
                ...state,
                statedialog: 0

            }
        case types.opendialog:
            return {
                ...state,
                statedialog: 1

            }
        case types.openconfirmdialog:
            return {
                ...state,
                statedialogconfirm: 1
            }
        case types.closeconfirmdialog:
            return {
                ...state,
                statedialogconfirm: 0
            }

        default:
            return state;
    }

}