
import { Suspense } from 'react';
import './App.css'
import Nav from './component/nav'
import StackPromise from './component/stack'
import type { StackType } from "./stackType";
const stackPromise = async (): Promise<StackType[]> => {
  const res = await fetch('/stackApi.json');
  const data = await res.json();
  return data;
};
function App() {

  return (
    <>
      <Nav></Nav>
      <Suspense fallback={<div>Loading</div>}>
      <StackPromise stackPromise={stackPromise()}></StackPromise>
      </Suspense>
     
    </>
  )
}

export default App
