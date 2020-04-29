import React from "react";
import "../styles/home.css";
import axios from 'axios';
import Text from './text';

class Home extends React.Component{
    constructor(props){
        super()
        this.state={
            search_text:'',
            resp:[],
            loading:false,
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            search_text:e.target.value
        })
        console.log(this.state.search_text)
    }

    handleClick=e=>{
      const self=this;
      self.setState({
        loading:true,
      })
      axios.get('http://localhost:8000/search?name='+this.state.search_text).then(res=>{
        self.setState({
          resp:res.data,
          loading:false,
      })
     })  
  }

    render(){
        return (
            <div>
              <div className="heading">
                <div className="content">
                  <h1>Dialogue Finder</h1>
                  <p>Search your favourite FRIENDS dialogue here</p>
                </div>
              </div>
        
              <div className='searchbox'>
                      <input type="text" onChange={this.handleChange}></input>
                      <button onClick={this.handleClick}>Search</button>
              </div>
              <div className="results">
                <h3 style={{"text-align":"left"}}>Episodes list:</h3>
            {this.state.loading?<h3>Searching..</h3>:this.state.resp.length>0?this.state.resp.map(res=>
              <p>{res}</p>
            ):<h3>Nothing yet!!</h3>}
        </div>
            
            </div>
          );
        }
    }
  
export default Home;
