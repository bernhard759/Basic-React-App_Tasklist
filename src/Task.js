import React from 'react';

export default function Task({ task, toggle }) {

function handleToggle() {
    toggle(task.id)
}

return (

    <div>
        <label> 
            <input type="checkbox" className="checkbox" checked={task.complete} onChange={handleToggle} style={{marginRight:"1rem"}}/>
        {task.name}
        </label> 
    </div>

)

}