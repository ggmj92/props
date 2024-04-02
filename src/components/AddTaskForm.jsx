import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTask(text.trim());
            setText('');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add task"
                />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default AddTaskForm;