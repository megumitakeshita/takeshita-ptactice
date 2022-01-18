// console.log("test");

// const title1 = document.getElementById("title");
// console.log(title1);
// const title2 = document.querySelector("#title");
// console.log(title2);

//指定したclass名を取得する
// const containers = document.getElementsByClassName("container");
// console.log(containers);

//クラス名からエレメントを主食する
// const container = document.querySelector(".container");
// console.log(container);

//query slectoreの複数elementを取得
// const container1 = document.querySelectorAll(".container");
// console.log(container1);

// const divEl = document.createElement("div");
// console.log(divEl);

// const pEl = document.createElement("p");

// const h2El = document.createElement("h2");

// divEl.prepend(pEl);
// divEl.prepend(h2El);
// console.log(divEl);

const buttonEl = document.createElement("button");
buttonEl.textContent = "ボタン";

const divEl = document.querySelector(".container");

divEl.appendChild(buttonEl);

//h1タグを削除
const h1El = document.getElementById("title");
const bodyEl = document.querySelector("body");
bodyEl.removeChild(h1El);

//bodyタグ配下から削除
bodyEl.textContent =null;