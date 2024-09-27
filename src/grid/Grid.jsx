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


function Grid() {

    return(
        <div>
            <h2 className={styles.title}>
                Desserts
            </h2>

            <div className={styles.column}>
                <div className={styles.line}>
                < GridItem img={ImageWaffle} desertType='Waffle' desertFlavor='Waffle with Berries' price='6.50' />
                < GridItem img={ImageCremeBrulee} desertType='Crème Brûlée' desertFlavor='Vanilla Bean Crème Brûlées' price='7.00' />
                < GridItem img={ImageMacaron} desertType='Macaron' desertFlavor='Macaron Mix of Five' price='8.00' />
                </div>
                <div className={styles.line}>
                < GridItem img={ImageTiramisu} desertType='Tiramisu' desertFlavor='Classic Tiramisu' price='5.50' />
                < GridItem img={ImageBaklava} desertType='Baklava' desertFlavor='Pistachio Baklava' price='4.00' />
                < GridItem img={ImageMeringue} desertType='Pie' desertFlavor='Lemon Meringue Pie' price='5.00' />
                </div>
                <div className={styles.line}>
                < GridItem img={ImageCake} desertType='Cake' desertFlavor='Red Vevelt Cake' price='4.50' />
                < GridItem img={ImageBrownie} desertType='Brownie' desertFlavor='Salted Caramel Brownie' price='5.50' />
                < GridItem img={ImagePannaCotta} desertType='Panna Cotta' desertFlavor='Vanilla Panna Cotta' price='6.50' />
                </div>
            </div>
        </ div>
    )
}

export default Grid;