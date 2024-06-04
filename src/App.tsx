import './App.css'
import Task from "./Components/Task.tsx";
import AddTaskForm from "./Components/AddTaskForm.tsx";
import {useState} from "react";

const App = () => {

    interface objectiveProps{
        id: string;
        text: string;
    }

    const [objective , setObjective ] = useState<objectiveProps[]>([
        {id:'1',text :'Прогулка'},
        {id:'2',text :'Обед'}
    ]);

    const deleteById = (id:string) => {
        for (let i = 0; i < objective.length; i++) {
            if (objective[i].id === id) {
                objective.splice(i, 1);
                break;
            }
        }
        setObjective([...objective]);
    }

    return (
        <>
            <AddTaskForm />
            {objective.map((iteration) => (
                <Task key={iteration.id} text={iteration.text} deleteTask={() => deleteById(iteration.id)}/>
            ))}
        </>
    )
}

export default App
