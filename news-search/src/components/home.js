import React from 'react';
import List from '../list';
import {Link} from 'react-router-dom';
import './home.css';
import Highlighter from 'react-highlight-words';
const Home = (props) => {
    const {type,time,search}=props;
    const reg=new RegExp(search);
    //const highlight=require('react-highlighter');
    const listbefore=List.sort((a,b)=>{
        if(time==='popularity')
        {return b.id-a.id;}
        else{
        return a.date-b.date;
        }
    })

    const list = listbefore.map((post) => {
        console.log(reg.test(post.title));
                if(type==="all" && reg.test(post.title)){
            return (
                <div className="row" key={post.id}>
                    <div className="col s12 m6 l12">
                        <div className="card ">
                            <div className="card-content black-text">
                                <span className="card-title"><Link to={"/posts/"+post.id}><Highlighter searchWords={[reg]} textToHighlight={post.title}></Highlighter></Link></span>
                                <p>{post.date} months ago | Type: {post.type.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        else if(post.type===type && reg.test(post.title)){
            return (
                <div className="row" key={post.id}>
                    <div className="col s12 m6 l12">
                        <div className="card ">
                            <div className="card-content black-text">
                                <span className="card-title"><a href={"/posts/"+post.id}>{post.title}</a></span>
                                <p>{post.date} months ago | Type: {post.type.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>
                </div>
        )}
        else{
            return null;
        }
    })
    return(
        <div className="home">
            {list}
        </div>
    )

}
export default Home;