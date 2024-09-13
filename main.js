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
        menuElement.appendChild(navElement);

    })
}
getMenu()

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

// lay data product
const API_KEY = "AIzaSyC0xEZjHni3DaJ-M2zOQRMCSYaMlj52z6k"
const SHEET_ID = "1Y6mItoJuv6vRqi70oltmGod-5FKSYFmlCIlhQirlW5E"
const TABLE_PRODUCT = "table_product!A1:F200"
const TABLE_CUSTOMER_PRODUCT = "table_customer_product!A1:I200"
const TABLE_PRODUCT_IMAGE = "table_product_image!A1:C200"
const TABLE_PRODUCT_SIZE = "table_product_size!A1:C200"
const TABLE_PRODUCT_COLOR = "table_product_color!A1:C200"
const TABLE_COLOR = "table_color!A1:C200"
const TABLE_SIZE = "table_size!A1:B200"

async function formatSheetData(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
        const [columns,...rows] = data.values;
        const mapData = rows.map(row =>{
            return columns.reduce((acc, column,index) =>{
                acc[column] = row[index] !== undefined ? row[index] : null;
                return acc;
            },{});
        })
        return mapData;
    } catch (error) {
    }
}

async function getAllData(){
    const productData = await formatSheetData(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TABLE_PRODUCT}?key=${API_KEY}`)
    const productImageData = await formatSheetData(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TABLE_PRODUCT_IMAGE}?key=${API_KEY}`)
    const productSizeData = await formatSheetData(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TABLE_PRODUCT_SIZE}?key=${API_KEY}`)
    const productColorData = await formatSheetData(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TABLE_PRODUCT_COLOR}?key=${API_KEY}`)
    const sizeData = await formatSheetData(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TABLE_SIZE}?key=${API_KEY}`)
    const colorData = await formatSheetData(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TABLE_COLOR}?key=${API_KEY}`)
    const customerData = await formatSheetData(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TABLE_CUSTOMER_PRODUCT}?key=${API_KEY}`)
    // ket hop tat ca cac bang co truonf product id vao 1 bang product data
    const joinColors = (productColorData,colorData) => {
        return productColorData.map(productColor => {
            const color = colorData.find(c => c.id === productColor.color_id);
            return {...productColor,...color};
        });
    }

    const joinSizes = (productSizeData,sizeData) => {
        return productSizeData.map(productSize => {
            const size = sizeData.find(c => c.id === productSize.size_id);
            return {...productSize,...size};
        });
    }

    // du lieu product sau khi dduoc ket hop 
    const mixProducts= await productData.map(product => {
        const color = joinColors(productColorData,colorData).filter(c => c.product_id === product.id).map(c => c)
        const size = joinSizes(productSizeData,sizeData).filter(c => c.product_id === product.id).map(c => c)
        const image = productImageData.filter(c => c.product_id === product.id).map(c => c);
        return {...product,color,size,image};
    })
    return mixProducts
}

// tao sort by
async function creatSortByProduct() {
    const containerSortElement = document.querySelector(".container-sort");
    const sizeSortElement = document.querySelector("#size-sort");
    const colorSortElement = document.querySelector("#color-sort");

    const sizeData = await formatSheetData(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TABLE_SIZE}?key=${API_KEY}`)
    const colorData = await formatSheetData(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TABLE_COLOR}?key=${API_KEY}`)
    
    sizeData.forEach((size) => {
        const parentItemSize = document.createElement("div")
        parentItemSize.className = "parent-item-sort"
        const inputElement = document.createElement("input")
        inputElement.type = "radio"
        inputElement.name = "size"
        inputElement.id = size.id
        inputElement.value = size.name
        parentItemSize.appendChild(inputElement)

        const pElement = document.createElement("p")
        pElement.textContent = size.name
        parentItemSize.appendChild(pElement)

        sizeSortElement.appendChild(parentItemSize)
    })

    colorData.forEach((color) => {
        const parentItemColor = document.createElement("div")
        parentItemColor.className = "parent-item-sort"
        const inputElement = document.createElement("input")
        inputElement.type = "radio"
        inputElement.name = "color"
        inputElement.id = color.id
        inputElement.value = color.name
        parentItemColor.appendChild(inputElement)

        const pElement = document.createElement("p")
        pElement.textContent = color.name
        parentItemColor.appendChild(pElement)

        colorSortElement.appendChild(parentItemColor)
    })
}
creatSortByProduct()

// lay link web 
const pathName = window.location.pathname

async function getCurrentDataForPage(url) {
    const listProductElement = document.querySelector(".list-product")

    if (url === "/pages/men.html") {
        const data = await getAllData()
        const menData = data.filter(c => c.type === "men")
        menData.forEach((product) => {
            const cardElement = document.createElement("div")
            cardElement.className = "card"
            const imageElement = document.createElement("img")
            imageElement.src = product.image[0].image_url
            const h3Element = document.createElement("h3")
            h3Element.textContent = product.name
            const pElement = document.createElement("p")
            pElement.textContent = product.price + " VND"
            const aElement = document.createElement("a")
            aElement.href = product.link
            aElement.textContent = "Mua ngay"
            cardElement.appendChild(imageElement)
            cardElement.appendChild(h3Element)
            cardElement.appendChild(pElement)
            cardElement.appendChild(aElement)
            listProductElement.appendChild(cardElement)
        })
    } else if (url === "/pages/women.html") {
        const data = await getAllData()
        const womenData = data.filter(c => c.type === "women")
        womenData.forEach((product) => {
            const cardElement = document.createElement("div")
            cardElement.className = "card"
            const imageElement = document.createElement("img")
            imageElement.src = product.image[0].image_url
            const h3Element = document.createElement("h3")
            h3Element.textContent = product.name
            const pElement = document.createElement("p")
            pElement.textContent = product.price + " VND"
            const aElement = document.createElement("a")
            aElement.href = product.link
            aElement.textContent = "Mua ngay"
            cardElement.appendChild(imageElement)
            cardElement.appendChild(h3Element)
            cardElement.appendChild(pElement)
            cardElement.appendChild(aElement)
            listProductElement.appendChild(cardElement)
        })
    } else if (url === "/pages/baby.html") {
        const data = await getAllData()
        const babyData = data.filter(c => c.type === "baby")
        babyData.forEach((product) => {
            const cardElement = document.createElement("div")
            cardElement.className = "card"
            const imageElement = document.createElement("img")
            imageElement.src = product.image[0].image_url
            const h3Element = document.createElement("h3")
            h3Element.textContent = product.name
            const pElement = document.createElement("p")
            pElement.textContent = product.price + " VND"
            const aElement = document.createElement("a")
            aElement.href = product.link
            aElement.textContent = "Mua ngay"
            cardElement.appendChild(imageElement)
            cardElement.appendChild(h3Element)
            cardElement.appendChild(pElement)
            cardElement.appendChild(aElement)
            listProductElement.appendChild(cardElement)
        })
    }
    
}
getCurrentDataForPage(pathName) 

