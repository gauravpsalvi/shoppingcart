import React, { Component } from "react";

var leftSide = {
  float: "left",
  height: "230px",
  width: "40%",
  textAlign: "center", 
}

var rightSide = {
  float: "right",
  height: "230px",
  width: "60%"
}

var btnSecLeft = {
  float: "left",
  width:"50%"
}

var btnSecRight = {
  float: "right",
  width: "50%",
  textAlign: "center"
}
 
class Item extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
            <div style={leftSide}>
                <img src= {this.props.item.imageURL} className="imgProd" alt="test" /><br />
                <strong> {this.props.item.offerText} OFF </strong>
            </div>
            <div style={rightSide}>
                <h3> {this.props.item.brandName} </h3><br />
                {this.props.item.productName} <br />
                {this.props.item.weight} <br />
                MRP {this.props.item.mrp} <br />
                <h4> Rs {this.props.item.price} </h4><br />
                <div className="buttonSection">
                    <div style={btnSecLeft}>
                      <button className="btnAdd" onClick={() => this.props.onAdd(this.props.item)}>ADD CART</button>
                    </div>
                    <div style={btnSecRight}>
                      <button className="btnQty" onClick={() => this.props.onIncrement(this.props.item)}> + </button>
                      <span className={this.styleCardHeader()}> <strong> {this.styleCount()} </strong> </span>
                      <button className="btnQty" onClick={() => this.props.onDecrement(this.props.item)}> - </button>
                    </div>
                </div>
            </div>
            <hr/> 
        </div>
      </React.Fragment>
    );
  }
 
  styleCardHeader() {
    let classes = "";
    classes += this.props.item.quantity === 0 ? "warning" : "primary";
    return classes;
  }
 
  styleCount() {
    const { quantity } = this.props.item;
    if(quantity <= 0)
        return 0;
    else
        return quantity;
  }

}
 
export default Item;