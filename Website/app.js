const LISTING_URL = "{{ listingInfo.Url }}";

document.getElementById("add-vcc").addEventListener("click", () => {
  window.location.assign(`vcc://vpm/addRepo?url=${encodeURIComponent(LISTING_URL)}`);
});

document.getElementById("copy-url").addEventListener("click", async () => {
  await navigator.clipboard.writeText(LISTING_URL);
  const button = document.getElementById("copy-url");
  const oldText = button.textContent;
  button.textContent = "コピーしました";
  setTimeout(() => {
    button.textContent = oldText;
  }, 1500);
});
