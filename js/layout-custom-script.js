function initialConfig() {

    const pageUrl = window.location.href;
    const homePage = "https://devcenter.bitrise.io/";
    const jpHomePage = "https://devcenter.bitrise.io/ja/index-ja.html";

    function homePageConfig() {
    
        if (pageUrl !== homePage && pageUrl !== jpHomePage) {
            document.querySelector(".breadcrumb-container").style.display = "block";
            document.querySelector(".feedback-panel").style.display = "block";
        }
    };

    function advSearchAdd() {
        let searchBar = document.querySelector(".tool-search");
        let searchParent = searchBar.parentNode;
        searchParent.insertBefore(searchBar, searchParent.firstChild.nextSibling);

        let newDiv = document.createElement('div');
        newDiv.setAttribute("class", "adv-search");
    
        let newA = document.createElement('a');
        newA.setAttribute("href", "/search.html");
        newA.setAttribute("class", "adv-search-link");
        newA.setAttribute("target", "_blank");
        newA.textContent = "Advanced search";
    
        newDiv.appendChild(newA);
        searchBar.insertAdjacentElement("afterend", newDiv);
    };

    function langSwitcher() {

        let dropdownContainer = document.createElement('div');
        dropdownContainer.setAttribute("class", "dropdown-container");

        let menuText = document.createElement('span');
        dropdownContainer.appendChild(menuText);

        let dropdownContent = document.createElement('ul');
        dropdownContent.setAttribute("class", "dropdown-content");
    
        let langOptionJa = document.createElement('a');
        langOptionJa.setAttribute("href", "https://devcenter.bitrise.io/ja/index-ja.html");
        langOptionJa.textContent = "日本語"
    
        let langOptionEn = document.createElement('a');
        langOptionEn.setAttribute("href", "https://devcenter.bitrise.io/");
        langOptionEn.textContent = "EN"
    
        let liItemEn = document.createElement('li');
        liItemEn.setAttribute("class", "lang-option");
        let liItemJa = liItemEn.cloneNode();
    
        liItemEn.appendChild(langOptionEn);
        liItemJa.appendChild(langOptionJa);
    
        dropdownContent.appendChild(liItemEn);
        dropdownContent.appendChild(liItemJa);
        dropdownContainer.appendChild(dropdownContent);
        document.querySelector(".adv-search").insertAdjacentElement("afterend", dropdownContainer);
    
        if (pageUrl.indexOf("/ja/") > -1) {
            liItemJa.classList.add("active-lang");
            menuText.textContent = "日本語";
        }
        else if (pageUrl.indexOf("/en/") > -1) {
            liItemEn.classList.add("active-lang");
            menuText.textContent = "EN";
            let breadCrumbHome = document.querySelector(".breadcrumb-link");
            let breadCrumbLink = breadCrumbHome.querySelector("a[href*='index-en.html']");
            breadCrumbLink.href = "/";
            breadCrumbLink.textContent = "Home";
        }

        else {
            liItemEn.classList.add("active-lang");
            menuText.textContent = "EN";
        }
    
        let jaUrl = pageUrl.replace("/en/", "/ja/");
        let enUrl = pageUrl.replace("/ja/", "/en/");
  
        if (pageUrl !== homePage && pageUrl !== jpHomePage) {
            langOptionJa.setAttribute("href", jaUrl);
            langOptionEn.setAttribute("href", enUrl);
        }

        function toggleDropdown() {
            dropdownContent.classList.toggle("show");
        }

        dropdownContainer.addEventListener("click", toggleDropdown);
    };


    advSearchAdd()
    homePageConfig();
    langSwitcher();

    /* Adding cookie consent banner scripts */

    let scriptOne = document.createElement('script');
    scriptOne.src = "https://cdn.cookielaw.org/consent/a8f28a53-d138-4cac-a6dc-bdafd1611beb/OtAutoBlock.js";
    document.head.appendChild(scriptOne);
    
    let scriptTwo = document.createElement('script');      
    scriptTwo.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"; 
    scriptTwo.setAttribute("data-domain-script", "a8f28a53-d138-4cac-a6dc-bdafd1611beb");
    document.head.appendChild(scriptTwo);
};

initialConfig();