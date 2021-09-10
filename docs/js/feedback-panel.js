window.onload = function initialConfig() {

    const pageUrl = window.location.href;
    const homePage = "https://zoltan-baba.github.io/";
    const jpHomePage = "https://zoltan-baba.github.io/ja/index-ja.html";
    console.log(window.location.href);

    function homePageConfig() {
    
        if (pageUrl !== homePage && pageUrl !== jpHomePage) {
            document.querySelector(".breadcrumb-container").style.display = "block";
            document.querySelector(".feedback-panel").style.display = "block";
        }
    };


    function languageSelector() {
        let langParent = document.querySelector("div.toolbar-tools");
        let jaSelector = langParent.querySelectorAll("li")[1];
        let enSelector = langParent.querySelectorAll("li")[0];

        enSelector.querySelector("a").setAttribute("target", "_self");
        jaSelector.querySelector("a").setAttribute("target", "_self");

        if (pageUrl.indexOf("/ja/") > -1) {
            jaSelector.classList.add("active-lang");
        }
        else {
            enSelector.classList.add("active-lang");
        }
    };


    homePageConfig();
    languageSelector();
};