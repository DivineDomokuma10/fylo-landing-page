let hideLinks = true;
const links = document.querySelector('.links');
const toggleOff = document.querySelector('.t1');
const toggleOn = document.querySelector('.toggle');
const testimonialCon = document.querySelector('.testimonial');



const feature = [
    {
        title: 'Access your files, anywhere',
        icon: './asset/icon-access-anywhere.svg',
        text: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
    },
    {
        title: 'Security you can trust',
        icon: './asset/icon-security.svg',
        text: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
    },
    {
        title: 'Real-time collaboration',
        icon: './asset/icon-any-file.svg',
        text: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
    },
    {
        title: 'Real-time collaboration',
        icon: './asset/icon-collaboration.svg',
        text: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
    }
];

const testimonial = [
    {
        name: 'Satish Patel',
        image: './asset/profile-1.jpg',
        title: 'Founder & CEO, Huddle',
        text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
    },
    {
        name: 'Bruce McKenzie',
        image: './asset/profile-2.jpg',
        title: 'Founder & CEO, Huddle',
        text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
    },
    {
        name: 'Iva Boyd',
        image: './asset/profile-3.jpg',
        title: 'Founder & CEO, Huddle',
        text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
    }
] 

toggleOn.addEventListener('click',()=> links.style.left = '0%' )
toggleOff.addEventListener('click',()=> links.style.left = '-100%' )


feature.forEach((e,index) => {
    document.querySelector('#feature').innerHTML += `
        <div class="${index % 2 !== 0 ? 'feature-card1' : 'feature-card'}">
            <img src="${e.icon}">
            <div class="${index % 2 !== 0 ? 'text-con1' : 'text-con'}">
                <h3>${e.title}</h3>
                <p>${e.text}</p>
            </div>
        </div>
    `
});

testimonial.forEach( e=> {
    testimonialCon.innerHTML += `
        <div class="tes-con">
            <p>${e.text}</p>
            <div class="profile">
                <img src="${e.image}">
                <div class="profile-subcon">
                    <h6>${e.name}</h6>
                    <p>${e.title}</p>
                </div>
            </div>
        </div>
    `
});
