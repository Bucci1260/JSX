import { animals } from './animals';
import ReactDOM from 'react-dom';
import React from 'react';
const title = "";
const images = [];
const showBackground = true
for(const animal in animals){
  images.push(
    <img
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    ariaLabel={animal}
    role='button'
    />
  )
}
function displayFacts(e){
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random()*animalInfo.facts.length);
  const funFact = animalInfo.facts[optionIndex]; document.getElementById('fact').innerHTML = funFact;
}
const animalFacts = (
  <div>
    <h1> {title == '' ? 'Click for an animal fun fact' : title}</h1>
    {showBackground && background}
    <p id='fact'></p>
    <div ClassName='animals'>
    {images}
    </div>
  </div>
)
const background = (
    <img ClassName='background' 
      alt ='ocean'
      src = '/images/ocean.jpg’ 
    />
)
ReactDOM.render(animalFacts, document.getElmentById("root"));