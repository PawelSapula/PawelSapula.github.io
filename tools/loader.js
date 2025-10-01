document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".paragraph");

  paragraphs.forEach(div => {
    const file = div.getAttribute("data-file");
    let separate = div.getAttribute("separate");

    fetch(file)
      .then(response => response.text())
      .then(data => {

        if(separate) {
          //const normalizedData = data.replace(/\r\n|\r/g, '\n ');
          const lines = data.split("\n")
          lines.forEach((line) => {
            div.innerHTML += `<p>${line}<br></p>`;   
          })
            
        }
        else{
          div.innerHTML = `<p>${data}</p>`;
        }
      
      })
      .catch(err => {
        div.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
        console.error(err);
      });
  });
});