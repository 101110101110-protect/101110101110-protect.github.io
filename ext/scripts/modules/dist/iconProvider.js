export default class {

  constructor(icon) {
    this.icon = icon
  }

  getIconUrl() {
     return './icons/' + this.icon + '.svg'
  }

  getIcon() {
    let img = document.createElement('img');
    img.src = this.getIconUrl()

    return img
  }

}
