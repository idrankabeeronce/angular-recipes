"use strict";

export class lazyload {
  lazyComponent = document.querySelectorAll(
    ".lazyload[data-src], .lazyload[data-srcset]"
  );
  windowHeight = document.documentElement.clientHeight;
  lazyComponentPosition = [];

  constructor() { }

  init() {
    window.addEventListener("scroll", () => {
      this.lazyScroll();
    });
    if (this.lazyComponent.length) {
      this.lazyComponent.forEach((element) => {
        if (element.dataset.src || element.dataset.srcset) {
          let lazyWrapper = document.createElement("div");
          lazyWrapper.classList.add("lazyload-wrapper");
          this.insertAfter(element, lazyWrapper);
          this.lazyComponentPosition.push(
            element.getBoundingClientRect().top + scrollY
          );
          this.lazyScrollCheck();
        }
      });
    }
  }

  lazyScrollCheck() {
    let componentIndexes = [];
    this.lazyComponentPosition.forEach((item, key) => {
      if (scrollY > item - this.windowHeight) componentIndexes.push(key);
    });
    if (componentIndexes.length) {
      componentIndexes.forEach((componentIndex) => {
        if (this.lazyComponent[componentIndex].dataset.src) {
          this.lazyComponent[componentIndex].src =
            this.lazyComponent[componentIndex].getAttribute("data-src");
          this.lazyComponent[componentIndex].onload = (event) => {
            let el = event.target;
            el.classList.remove("lazyload");
            el.removeAttribute("data-src");
            el.nextSibling.classList.contains("lazyload-wrapper")
              ? el.nextSibling.remove()
              : "";
          };
        } else if (this.lazyComponent[componentIndex].dataset.srcset) {
          if (this.lazyComponent[componentIndex].tagName === "VIDEO") {
            let child =
              this.lazyComponent[componentIndex].querySelector("source");
            child.src =
              this.lazyComponent[componentIndex].getAttribute("data-srcset");
            this.lazyComponent[componentIndex].onloadeddata = (event) => {
              let el = event.target;
              el.classList.remove("lazyload");
              el.removeAttribute("data-srcset");
              el.nextSibling.classList.contains("lazyload-wrapper")
                ? el.nextSibling.remove()
                : "";
            };
          } else {
            this.lazyComponent[componentIndex].srcset =
              this.lazyComponent[componentIndex].getAttribute("data-srcset");
            this.lazyComponent[componentIndex].onload = (event) => {
              let el = event.target;
              el.classList.remove("lazyload");
              el.removeAttribute("data-srcset");
              el.nextSibling.classList.contains("lazyload-wrapper")
                ? el.nextSibling.remove()
                : "";
            };
          }
        }
        delete this.lazyComponentPosition[componentIndex];
      });
    }
  }
  lazyScroll() {
    if (
      document.querySelectorAll(".lazyload[data-src]").length ||
      document.querySelectorAll(".lazyload[data-srcset]").length
    ) {
      this.lazyScrollCheck();
    }
  }

  onDOMchange() {
    this.lazyComponent = document.querySelectorAll(
      ".lazyload[data-src], .lazyload[data-srcset]"
    );
    this.init();
  }
  insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
}
