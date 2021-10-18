


function myFunction() {
        document.getElementById("lists").innerHTML = document.getElementById("lists").innerHTML + document.getElementById("item").value;

      }

const el = document.getElementById("item");
el.addEventListener("click", () => { lists (""); });