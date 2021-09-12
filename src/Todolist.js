import React from 'react';
import Task from './Task';


export default function Todolist( { tasks, toggle } ) {

return (
        tasks.map(element => {
            return <Task key={element.id} toggle={toggle} task={element} />
        })
)

}