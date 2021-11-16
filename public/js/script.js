const themeSwitch = document.querySelector("#themeSwitch"),
    themeIcon = document.querySelector("#themeIcon"),

    themeSwitchF = () =>
    {
        let htmlElement = document.querySelector(`html`),
            theme = localStorage.getItem("theme") || 'light';

        if (theme === 'dark')
        {
            htmlElement.setAttribute("data-theme", "dark");

            themeIcon.classList.add('fa-moon');
            themeIcon.classList.remove('fa-sun');
        }
        else if (theme === 'light')
        {
            htmlElement.setAttribute("data-theme", "light");

            themeIcon.classList.add('fa-sun');
            themeIcon.classList.remove('fa-moon');
        }
    }

themeSwitchF();


themeSwitch.addEventListener('click', () =>
    {
        let htmlElement = document.querySelector(`html`),
            theme = localStorage.getItem("theme") || 'light';

        if (theme === 'dark')
        {
            localStorage.setItem("theme", "light");
            htmlElement.setAttribute("data-theme", "light");

            themeIcon.classList.add('fa-sun');
            themeIcon.classList.remove('fa-moon');
        }
        else if (theme === 'light')
        {
            localStorage.setItem("theme", "dark");
            htmlElement.setAttribute("data-theme", "dark");

            themeIcon.classList.add('fa-moon');
            themeIcon.classList.remove('fa-sun');
        }
    }
)