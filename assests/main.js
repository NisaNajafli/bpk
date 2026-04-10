document.addEventListener("DOMContentLoaded", () => {
    let e = new Swiper(".aboutAdvantageSwiper",{
        slidesPerView: 1,
        loop: !0,
        spaceBetween: 20,
        effect: "fade",
        pagination: {
            el: ".aboutAdvantagesNavigation li",
            clickable: !0,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active"
        }
    });
    const t = document.querySelectorAll(".aboutAdvantagesNavigation li");
    t.forEach( (t, o) => {
        t.addEventListener("mouseover", () => {
            e.slideToLoop(o)
        }
        )
    }
    ),
    e.on("slideChange", () => {
        const o = e.realIndex;
        t.forEach( (e, t) => {
            t === o ? e.classList.add("activePagination") : e.classList.remove("activePagination")
        }
        )
    }
    ),
    e.emit("slideChange"),
    e.init()
}
)

document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelector(".blog-navigation");
    let t = new Swiper("#blogSwiper",{
        slidesPerView: 1,
        loop: !0,
        effect: "slide",
        spaceBetween: 10,
        navigation: {
            nextEl: ".blog-navigation-next",
            prevEl: ".blog-navigation-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            450: {
                slidesPerView: 1.5
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
    t.init();
    t.slides.length > 4 ? e.classList.remove("notNavigation") : e.classList.add("notNavigation")
}
)
document.getElementById("year").textContent = new Date().getFullYear()

let after_width = 90;
let lastScrollTop = 0;

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  const scrollMiddle = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {

    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (
      scrollMiddle >= top &&
      scrollMiddle <= top + height &&
      section.id === "discover-us"
    ) {

      const currentScroll = window.scrollY;

      if (after_width < 100) {
        if (currentScroll > lastScrollTop) {
          after_width += 0.2;
        } else if (currentScroll < lastScrollTop) {
          after_width -= 0.2;
        }
      }

      if (after_width < 90) after_width = 90;
      if (after_width > 100) after_width = 100;

      document.querySelector(".discover_us_bg").style.width = after_width + "%";

      lastScrollTop = currentScroll;
    }

  });

});