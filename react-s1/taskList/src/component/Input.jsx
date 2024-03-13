import './input.css';


const Input = ({error, value, dispatch}) => {

    const handleChange = (e) => {
        const {value} = e.target

        dispatch({
            type: 'changeValue',
            payload: value
        })
    }

    const handleSubmit = () => {
        if(value.trim() !== '') {
            dispatch({type: 'addTask'})
        } else {
            dispatch({type: 'error', payload: "Impossible d'ajouter la tâche car il n'y a pas contenu"})
        }
    }

    return (
        <div className={'input'}>
            <h2 className={'input__title'}>Saisissez votre tâche</h2>
            {
                error !== '' && <span style={{color: 'red'}}>{error}</span>
            }
            <input className={'input__input'} onChange={handleChange} name={'text'} value={value} type={'text'} />
            <button onClick={handleSubmit} role={'button'} className={'input__button'}>Ajouter</button>
        </div>
    )
}

export default Input;