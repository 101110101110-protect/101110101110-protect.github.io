export default class {
  constructor() {
    this.init();
  }

  init() {
    const emulatorWrapper = document.querySelectorAll(".mw__emulator")[0];
    const emulatorWrapperTable = emulatorWrapper.querySelectorAll(
      ".flexible_table"
    )[0];
    console.log(1);
  }

  // Array.prototype.slice.call(document.querySelectorAll(".js-quantity-container"))
  // .map(function (container) {
  //     return {
  //         input: container.querySelector(".js-quantity-amount"),
  //         decrease: container.querySelector(".js-decrease"),
  //         increase: container.querySelector(".js-increase"),
  //         get value() {
  //             return parseInt(this.input.value);
  //         },
  //         set value(v) {
  //             this.input.value = v;
  //         },
  //     };
  // })
  // .forEach(function (item) {
  //     item.decrease.addEventListener("click", function () {
  //         item.value -= 1;
  //     });
  //     item.increase.addEventListener("click", function () {
  //         item.value += 1;
  //     });
  // });
}
