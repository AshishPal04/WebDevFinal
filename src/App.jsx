import { useState, useEffect, use } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, deleteDoc} from "firebase/firestore";

const counterRef = doc(db, "counters", "main");

export function Counter() {
  const [count, setCount] = useState(null); //create count and setCount, start as null

  useEffect(() => {
    const makeCounter = async () => {
      const snap = await getDoc(counterRef); //get the count stored in databae
      
      if (snap.exists()) //if it does exist
      {
        setCount(snap.data().value); //set the count to what it was stored as
      } 

      else 
      {
        setCount(0); //else, its 0 (probably deleted)
      }
    };
    makeCounter();
  }, []);

  const createCounter = async () => {
    await setDoc(counterRef, { value: 0 }); //when creating, database stores the counter at 0
    
    setCount(0); //set count to 0
  };

  const incrementer = async () => {
    
    await updateDoc(counterRef, { value : count + 1 }); //update the database to be count+1
    setCount(count + 1); //increment
  };

  const deleter = async () => {
    await deleteDoc(counterRef); //if press delete, delete the data
    
    setCount(null); //set the count back to null
  };

  return (
    <div>
      <h2>Count: {count ?? "No counter"}</h2>
      <button onClick={createCounter}>Create</button>
      <div/>
      <button onClick={incrementer} disabled={count === null}>Increment</button>
      <div/>
      <button onClick={deleter} disabled={count === null}>Delete</button>
    </div>
  );
}


export default function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
}