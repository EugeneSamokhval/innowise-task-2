const pageChanger = document.getElementById("user-profile")
const shownPage = document.getElementById("home-page-import")
const headerContainer = document.getElementById('header-content-container')
const searchSign = document.getElementById("search-logo")

if (pageChanger && shownPage && headerContainer) {
    pageChanger.addEventListener('click', () => {
        console.log(pageChanger, shownPage, headerContainer);
        if (shownPage.src.endsWith("channel-page.html")) {
            shownPage.src = "./home-page.html";
            shownPage.style.marginTop = '6vh'
            document.documentElement.classList.remove("particaly-visibl")
        } else if (shownPage.src.endsWith("home-page.html")) {
            shownPage.src = "./channel-page.html";
            document.documentElement.classList.add("particaly-visibl")
        }
    });
}
