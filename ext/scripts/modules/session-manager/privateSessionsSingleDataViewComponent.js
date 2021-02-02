import DateProvider from './../dist/dateProvider.js'
import IconProvider from './../dist/iconProvider.js'
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

    let configWrapper = document.createElement('div')
    configWrapper.appendChild( new IconProvider(this.dataString.config.os).getIcon())
    configWrapper.appendChild( new IconProvider(this.dataString.config.browser).getIcon())

    let proxyWrapper = document.createElement('div')
    proxyWrapper.appendChild( new IconProvider(this.dataString.proxy.flag).getIcon())
    proxyWrapper.appendChild( document.createTextNode(this.dataString.proxy.ip))

    let dateCreatedWrapper = document.createElement('div')
    let dateCreated = document.createTextNode(new DateProvider(this.dataString.created).getFullTime());
    dateCreatedWrapper.appendChild(dateCreated)

    let lastUsedWrapper = document.createElement('div')
    let lastUsed = document.createTextNode(new DateProvider(this.dataString.lastUsed).getFullTime());
    lastUsedWrapper.appendChild(lastUsed)

    let commentWrapper = document.createElement('div')
    let trimmedСommentWrapper = document.createElement('div')
    trimmedСommentWrapper.classList.add('trimmed')
    trimmedСommentWrapper.appendChild(document.createTextNode(this.dataString.comments))
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
    wrapper.appendChild(configWrapper)
    wrapper.appendChild(proxyWrapper)
    wrapper.appendChild(dateCreatedWrapper)
    wrapper.appendChild(lastUsedWrapper)
    wrapper.appendChild(commentWrapper)


    return wrapper
  }

  getComponent() {
    return this.createComponent()
  }

};
