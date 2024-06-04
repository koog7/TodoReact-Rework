import React, {useState} from "react";

interface FormProps{
    createTask: (text: string) => void;
}
const AddTaskForm: React.FC<FormProps> = ({createTask}) => {

    const [currentTask, setCurrentTask] = useState("");

    const followChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(e.target.value);
    };

    const taskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (currentTask.length === 0) return;
        createTask(currentTask);
        setCurrentTask("");
    };

    return (
        <div>
            <form onSubmit={taskSubmit}>
                <input type={"text"} placeholder={'Write a task'} value={currentTask} onChange={followChange}/>
                <button type={"submit"}>Send</button>
            </form>
        </div>
    );
};

export default AddTaskForm;