import DateProvider from './../assets/dateProvider.js'
import IconProvider from './../assets/iconProvider.js'
import Checkbox from './../viewComponents/checkbox.js'

// {
//       name : 'Hello Name',
//       config : {
//         os: 'windows',
//         browser: 'chrome'
//       },
//       proxy: {
//         flag: 'usa',
//         ip: '142.222.147.987'
//       },
//       created: 1611722437994,
//       lastUsed: 1611722438994,
//       archiveDate: 1611722439994,
//
//     }

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

    commentWrapper.appendChild(  document.createTextNode(new DateProvider(this.dataString.archiveDate).getFullTime()) )



    checkbox.addEventListener('change', (e) => {
      this.handlers.checkbox(e.target.checked)
    })



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
