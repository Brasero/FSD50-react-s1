import './taskList.css';
import TaskItem from './TaskItem.jsx';
const TaskList = ({tasks, dispatch}) => {

    return (
        <ul className={'list'}>
            {
                tasks.length > 0 ?
                    tasks.map((task) => {
                        return <TaskItem key={task.id} task={task} dispatch={dispatch} />
                    })
                    :
                    <span>Aucune tâche pour le moment.</span>
            }
        </ul>
    )
}

export default TaskList;