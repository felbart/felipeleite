import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaBehance,
    FaInstagram,
  } from "react-icons/fa6";

  import {
    SiFigma, 
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiJavascript,
    SiAdobeillustrator,
    SiAdobeaftereffects,
    SiAdobephotoshop,
    SiAdobeindesign, 
  } from "react-icons/si";

  
  import tsr01 from "../assets/images/tsr-01.png";
  import tsr02 from "../assets/images/tsr-02.png";
  import tsr03 from "../assets/images/tsr-03.png";
  import tsrimgcover from "../assets/images/tsr-destaque-img.png";
  
  import uft01 from "../assets/images/uft-01.png";
  import uft02 from "../assets/images/uft-02.png";
  import uft03 from "../assets/images/uft-03.png";
  import uftimgcover from "../assets/images/uft-img-cover.png";

  import maisumdia01 from "../assets/images/mais-um-dia-01.png";
  import maisumdia02 from "../assets/images/mais-um-dia-02.png";
  import maisumdia03 from "../assets/images/mais-um-dia-03.png";
  import maisumdiaimgcover from "../assets/images/maisumdia-img-cover.png";

  import fapto01 from "../assets/images/fapto-01.png";
  import fapto02 from "../assets/images/fapto-02.png";
  import faptoimgcover from "../assets/images/fapto-img-cover.png";


  
  import user1 from "../assets/images/profile/profile-img-01.png";
  import user2 from "../assets/images/profile/profile-img-02.png";
  import user3 from "../assets/images/profile/profile-img-03.png";
  import user4 from "../assets/images/profile/profile-img-04.png";

  
  export const NAVIGATION_LINKS = [
    { label: "Home", href: "/" },
    { label: "Projetos", href: "/projects" },
    { label: "Sobre", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contact" },
  ];
  

  export const HERO = {
    title: "branding, product designer & Frontend",
    span: "Olá, eu sou o Felipe 👋. Um designer apaixonado por marcas e produtos digitais",
    span1: "Felipe Leite"
  }

  export const PROFILE = {
    name: "Felipe Leite",
    info: " UI UX Designer, especialista em Branding. Flutuando entre a tecnologia e a comunicação.",
  };
  
  export const ABOUT = {
    text1:
      "Olá, eu sou Felipe - UI/UX Designer, mestre em Comunicação e especialista em Branding.",
    text2:
      "Designer UI/UX com 5 anos de experiência na criação de produtos e experiências digitais centrados no usuário. Transitei de uma carreira de 12 anos em design gráfico para design de produtos digitais. Proficiente em HTML, CSS e JavaScript, combinando criatividade com expertise técnica. Hábil em pesquisa de usuário, wireframing, prototipagem e design responsivo.",
  };
  
  export const CTA = {
      text: "O melhor design não é apenas inovador, é acessível para todos.",
      text2: "O design que realmente importa é aquele que todos podem acessar. A inovação abre portas, mas a inclusão garante que todos possam entrar"
  };

  export const PROJECTS = [
    {
      id: '01',
      title: "TSR Oraculo",
      subtitle: "TSR Oráculo - Web3 Oracle Dashboard",
      description: "Dapp que conquistou o terceiro lugar como solução para o Hackathon do Tesouro Nacional Brasileiro sobe tokenização e Web3 de 2023.",
      image: [tsr01, tsr02, tsr03],
      imgcover: tsrimgcover,
      date: "Jun 2024",
      role: "UI Designer & Web",
      technologies: "Bootstrap, SAAS, Figma, HTML, CSS",
      deliverables: "Branding, UI Interface, Responsive Web",
      company: "Vale das Araucárias (Hackathon team)",
      link: "tsr-oraculo",
      featured: true,
      content:""
    },
    {
      id: '02',
      title: "Novo Portal UFT",
      subtitle: "Portal desenvolvido nos padrões do DS do Governo Federal",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint consectetur quasi modi accusamus explicabo repellat quas itaque, commodi hic enim facilis corporis voluptas maiores incidunt libero, maxime, quisquam harum",
      image: [uft01, uft02, uft03],
      imgcover: uftimgcover,
      date: "Jun 2024",
      role: "UX UI Designer & Frontend",
      technologies: "DSGov, Figma, React, Plone",
      deliverables: "UI, Design System, Frontend",
      company: "Universidade Federal do Tocantins UFT",
      link:"novo-portal-uft",
      featured: true,
    },
    {
      id: '03',
      title: "Mais um Dia",
      subtitle: "Aplicativo de saúde mental para jovens universitários",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint consectetur quasi modi accusamus explicabo repellat quas itaque, commodi hic enim facilis corporis voluptas maiores incidunt libero, maxime, quisquam harum",
      image: [maisumdia01, maisumdia02, maisumdia03],
      imgcover: maisumdiaimgcover,
      date: "Jun 2024",
      role: "UX UI Designer",
      technologies: "Figma, HTML, CSS, JavaScript",
      deliverables: "Branding, UI Interface, Prototype",
      company: "Universidade Federal do Tocantins UFT",
      link: "mais-um-dia",
      featured: false,
    },
    {
      id: '04',
      title: "Novo Portal Fapto",
      subtitle: "Redesign Portal Institucional Fundação de Apoio Científico e Tecnológico do Tocantins - Fapto",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint consectetur quasi modi accusamus explicabo repellat quas itaque, commodi hic enim facilis corporis voluptas maiores incidunt libero, maxime, quisquam harum",
      image: [fapto01, fapto02],
      imgcover: faptoimgcover,
      date: "Jun 2024",
      role: "UX UI Designer",
      technologies: "Figma, HTML, CSS, JavaScript",
      deliverables: "Branding, UI Interface, Prototype",
      company: "Fundação de Apoio Científico e Tecnológico do Tocantins - Fapto",
      link: "portal-fapto",
      featured: false,
    },
  ];
  
  export const XP = [
    {
      role: "UI UX Designer",
      company: "Universidade Federal do Tocantins - UFT",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint consectetur quasi modi accusamus explicabo repellat quas itaque, commodi hic enim facilis corporis voluptas maiores incidunt libero, maxime, quisquam harum",
      period: "2019-atual",
    },
    {
      role: "Designer Gráfico",
      company: "Freelancer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint consectetur quasi modi accusamus explicabo repellat quas itaque, commodi hic enim facilis corporis voluptas maiores incidunt libero, maxime, quisquam harum",
      period: "2006-2019",
    },
    {
      role: "Mentor voluntário",
      company: "Guia UX Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint consectetur quasi modi accusamus explicabo repellat quas itaque, commodi hic enim facilis corporis voluptas maiores incidunt libero, maxime, quisquam harum",
      period: "2022-atual",
    },
  ]

  export const SKILLS = [
    {
      icon: <SiFigma />,
      name: "Figma",
      experience: "5+ anos",
    },
    {
      icon: <SiHtml5 />,
      name: "HTML 5",
      experience: "10+ anos",
    },
    {
      icon: <SiCss3 />,
      name: "CSS 3",
      experience: "10+ anos",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
      experience: "2+ anos",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstratp",
      experience: "10+ anos",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      experience: "5+ anos",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Illustrator",
      experience: "8+ anos",
    },
    {
      icon: <SiAdobeindesign />,
      name: "InDesign",
      experience: "8+ anos",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Photoshop",
      experience: "8+ anos",
    },
    {
      icon: <SiAdobeaftereffects />,
      name: "After Effects",
      experience: "8+ anos",
    },
  ];
  
  export const ACHIEVEMENT = {
    title: "International Hackaton - Tokyo",
    award: "Gold Medalist - 2024",
    description:
      "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
  };
  
  export const TESTIMONIALS = [
    {
      name: "Emily Johnson",
      title: "CEO, Tech Innovators",
      quote:
        "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
      image: user1,
    },
    {
      name: "Michael Lee",
      title: "CTO, Creative Minds",
      quote:
        "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
      image: user2,
    },
    {
      name: "Sophia Martinez",
      title: "Lead Developer, Digital Solutions",
      quote:
        "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
      image: user3,
    },
    {
      name: "Daniel Thompson",
      title: "Project Manager, InnovateX",
      quote:
        "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
      image: user4,
    },
  ];
  
  export const SOCIAL_MEDIA_LINKS = [
    
    {
      href: "https://linkedin.com/in/felbart",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://instagram.com/felipeleite.design",
      icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://behance.net/felbart",
      icon: <FaBehance fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/felbart",
      icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://github.com/felbart",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
  ];