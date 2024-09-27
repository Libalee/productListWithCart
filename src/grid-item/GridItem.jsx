import styles from './GridItem.module.css';

function GridItem(props) {

    return(
        <div className={styles.gridItem}>
            <img className={styles.productImg} src={props.img} alt="waffle with berries" />
            <button className={styles.buttonAdd}>Add to Cart</button>
            <p className={styles.text} id={styles.desertType}>{props.desertType}</p>
            <p className={styles.text} id={styles.desertFlavor}>{props.desertFlavor}</p>
            <p className={styles.text} id={styles.price}>${props.price}</p>
        </div>
    )
}

export default GridItem;