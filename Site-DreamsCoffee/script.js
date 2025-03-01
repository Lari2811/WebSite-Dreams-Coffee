const body = document.querySelector("body"),
      navbar = body.querySelector(".navbar"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      homeImage = body.querySelector(".home-image");

      let backgroundColor_Search = "";

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
          backgroundColor_Search = "#a9ff81;";  
      } else {
        backgroundColor_Search = "#ff0;";  
      }

      localStorage.setItem("backgroundColor_Search", backgroundColor_Search);
    });

    const menuOpenButton = document.querySelector("#menu-open-button");
    const menuCloseButton = document.querySelector("#menu-close-button");

    menuOpenButton.addEventListener("click", () => {
      //Toggle mobile menu visibility
      document.body.classList.toggle("show-mobile-menu");
    });

    menuCloseButton.addEventListener("click", () => menuOpenButton.click() );

// Afișează butoanele când utilizatorul derulează în jos 20px
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var upButton = document.getElementById("upButton");
    var downButton = document.getElementById("downButton");
    
    /*
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upButton.style.display = "block";
        downButton.style.display = "block";
    } else {
        upButton.style.display = "none";
        downButton.style.display = "block"; // Poți ajusta aici vizibilitatea butonului Down
    }
        */
    upButton.style.display = "block";
    downButton.style.display = "block";
}

// Când utilizatorul apasă pe UpButton, pagina revine la început
function topFunction() {
    document.body.scrollTop = 0; // Pentru Safari
    document.documentElement.scrollTop = 0; // Pentru Chrome, Firefox, IE și Opera
}

// Când utilizatorul apasă pe DownButton, pagina derulează la sfârșit
function bottomFunction() {
    window.scrollTo(0, document.body.scrollHeight); // Derulează la sfârșitul paginii
}


