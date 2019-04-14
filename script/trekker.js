function setActive() {
  aObj = document.getElementById("navId").getElementsByTagName("a");
  var i;
  for (i = 0; i < aObj.length; i++) {
    if (document.location.href.indexOf(aObj[i].href) >= 0) {
      aObj[i].className = "active";
      break;
    }
  }
  if (i == aObj.length) {
    aObj[0].className = "active";
  }
}