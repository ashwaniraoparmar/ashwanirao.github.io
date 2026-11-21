
document.addEventListener("DOMContentLoaded", function () {

    // 1. Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // 2. Highlight active navigation link
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();


    // 3. Automatically update footer year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // 4. Scroll-to-top button
    const topButton = document.getElementById("backToTop");

    if (topButton) {

        window.addEventListener("scroll", function () {
            topButton.style.display =
                window.scrollY > 400 ? "block" : "none";
        });

        topButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

    }

});

