browser.contextMenus.create({
    id:       "search-in-tureng",
    title:    "Tureng'de Ara",
    contexts: ["selection"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId !== "search-in-tureng") {
        return;
    }

    console.log(info.selectionText);

    turengUrl = "https://tureng.com/tr/turkce-ingilizce/" 
        + encodeURI(info.selectionText);

    browser.tabs.create({
        url: turengUrl
    });
});

