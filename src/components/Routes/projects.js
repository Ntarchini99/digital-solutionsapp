import SSTR1 from '@/assets/Projects/constructora.png';
import Daiwo1 from '@/assets/Projects/fitness.png';
import Knebel1 from '@/assets/Projects/2.png';
import Uwe1 from '@/assets/Projects/saborarte.png';
import Yesor1 from '@/assets/Projects/teza.png';
import Yoti1 from '@/assets/Projects/portfolio.png';

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
        'card-title': 'Tienda Online',
        title: 'YesOR: Corporate Website',
        description: {
            concept: "Tienda con pasarela de pagos incorporada (MODO).",
            year: '2023',
            client: 'YesOR',
            website: 'June 2, 2023',
        },
        tags: [ 'Frontend', ' Backend' ],
        images: [imagesList['yes-or']],
    },
    {
        id: 'knebel',
        'card-title': 'Crypto Software',
        title: 'Knebel: E-Commerce Development',
        description: {
            concept: "Landing Page de cripto con valores en tiempo real.",
            year: '2023',
            client: 'Knebel',
            website: 'June 2, 2023',
        },
        tags: [ 'UI/UX','Frontend web' ],
        images: [imagesList.knebel]
    },
    {
        id: 'uwe-hub',
        'card-title': 'Menu Restaurante',
        title: 'Uwehub: Educational Website',
        description: {
            concept: "Menu web para un restaurante.",
            year: '2022',
            client: 'Uwehub',
            website: 'June 2, 2023',
        },
        tags: [ 'Frontend Web' ],
        images: [imagesList['uwe-hub']],
    },
    {
        id: 'yoti',
        'card-title': 'Portfolio Personal',
        title: 'Yoti: E-Commerce Business Branding',
        description: {
            concept: "Portfolio personal para marca personal.",
            year: '2023',
            client: 'Yoti',
            website: 'June 2, 2023',
        },
        tags: [ 'UI/UX','Frontend Web', ],
        images: [imagesList.yoti],
    },
    {
        id: 'd-a-i-wo',
        'card-title': 'Gimnasio Fitness',
        title: 'D.A.I.Wo: Branding & Web3 Development',
        description: {
            concept: "Sitio web oficial de un gimnasio Fitness.",
            year: '2023',
            client: 'D.A.I.Wo',
            website: 'June 2, 2023',
        },
        tags: ['Frontend Web'
        ],
        images: [imagesList['daiwo']],
    },
    {
        id: 'sstr',
        'card-title': 'Constructora',
        title: 'SSTR: Branding & Pitch-Deck Design',
        description: {
            concept: "Sitio web desarrollado para una constructora.",
            year: '2023',
            client: 'SSTR',
            website: 'June 2, 2023'
        },
        tags: ['UX/UI', 'Frontend Web', ],
        images: [imagesList.sstr],
    },
]