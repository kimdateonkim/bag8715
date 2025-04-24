document.querySelector(".search-icon").addEventListener("click", () => {
  
    const searchInput = document.querySelector(".search-input");
    searchInput.classList.toggle("on");
    
    if(searchInput.classList.contains("on")){
      searchInput.focus();
    }
  })