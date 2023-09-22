import React, { Component } from 'react'

export default class Cart extends Component {
  renderTbody = () => {
    let {cart, handleRemove} = this.props;
      return cart.map((item) => {
        return ( 
        <tr>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td> <img width={100} src={item.image} alt=""/></td>
          <td>
            <button className='btn btn-danger'>-</button>
            <strong>{item.soLuong}</strong>
            <button className='btn btn-danger'>+</button>
          </td>
          <td>
            <button onClick={ () => {
              handleRemove(item.id);
            }} className='btn btn-dark'>Delete</button>
          </td>
        </tr>
        );
      })
    }
  render() {
    return <table className='table'>
      <thead>
        <tr>
          <th>name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {this.renderTbody()}
      </tbody>
    </table>;
  }
}
