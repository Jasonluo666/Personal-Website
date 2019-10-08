import { Profile } from 'selenium-webdriver/firefox';

export const config = {
    about: {
        nickname: 'jason',
        description: 'I Am One With the Force and the Force Is With Me',
        profile_pic: "assets/images/banner/home-img.jpg",

        about_me:{
            subtitle: 'Energy = Milk * Coffee^2',
            intro_title: 'Hi There! I\'m Jason Luo',
            intro_description: 'a master student at BU. My major is Computer Science, and I have completed my B.S. in CS as well.'
        },

        info:{
            DoB: 'Classified',
            Email: 'jasonluo@bu.edu',
            Phone: '+1-857-472-9914',
            Location: 'Boston, MA'
        },
        
        education: [
            {
                school: 'Boston University',
                major: 'M.S. in Computer Science'
            },{
                school: 'Beijing Institute of Technology',
                major: 'B.S. in Computer Science'
            },{
                school: 'Australian National University',
                major: 'Exchange Program'
            }
        ]
    },
    nav: {
        logo: 'assets/images/logo.jpg'
    },
    service: {
        title: 'My Skills',
        description: 'Here Is The List Of My Top Skills: [Programming Language / Tools / Framework]',

        skills:[
            {
                icon: 'assets/images/skill/C_CPP.jpg',
                title: 'C++',
                description: '2 years experience. Related experience - Linux LAN communication'
            },{
                icon: 'assets/images/skill/Java.png',
                title: 'Java',
                description: '1 years experience. Related experience - Object Oriented Programming, Android Dev'
            },{
                icon: 'assets/images/skill/Python.png',
                title: 'Python',
                description: '2 years experience. Related experience - Machine Learning, Computer Vision, Data Mining'
            },{
                icon: 'assets/images/skill/MEAN_STACK.png',
                title: 'MEAN Stack',
                description: ''
            },{
                icon: 'assets/images/skill/Android.png',
                title: 'Android Dev',
                description: ''
            },{
                icon: 'assets/images/skill/Git.png',
                title: 'Version Control',
                description: ''
            },{
                icon: 'assets/images/skill/ML.png',
                title: 'Machine Learning Related',
                description: ''
            },{
                icon: 'assets/images/skill/OpenCV.png',
                title: 'Computer Vision Related',
                description: ''
            },{
                icon: 'assets/images/skill/Trello.png',
                title: 'Agile Project Management',
                description: ''
            }
        ]
    },
    footer: {
        logo: 'assets/images/logo.jpg',
        subtitle: 'May The Force Be With You.',
        copyright: 'Copyright © 2019 Jason Luo',
        Facebook: 'https://www.facebook.com/JasonLuo666',
        LinkedIn: 'https://www.linkedin.com/in/jason-luo-254805170/'
    },
    portfolio: {
        title: 'My Recent Projects',
        description: 'Check Out My Amazing Projects.',
        github: 'https://github.com/Jasonluo666',

        demo: [
            {
                cover_img: 'assets/images/logo.jpg',
                title: 'Coming Soon',
                link: ''
            },{
                cover_img: 'assets/images/logo.jpg',
                title: 'Coming Soon',
                link: ''
            },
            {
                cover_img: 'assets/images/logo.jpg',
                title: 'Coming Soon',
                link: ''
            },
            {
                cover_img: 'assets/images/logo.jpg',
                title: 'Coming Soon',
                link: ''
            },
            {
                cover_img: 'assets/images/logo.jpg',
                title: 'Coming Soon',
                link: ''
            },
            {
                cover_img: 'assets/images/logo.jpg',
                title: 'Coming Soon',
                link: ''
            }
        ]
    },
    blog: {
        article: [
            {
                title: 'Coming Soon',
                cover_img: 'assets/images/logo.jpg',
                time: 'Today',
                link: '/blog'
            },{
                title: 'Coming Soon',
                cover_img: 'assets/images/logo.jpg',
                time: 'Today',
                link: '/blog'
            },{
                title: 'Coming Soon',
                cover_img: 'assets/images/logo.jpg',
                time: 'Today',
                link: '/blog'
            }
        ]
    },
    contact: {
        info:{
            DoB: 'Classified',
            Email: 'jasonluo@bu.edu',
            Phone: '+1-857-472-9914',
            Location: 'Boston, MA'
        },
    }
};