import React from "react";
import styles from './Home.module.css'
import {Dashboard} from "./Dashboard"
import {Foot} from "./Foot"
const Home = () => {
    return (
        <div>
        <Dashboard />

        <Foot />
        </div>
        // <div className={styles.main}>
        //     <div>
        //         <div>
        //             <img src="https://img.favpng.com/24/21/19/airplane-flight-clip-art-png-favpng-fFe7kRPCiQJhVXpQqMHNw1Rjz.jpg" className={styles.image} />
        //         </div>
        //         <div>
        //             <h3 className={styles.head}>Analytics Dashboard</h3>
        //             <p className={styles.para}>Dashboard is an online report where your website data from ecommerce to web analytics is displayed </p>
        //         </div>
        //     </div>
        //     <div>
        //         <div className={styles.task}>
                   
        //                 <div className={styles.box}>
        //                     <div className={styles.line}></div>
        //                     <div className={styles.check}>
        //                         <input type="checkbox"></input>
        //                     </div>
        //                     <div>
        //                         <h5>Wash the car</h5>
        //                         <p>Written the Bob</p>
        //                     </div>
    
        //                 </div>
        //                 <div>
                            
        //                 </div>
        //                 <div></div>
                    
        //         </div>
        //         <div className={styles.chat}>
        //              Chat Box
        //         </div>
        //     </div>
        // </div>
    )
}

export default Home