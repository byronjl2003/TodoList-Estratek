import React from 'react';
import { useDispatch } from 'react-redux';
import { adddone, addtodo, rmdone, rmtodo, UpdateItem, Confirm } from '../../actions/todo';
import { openConfirmDialog } from '../../actions/ui';
import './style.css'
export const TodoPanelComponent = ({ name, todos, flag }) => {

    const usedispatch = useDispatch();


    const move = (index) => {
        console.log(index);
        if (flag == 1) {
            //VOY A MOVER A DONE
            usedispatch(adddone(todos[index]));
            usedispatch(rmtodo(index));
        }
        else {
            usedispatch(addtodo(todos[index]));
            usedispatch(rmdone(index));
        }

    }
    const eliminar = (index, flag) => {
        usedispatch(Confirm(flag, index));
    }
    const ver = (item) => {
        usedispatch(UpdateItem(item));
        usedispatch(openConfirmDialog());

    }
    return (
        <>
            <div className="panel">
                <div className="header">

                    <span className="title">{name}</span>

                    <input type="text" className="search-input" placeholder="Search ..." />
                    <div className="fa fa-search search-icon"></div>
                </div>

                <div className="notifications clearfix">
                    <div className="line"></div>
                    {
                        todos.length == 0 ? (
                            <div className="notification">

                                <p>Vacio.</p>


                            </div>
                        ) : (todos.map((item, key) => (<div key={key} className="notification">
                            <div className="circle" onClick={() => move(key)}></div>
                            <span className="time" >{item.nombre}</span>
                            <p><b></b>{item.descripcion}</p>
                            <button className="btndanger" onClick={() => eliminar(key, flag)}>Eliminar</button>
                            <button className="btnbb" onClick={() => ver(item)}>ver</button>

                        </div>)))

                    }


                </div>

            </div>

        </>
    )
}
