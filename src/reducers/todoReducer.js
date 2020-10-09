import { types } from '../types/types';
/*
    {
        completas: number,
        incompletas: number,
        todo :[
            {
                nombre: 'jagdfjahdsf127362718',
                descripcion: 'Fernando'
                estado: 1/0
            },...
        ],
        done:[
             {
                nombre: 'jagdfjahdsf127362718',
                descripcion: 'Fernando'
                estado: 1/0
            },...
        ]

*/
const initialstate = {
    completas: 0,
    incompletas: 1,
    todo: [{ nombre: "tarea1", descripcion: "Ya vali" }],
    done: [],
    item: null


}
export const todoReducer = (state = initialstate, action) => {

    switch (action.type) {

        case types.updateinfo: {
            return {
                ...state,
                item: action.payload
            }
        }
        case types.confirmationdelete: {
            console.log(action.payload.flag);
            if (action.payload.flag == 0) {
                //se elimina de TODO
                return {
                    ...state,
                    completas: state.completas - 1,
                    done: [...state.done.filter((item, index) => { return action.payload.index != index })]
                }

            } else {
                return {
                    ...state,
                    incompletas: state.incompletas - 1,
                    todo: [...state.todo.filter((item, index) => { return action.payload.index != index })]
                }
            }

        }
        case types.agregar: {
            let incomp = state.incompletas;
            console.log("====", incomp);
            return {
                ...state,
                incompletas: state.incompletas + 1,
                todo: [...state.todo, action.payload]

            }
        }



        case types.rmdone: {
            return {
                ...state,
                done: [...state.done.filter((item, index) => { return action.payload.index != index })]
            }
        }
        case types.rmtodo: {
            return {
                ...state,
                todo: [...state.todo.filter((item, index) => { return action.payload.index != index })]
            }
        }
        case types.adddone:
            {
                let completas = state.completas + 1;
                let incompletas = state.incompletas - 1;
                //console.log(":::", completas, incompletas);
                return {
                    ...state,
                    completas: completas,
                    incompletas: incompletas,
                    done: [...state.done, action.payload]


                }

            }

        case types.addtodo:
            return {
                ...state,
                completas: state.completas - 1,
                incompletas: state.incompletas + 1,
                todo: [...state.todo, action.payload]

            }


        default:
            return state;
    }

}