import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  body = document.body;
  container = document.querySelector(".container");

  constructor() {
    this.elem = createElement(`
      <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title"></h3>
        </div>
        <div class="modal__body"></div>
      </div>
      </div>
    `);

    this.modalTitle = this.elem.querySelector(".modal__title");
    this.modalBody = this.elem.querySelector(".modal__body");

    this.closeBtn = this.elem.querySelector(".modal__close");
    this.closeBtn.addEventListener("click", (event) => this.close(event));

    document.addEventListener("keyup", (event) => this.escape(event));
  }

  open() {
    this.container.append(this.elem);
    document.body.classList.add("is-modal-open");
  }

  setTitle(modalTitle) {
    this.modalTitle.innerText = modalTitle;
  }

  setBody(modalBody) {
    this.modalBody.innerHTML = modalBody.outerHTML;
  }

  escape(event) {
    if (!document.querySelector(".modal")) {
      return;
    }

    if (event.code !== "Escape") {
      return;
    }

    this.close();
  }

  close(event) {
    document.body.classList.remove("is-modal-open");
    document.querySelector(".modal").remove();
  }
}
