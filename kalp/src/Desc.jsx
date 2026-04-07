import React from 'react'
import { useDispatch } from 'react-redux';
import { descount } from './components/counterSlice';

function Desc() {
    const dispatch = useDispatch();
    const handledesc = () => {
        dispatch(descount());
    }
    return (
        <div>
            <h2>Description</h2>
            <p>This is a simple description component.</p>
            <button onClick={handledesc}>Click me</button>
        </div>
    )
}

export default Desc
