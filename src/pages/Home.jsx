import { motion,AnimatePresence } from "framer-motion"
import { useSnapshot } from "valtio"
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import state from "../store"
import (useSnapshot)
const Home = () => {
const snap=useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && 
            (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img 
                        src="./threejs.png"
                        alt="logo"
                        className="w-8 h-8 object-contain"
                        />
                    </motion.header>
                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                Let's <br className="x1:block hidden"/> Do it.
                            </h1>
                        </motion.div >
                        <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
                            <p className="max-w-md font normal text-grey-600 text-base">
                             Create your unique and exclusive shirt with our brand-new 3D customization tool <strong>Unleash your imagination</strong> {" "} and define your own style.
                            </p>
                        </motion.div>

                    </motion.div>
                </motion.section>
            )
        }
    </AnimatePresence>
  )
}

export default Home