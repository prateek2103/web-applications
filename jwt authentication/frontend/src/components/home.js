import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
class Home extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }
    componentDidUpdate() {
        if (this.state.redirect === true) {
            this.props.history.push('/me');
        }
    }
    handleChange = (e) => {
        if (e.target.name === 'email') {
            this.setState({
                email: e.target.value
            })
        }
        else if (e.target.name === 'password') {
            this.setState({
                password: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const self = this;
        console.log('submitted')
        fetch('/auth/login', {
            method: 'post',
            body: JSON.stringify(this.state),
            headers: { "Content-type": "application/json" },
            redirect: 'follow'
        }).then(function(res) {
            if(res.status===404){
                alert('no user found please type correct id and password')
            }else
            self.setState({
                redirect: true,
            })
        }).catch(err => {
            console.log('error caught', err);
        })

    }
    render() {
        return (
            <div className="container jumbotron">
                <h6><Link to="/me">try redirecting to the me page before login</Link></h6>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name='password' className="form-control" placeholder="Password" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
<br></br>
<h3>some demo purposes emails and username</h3><br></br>
                <ul class="list-group">
                    <li class="list-group-item"><b>email</b> : 'simon22@gmail.com', <b>password</b> : 'blank'</li>
                    <li class="list-group-item"><b>email</b> : 'smith897@gmail.com', <b>password</b> : 'pass123'</li>
                    <li class="list-group-item"><b>email</b> : 'ben_afflick@gmail.com', <b>password</b> : 'sesamestreet'</li>
                    <li class="list-group-item"><b>email</b> : 'simon_simpos@gmail.com', <b>password</b> : 'circle'</li>
                </ul>
            </div>

        )
    }
}
export default Home;