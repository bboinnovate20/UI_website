
const dropDown = document.querySelector('.mobile-view');
const mobileDrop = document.querySelector('.mobile-drop');

const allMobileDrop = document.querySelectorAll('.mobile-drop li')

const onClose = document.querySelector('#close');
const intro = document.querySelector(".intro");
let isOpen = false;

onClose.addEventListener('click', () => {
    intro.style.display = 'none';
})


dropDown.addEventListener('click', () => {
    // dropDown.style.transition = `all ${10}s ease`;
    
    if(isOpen) {
        dropDown.classList.add("anim-m-v") 
        mobileDrop.classList.add("flip-drop")
        isOpen = false;
    }
    else {
        dropDown.classList.remove("anim-m-v")
        mobileDrop.classList.remove("flip-drop") 
        isOpen = true;
    } 
})

allMobileDrop.forEach(element => {
   element.addEventListener('click', () => {
        dropDown.classList.remove("anim-m-v")
        mobileDrop.classList.remove("flip-drop") 
        isOpen = true;
   }) 
});


const allSection = document.querySelectorAll("section");

// allSection.forEach(element => {
//     const eTop = element.getBoundingClientRect().top
//     document.addEventListener('scroll', () => {
//         if( eTop <= 
//             ((window.innerHeight || document.documentElement.clientHeight))
//         ))
//     })


// });

allSection.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = `translateY(${-50}px)`;

});

const nav = document.querySelector(".main-nav");
// const navHeader = document.querySelector("header");
// const navHeaderTop = nav.scrollY;

document.addEventListener('scroll', () => {
    if(window.scrollY) nav.classList.add('on-scroll')
    else nav.classList.remove('on-scroll')
    

    allSection.forEach((each) => {
        let top = each.getBoundingClientRect().top;
        if(top +40 <= ((window.innerHeight))) {
            each.classList.add("section-animate")
        }
        else {
            each.classList.remove("section-animate")
        }
    })
})

const sendIcon = document.querySelector('#send-anim');
const onSuccess = document.querySelector('.input')
const input = document.querySelector('.input input')


sendIcon.addEventListener('click', () => {
    onSuccess.classList.add('sending')
    onSuccess.classList.remove('sent')
    onSuccess.classList.remove('error')
    if(input.value) 
    {
    emailjs.send("service_6ca7rjh","template_djswdr8",{
               
        message: `"You got a new subcriber!" ${input.value}`,
        
    }).then(() => {
        onSuccess.classList.remove('sending')
        onSuccess.classList.remove('error')
        onSuccess.classList.add('sent')
        intro.style.opacity = 0;    
    })
    .catch((err)  => {
        onSuccess.classList.remove('sending')
        onSuccess.classList.remove('sent')
        onSuccess.classList.add('error')
    })
}
})


setTimeout(() => {
    intro.style.opacity = 1;    
}, 3000);