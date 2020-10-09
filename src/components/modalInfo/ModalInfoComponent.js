import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css";
import { closeConfirmDialog } from '../../actions/ui';

export const ModalInfoComponent = () => {

    /**{opennew ? "fondo-modalusuario ocultarmodal" : "fondo-modalusuario ocultarmodal hiden"} */
    const dispatch = useDispatch();
    const statedialog = useSelector(state => state.ui.statedialogconfirm);
    const item = useSelector(state => state.todo.item);



    const close = () => {
        dispatch(closeConfirmDialog());
    }


    return (

        <div className={statedialog == 0 ? "fondo-modalusuario ocultarmodal" : "fondo-modalusuario"}>
            <div className="modal fade show " id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
                <div className="frame">
                    <div className="header">
                        <div >
                            <div className="titulowrap">
                                <h2>{item === null ? "" : item.nombre} </h2>
                                <button type="button" className="btnclose" onClick={close}>
                                    <span aria-hidden="true ">&times;</span></button>
                            </div>
                            <h1>
                                {item === null ? "" : item.descripcion}
                            </h1>





                        </div >
                    </div >
                </div>
            </div >
        </div >
    )
}
