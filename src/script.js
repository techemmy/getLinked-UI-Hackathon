document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('#hamburgerMenu');
    const closeMenuBtn = document.querySelector('#closeMenu');
    const faqQuestions = document.querySelectorAll('.faq__questions');
    
    document.querySelector('#toggleMenu').addEventListener('click', () => {
        hamburgerMenu.style.top = 0;
    })
    
    closeMenuBtn.addEventListener('click', () => {
        hamburgerMenu.style.top = '-100%';
    })
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;    
            
            this.classList.toggle('open');

            
            if (this.classList.contains('open')) {
                this.querySelector('span').innerHTML = '-'
                this.nextElementSibling.classList.toggle('hidden')
                setTimeout(() => {
                    this.nextElementSibling.classList.toggle('opacity-0')
                }, 200)
            } else {
                this.nextElementSibling.classList.toggle('opacity-0')
                setTimeout(() => {
                    this.nextElementSibling.classList.toggle('hidden')
                }, 200)
                this.querySelector('span').innerHTML = '+'
            }

        })
    })
})
