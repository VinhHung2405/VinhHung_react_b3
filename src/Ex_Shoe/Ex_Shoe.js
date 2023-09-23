import React, { Component } from 'react'
import Cart from './Cart'
import ListShoe from './ListShoe'
import DetailShoe from './DetailShoe'
import { shoeArr } from './data'
import { message } from 'antd'

export default class Ex_Shoe extends Component {
    state = {
        //detail, cart
       shoeArr: shoeArr,
       detail: shoeArr[0],
       cart: [],
    }
    handleAdd = (shoe) => {
      let cloneCart=[...this.state.cart];
      var index= cloneCart.findIndex((item) => {
        return item.id==shoe.id
      })
      if(index==-1){
        let newShoe={...shoe, soLuong:1}
        cloneCart.push(newShoe);
        
      }else{
        cloneCart[index].soLuong++;
      }
      this.setState({
        cart: cloneCart,
      })
    }; 
    HandleRemove =(shoeId) => {
      let cloneCart=[...this.state.cart];
      let index=cloneCart.findIndex(item=>item.id==shoeId);

      cloneCart.splice(index, 1);
      this.setState({ cart: cloneCart});
      //thông báo xóa thành công
      message.success("Xóa thành công");
    };
    handleViewDetail = (shoe) => {
      this.setState({detail: shoe});
    };
    handleChangeQuantity =(id, option) =>{
      let cloneCart = [...this.state.cart]
      let index = cloneCart.findIndex((item) => item.id === id)
      cloneCart[index].soLuong = cloneCart[index].soLuong + option;
      cloneCart[index].soLuong ==0 && cloneCart.splice(index, 1)
      this.setState({cart: cloneCart});
    }
  render() {
    return (
      <div>
        <div className='row'>
            <div className='col-7'>
                <Cart handleChangeQuantity={this.handleChangeQuantity} handleRemove={this.HandleRemove} cart={this.state.cart}/>
            </div>
            <div className='col-5'>
                <ListShoe handleViewDetail={this.handleViewDetail} handleBuy={this.handleAdd} list={this.state.shoeArr}/>
                
            </div>
        </div>
        <DetailShoe detail={this.state.detail}/>
      </div>
    )
  }
}
