import { types } from '../types/types';




export const UpdateItem = (item) => ({
    type: types.updateinfo,
    payload: item
});

export const Delete = (flag, index) => ({
    type: types.confirmationdelete,
    payload: {
        flag,
        index
    }

});

export const Confirm = (flag, index) => {
    return (dispatch) => {

        let resp = window.confirm("Seguro que desea eliminarlo")
        if (resp == true) {
            dispatch(Delete(flag, index))
        }






    }
}


export const NoConfirm = () => ({
    type: types.noconfirmationdelete,
    payload: {
        flag: -1,
        index: -1
    }

});

export const addnew = (actividad) => ({
    type: types.agregar,
    payload: {
        nombre: actividad.nombre,
        descripcion: actividad.descripcion,
        estado: actividad.estado
    }
});

export const adddone = (actividad) => ({
    type: types.adddone,
    payload: {
        nombre: actividad.nombre,
        descripcion: actividad.descripcion,
        estado: actividad.estado
    }
});

export const addtodo = (actividad) => ({
    type: types.addtodo,
    payload: {
        nombre: actividad.nombre,
        descripcion: actividad.descripcion,
        estado: actividad.estado
    }
});

export const rmtodo = (index) => ({
    type: types.rmtodo,
    payload: {
        index: index
    }
});
export const rmdone = (index) => ({
    type: types.rmdone,
    payload: {
        index: index
    }
});