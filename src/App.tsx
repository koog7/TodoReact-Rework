import './App.css'
import Task from "./Components/Task.tsx";
import AddTaskForm from "./Components/AddTaskForm.tsx";
import {useState} from "react";

const App = () => {

    const [objective , setObjective ] = useState([
        {id:'1',text :'Прогулка'},
        {id:'2',text :'Обед'}
    ]);

    return (
        <>
            <AddTaskForm />
            {objective.map((item) => (
                <Task key={item.id} text={item.text}/>
            ))}
        </>
    )
}

export default App
