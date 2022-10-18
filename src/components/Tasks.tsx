import React from "react";

type TasksPropsType = {
    data: {
        title: string,
        tasks: Array<ObjectType>,
        students: Array<string>,
    },
}

type ObjectType = {
    taskId: number,
    title: string,
    isDone: boolean,
}

export const Tasks = (props: TasksPropsType) => {

    return (
        <div>
            <h3>{props.data.title}</h3>
            <ul>
                {props.data.tasks.map((el) => { //СПРОСИТЬ ПОЧЕМУ ПРИ ТИПЕ OBJECT isDone, taskId, title У el НЕ НАХОДИТ
                    return (
                        <li><input type="checkbox" checked={el.isDone} id={`${el.taskId}`}/><span>{el.title}</span></li>
                    )
                })}
            </ul>
            <ol>
                {props.data.students.map((el) => {
                    return (
                        <li>{el}</li>
                    )
                })}
            </ol>
        </div>
    )
}