"use strict";
const resellers = document.querySelector(".reseller");
const webs = document.querySelector(".web");
const severs = document.querySelector(".sever");
const domain = document.querySelector(".DOM");
const abouts = document.querySelector(".ABOUTS");

const innerAbouts = document.querySelector(".abouts");
const innerDomain = document.querySelector(".domains");
const innerServer = document.querySelector(".private-server");
const innerWebs = document.querySelector(".web-hosting");

innerAbouts.classList.add("hidden");
innerDomain.classList.add("hidden");
innerServer.classList.add("hidden");
innerWebs.classList.add("hidden");

function showProduct(name) {
  name.classList.remove("hidden");
}
function allABOUTShowProducts() {
  webs.addEventListener("mouseover", function () {
    showProduct(innerWebs);
  });
  domain.addEventListener("mouseover", function () {
    showProduct(innerDomain);
  });
  abouts.addEventListener("mouseover", function () {
    showProduct(innerAbouts);
  });
  severs.addEventListener("mouseover", function () {
    showProduct(innerServer);
  });
}
allABOUTShowProducts();

function hideProducts(name) {
  name.classList.add("hidden");
}
function allAboutHidingProducts() {
  webs.addEventListener("mouseout", function () {
    hideProducts(innerWebs);
  });
  domain.addEventListener("mouseout", function () {
    hideProducts(innerDomain);
  });
  abouts.addEventListener("mouseout", function () {
    hideProducts(innerAbouts);
  });
  severs.addEventListener("mouseout", function () {
    hideProducts(innerServer);
  });
}
allAboutHidingProducts();
