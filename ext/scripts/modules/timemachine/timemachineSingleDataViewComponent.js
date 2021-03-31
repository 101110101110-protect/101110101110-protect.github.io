import DateProvider from './../assets/dateProvider.js'
import IconProvider from './../assets/iconProvider.js'
import Checkbox from './../viewComponents/checkbox.js'


export default class {

  constructor (dataString, handlers, isChecked, count) {
    this.dataString = dataString
    this.handlers = handlers
    this.isChecked = isChecked
    this.count = count
  }

  createComponent() {


    let wrapper = document.createElement('div')
    let checkBoxCallback = this.handlers.checkbox
    let checkbox = new Checkbox(checkBoxCallback, this.isChecked).getCheckbox();
    let checkboxWrapper = document.createElement('div')

    checkboxWrapper.appendChild(checkbox)


    let countW = document.createElement('div')
    countW.appendChild(document.createTextNode(this.count))

    let backup = document.createElement('div')
    backup.appendChild(document.createTextNode(this.dataString.backup))

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


    delWrapper.appendChild(new IconProvider('trash').getIcon())
    editWrapper.appendChild(new IconProvider('edit').getIcon())
    navbarWrapper.appendChild(delWrapper)
    navbarWrapper.appendChild(editWrapper)
    navbarWrapper.classList.add('row-actions')
    backup.appendChild( navbarWrapper )


    wrapper.appendChild(checkboxWrapper)
    wrapper.appendChild(countW)
    wrapper.appendChild(backup)

    return wrapper
  }

  getComponent() {
    return this.createComponent()
  }

};
