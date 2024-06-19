import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { projects } from './Routes/projects';
import { ProjectCard } from './Routes/ProjectCard';
import Slider from '../shared/Slider';
import RunningLine from './RunningLine';

export const Portfolio = () => {
    const portfolioRef = useRef(null);
    const isInView = useInView(portfolioRef, { once: true });

    const animation = useAnimation();

    useEffect(() => {
        animation.start({
            opacity: isInView ? 1 : 0,
            transition: {
                type: 'spring',
                duration: 1.7,
            },
        });
    }, [isInView, animation]);

    return (
        <>
            <RunningLine />
            <section className='2xs:mx-[1rem] md:mx-[6rem] xl:mx-[16rem] 2xl:mx-[28rem] 3xl:mx-[32rem] my-20 border-b-[1px]'>
                <motion.div 
                    className='md:pb-10 2xs:pb-6'
                    ref={portfolioRef}
                    animate={animation}
                >
                    <p className='text-white font-bold text-lg'>Nuestros sitios web</p>
                    <h2 className='text-blue-300 font-semibold xs:text-4xl 2xs:text-2xl sm:my-2 2xs:my-1'>Realizada por diferentes Desarrolladores</h2>
                    <p className='text-white sm:pr-80'>Estos son algunos proyectos realizados por los desarrolladores web que trabajan con nosotros, es solo una muestra de tantos que tenemos creados y desarrollados.</p>
                </motion.div>
                <Slider />
                <div className='md:grid grid-cols-3 gap-3 2xs:hidden'>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                <div className='flex 2xs:my-10 md:my-20'>
                </div>
            </section>
        </>
    );
};
