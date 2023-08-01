import React from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SeachBox';
import { robos } from "../Robos";
import './Robofriends.css';
import Scroll from '../components/Scroll';
import ErrorBoundaries from '../components/ErrorBoundaries';

class Robofriends extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '', 
        }
    }

    componentDidMount(){
        this.setState({robots: robos});
    }

    OnSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    

    render(){
            const { robots, searchField } = this.state;
            const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(!robots.length){
            return (
                <div className="tc">
                    <h1>RoboVerse</h1>
                    <SearchBox searchChange={this.OnSearchChange} />
                    <h2 className="tc">Loading</h2>
                </div>
            );
        }else{
            return (
                <div className="tc">
                    <h1>RoboVerse</h1>
                    <SearchBox searchChange={this.OnSearchChange} />
                    <ErrorBoundaries>
                        <Scroll>
                            <CardList robos={filterRobots}/>
                        </Scroll>
                    </ErrorBoundaries>
                </div>
            );
        }
        } 
}

export default Robofriends;
