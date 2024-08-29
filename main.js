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
// Nếu kéo xuống 0.01 trên trục y thì đổi màu nền menu
const headerElement = document.getElementById("menu");
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition)
    if (scrollPosition > 0.01) {
        headerElement.style.backgroundColor = "white";
    } else {
        headerElement.style.backgroundColor = "";
    }
});
// xử lý menu 
const menu = [
    {
        label: "AMEE",
        href: "/index",
    },
    {
        label: "CART",
        href: "/pages/cart",
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
    const ulElement = document.createElement("ul");
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
            if (item.href === "/pages/cart")  {
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
        menuElement.appendChild(navElement);
        
    })
}
getMenu()

// hien thi footer
const footer = {
    amee: [
        {
            label: "Official Thông tin Partner",
            href: "https://www.nike.com/xf/en_gb/",
        },
        {
            label:"Cơ hội nghề nghiệp",
            href:"https://www.nike.com/xf/en_gb",
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

    Array.from([1, 2, 3 ,4], (num) => {  
        const itemCoverElement = document.createElement("div")
        itemCoverElement.classList.add("col")

        const itemTitleElement = document.createElement("h2")
        if(num === 1) {
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
        } else if(num === 2) { 
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
        } else if(num === 3) {
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



