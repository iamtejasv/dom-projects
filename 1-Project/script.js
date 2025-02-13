let isStatus = document.querySelector("h5");

let btn = document.querySelector("#add");

let flag = 0;

btn.addEventListener("click", function () {
  if (flag === 0) {
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "green";
    btn.innerHTML = "Remove friend";
    flag = 1;
  } else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    btn.innerHTML = "Add friend";
    flag = 0;
  }
});
