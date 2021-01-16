import React, { Component } from "react";
import Checkout from "./Checkout";

var btnSecLeft = {
    float: "left"
}

var btnSecRight = {
    float: "right"
}
 
class Footer extends Component {
    state = {
        popCheckout: false
    }
       
    selectPopCheckout = () => {
        this.setState({popCheckout: !this.state.popCheckout})
    }

    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="footer">
                        <div style={btnSecLeft}>
                            <h4 className="footerItem">Qty {this.props.totalItems}</h4><br/>
                            <h4 className="footerItem">Total {this.props.totalAmount}</h4>
                        </div>
                        <div style={btnSecRight}>
                            <button className="btnCheckout" onClick={ this.selectPopCheckout }>CHECKOUT</button>
                            <Checkout displayModal={this.state.popCheckout} closeCheckout={this.selectPopCheckout} className="footerItem" totalQty={this.props.totalItems} totalAmount={this.props.totalAmount} />
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}
 
export default Footer;