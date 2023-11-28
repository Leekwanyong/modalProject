"use strict";

const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeHandle = document.querySelector(".close-modal");

const closeBtn = () => {
  closeHandle.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
};

const removeHidden = () => {
  for (const showModalElement of showModal) {
    showModalElement.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});
