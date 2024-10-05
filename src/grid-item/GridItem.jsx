import styles from './GridItem.module.css';

function GridItem(props) {

    const addToCart = props.addToCart;
    const removeFromCart = props.removeFromCart;
    const countDes = props.countDessert;

    return(
        <div className={styles.gridItem}>
            <img className={styles.productImg} src={props.img} alt={props.dessertFlavor} />

            <div>
                <button className={countDes(props.dessertFlavor) === 0 ? styles.hidden :styles.countButton}>
                    {countDes(props.dessertFlavor)}
                </button>

                <button onClick={() => addToCart(props.dessertFlavor)} 
                className={countDes(props.dessertFlavor) === 0 ? styles.buttonFirstAdd : styles.buttonAdd}>
                    {countDes(props.dessertFlavor) === 0 ? 'Add to Cart' : '+'}
                </button>

                <button onClick={() => removeFromCart(props.dessertFlavor)} 
                className={countDes(props.dessertFlavor) === 0 ? styles.hidden : styles.buttonRemove}>
                    &minus;
                </button>
            </div>
  
            <p className={styles.text} id={styles.dessertType}>{props.dessertType}</p>
            <p className={styles.text} id={styles.dessertFlavor}>{props.dessertFlavor}</p>
            <p className={styles.text} id={styles.price}>${props.price}</p>
        </div>
    )
}

export default GridItem;