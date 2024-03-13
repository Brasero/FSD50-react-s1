import './taskList.css';
import TaskItem from './TaskItem.jsx';
import {useTaskContext} from '../utils/taskContext.jsx'

const TaskList = () => {

    const [state] = useTaskContext();
    const {tasks} = state;

    return (
        <ul className={'list'}>
            {
                tasks.length > 0 ?
                    tasks.map((task) => {
                        return <TaskItem key={task.id} task={task} />
                    })
                    :
                    <span>Aucune tâche pour le moment.</span>
            }
        </ul>
    )
}

export default TaskList;