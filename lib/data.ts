import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'didarulislamakand@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Didarul, I am reaching out to you because...',

    upworkProfile: 'https://www.upwork.com/freelancers/~01bf303277746d07f7',
    whatsapp: 'https://wa.me/+8801777919189',
};

export const SOCIAL_LINKS = [
    // { name: 'github', url: 'https://github.com/Tajmirul' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/didarul-islam-akand-a6a83424b/' },
    { name: 'facebook', url: 'https://www.facebook.com/akand.didarul.islam' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'HTML',
            icon: '/logo/html.webp',
        },
        {
            name: 'CSS',
            icon: '/logo/css.webp',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'jQuery',
            icon: '/logo/jquery.webp',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Flutter',
            icon: '/logo/flutter.webp',
        },
       
        
    ],
    backend: [
        {
            name: 'Laravel',
            icon: '/logo/laravel.jpg',
        },
       
        {
            name: 'PHP',
            icon: '/logo/php.png',
        },
       
        
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
    ],
    "payment method": [
        {
            name: 'Bkash',
            icon: '/logo/bKash-Logo.png',
        },
        {
            name: 'SSLCommerz',
            icon: '/logo/SSLCommerz.png',
        },
        {
            name: 'ShurjoPay',
            icon: '/logo/ShurjoPay.jpeg',
        },
        {
            name: 'aamarpay',
            icon: '/logo/aamarpay.png',
        },
        {
            name: 'UddoktaPay',
            icon: '/logo/UddoktaPay.png',
        },
        {
            name: 'Nagad',
            icon: '/logo/Nagad-Logo.png',
        },
        {
            name: 'Paypal',
            icon: '/logo/Paypal.png',
        },
        {
            name: 'Stripe',
            icon: '/logo/Stripe.jpeg',
        },
        
    ],
    others: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'cPanel',
            icon: '/logo/cPanel.png',
        },
        {
            name: 'REST API Integration',
            icon: '/logo/rest-api-icon.png',
        },
        {
            name: 'API Development',
            icon: '/logo/api.png',
        },
        {
            name: 'SEO Optimization',
            icon: '/logo/seo.png',
        },
        
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'BIMSTEC',
        slug: 'bimstec',
        liveUrl: 'https://bimstec.org/',
        year: 2025,
        description: `
      The Bay of Bengal Initiative for Multi-Sectoral Technological and Economic Cooperation is an international organization of seven South Asian and Southeast Asian nations, housing 1.73 billion people and having a combined gross domestic product of US$5.2 trillion.. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Service Management: Dynamic service listing with interactive display</li>
        <li>✍️ Blog Module: SEO-friendly blog with category & search functionality</li>
        <li>📱 Fully Responsive: Optimized UI for all screen sizes</li>
        <li>⚡ Fast Performance: Database optimization & caching for better speed</li>
        </ul><br/>
      
      Technical Highlights:
        <ul>
        <li>Developed RESTful APIs & business logic using Laravel</li>
        <li>Integrated AJAX & Yajra DataTables for dynamic data rendering</li>
        <li>Created reusable Blade components for UI consistency</li>
        <li>Configured deployment pipeline on VPS/cPanel for smooth release</li>
        </ul>
      `,
        role: `
      Backend Developer <br/>
      Owned the entire development lifecycle:
        <ul>
        <li>✅ Backend: Developed Admin Panel, RESTful APIs and business logic using Laravel</li>
        <li>🎨 Frontend: Implemented responsive UI with Blade, Tailwind CSS, and Bootstrap</li>
        <li>🔄 State Management: Integrated AJAX & jQuery for dynamic data handling</li>
        <li>🚀 Deployment: Configured and deployed the application on VPS/cPanel</li>
        </ul>
      `,
        techStack: [
            'HTML',
            'Laravel',
            'MySql',
        ],
        thumbnail: '/projects/thumbnail/bimstec.png',
        longThumbnail: '/projects/long/bimstec.png',
        images: [
            '/projects/images/bimstec.png',
        ],
    },
    {
        title: 'Binary Logic',
        slug: 'binarylogic',
        techStack: [
            'HTML',
            'Laravel',
            'MySql',
        ],
        thumbnail: '/projects/thumbnail/binarylogic.png',
        longThumbnail: '/projects/long/binarylogic.png',
        images: [
            '/projects/images/binarylogic.png',
        ],
        liveUrl: 'https://www.binarylogic.com.bd/',
        year: 2023,
        description: `Binary Logic is a computer store offering custom-built PCs, components, and accessories for high-end gaming, office, 
        graphics design, video editing, and servers. They feature competitive prices, prompt delivery, and reliable service.<br><br/>
        Key Features:<br/>
      <ul>
        <li>🛠️ Service Management: Dynamic service listing with interactive display</li>
        <li>✍️ Blog Module: SEO-friendly blog with category & search functionality</li>
        <li>🛒 Product Catalog: Structured product showcase with filters & sorting</li>
        <li>📱 Fully Responsive: Optimized UI for all screen sizes</li>
        <li>⚡ Fast Performance: Database optimization & caching for better speed</li>
        </ul><br/>
        `,
        role: `
      Backend Developer <br/>
      Owned the entire development lifecycle:
        <ul>
        <li>✅ Backend: Developed Admin Panel, RESTful APIs and business logic using Laravel</li>
        <li>🎨 Frontend: Implemented responsive UI with Blade, Tailwind CSS, and Bootstrap</li>
        <li>🔄 State Management: Integrated AJAX & jQuery for dynamic data handling</li>
        <li>🚀 Deployment: Configured and deployed the application on VPS/cPanel</li>
        </ul>
      `,
    },
    {
        title: 'Bondhu Style',
        slug: 'bondhustyle',
        techStack: [
            'HTML',
            'Laravel',
            'MySql',
        ],
        thumbnail: '/projects/thumbnail/bondhustyle.png',
        longThumbnail: '/projects/long/bondhustyle.png',
        images: [
            '/projects/images/bondhustyle.png',
        ],
        liveUrl: 'https://bondhustyle.com/',
        year: 2023,
        description:
            `BondhuStyle is a fashion e-commerce brand offering trendy and affordable clothing, footwear, and accessories for men, women, and kids. 
            The platform features a wide range of stylish collections, seasonal discounts, and new arrivals, making it a go-to destination for everyday fashion needs in Bangladesh. <br> <br>
        Technical Highlights:
        <ul>
        <li>🔐 Integrated Fraud Checker API for transaction security and fraud prevention</li>
        <li>🖥️ Developed reusable Blade components for modular UI design</li>
        <li>💳 Configured payment gateways: bKash, Nagad, SSLCommerz, PayPal, Stripe</li>
        <li>⚡ Applied database optimization & caching for faster performance</li>
        <li>📈 Implemented SEO best practices to improve organic traffic</li>
        </ul>

            `,
        role: `
        Backend Developer <br/>
        Owned the entire development lifecycle:
        <ul>
            <li>✅ Backend: Developed Admin Panel, RESTful APIs, and business logic using Laravel</li>
            <li>🎨 Frontend: Built responsive UI with HTML, CSS, Bootstrap, Tailwind CSS, and jQuery</li>
            <li>🔄 State Management: Integrated AJAX & jQuery for dynamic content updates</li>
            <li>💳 Payment Integration: Connected local (bKash, Nagad, SSLCommerz) and international (PayPal, Stripe) gateways</li>
            <li>🔐 Security: Integrated Fraud Checker API for safe and verified transactions</li>
            <li>📈 SEO Optimization: Implemented metadata, clean URLs, and best practices for search ranking</li>
            <li>🚀 Deployment: Configured and deployed the application on VPS/cPanel</li>
        </ul>
        `,
    },
    {
        title: 'Education System',
        slug: 'itacademy24',
        techStack: [
            'HTML',
            'Laravel',
            'MySql',
        ],
        thumbnail: '/projects/thumbnail/itacademy24.png',
        longThumbnail: '/projects/long/itacademy24.png',
        images: [
            '/projects/images/itacademy24.png',
        ],
        liveUrl: 'https://itacademy24.com/',
        year: 2023,
        description:
            'itacademy24 is an online learning platform where users can purchase courses, attend exams, and earn certificates. The site also supports secure payment integration for a smooth learning experience.',
        role: `
        Backend Developer <br/>
        Owned the entire development lifecycle:
            <ul>
            <li>✅ Backend: Developed Admin Panel, RESTful APIs and business logic using Laravel</li>
            <li>🎨 Frontend: Implemented responsive UI with Blade, Tailwind CSS, and Bootstrap</li>
            <li>🔄 State Management: Integrated AJAX & jQuery for dynamic data handling</li>
            <li>🚀 Deployment: Configured and deployed the application on VPS/cPanel</li>
            </ul>
        `,
    },
    {
        title: 'Newspaper',
        slug: 'bartabela',
        techStack: [
            'HTML',
            'Laravel',
            'MySql',
        ],
        thumbnail: '/projects/thumbnail/bartabela.png',
        longThumbnail: '/projects/long/bartabela.png',
        images: [
            '/projects/images/bartabela.png',
        ],
        liveUrl: 'https://www.bartabela.com/',
        year: 2023,
        description:
            'This newspaper platform delivers the latest news, articles, and updates across categories like politics, sports, entertainment, and technology. Users can read, search, and stay informed with real-time news, all on a responsive and user-friendly interface.',
        role: ``,
    },
    {
        title: 'Air Ticket Booking',
        slug: 'greentourandtravels',
        techStack: [
            'HTML',
            'Laravel',
            'MySql',
        ],
        thumbnail: '/projects/thumbnail/greentourandtravels.png',
        longThumbnail: '/projects/long/greentourandtravels.png',
        images: [
            '/projects/images/greentourandtravels.png',
        ],
        liveUrl: 'https://greentourandtravels.com/',
        year: 2023,
        description: `Green Tour and Travels is an online travel platform where users can book air tickets and receive instant invoices. The site offers a seamless booking experience with secure payment integration and responsive design for all devices.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Backend)',
        company: 'BranexIT',
        duration: 'May 2023 - March 2025',
    },
    {
        title: 'Software Developer',
        company: 'Navieasoft Ltd',
        duration: 'Dec 2021 - April 2023',
    },
    {
        title: 'Laravel Developer',
        company: 'Spellbit Limited',
        duration: 'Jan 2021 - Sep 2021',
    },
];
