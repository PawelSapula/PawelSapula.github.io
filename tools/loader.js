document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".paragraph");

  paragraphs.forEach(div => {
    const file = div.getAttribute("data-file");

    fetch(file)
      .then(response => response.text())
      .then(data => {
        div.innerHTML = `<p>${data}</p>`;
      })
      .catch(err => {
        div.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
        console.error(err);
      });
  });
});