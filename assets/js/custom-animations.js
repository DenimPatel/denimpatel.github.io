
document.addEventListener('DOMContentLoaded', function () {

    // Scroll Animations
    const scrollElements = document.querySelectorAll('.scroll-animate');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('in-view');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Magnetic Navigation Links
    const navLinks = document.querySelectorAll('#header nav a');

    navLinks.forEach(link => {
        link.addEventListener('mousemove', e => {
            const { offsetX: x, offsetY: y, target } = e;
            const { clientWidth: width, clientHeight: height } = target;

            const move = 25;
            const xMove = x / width * (move * 2) - move;
            const yMove = y / height * (move * 2) - move;

            target.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });

        link.addEventListener('mouseleave', e => {
            e.target.style.transform = '';
        });
    });

});
