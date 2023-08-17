"use client";

import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Care and manage your apps, quickly and easily
        </h1>

        <p className='hero__subtitle'>
          Simplify your app management experience with our management process
        </p>
      </div>

      <div className='hero__motion-container'>
        <div className='hero__motion'>
          <ComputersCanvas />
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </div>

    </div>
  )
}

export default Hero