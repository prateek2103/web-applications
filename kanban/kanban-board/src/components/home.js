import React, { Component, createElement } from 'react'
import axios from "axios"

class Home extends Component {
    state = {
        data:"",
        loaded: false
    }

    //load data when window completes loading
    componentDidMount() {
        let self = this
        axios.get("http://localhost:4000/").then(function(res) {
            self.setState({
                data: res.data,
                loaded: true
            })
            console.log(self.state.data)
        })
    }

    //add a new task
    handleClick = (e) => {
        let newData = document.getElementById("addWork")
        let work = { data: newData.value, status: "todo" }
        let self=this
        axios.post("http://localhost:4000/add", work).then(function(res){
            work._id=res.data
            self.setState({
                data: [...self.state.data, work]
            })
        }).then(
            newData.value=""
        )
    }

    //change the status of the task
    changeStatus = (e) => {
        let pos=this.state.data.map(todo=>todo._id).indexOf(e.target.parentNode.id)
        console.log(pos,e.target.parentNode.id)
        let self=this
        let old_data=this.state.data
        axios.post(`http://localhost:4000/changeStatus/${e.target.parentNode.id}`).then(function(){
            if(old_data[pos].status=="doing"){
                old_data[pos].status="done"
                self.setState({
                    data:old_data
                })
            }
            else{
                old_data[pos].status="doing"
                self.setState({
                    data:old_data
                })
            }
        }
        )
    }
    
    //delete the task
    handleDelete=(e)=>{
        let id = e.target.parentNode.id
        let pos=this.state.data.map(todo=>todo._id).indexOf(e.target.parentNode.id)
        let old_data=this.state.data
        let self=this
        axios.get(`http://localhost:4000/delete/${id}`).then(function(){
            old_data.splice(pos,1)
            self.setState({
                data:old_data
            })
        })
    }

    render() {
        let self = this
        return (
            <div class="container">
                <h1 class="text-center" style={{marginBottom:"20px",marginTop:"10px"}}><b>Tasks</b></h1>
                
                {/* Input bar */}
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="What you want to do" id="addWork"/>
                    <div class="input-group-append">
                        <button class="btn btn-primary" onClick={this.handleClick} type="button">Add</button>
                    </div>
                </div>

                {/* filtered data according to status */}
                {/* todo */}
                <div class="row">
                    <div id="todo" class="col-lg-4">
                        <h1 class="header">Todo</h1>
                        {this.state.loaded?this.state.data.filter(todo=>todo.status=="todo").map(todo=>{
                        return(
                        <div class="card">
                            <div class="card-body" id={todo._id}>
                                <h5 class="card-title"><b>Job</b> : {todo.data}</h5>
                                <button onClick={self.changeStatus} class="btn btn-primary">Change Status</button>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={self.handleDelete} class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                        )
                        }):"Not loaded"}
                    </div>

                    {/* doing */}
                    <div id="doing" class="col-lg-4">
                        <h1 class="header">Doing</h1>
                        {this.state.loaded?this.state.data.filter(todo=>todo.status=="doing").map(todo=>{
                        return(
                        <div class="card" >
                            <div class="card-body" id={todo._id}>
                            <h5 class="card-title"><b>Job</b> : {todo.data}</h5>
                            <button onClick={self.changeStatus} class="btn btn-primary">Change Status</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={self.handleDelete} class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                        )
                        }):"Not loaded"}
                    </div>

                    {/* done */}
                    <div id="done" class="col-lg-4">
                        <h1 class="header">Done</h1>
                        {this.state.loaded?this.state.data.filter(todo=>todo.status=="done").map(todo=>{
                        return(
                        <div class="card" >
                            <div class="card-body" id={todo._id}>
                            <h5 class="card-title"><b>Job</b> : {todo.data}</h5>
                            <button onClick={self.handleDelete} class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                        )
                        }):"Not loaded"}
                    </div>
                </div>                          
            </div>
        )
    }
}

export default Home