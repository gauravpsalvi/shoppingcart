import React, { Component } from "react";
import ItemNew from "./Item";
 
class Items extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="containerBody">
          {this.props.items.map(item => (
            <ItemNew key={item.id} onDecrement={this.props.onDecrement} onIncrement={this.props.onIncrement} onAdd={this.props.onIncrement} item={item} />
            // <ItemNew key={item.id} onDecrement={this.props.onDecrement} onIncrement={this.props.onIncrement} onAdd={this.props.onAdd} item={item} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
 
export default Items;