import './taskItem.css';


const TaskItem = ({task, dispatch}) => {

    const handleDelete = () => {
        console.log(`delete task ${task.id}`)
        dispatch({
            type: 'removeTask',
            payload: task.id
        })
    }

    return (
        <li className={'list__item'}>
            <span className={'list__item__text'}>{task.text}</span>
            <button onClick={handleDelete} className={'list__item__button'}>X</button>
        </li>
    )
}

export default TaskItem;