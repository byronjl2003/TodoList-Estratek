import React from 'react';
import { useSelector } from 'react-redux';
import { ControlComponent } from '../ControlComponent/ControlComponent';
import { TodoPanelComponent } from '../TodoPanel/TodoPanelComponent';
import './style.css';
export const TodoSectionComponent = ({ name }) => {

    const todos = useSelector(state => state.todo.todo);
    const dones = useSelector(state => state.todo.done);
    return (
        <>
            <div className="container">
                <ControlComponent></ControlComponent>
                <div className="containerpanels">
                    <TodoPanelComponent name="TODOs" todos={todos} flag={1}></TodoPanelComponent>
                    <TodoPanelComponent name="DONEs" todos={dones} flag={0}></TodoPanelComponent>
                </div>

            </div>
        </>
    )
}
