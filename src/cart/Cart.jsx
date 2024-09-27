import styles from './Cart.module.css';
import illustrationEmpty from '../assets/illustration-empty-cart.svg';

function Cart() {

    return(
        <div className={styles.cartCard}>
            <h2 className={styles.title}>
                Your Cart
            </h2>

            <img className={styles.emptyImg} src={illustrationEmpty} alt='Empty Card Illustration'/>

            <p className={styles.text}>
                Your added items will appear here
            </p>
        </div>
    )
}

export default Cart;