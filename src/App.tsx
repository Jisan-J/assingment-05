
import { Suspense } from 'react';
import './App.css'
import Nav from './component/nav'
import StackPromise from './component/stack'
import type { StackType } from "./stackType";
import HeroSection from './HeroSection';
import Footer from './component/Footer';
const stackPromise = async (): Promise<StackType[]> => {
  const res = await fetch('/stackApi.json');
  const data = await res.json();
  return data;
};
function App() {

  return (
    <>
      <Nav></Nav>
      <HeroSection></HeroSection>
      <Suspense fallback={<div>Loading</div>}>
      <StackPromise stackPromise={stackPromise()}></StackPromise>
      </Suspense>
      <Footer></Footer>
     
    </>
  )
}

export default App
