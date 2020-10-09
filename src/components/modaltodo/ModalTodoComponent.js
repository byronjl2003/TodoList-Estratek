import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css";
import { closeDialog } from '../../actions/ui';
import { addnew } from '../../actions/todo'
import { useForm } from '../../hooks/useForm'
export const ModalTodoComponent = ({ modalstate, closehandler }) => {

    /**{opennew ? "fondo-modalusuario ocultarmodal" : "fondo-modalusuario ocultarmodal hiden"} */
    const dispatch = useDispatch();
    const statedialog = useSelector(state => state.ui.statedialog);

    const [formValues, handleInputChange] = useForm({
        nombre: 'Nombre de la tarea',
        descripcion: '......'
    });

    const { nombre, descripcion } = formValues;

    const close = () => {
        dispatch(closeDialog());
    }

    const createTodo = (e) => {
        e.preventDefault();
        dispatch(addnew({ nombre: nombre, descripcion: descripcion, estado: 1 }));
        close();
    }
    return (

        <div className={statedialog == 0 ? "fondo-modalusuario ocultarmodal" : "fondo-modalusuario"}>
            <div className="modal fade show " id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
                <div className="frame">
                    <div className="header">
                        <div >
                            <div className="titulowrap">
                                <h2>Nueva Tareita</h2>
                                <button type="button" className="btnclose" onClick={close}>
                                    <span aria-hidden="true ">&times;</span></button>
                            </div>

                            <form className="sign-in-form" autoComplete="off" onSubmit={createTodo}>

                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        name="nombre"
                                        autoComplete="off"
                                        value={nombre}
                                        onChange={handleInputChange}

                                    />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input
                                        type="text"
                                        placeholder="Descripcion"
                                        name="descripcion"
                                        autoComplete="off"
                                        value={descripcion}
                                        onChange={handleInputChange}
                                    />

                                </div>

                                <button type="submit" className="btn solid">
                                    Crear
                </button>

                            </form>



                        </div >
                    </div >
                </div>
            </div >
        </div >
    )
}
