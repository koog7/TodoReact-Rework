import React from "react";

interface TaskProps{
    text: string;
    deleteTask: () => void;
}

const Task: React.FC<TaskProps> = ({text, deleteTask}) => {
    return (
        <div>
            <div className={'task-display'}>
                <p>{text}</p>
                <button onClick={deleteTask}>❌</button>
            </div>
        </div>
    );
};

export default Task;

