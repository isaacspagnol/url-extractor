document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("extractButton").addEventListener("click", () => {
    const inputUrls = document.getElementById("inputUrls").value;
    const urls = inputUrls.split("\n").filter((url) => url.trim() !== "");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: currentTab.id },
        function: extractURLs,
        args: [urls],
      });
    });
  });
});
function extractURLs(urls) {
  try {
    const extractedPaths = urls
      .map((url) => {
        try {
          // Remover espaços em branco e números do início da URL
          const trimmedURL = url.replace(/^\d+\s*/, "").trim();

          // Verificar se a URL começa e termina com "-"
          if (trimmedURL.startsWith("-") && trimmedURL.endsWith("-")) {
            console.log(`URL removida: ${trimmedURL}`);
            return null;
          }

          // Corrigir espaços e caracteres especiais na URL
          const correctedURL = encodeURI(trimmedURL);

          // Extrair o caminho da URL
          const path = new URL(correctedURL).pathname;

          return path.endsWith("/") ? path : path + "/";
        } catch (error) {
          console.error("Erro ao processar a URL:", trimmedURL, error.message);
          return null; // ou uma string que indica que a URL é inválida
        }
      })
      .filter((path) => path !== null);

    chrome.runtime.sendMessage({ action: "showURLs", urls: extractedPaths });
  } catch (error) {
    console.error("Erro geral ao processar URLs:", error.message);
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "showURLs") {
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";
    request.urls.forEach((url) => {
      const li = document.createElement("li");
      li.textContent = url;
      resultList.appendChild(li);
    });
  }
});
