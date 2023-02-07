import React from 'react';
// import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";
import {levels} from "../../models/levels.enum";
import  TaskComponent from "../pure/taskComponent";
const TaskList = () => {

 const defaultTask = new Task('Example','DesfaultDescription',false,levels.NORMAL);

 const changeState = (id) => {
    console.log('TODO: Cambia estado desde el hijo ejecutandose ene le padre')
 }
    return (
        <div>
            <div>
                <h1>
                    Your task:
                </h1>
            </div>
            
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskList;
