document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('open-incognito').addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let currentTab = tabs[0];
        chrome.windows.create({
          url: currentTab.url,
          incognito: true
        });
      });
    });
  });
  