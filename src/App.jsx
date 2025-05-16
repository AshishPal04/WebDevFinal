import { useState, useEffect, use } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, deleteDoc} from "firebase/firestore";

const counterRef = doc(db, "counters", "main");

export function Counter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const makeCounter = async () => {
      const snap = await getDoc(counterRef);
      if (snap.exists()) setCount(snap.data().value);
      else setCount(0);
    };
    makeCounter();
  }, []);

  const createCounter = async () => {
    await setDoc(counterRef, { value: 0 });
    setCount(0);
  };

  const incrementer = async () => {
    await updateDoc(counterRef, { value : count + 1 });
    setCount(count + 1);
  };

  const deleter = async () => {
    await deleteDoc(counterRef);
    setCount(null);
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