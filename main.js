
const searchResults = document.getElementById('searchResults');
function postSearchData(inputValue) {
    console.log(inputValue);
    fetch('https://script.google.com/macros/s/AKfycbwRnaionrtIqjVTlp4Hyumgb9gN3ItHCytxRWZnw4Np5REsLnLP5C1A9kmMoubq7Ko/exec', { // Replace with your actual API endpoint
        redirect: "follow",
        mode: "no-cors",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action: 'search', name: inputValue })
    }).then(response => {
            console.log(response);
            return response.json()
        }).then(data => {
            console.log('Success:', data);
        }).catch((error) => {
            console.error('Error:', error);
        });
}

function displaySearchResults(results) {
    searchResults.innerHTML = ''; // Clear any existing results

    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found</p>'; // Handle case where no results are found
        return;
    }

    // Map through the results and create elements to display them
    results.map(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <h3>${result.title}</h3>
            <p>${result.description}</p>
        `;
        searchResults.appendChild(resultItem);
    });
}

// xu ly link 
function textToSlug(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// xử lý trượt ảnh cop từ tài liệu 
const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// xử lý menu 
const menu = [
    {
        label: "AMEE",
        href: "/index",
    },

    {
        label: "",
        href: "/pages/cart",
    },
    {
        label: "",
        href: "/pages/search",
    },
    {
        label: "MEN",
        href: "/pages/men",
    },
    {
        label: "WOMEN",
        href: "/pages/women",
    },
    {
        label: "BABY",
        href: "/pages/baby",
    },
    {
        label: "ABOUT US",
        href: "/pages/about-us",
    },

]
// Hiển thị menu
const menuElement = document.getElementById("navbar-component");
function getMenu() {
    const navElement = document.createElement("nav");
    navElement.classList.add("nav-list");
    navElement.style.transition = "all 1s ease-out";
    const ulElement = document.createElement("ul");
    // xử lý, lặp qua các phần tử từ trong mảng từ đầu đến cuối
    menu.forEach((item) => {
        // tạo thành phần li, thêm class primary-nav hoặc secondary-nav
        const liElement = document.createElement("li");
        const aElement = document.createElement("a");

        // nếu href của item là AMEE thì thêm class primary-nav, ngược lại thêm secondary-nav
        if (item.href === "/index") {
            liElement.classList.add("primary-nav");

            const logoElement = document.createElement("img");
            logoElement.src = "../images/icon/icon_shop.png";
            logoElement.alt = "logo";

            liElement.appendChild(logoElement);
        } else {
            liElement.classList.add("secondary-nav");
            if (item.href === "/pages/search") {
                const iconSearchElement = document.createElement("i");
                iconSearchElement.classList.add("fas", "fa-search");
                liElement.appendChild(iconSearchElement);
                // xu ly search
                const modalElement = document.getElementById('modal-search');
                const closeModalElement = document.querySelector('.close-search');
                const searchInput = document.getElementById('searchInput');
                const searchButton = document.getElementById('searchButton');
                iconSearchElement.onclick = function () {
                    modalElement.style.display = 'flex';
                }
                window.onclick = function (event) {
                    if (event.target === modalElement) {
                        modalElement.style.display = 'none'; 
                    }
                }
                searchButton.addEventListener('click', function() {
                    const inputValue = searchInput.value; 
                    if (inputValue) {
                        postSearchData(inputValue); // Call the function to post data
                    } else {
                        alert('Please enter a search term'); // Handle empty input
                    }
                });
            } else if (item.href === "/pages/cart") {
                const iconCartElement = document.createElement("i");
                iconCartElement.classList.add("fas", "fa-shopping-cart");
                iconCartElement.style.cursor = "pointer";
                iconCartElement.addEventListener("click", () => {
                    window.open(item.href + ".html");
                });
                liElement.appendChild(iconCartElement);
            }

        }

        // đặt href của aElement thành href của item, hiển thị nội dung của item ở đó
        if (item.href !== "/pages/search") aElement.href = item.href + ".html";

        aElement.textContent = item.label;

        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
        navElement.appendChild(ulElement);
        menuElement.appendChild(navElement);
    });
}
getMenu();

//hien thi menu mobile
function getMenuMobile() {
    const containerMenuMobileElement = document.querySelector(".container-icon");
    const iconMenuMobileElement = document.querySelector(".parent-icon");
    const iconMenuOpenElement = document.querySelector(".icon-menu-open");
    const iconMenuCloseElement = document.querySelector(".icon-menu-close");

    // Show menu
    const navElement = document.createElement("nav");
    navElement.classList.add("nav-list-menu-mobile");
    const ulElement = document.createElement("ul");
    ulElement.classList.add("list-menu-mobile");
    // xử lý, lặp qua các phần tử từ trong mảng từ đầu đến cuối
    menu.forEach(item => {
        // tạo thành phần li, thêm class primary-nav hoặc secondary-nav
        const liElement = document.createElement("li");
        const aElement = document.createElement("a");

        // nếu href của item là AMEE thì thêm class primary-nav, ngược lại thêm secondary-nav
        if (item.href === "/index") {
            liElement.classList.add("primary-nav")

            const logoElement = document.createElement("img")
            logoElement.src = "../images/icon/icon_shop.png"
            logoElement.alt = "logo"

            liElement.appendChild(logoElement);
        } else {
            liElement.classList.add("secondary-nav")
            if (item.href === "/pages/cart") {
                const iconCartElement = document.createElement("i")
                iconCartElement.classList.add("fas", "fa-shopping-cart")
                liElement.appendChild(iconCartElement);
            }
        }


        // đặt href của aElement thành href của item, hiển thị nội dung của item ở đó
        aElement.href = item.href + ".html";

        aElement.textContent = item.label;

        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
        navElement.appendChild(ulElement);
        containerMenuMobileElement.appendChild(navElement);
    })

    function toggleMenuMobile() {
        const navElement = document.querySelector(".nav-list-menu-mobile");
        if (containerMenuMobileElement.classList.contains("showMenu")) {
            containerMenuMobileElement.style.backgroundColor = "transparent";
            containerMenuMobileElement.style.height = "0";
            iconMenuOpenElement.style.display = "block";
            iconMenuCloseElement.style.display = "none";
            containerMenuMobileElement.classList.remove("showMenu");
        } else {
            containerMenuMobileElement.style.backgroundColor = "white";
            containerMenuMobileElement.style.height = "100%";
            iconMenuOpenElement.style.display = "none";
            iconMenuCloseElement.style.display = "block";
            containerMenuMobileElement.classList.add("showMenu");
            navElement.style.height = "100%";

        }
    };
    iconMenuMobileElement.addEventListener("click", toggleMenuMobile);
}
getMenuMobile()

// Nếu kéo xuống 0.01 trên trục y thì đổi màu nền menu
document.body.addEventListener("scroll", () => {
    const navListElement = document.querySelector(".nav-list");
    const scrollPosition =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

    if (scrollPosition > 100) {
        navListElement.style.backgroundColor = "white";
    } else {
        navListElement.style.backgroundColor = "";
    }
});

//Back button
const backButton = document.querySelector(".icon-back");
// backButton.addEventListener("click", () => {
//     window.location.href = "/index.html";
// });

// hien thi footer
const footer = {
    amee: [
        {
            label: "Official Thông tin Partner",
            href: "https://www.nike.com/xf/en_gb/",
        },
        {
            label: "Cơ hội nghề nghiệp",
            href: "https://www.nike.com/xf/en_gb",
        },
    ],
    links: [
        {
            label: "Catalog",
            href: "/pages/baby",
        },
        {
            label: "Contact us",
            href: "/pages/about-us",
        },
        {
            label: "Take a survey",
            href: "/pages/men",
        },
        {
            label: "Refund Policy",
            href: "/pages/women",
        },
    ],
    socialMedia: [
        {
            label: "Twitter",
            href: "https://www.facebook.com/nike",
            icon: "fab fa-twitter fa-3x",
        },
        {
            label: "Facebook",
            href: "https://www.facebook.com/nike",
            icon: "fab fa-facebook-square",
        },
        {
            label: "Github",
            href: "https://github.com/Jeetg57",
            icon: "fab fa-github fa-3x",
        },
    ],
    copyright: {
        label: "© 2024 AMEE. All rights reserved.",
        href: "https://www.codepen.io/jeetg57",
    },
}

const footerElement = document.getElementById("footer")
function getFooter() {

    const itemContainerElement = document.createElement("div")
    itemContainerElement.classList.add("row")

    Array.from([1, 2, 3, 4], (num) => {
        const itemCoverElement = document.createElement("div")
        itemCoverElement.classList.add("col")

        const itemTitleElement = document.createElement("h2")
        if (num === 1) {
            itemTitleElement.textContent = "Về AMEE"
            itemCoverElement.appendChild(itemTitleElement)

            footer.amee.forEach(child => {
                const pElement = document.createElement("p")
                pElement.textContent = child.label

                const aElement = document.createElement("a")
                aElement.href = child.href

                pElement.appendChild(aElement)
                itemCoverElement.appendChild(pElement)

            })
        } else if (num === 2) {
            itemTitleElement.textContent = "Links"
            itemCoverElement.appendChild(itemTitleElement)

            footer.links.forEach(child => {
                const pElement = document.createElement("p")
                pElement.textContent = child.label

                const aElement = document.createElement("a")
                aElement.href = child.href

                pElement.appendChild(aElement)
                itemCoverElement.appendChild(pElement)
            })
        } else if (num === 3) {
            itemTitleElement.textContent = "Social Media"
            itemCoverElement.appendChild(itemTitleElement)
            footer.socialMedia.forEach(child => {
                const pElement = document.createElement("p")
                pElement.textContent = child.label

                const aElement = document.createElement("a")
                aElement.href = child.href

                pElement.appendChild(aElement)
                itemCoverElement.appendChild(pElement)
            })
        } else {
            itemTitleElement.textContent = "Copyright"
            itemCoverElement.appendChild(itemTitleElement)
            itemCoverElement.style.flexGrow = "1"
            itemCoverElement.style.display = "flex"
            itemCoverElement.style.justifyContent = "center"
            itemCoverElement.style.alignItems = "center"


            const pElement = document.createElement("p")
            pElement.textContent = footer.copyright.label
            const aElement = document.createElement("a")
            aElement.href = footer.copyright.href

            pElement.appendChild(aElement)
            itemCoverElement.appendChild(pElement)
        }

        itemContainerElement.appendChild(itemCoverElement)
    })

    footerElement.appendChild(itemContainerElement)

}
getFooter()
