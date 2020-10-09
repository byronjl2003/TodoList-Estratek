import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ModalTodoComponent } from '../modaltodo/ModalTodoComponent';
import './style.css'
import { openDialog } from '../../actions/ui';
export const ControlComponent = () => {


    const dispatch = useDispatch();
    const incom = useSelector(state => state.todo.incompletas);
    const com = useSelector(state => state.todo.completas);
    const openD = () => {
        dispatch(openDialog())
    }
    return (
        <div className="wrapcontrol">
            <h1 className="h1control">{incom}</h1>
            <button className="btn" onClick={openD}>NUEVO</button>

            <h1 className="h1control">{com}</h1>

        </div>

    )
}
