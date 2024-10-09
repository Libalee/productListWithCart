import React from 'react';
import styles from './Cart.module.css';
import illustrationEmpty from '../assets/illustration-empty-cart.svg';

function Cart(props) {

    const dessertList = props.desserts;
    const countDessert = props.funcCountDes;
    const containsDessert = props.funcContainDes;
    const removeAllFromCart = props.funcRemoveAllCart;
    // For dessert types that are in the dessertList
    let dessertListSingle = [];
    // Adding desserts to the dessertListSingle
    dessertList.forEach(d => containsDessert(d, dessertListSingle) ? null : dessertListSingle.push(d));

    function isCartEmpty() {
        return dessertList.length === 0;
    };

    function totalAmountDesserts() {
        let i = 0
        dessertList.forEach(d => i++);
        return i;
    };

    function calculatePrice(price, amount) {
        return(price * amount).toFixed(2);
    };

    function calculateTotal() {
        let total = 0;
        dessertListSingle.forEach(d => total += d.dessertPrice * (countDessert(d.dessertType)));
        return total;
    };

    return(
        <div className={styles.cartCard}>
            <h2 className={styles.title}>
                Your Cart ({totalAmountDesserts()})
            </h2>

            <div className={isCartEmpty() ? '' : styles.hidden}>
                <img className={styles.emptyImg} src={illustrationEmpty} alt='Empty Card Illustration'/>

                 <p className={styles.text}>
                Your added items will appear here
                </p>
            </div>

            <ul className={isCartEmpty() ? styles.hidden : styles.list}>
                {dessertListSingle.map((dessert, index) => <li className={styles.listItem} key={index}> 
                <div className={styles.sameLine}>
                    <p className={styles.type}>{dessert.dessertType}</p>
                    <button className={styles.buttonRemove} onClick={() => removeAllFromCart(dessert.dessertType)}> × </button>
                </div>
                <div className={styles.sameLine}>
                    <p className={styles.amount}>{countDessert(dessert.dessertType)}x</p>
                    <p className={styles.price}>@{dessert.dessertPrice}</p>
                    <p className={styles.totalPrice}>${calculatePrice(countDessert(dessert.dessertType), dessert.dessertPrice)}</p>
                </div></li>)}
            </ul>

            <div className={isCartEmpty() ? styles.hidden : styles.orderTotal}>
                <p className={styles.orderTotalText}>Order Total</p>
                <p className={styles.orderTotalNumber}>${calculateTotal()}</p>
            </div>
        </div>
    )
}

export default Cart;