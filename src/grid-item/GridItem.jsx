import styles from './GridItem.module.css';

function GridItem(props) {

    const addToCart = props.addToCart;

    return(
        <div className={styles.gridItem}>
            <img className={styles.productImg} src={props.img} alt={props.desertFlavor} />
            <button onClick={() => addToCart(props.desertFlavor)} className={styles.buttonAdd}>Add to Cart</button>
            <p className={styles.text} id={styles.desertType}>{props.desertType}</p>
            <p className={styles.text} id={styles.desertFlavor}>{props.desertFlavor}</p>
            <p className={styles.text} id={styles.price}>${props.price}</p>
        </div>
    )
}

export default GridItem;