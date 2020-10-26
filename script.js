window.onload = function () {

    const menu = document.getElementById('menu');
    const menuItems = document.getElementById('mobile-menu-items');
    const submitButton = document.getElementById('form-button')

    menu.onclick = function () {

        menuItems.classList.toggle('menu-items-display')

    }

    submitButton.onclick = function () {

        document.getElementById('contact-form').submit();

    }

    // Transparent navbar effect 

    window.addEventListener('scroll', function () {

        if (window.scrollY > 150) {

            document.querySelector('#nav').style.opacity = 0.9;

        } else {

            document.querySelector('#nav').style.opacity = 1;

        }

    });

}
