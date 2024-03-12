import {useState} from "react"


const List = () => {

    const [buyList, setBuyList] = useState([
        "Banane",
        'Fromage',
        'Pomme'
    ])
    const [list, setList] = useState([])


    const remove = (item) => {
        const newBuyList = buyList.filter((i) =>  i !== item)
        setBuyList(newBuyList)
        const newList = [...list, item];
        setList(newList);
    }

    const add = (item) => {
        const newList = list.filter((i) => i !== item)
        setList(newList)
        const newBuyList = [...buyList, item]
        setBuyList(newBuyList)
    }

    return (
        <>
            <div>
                {
                    buyList.map((item, i) => {
                        return <button key={i} onClick={() => remove(item)}>{item}</button>
                    })
                }
            </div>

            <div>
                {
                    list.map((item, i) => {
                        return <button key={i} onClick={() => add(item)}>{item}</button>
                    })
                }
            </div>

        </>
    )
}

export default List