import React, { useState } from 'react';

const TODO_ITEMS = [
    { name: 'CSS', completed: true },
    { name: 'JavaScript', completed: true },
    { name: 'Learn React', completed: false },
    { name: 'Learn mongoDB', completed: false },
    { name: 'Learn Node JS', completed: false },
];

const TodoRows = () => {
    const [todos, setTodos] = useState(TODO_ITEMS);

    const handleCheckClick = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const getCheckMark = (isChecked) => {
        return isChecked
            ? String.fromCharCode(10003)
            : String.fromCharCode(215);
    };

    const renderRows = todos.map((todo, index) => {
        const active = todo.completed ? 'done' : 'active';

        return (
            <div className={`row`} key={todo.name}>
                <div className={`title ${active}`}>{todo.name}</div>
                <div
                    className='check-div'
                    onClick={() => handleCheckClick(index)}
                >
                    {getCheckMark(todo.completed)}
                </div>
            </div>
        );
    });
    return <div className='content'>{renderRows}</div>;
};

export default TodoRows;
