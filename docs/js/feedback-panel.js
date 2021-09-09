window.onload = function initialConfig() {

    const pageUrl = window.location.href;
    const homePage = "https://zoltan-baba.github.io";
    const jpHomePage = "https://zoltan-baba.github.io/ja/index-ja.html";

    function homePageConfig() {
    
        if (pageUrl !== homePage && pageUrl !== jpHomePage) {
            document.querySelector(".breadcrumb-container").style.display = "block";
            document.querySelector(".feedback-panel").style.display = "block";
        }
    };


    function languageSelector() {
        let langParent = document.querySelector("div.toolbar-tools");

        if (pageUrl.indexOf("/ja/") > -1) {
            langParent.querySelectorAll("li")[1].classList.add("active-lang");
        }
        else {
            langParent.querySelectorAll("li")[0].classList.add("active-lang");
        }
    };

    homePageConfig();
    languageSelector();
};