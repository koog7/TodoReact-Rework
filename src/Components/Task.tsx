import React from "react";

interface type{
    text: string;
}

const Task: React.FC<type> = ({text}) => {
    return (
        <div>
            <div className={'task-display'}>
                <p>{text}</p>
                <button>delete</button>
            </div>
        </div>
    );
};

export default Task;

