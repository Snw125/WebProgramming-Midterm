function expandNav() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("bannerimage");
    if (x.className === "topnav" && y.className === "bannerImage") {
      x.className += " responsive";
      y.className += " responsive";
    } else {
      x.className = "topnav";
      y.className = "bannerImage";
    }
}