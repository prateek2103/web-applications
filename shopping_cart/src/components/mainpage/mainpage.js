import React, { Component } from 'react';
import './mainpage.css';
import Cart from '../cart/cart';
import { connect } from 'react-redux';
class Mainpage extends Component {
    state = {
        show: 'none',
        items:[]
    }

    handleClick = (e) => {
        if (this.state.show === 'none') {
            this.setState({
                show: 'block',
            })
        }
        else {
            this.setState({
                show: 'none'
            })
        }
        console.log(e.target);
    }

    addToCart = (e) => {
        const id=Number(e.target.parentNode.id);
        this.props.add(id);
    }

    changeSize=(e)=>{
        let size=e.target.value;
        this.props.filterSize(size);
    }

    filterByRate=(e)=>{
        const value=e.target.value;
        this.props.filterRate(value);
    }

    render() {
        const items = this.props.items;
        console.log(items);
        const List =items.map((item) => {
            return (
                <div className="card col-md-4" key={item.id}>
                    <img src={item.img} className="image" alt="items" />
                    <div className="card-body" id={item.id}>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">${item.price}</p>
                        <a href="#" className="btn btn-primary" onClick={this.addToCart}>Add to Cart</a>
                    </div>
                </div>
            )
        })

        return (
            <div className="container-fluid">
                <div className='cart' style={{ display: this.state.show}}>
                    <i className='material-icons' onClick={this.handleClick}>close</i>
                    <Cart></Cart>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="sizes">
                            <h5>Sizes:</h5>
                            <button value="XS" onClick={this.changeSize}>XS</button>
                            <button value="S" onClick={this.changeSize}>S</button>
                            <button value="M" onClick={this.changeSize}>M</button>
                            <button value="ML" onClick={this.changeSize}>ML</button>
                            <button value="L" onClick={this.changeSize}>L</button>
                            <button value="XL" onClick={this.changeSize}>XL</button>
                            <button value="XXL" onClick={this.changeSize}>XXL</button>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <i className="material-icons" onClick={this.handleClick}>shopping_cart</i>
                        <div className='select'>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text">Orderby</label>
                                </div>
                                <select className="custom-select" id="inputGroupSelect01" onChange={this.filterByRate}>
                                    <option defaultValue>Select</option>
                                    <option value="highToLow">high to low</option>
                                    <option value="lowToHigh">low to high</option>
                                </select>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 140 }}>
                            {List}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        items: state.filtered_items
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        add:(id)=>{
            dispatch({type:"ADD_TO_CART",id:id})
        },
        filterSize:(size)=>{
            dispatch({type:"FILTER_SIZE",size:size})
        },
        filterRate:(value)=>{
            dispatch({type:"FILTER_RATE",value:value})
        }
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(Mainpage)
