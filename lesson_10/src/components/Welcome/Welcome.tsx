import { useState } from "react"

type Props = {
    name: string
    age: number
}

export const HelloWorld = ({ name, age }: Props) => {
    console.log(`name is: ${name} and I'm ${age} old`);
    return <h1>Hello World {name} and I'm {age} old</h1>
}

export const HelloWorld2 = (name: string, age: number) => {
    return <h1>Hello World2 {name} and I'm {age} old</h1>
}

export const SecondFunction = () => {
    return <h2>Druha metoda</h2>
}

type CounterTypes = {
    name?: string
}

export const Counter = ({ name }: CounterTypes) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{name} {count}
            </p>
            <button onClick={() => { setCount(count - 1) }} >
                -1
            </button >
            <button onClick={() => { setCount(count + 1) }} >
                +1
            </button >
            <br />
            <button onClick={() => { setCount(count - 10) }} >
                -10
            </button >
            <button onClick={() => { setCount(count + 10) }} >
                +10
            </button ><br />
            <button onClick={() => { setCount(count - 100) }} >
                -100
            </button >
            <button onClick={() => { setCount(count + 100) }} >
                +100
            </button >
        </div >
    )
}

export const ArrowUp = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <button onClick={() => {
                setValue(value + 1)
            }}>↑</button>
        </>
    )
}

export const ArrowDown = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <button onClick={() => {
                setValue(value - 1)
            }}>↓</button>
        </>
    )
}

