chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "openInIncognito",
      title: "Open in Incognito",
      contexts: ["link"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "openInIncognito") {
      chrome.windows.create({
        url: info.linkUrl,
        incognito: true
      });
    }
  });
  