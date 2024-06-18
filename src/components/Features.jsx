import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Feature from './Features/Feature';

export const Features = () => {

    const featuresRef = useRef(null)
    const isInView = useInView(featuresRef, { once: true })

    const animation = useAnimation()

    useEffect(() => {
        animation.start({
            y: 0,
            opacity: isInView ? 1 : 0,
            transition: {
                type: 'spring',
                duration: 1.7,
            }
        })
    }, [isInView, animation])

    return (
        <section className='2xs:px-[1rem] md:px-[6rem] xl:px-[16rem] 2xl:px-[28rem] 3xl:px-[32rem] py-20  relative z-40' >
            <div>

            </div>
            <motion.div
                ref={featuresRef}
                animate={animation}
            >
                <p className='text-white font-bold text-lg'>Al elegirnos, usted...</p>
                <h2 className='text-white font-semibold xs:text-4xl 2xs:text-2xl sm:my-2 2xs:my-1'>Libera todo el potencial de su visión</h2>
                <p className='text-white md:pb-10 2xs:pb-6 sm:pr-80'>Respaldada por un Portfolio de <span className='text-blue-400 font-bold'>+50 proyectos realizados con éxito</span>, Nuestra agencia
                    cuenta con una alta experiencia en Marketing Digital, Manejo de Redes Sociales, Desarrollo de Sitios y Apps Web de vanguardia, como asi tambien en Branding y Diseño UX UI.</p>
            </motion.div>
            <div>
                <Feature />
            </div>
        </section>
    )
}