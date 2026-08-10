export interface Project {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    class?: string;
  };
  links: {
    href: string;
    label: string;
    icon: string;
  }[];
}

export const projects: Project[] = [
    {
        title: "YachayCodex",
        description: `Editor de código HTML, CSS y JavaScript en línea. Crea y edita tu código en tiempo real, únete a una sala para programar en equipo, resuelve retos y ejercicios de JavaScript, utiliza un chat de IA para generar código y comparte tus proyectos a través de un solo enlace.`,
        image: {
            src: "/yachaycodex.webp",
            alt: "Screenshot de Yachay Codex, editor de código en línea.",
            width: 1480,
            height: 952,
            class: "object-top"
        },
        links: [
            {
                href: "https://yachaycodex.dev",
                label: "Ver Sitio",
                icon: "external",
            },
        ],
    },
    {
        title: "Impostor Game (+4,100 visitas al mes)",
        description: "Impostor Game es un juego de deducción social para jugar con amigos. Descubre quién es el impostor usando pistas, lógica y engaño.",
        image: {
            src: "/shot-impostor-game.webp",
            alt: "Screenshot de Impostor Game",
            width: 1920,
            height: 1280,
        },
        links: [
            {
                href: "https://impostores.online",
                label: "Ver Sitio",
                icon: "external",
            },
        ],
    },
    {
        title: "Software para la gestión de Operaciones de Transporte",
        description: `Software que permite llevar el control de preoperacionales,
        conductores, vehículos, programación de rutas entre otros. Realizado
        por JnixSoft para clientes de la región del Putumayo en Colombia.`,
        image: {
            src: "/demo-jnixsoft.webp",
            alt: "Software de Gestión de Transporte Screenshot",
            width: 960,
            height: 640,
        },
        links: [
            {
                href: "https://demo.jnixsoft.com/",
                label: "Ver Demo",
                icon: "external",
            },
        ],
    },
    {
        title: "Landing Page JnixSoft",
        description: `Nueva Landing page de la empresa JnixSoft, empresa de desarrollo de
        software en la región del Putumayo en Colombia.`,
        image: {
            src: "/landing-jnixsoft.webp",
            alt: "Landing Page JnixSoft Screenshot",
            width: 960,
            height: 640,
        },
        links: [
            {
                href: "https://jnixsoft.vercel.app/",
                label: "Ver Sitio",
                icon: "external",
            },
        ],
    },
];
