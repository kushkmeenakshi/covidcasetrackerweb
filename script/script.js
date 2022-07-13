// 1. Script for Navbar to display on all pages

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//2. Scipt and API fecth function Described

function fetch() {
  $.get(
    "https://api.covid19api.com/summary",

    function (data) {
      console.log(data["Countries"].length);

      var tbval = document.getElementById("tbval");

      for (var i = 1; i < data["Countries"].length; i++) {
        var x = tbval.insertRow();
        x.insertCell(0);

        tbval.rows[i].cells[0].innerHTML = data["Countries"][i - 1]["Country"];
        tbval.rows[i].cells[0].style.background = "#7a4a91";
        tbval.rows[i].cells[0].style.color = "#fff";

        x.insertCell(1);
        tbval.rows[i].cells[1].innerHTML =
          data["Countries"][i - 1]["TotalConfirmed"];
        tbval.rows[i].cells[1].style.background = "#4bb7d8";

        x.insertCell(2);
        tbval.rows[i].cells[2].innerHTML =
          data["Countries"][i - 1]["TotalRecovered"];
        tbval.rows[i].cells[2].style.background = "#f36e23";

        x.insertCell(3);
        tbval.rows[i].cells[3].innerHTML =
          data["Countries"][i - 1]["TotalDeaths"];
        tbval.rows[i].cells[3].style.background = "#4bb7d8";

        x.insertCell(4);
        tbval.rows[i].cells[4].innerHTML =
          data["Countries"][i - 1]["NewConfirmed"];
        tbval.rows[i].cells[4].style.background = "#4bb7d8";

        x.insertCell(5);
        tbval.rows[i].cells[5].innerHTML =
          data["Countries"][i - 1]["NewRecovered"];
        tbval.rows[i].cells[5].style.background = "#9cc850";

        x.insertCell(6);
        tbval.rows[i].cells[6].innerHTML =
          data["Countries"][i - 1]["NewDeaths"];
        tbval.rows[i].cells[6].style.background = "#f36e23";
      }
    }
  );
}
