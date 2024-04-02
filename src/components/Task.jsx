import React from 'react';

const Task = ({ id, text, completed, onDelete, onToggleCompletion }) => {
    const handleToggleCompletion = () => {
        onToggleCompletion(id);
    };

    return (
        <>
            <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleToggleCompletion}
                />
                {text}
                <button onClick={() => onDelete(id)}>Delete</button>
            </li>
        </>
    );
};

export default Task;