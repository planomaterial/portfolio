window.onload = function() {
    let animateElements = document.querySelectorAll('.js-animate');
    function ActiveDisplay() {
        this.show = function() {
            animateElements.forEach(e => {
                e.classList.add('activeAnimate');
            });
        };
    };
    let showElements = new ActiveDisplay();
    showElements.show();
};