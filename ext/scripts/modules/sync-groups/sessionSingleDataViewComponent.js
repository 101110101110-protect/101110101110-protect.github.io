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
    let trimmedWrapper = document.createElement('div')
    trimmedWrapper.classList.add('trimmed')
    checkboxWrapper.appendChild(checkbox)
    trimmedWrapper.appendChild(document.createTextNode(this.dataString.name))
    checkboxWrapper.appendChild(trimmedWrapper)




    let membersWrapper = document.createElement('div')
    let membersHTML = document.createTextNode(this.dataString.members);
    membersWrapper.appendChild( membersHTML)



    let commentWrapper = document.createElement('div')
    let trimmedСommentWrapper = document.createElement('div')
    trimmedСommentWrapper.classList.add('trimmed')
    trimmedСommentWrapper.appendChild(document.createTextNode(this.dataString.description))
    commentWrapper.appendChild( trimmedСommentWrapper )


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
    commentWrapper.appendChild( navbarWrapper )


    wrapper.appendChild(checkboxWrapper)

    wrapper.appendChild(membersWrapper)
    wrapper.appendChild(commentWrapper)


    return wrapper
  }

  getComponent() {
    return this.createComponent()
  }

};
