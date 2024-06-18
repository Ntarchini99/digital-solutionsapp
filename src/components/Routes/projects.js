import SSTR1 from '@/assets/Projects/6.png';
import Knebel1 from '@/assets/Projects/2.png';
import Uwe1 from '@/assets/Projects/saborarte.png';
import dub from '@/assets/Projects/teza.png';
import dubb from '@/assets/Projects/constructora.png';
import fit from '@/assets/Projects/fitness.png';
import portfolio from '@/assets/Projects/portfolio.png';
import Yesor1 from '@/assets/Projects/1.png';
import Yoti1 from '@/assets/Projects/4.png';


export const imagesList = {
    'knebel': [Knebel1],
    'uwe-hub': [Uwe1],
    'uwe-dub': [dub],
    'uwe-dubb': [dubb],
    'uwe-fit': [fit],
    'uwe-portfolio': [portfolio],
    'yes-or': [Yesor1],
    'yoti': [Yoti1],
    'sstr': [SSTR1],
}

export const projects = [
    {
        id: 'knebel',
        'card-title': 'CryptoS',
        title: 'Knebel: Sitio web informativo',
        description: {
            concept: "Sitio Web de cripto's con valores en tiempo real.",
        },
        tags: ['Frontend WEB'],
        images: [imagesList.knebel],
        link: 'https://cryptossoftware.netlify.app/'
    },
    {
        id: 'uwe-hub',
        'card-title': 'SaborArte',
        title: 'Uwehub: Educational Website',
        description: {
            concept: "Menu de muestra RESTAURANTE.",
        },
        tags: ['Frontend Web'],
        images: [imagesList['uwe-hub']],
        link: 'https://saborarrte.netlify.app/'
    },
    {
        id: 'uwe-hub',
        'card-title': 'Teza',
        title: 'Tienda con pasarela de pagos',
        description: {
            concept: "Tienda con pasarela de pagos incluido (MODO).",
        },
        tags: ['Frontend Web / Backend '],
        images: [imagesList['uwe-dub']],
        link: 'https://teza-shoes.vercel.app/'
    },
    {
        id: 'uwe-hub',
        'card-title': 'Constructora',
        title: 'Sitio web para una constructora',
        description: {
            concept: "Sitio web para una constructora.",
        },
        tags: ['Frontend Web '],
        images: [imagesList['uwe-dubb']],
        link: 'https://industria-secttre.netlify.app/'
    },
    {
        id: 'uwe-hub',
        'card-title': 'Fitness',
        title: 'Sitio web para un gimnasio',
        description: {
            concept: "Sitio web para un gimnassio.",
        },
        tags: ['Frontend Web '],
        images: [imagesList['uwe-fit']],
        link: 'https://gimnasio-fit.netlify.app/'
    },
    {
        id: 'uwe-hub',
        'card-title': 'Portfolio',
        title: 'Portfolio personal',
        description: {
            concept: "Sitio web personales para cada rubro.",
        },
        tags: ['Frontend Web '],
        images: [imagesList['uwe-portfolio']],
        link: 'https://www.nazatarchini.com/'
    }
]



