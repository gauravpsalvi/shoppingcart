import React, { Component } from 'react'
import Items from "./components/Items";
import Footer from "./components/Footer";
// import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    items: []
  }
  
  componentDidMount() {
    return new Promise(() => {
      fetch('./products.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({ items: data })
        //console.log(this.state.items)
      })
      .catch(console.log)

      // axios.get('http://localhost:3000/products.json')
      // .then(res => {
      //   const items = res.data;
      //   this.setState({ items });
      // })
      // .catch(console.log)
    })
  }
 
  handleIncrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if(items[index].quantity < 10) {
      items[index].quantity++;
      items[index].total = items[index].quantity * items[index].price;
    }
    else alert("You have reached maximum purchase limit per user for " + items[index].productName + "!!");   
    this.setState({ items });
  };
 
  handleDecrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if(items[index].quantity > 0) {
      items[index].quantity--;
      items[index].total = items[index].quantity * items[index].price;
    }
    else alert("You have removed all items of " + items[index].productName + "!!");
    this.setState({ items });
  };

  // handleAdd = item => {
  //   const items = [...this.state.items];
  //   const index = items.indexOf(item);
  //   items[index] = { ...item };
  //   items[index].total = items[index].quantity * items[index].price;
  //   items[index].cartQty = items[index].quantity;
  //   this.setState({ items });
  // };

  render() {
    return (
      <React.Fragment>
        <Items onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onAdd={this.handleIncrement} items={this.state.items} />
        {/* <Items onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onAdd={this.handleAdd} items={this.state.items} /> */}
        <Footer totalItems={this.state.items.reduce((prvQty, curQty) => { return prvQty + curQty.quantity; }, 0)} totalAmount={this.state.items.reduce((prvTot, curTot) => { return prvTot + curTot.total; }, 0)} />
      </React.Fragment>
    );
  }
}

export default App
