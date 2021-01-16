import React from 'react'

const Checkout = props => {
    const divStyle = {
        display: props.displayModal ? 'block' : 'none'
    };
    var totItems="", totAmt="", thnkMsg="", sucMsg="";
    if(props.totalQty === 0) {
        totItems = "Your cart is empty!!"
    }
    else {
        thnkMsg = "Thank you for shopping with us!!";
        sucMsg = "Transaction Successful!"
        totItems = "Total items: " + props.totalQty
        totAmt = "Your bill amount is: Rs " + props.totalAmount
    }

    function closeCheckout(e) {
        e.stopPropagation()
        props.closeCheckout()
    }

    return (
        <div className="popCheckout" onClick={ closeCheckout } style={ divStyle } >
            <div className="popCheckoutCont" onClick={ e => e.stopPropagation() }>
                <div className="d-flex closeBut justify-content-end" onClick={ closeCheckout }>&times;</div>
                <div className="d-flex justify-content-center">
                    <h3 id="checkoutMsg">{sucMsg}</h3><br />
                    <h4>{totItems}</h4><br />
                    <h4>{totAmt}</h4><br />
                    <hr/>
                    <h4 style={{color: "red"}}>{thnkMsg}</h4>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
