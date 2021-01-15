import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'




class App extends Component {

    constructor() {
        super();
        this.state = {
            aliens: [],
            searchfield: ''
        }
    }

    componentDidMount(){
       
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users=> this.setState({aliens:users}));

    }
    
    onSearchChange=(event) =>{
        this.setState({searchfield:event.target.value});
    }

    render() {


        const {aliens,searchfield}=this.state;

        const filteredaliens = aliens.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })


        return (!aliens.length) ?
            <h1>Loading</h1> 
            :
            (<div className="tc">
            <h1 className="f1">AlienBuddies</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
            <CardList aliens={filteredaliens} />
            </Scroll>
            </div>
        )

        }


     
    }


export default App;