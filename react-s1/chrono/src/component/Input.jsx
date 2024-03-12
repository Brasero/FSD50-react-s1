import {useState} from 'react';


const Input = () => {

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        const {value} = e.target
        setInput(value)
    }

    return (
        <>
            <input type={'text'} onChange={handleChange} value={input} placeholder={"Votre texte"} name={"text"} />
        </>
    )
}

export default Input;