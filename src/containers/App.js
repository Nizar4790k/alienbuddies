import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'



const App = () => {


    const [aliens, setAliens] = useState([]);
    const [searchfield, setSearchField] = useState('');
    const [count, setCount] = useState(0);



    // 

     function fetchAliens() {

       /*
        //Async way 
       
       const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setAliens(users);
        console.log(count);
        

        */

       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response =>response.json())
       .then(aliens=> setAliens(aliens)); 


    }

    useEffect(() => {

        fetchAliens();
    }, [count]) // only run if count changes



    function onSearchChange(event) {
        setSearchField(event.target.value);
    }



    const filteredaliens = aliens.filter(alien => {
        return alien.name.toLowerCase().includes(searchfield.toLowerCase())
    })


    return (!aliens.length) ?
        <h1>Loading</h1>
        :
        (<div className="tc">
            <h1 className="f1">AlienBuddies</h1>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList aliens={filteredaliens} />
            </Scroll>
        </div>
        )





}


export default App;