import SSTR1 from '@/assets/Projects/6.png';
import Daiwo1 from '@/assets/Projects/5.png';
import Knebel1 from '@/assets/Projects/2.png';
import Uwe1 from '@/assets/Projects/saborarte.png';
import Yesor1 from '@/assets/Projects/1.png';
import Yoti1 from '@/assets/Projects/4.png';


export const imagesList = {
    'daiwo': [Daiwo1],
    'knebel': [Knebel1],
    'uwe-hub': [Uwe1],
    'yes-or': [Yesor1],
    'yoti': [Yoti1],
    'sstr': [SSTR1],
}

export const projects = [
    {
        id: 'yes-or',
        'card-title': 'BlackLabs Strategies',
        title: 'YesOR: Corporate Website',
        description: {
            concept: "Sitio web para asesoria Financiera y de Trading.",
        },
        tags: ['Frontend WEB'],
        images: [imagesList['yes-or']],
        link: 'https://backlab-strategies.vercel.app/home'
    },
    {
        id: 'knebel',
        'card-title': 'CryptoS',
        title: 'Knebel: E-Commerce Development',
        description: {
            concept: "Web informativa de criptomonedas.",
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
            concept: "Restaurante de muestra de Frontend.",
        },
        tags: ['Frontend Web'],
        images: [imagesList['uwe-hub']],
        link: 'https://saborarrte.netlify.app/'
    }
]



