const search = () => {
  const searchbox = document.getElementById("searchbar").value.toLowerCase();
  const storeItems = document.getElementById("wrapper");
  const product = document.querySelectorAll(".gallery");

  const pname = storeItems.getElementsByTagName("h1");

  for (i = 0; i < pname.length; i++) {
    if (!pname[i].innerHTML.toLowerCase().includes(searchbox)) {
      product[i].style.display = "none";
    } else {
      product[i].style.display = "list-item";
    }
  }
};

  
