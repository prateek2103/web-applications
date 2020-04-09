import React ,{Component} from 'react';
import "./cart.css"
import {connect} from 'react-redux';
class Cart extends Component{
    state={
        total:0
    }
    render(){
        const items=this.props.items;
        const cart_items=items.map(item=>{
            return(
                <div className='cart_items'>
                    <img src={item.img} alt={item.name}></img>
                    <h5>name : {item.name}</h5>
                    <h5>price : ${item.price}</h5>
                </div>
            )
        })
        return(
            <div>
                {cart_items}
                <h3 style={{bottom:0,position:'absolute',left:10,display:'inline'}}>Total : {this.props.total}$</h3>
                <button className="btn btn-primary" style={{right:50,bottom:10,position:'absolute'}}>checkout</button>
            </div>
        )
    }
}

const mapStatetoProps=(state)=>{
    return{
        items:state.cart_items,
        total:state.total,
    }
}
export default connect(mapStatetoProps)(Cart);