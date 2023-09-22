import React, { Component } from 'react'

export default class ItemShoe extends Component {
  convertNameShoe = (name) =>{
    let maxLength = 12;
    if(name.length>maxLength){
        return name.slice(0, maxLength) + "...";
    }else{
        return name;
    }
  }  
  render() {
    let {image, name} = this.props.item;
    return (
      <div className='col-3'>
        <div className='card text-left'>
            <img className='card-img-top' src={image} alt=""/>
            <div className='card-body'>
                <h4 className='card-title'>{this.convertNameShoe(name)}</h4>
                <p className='card-text'>Body</p>
                <button onClick={ () => {
                    this.props.handleViewDetail(this.props.item);
                }}
                className='btn btn-info mr-2 my-3'>View</button>
                <button onClick={ () => {
                    this.props.handleAddToCart(this.props.item);
                }} className='btn btn-success mr-2'>Add</button>
            </div>
        </div>
      </div>
    )
  }
}
