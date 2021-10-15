import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    console.log("testing connection with stimulus controller...");
  }
  static targets = ["button", "link"]

  // data-action="click->disable-button#disable" no DOM
  disable() {
    console.log('clicked!!');
    console.log(this.element);
    this.buttonTarget.innerText = "Bingo!";
    this.buttonTarget.setAttribute('disabled', '');
    this.linkTarget.classList.remove("d-none");
  }

  // data-action="click->disable-button#link" no DOM
  reset() {
    this.buttonTarget.innerText = "Click me!";
    this.buttonTarget.removeAttribute("disabled");
    this.linkTarget.classList.add("d-none");
  }
}
