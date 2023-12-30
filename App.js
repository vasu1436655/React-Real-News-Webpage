import { useEffect, useState } from 'react';
import './App.css';
import News from './News';
function App() {

  let [articles,setArticles]=useState([])
  let [category,setCategory]=useState("india")


  useEffect(()=>{

    fetch('https://newsapi.org/v2/everything?q=${category}&from=2023-12-23&apiKey=0678bd7fcb21416b85a2e2636fb53a37')
    .then((Response=>Response.json()))
    .then((news)=>{
      setArticles(news.articles)
      console.log(news.articles)
    })
    .catch((err)=>{
      console.log(err)
    })

  },[category])

  return (

    <div className="App">

      <header className='header'>

        <h1>VASU NEWS</h1>

        <input type='text' onChange={(event)=>{
          setCategory(event.target.value)
        }} placeholder='Search News...'></input>

      </header>

      <section className='newsart'>

        {
          articles.length!==0?

          articles.map((article)=>{
            return(
              <News article={article}/>
            )
          })
          :
          <h3>No news found</h3>
        }

    

      </section>

      

      
    </div>
  );
}
export default App;
