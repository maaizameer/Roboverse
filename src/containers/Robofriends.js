import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SeachBox';
import './Robofriends.css';
import Scroll from '../components/Scroll';
import ErrorBoundaries from '../components/ErrorBoundaries';

function Robofriends() {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {setRobots(users)})
    }, [])

    const OnSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ? 
        (
            <div className="tc">
                <h1>RoboVerse</h1>
                <SearchBox searchChange={OnSearchChange} />
                <h2 className="tc">Loading</h2>
            </div>
        )
        : (
            <div className="tc">
                <h1>RoboVerse</h1>
                <SearchBox searchChange={OnSearchChange} />
                <ErrorBoundaries>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </ErrorBoundaries>
            </div>
        );
    } 

export default Robofriends;
