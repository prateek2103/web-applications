import React, { Component } from 'react';
import Filter from './filter';
class Navbar extends Component {
    state={
        search:''
    }
    handleChange=(e)=>{
        this.setState({
            search:e.target.value
        })
        console.log(this.state.search);
    }
    render() {
        return (
            <div className="navbar">
            <nav>
                <div className="nav-wrapper">
                    <div className='row'>
                        <div className="col s3">
                            <span className="white-text">Search Hacker News</span>
                        </div><div className="col s9">
                            <form>
                                <div className="input-field">
                                    <input id="search" type="search" onChange={this.handleChange} required />
                                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                    <i className="material-icons">close</i>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            <Filter searchTerm={this.state.search}></Filter>
            </div>
        )
    }
}
export default Navbar;