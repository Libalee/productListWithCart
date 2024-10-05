import styles from './Grid.module.css';
import GridItem from '../grid-item/GridItem';
import ImageWaffle from '../assets/image-waffle-desktop.jpg';
import ImageCremeBrulee from '../assets/image-creme-brulee-desktop.jpg';
import ImageMacaron from '../assets/image-macaron-desktop.jpg';
import ImageTiramisu from '../assets/image-tiramisu-desktop.jpg';
import ImageBaklava from '../assets/image-baklava-desktop.jpg';
import ImageMeringue from '../assets/image-meringue-desktop.jpg';
import ImageBrownie from '../assets/image-brownie-desktop.jpg';
import ImageCake from '../assets/image-cake-desktop.jpg';
import ImagePannaCotta from '../assets/image-panna-cotta-desktop.jpg';


function Grid(props) {

    return(
        <div>
            <h2 className={styles.title}>
                Desserts
            </h2>

            <div className={styles.column}>
                <div className={styles.line}>
                < GridItem img={ImageWaffle} dessertType='Waffle' dessertFlavor='Waffle with Berries' price='6.50' 
                addToCart={props.funcAddCart} removeFromCart={props.funcRemoveCart} countDessert={props.funcCountDes}/>
                < GridItem img={ImageCremeBrulee} dessertType='Crème Brûlée' dessertFlavor='Vanilla Bean Crème Brûlées' price='7.00' 
                addToCart={props.funcAddCart} removeFromCart={props.funcRemoveCart} countDessert={props.funcCountDes}/>
                < GridItem img={ImageMacaron} dessertType='Macaron' dessertFlavor='Macaron Mix of Five' price='8.00' 
                addToCart={props.funcAddCart} removeFromCart={props.funcRemoveCart} countDessert={props.funcCountDes}/>
                </div>
                <div className={styles.line}>
                < GridItem img={ImageTiramisu} dessertType='Tiramisu' dessertFlavor='Classic Tiramisu' price='5.50' 
                addToCart={props.funcAddCart} removeFromCart={props.funcRemoveCart} countDessert={props.funcCountDes}/>
                < GridItem img={ImageBaklava} dessertType='Baklava' dessertFlavor='Pistachio Baklava' price='4.00' 
                addToCart={props.funcAddCart} removeFromCart={props.funcRemoveCart} countDessert={props.funcCountDes}/>
                < GridItem img={ImageMeringue} dessertType='Pie' dessertFlavor='Lemon Meringue Pie' price='5.00' 
                addToCart={props.funcAddCart} removeFromCart={props.funcRemoveCart} countDessert={props.funcCountDes}/>
                </div>
                <div className={styles.line}>
                < GridItem img={ImageCake} dessertType='Cake' dessertFlavor='Red Vevelt Cake' price='4.50' 
                addToCart={props.funcAddCart} removeFromCart={props.funcRemoveCart} countDessert={props.funcCountDes}/>
                < GridItem img={ImageBrownie} dessertType='Brownie' dessertFlavor='Salted Caramel Brownie' price='5.50' 
                addToCart={props.funcAddCart} removeFromCart={props.funcRemoveCart} countDessert={props.funcCountDes}/>
                < GridItem img={ImagePannaCotta} dessertType='Panna Cotta' dessertFlavor='Vanilla Panna Cotta' price='6.50' 
                addToCart={props.funcAddCart} removeFromCart={props.funcRemoveCart} countDessert={props.funcCountDes}/>
                </div>
            </div>
        </ div>
    )
}

export default Grid;