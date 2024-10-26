const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    slidesPerView: 1.1,

    spaceBetween: 28,

    breakpoints: {
        320: {
            slidesPerView: 1.3,
        },
        480: {
            slidesPerView: 1.9,
        },
        530: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 2.20,
        },
    }
});

function toggleElements(selector, buttonTextSelector, buttonImageSelector, textShow, textHide) {
    const elements = document.querySelectorAll(selector);
    const buttonText = document.querySelector(buttonTextSelector);
    const buttonImage = document.querySelector(buttonImageSelector);

    elements.forEach(el => {
        el.style.display = (getComputedStyle(el).display === "none") ? "block" : "none";
    });

    if (buttonText.textContent === textShow) {
        buttonText.textContent = textHide;
        buttonImage.style.transform = "rotate(180deg)";
    } else {
        buttonText.textContent = textShow;
        buttonImage.style.transform = "rotate(0deg)";
    }
}

document.getElementById('showButton').addEventListener('click', () => toggleElements('.hidden-slides', '.show__button-text', '.show__button-img', 'Показать все', 'Скрыть'));
document.querySelector('.conteiner__more-more').addEventListener('click', () => toggleElements('.mobile--software', '.conteiner__more-more-reveal', '.conteiner__more-more-expand', 'Читать далее', 'Скрыть'));
document.getElementById('show_Button').addEventListener('click', () => toggleElements('.hidden-slide', '.show__button-span', '.show__button-image', 'Показать все', 'Скрыть'));

const openBtn = document.getElementById('openBtn');
const aside = document.getElementById('aside');
const closeBtn = document.getElementById('closeBtn'); 
const header = document.querySelector('header');
const main = document.querySelector('main');
header.classList.remove('blured');
main.classList.remove('blured');
if (openBtn) {
    openBtn.addEventListener('click', () => {
        aside.classList.add('open');
        header.classList.add('blured');
        main.classList.add('blured'); 
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        aside.classList.remove('open');
        header.classList.remove('blured');
        main.classList.remove('blured');
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1440) {
        aside.classList.remove('open');
        header.classList.remove('blured');
        main.classList.remove('blured');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const openFeedbackBtn = document.getElementById('openFeedbackBtn');
    const openFeedbackButton = document.getElementById('openFeedbackButton');
    const openCallBtn = document.getElementById('openCallBtn');
    const openCallButton = document.getElementById('openCallButton');
    
    const modal = document.getElementById('modal');
    const modalCall = document.getElementById('modalCall');
    
    const closeFeedbackBtn = document.getElementById('closeFeedbackBtn');
    const closeCallBtn = document.getElementById('closeCallBtn');


    if (openFeedbackBtn) {
        openFeedbackBtn.addEventListener('click', () => {
            modal.showModal(); 
        });
    }
    if (openCallBtn) {
        openCallBtn.addEventListener('click', () => {
            modalCall.showModal();
        });
    }

    if (openFeedbackButton) {
        openFeedbackButton.addEventListener('click', () => {
            modal.showModal(); 
        });
    }
    if (openCallButton) {
        openCallButton.addEventListener('click', () => {
            modalCall.showModal();
        });
    }

    if (closeFeedbackBtn) {
        closeFeedbackBtn.addEventListener('click', () => {
            modal.close();
        });
    }
    if (closeCallBtn) {
        closeCallBtn.addEventListener('click', () => {
            modalCall.close();
        });
    }

    if (mainContent && (modal.open || modalCall.open)) {
        modal.close();
        modalCall.close();
    }
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

modalCall.addEventListener('click', (event) => {
    if (event.target === modalCall) {
        modalCall.close();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (modal.open) {
            modal.close();
            document.activeElement.blur();
        }
        if (modalCall.open) {
            modalCall.close();
            document.activeElement.blur();
        }
    }
});