import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    actions: [],
    disable:false,
  }
  handleClick = (e) => {
    console.log(e.target.innerText);
    const result = [...this.state.actions, e.target.innerText];
    this.setState({
      actions: result,
    })
  }
    
    handleSubmit = () => {
      if(this.state.actions.length<1){
        return 0;
      }else{
      const calc = eval(this.state.actions.join(''));
      console.log(calc);
      if(calc!==Infinity){
      this.setState({
        actions: [calc],
      })
    }
      else{
      this.setState({
        actions:[calc],
        disable:true,
      })
    }
  }
    }
    handleClear = () => {
      this.setState({
        actions:[],
        disable:false,
      })
    }
    render(){
      const array = [7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3];
      const list = array.map(i => {
        return (
          <button className="col s3 waves-effect waves-light btn-large orange " onClick={this.handleClick} disabled={this.state.disable}>{i}</button>
        )
      });
      return (
        <div className="container">
          <h3 className="blue-text">react calculator</h3>
          <div className="row">{this.state.actions.length<1?0:this.state.actions}</div>
          <div className="row">
            <button className="col s3 waves-effect waves-light btn-large white black-text" onClick={this.handleClear} disabled={this.state.disalbe}>clear</button>
            <button className="col s3 waves-effect waves-light btn-large orange" onClick={this.handleClick} disabled={this.state.disable}>0</button>
            <button className="col s3 waves-effect waves-light btn-large orange" onClick={this.handleClick} disabled={this.state.disable}>/</button>
            <button className="col s3 waves-effect waves-light btn-large orange" onClick={this.handleClick} disabled={this.state.disable}>*</button>

            {list}
            <button className="col s3 waves-effect waves-light btn-large white black-text" onClick={this.handleSubmit} disabled={this.state.disable}>=</button>
          </div>
        </div>


      );
    }
  }

  export default App;
