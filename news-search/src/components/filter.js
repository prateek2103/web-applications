import React, { Component } from 'react';
import Home from './home';

class Filter extends Component {
    state={
        type:"all",
        time:"popularity",
    }
    handleType=(e)=>{
        console.log(e.target.value);
        this.setState({
            type:e.target.value
        })
    }
    
    handleTime=(e)=>{
        console.log(e.target.value);
        this.setState({
            time:e.target.value
        })
    }
    render() {
        console.log(this.props);
        return (
            <div className="filter">
                <div className="row">
                    <div className="col s2">
                    <label>Search</label>
                        <select className="browser-default">
                            <option value="all" onClick={this.handleType}>All</option>
                            <option value="stories" onClick={this.handleType}>Stories</option>
                            <option value="comments" onClick={this.handleType}>Comments</option>
                        </select>
                    </div>
                    <div className="col s2">
                        <label>by</label>
                        <select className="browser-default">
                            <option value="popularity" onClick={this.handleTime}>Popularity</option>
                            <option value="date" onClick={this.handleTime}>Date</option>
                        </select>
                    </div>
                </div>


                <Home type={this.state.type} time={this.state.time} search={this.props.searchTerm}></Home>
            </div>

           
        )
    }
}
export default Filter;