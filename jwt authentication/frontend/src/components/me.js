import React, { Component } from 'react';


class Me extends Component {
    constructor() {
        super();
        this.state = {
            email:'',
        }
    }
    componentDidMount() {
        console.log('component mounted')
        fetch('/api/me').then(res=>res.text()).then(res => {
            this.setState({
                email: res
            })
        })
    }
    handleClick=()=>{
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container jumbotron">
                <h3>{this.state.email} has logged in</h3><br></br>
                <h6>try using different email id and password for testing purposes </h6><br></br>
                <button className="btn btn-primary" onClick={this.handleClick}>back</button>
            </div>

        )
    }
}
export default Me;