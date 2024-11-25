import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { motion } from 'framer-motion';

function HeroHome() {
  const textVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 }
};
  return (
    <section
      id="hero"
      className="hero min-h-screen"
    >
      <div className="object-right-top"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
      <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 1 }}
            >
                { <div className='flex-col'>
          <h1 className="text-5xl font-bold">Hola, soy Aaron!</h1>
          <h2 className='py-6'>Desarrollador web front-end</h2>
          <p className="py-6">
             Me especializo en React y Typescript aunque también tengo conocimiento en modelado de DB, python y SQL server.
            Comprometido con la calidad en mi trabajo utilizando los principios SOLID.
          </p>
          
          <a className='btn border-0 bg-blue-100 shadow-sm' href="public/Resume.pdf" download="resume">Descargar CV</a>
        </div>}
            </motion.div>
       

        <DotLottieReact
          src="src\assets\codingAvatarDefinitive.json"
          loop
          autoplay
        />
      </div>
    </section>
  )
}

export default HeroHome
