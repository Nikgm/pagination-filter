import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Main from './Main'
import Footer from './Footer'
import reportWebVitals from './reportWebVitals';
import userData from './userData'
import PageNumber from './PageNumber';

const suffledUserData = userData.sort((a, b) => 0.5 - Math.random())
function App(){
  const pageOne = suffledUserData.splice(0,9).map(data => <Main 
        key = {data.id}
        imgUrl = {data.imgUrl}
        name = {data.name}
        phone = {data.phone}
        email = {data.email}
      />)
  const pageTwo = suffledUserData.map(data => <Main
        key = {data.id}
        imgUrl = {data.imgUrl}
        name = {data.name}
        phone = {data.phone}
        email = {data.email}
  />)
  return (
    <div>
      <Navbar/>
      <div id="user-container-pg-one" className="user-container">{pageOne}</div>
      <div id="user-container-pg-two" className="user-container" style={{display: 'none'}}>{pageTwo}</div>
      <PageNumber/> 
      <Footer/>
    </div>
  )
}

ReactDOM.render( <App/>, document.getElementById('root'));

const pgOne = document.querySelector('#pg-one')
const pgTwo = document.querySelector('#pg-two')

pgOne.addEventListener('click',function(){
  console.log('first page pressed')
  document.getElementById('user-container-pg-one').style.display = 'grid'
  document.getElementById('user-container-pg-two').style.display = 'none'
  pgOne.style.color = 'white'
  pgOne.style.backgroundColor = '#4A5568'
  pgTwo.style.color = '#4A5568'
  pgTwo.style.backgroundColor = 'white'
})

pgTwo.addEventListener('click',function(){
  console.log('second page pressed')
  document.getElementById('user-container-pg-one').style.display = 'none'
  document.getElementById('user-container-pg-two').style.display = 'grid'
  pgTwo.style.color = 'white'
  pgTwo.style.backgroundColor = '#4A5568'
  pgOne.style.color = '#4A5568'
  pgOne.style.backgroundColor = 'white'
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
