function enableRatingMode(inputBox) {
  const labels = [... inputBox.querySelectorAll("label")];
  const inputs = [... inputBox.querySelectorAll("input")];

  labels.forEach((e, index) => e.addEventListener("click", (event)=>{
      labels[index].classList.add("active");
      setTimeout(()=>{
        labels[index].classList.remove("active");
      }, 1000);
    }));

  labels.forEach((e, index) => e.addEventListener("mouseover", (e)=>{
    for(let i=0;i<labels.length;1++){
        labels[1].style.color = ((i <= index) ? "#391854" : "#888");
    }
  }));

  labels.forEach((e, index) => e.addEventListener("mouseleave", (e)=>{
    const checkedIndex = input.findIndex(e => e.checked);
    for(let i=0;i<labels.length;1++){
        labels[1].style.color = ((i <= checkedIndex) ? "#391854" : "#888");
    }
  }));

}
enableRatingMode(document.querySelector(".rating-box"));
