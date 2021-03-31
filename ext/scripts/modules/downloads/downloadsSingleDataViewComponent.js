import DateProvider from './../assets/dateProvider.js'
import IconProvider from './../assets/iconProvider.js'
import Checkbox from './../viewComponents/checkbox.js'


export default class {

  constructor (dataString, handlers, isChecked) {
    this.dataString = dataString
    this.handlers = handlers
    this.isChecked = isChecked
  }

  createComponent() {

    let wrapper = document.createElement('div')
    let checkBoxCallback = this.handlers.checkbox
    let checkbox = new Checkbox(checkBoxCallback, this.isChecked).getCheckbox();
    let checkboxWrapper = document.createElement('div')

    checkboxWrapper.appendChild(checkbox)


    let strArray = this.dataString.file.split('.')
    let fileType = strArray[strArray.length - 1];

    let imageWrapper =  document.createElement('div')
    imageWrapper.appendChild(new IconProvider(fileType).getIcon())

    let descWrapper =  document.createElement('div')
    let titleWrapper =  document.createElement('h4')
    titleWrapper.appendChild(document.createTextNode(this.dataString.file))
    descWrapper.appendChild(titleWrapper)

    let subtitle =  document.createElement('div')
    let sizeWrapper =  document.createElement('span')
    sizeWrapper.appendChild(document.createTextNode(this.dataString.size))
    let dateWrapper =  document.createElement('span')
    dateWrapper.appendChild(document.createTextNode(this.dataString.date))
    subtitle.appendChild(sizeWrapper)
    subtitle.appendChild(dateWrapper)
    descWrapper.appendChild(subtitle)


    let navbarWrapper = document.createElement('div')
    let delWrapper = document.createElement('div')
    let editWrapper = document.createElement('div')

    delWrapper.addEventListener('click', () => {
      this.handlers.del()
    })

    editWrapper.addEventListener('click', () => {
      this.handlers.edit()
    })

    checkbox.addEventListener('change', (e) => {
      this.handlers.checkbox(e.target.checked)
    })



    // delWrapper.appendChild(new IconProvider('trash').getIcon())
    // editWrapper.appendChild(new IconProvider('edit').getIcon())
    // navbarWrapper.appendChild(delWrapper)
    // navbarWrapper.appendChild(editWrapper)
    // navbarWrapper.classList.add('row-actions')
    // urlWrapper.appendChild( navbarWrapper )


    wrapper.appendChild(checkboxWrapper)
    wrapper.appendChild(imageWrapper)
    wrapper.appendChild(descWrapper)



    return wrapper
  }

  getComponent() {
    return this.createComponent()
  }

};
