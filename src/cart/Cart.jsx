import React from 'react';
import styles from './Cart.module.css';
import illustrationEmpty from '../assets/illustration-empty-cart.svg';

function Cart(props) {

    const dessertList = props.desserts;
    const countDessert = props.funcCountDes;
    // For dessert types that are in the dessertList
    let dessertListSingle = [];
    // Adding desserts to the dessertListSingle
    dessertList.forEach(d => dessertListSingle.includes(d) ? null : dessertListSingle.push(d));

    function isCartEmpty() {
        return dessertList.length === 0;
    }

    function totalAmountDesserts() {
        let i = 0
        dessertList.forEach(d => i++);
        return i;
    }

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
                {dessertListSingle.map((dessert, index) => <li key={index}> {dessert} {countDessert(dessert)} </li>)}
            </ul>
        </div>
    )
}

export default Cart;