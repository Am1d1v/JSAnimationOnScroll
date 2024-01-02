

const sections = document.querySelectorAll('section');


window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        let scrollDistance = window.scrollY;
        let sectionDistance = section.offsetTop
        console.log(sectionDistance);

        if(scrollDistance  >= sectionDistance - 100){
            section.classList.add('show-animate');
        }
    })
});