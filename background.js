chrome.runtime.onInstalled.addListener(() => {
  console.log("URL Extractor Extension Installed");
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: extractURLs,
  });
});

function extractURLs(urls) {
  // Código para extrair URLs no contexto da página
  const extractedPaths = urls.map((url) => {
    const path = new URL(url).pathname;
    return path.endsWith("/") ? path : path + "/";
  });

  chrome.runtime.sendMessage({ action: "showURLs", urls: extractedPaths });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Código para lidar com mensagens aqui
});
