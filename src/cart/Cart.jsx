import React from 'react';
import styles from './Cart.module.css';
import illustrationEmpty from '../assets/illustration-empty-cart.svg';

function Cart(props) {

    const dessertList = props.desserts;

    function isCartEmpty() {
        return dessertList.length === 0;
    }

    function cartUpdater () {

    }

    return(
        <div className={styles.cartCard}>
            <h2 className={styles.title}>
                Your Cart
            </h2>

            <div className={isCartEmpty() ? '' : styles.hidden}>
                <img className={styles.emptyImg} src={illustrationEmpty} alt='Empty Card Illustration'/>

                 <p className={styles.text}>
                Your added items will appear here
                </p>
            </div>

            <ul onChange={cartUpdater()} className={isCartEmpty() ? styles.hidden : styles.list}>
                {dessertList.map((dessert, index) => <li key={index}> {dessert} </li>)}
            </ul>
        </div>
    )
}

export default Cart;