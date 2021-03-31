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

    let urlBase  =  new URL(this.dataString.url);
    let faviconeUrl = 'https://s2.googleusercontent.com/s2/favicons?domain=' + urlBase.hostname
    let favicone = document.createElement('img')
    favicone.setAttribute('src',faviconeUrl)



    let wrapper = document.createElement('div')
    let checkBoxCallback = this.handlers.checkbox
    let checkbox = new Checkbox(checkBoxCallback, this.isChecked).getCheckbox();
    let checkboxWrapper = document.createElement('div')
    let trimmedWrapper = document.createElement('div')
    trimmedWrapper.classList.add('trimmed')
    checkboxWrapper.appendChild(checkbox)
    trimmedWrapper.appendChild(favicone)
    trimmedWrapper.appendChild(document.createTextNode( urlBase.hostname + '  Site Title'))
    checkboxWrapper.appendChild(trimmedWrapper)




    let urlWrapper = document.createElement('div')
    let trimmedUrlWrapper = document.createElement('div')
    trimmedUrlWrapper.classList.add('trimmed')
    trimmedUrlWrapper.appendChild(document.createTextNode(urlBase))
    urlWrapper.appendChild( trimmedUrlWrapper )


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
    urlWrapper.appendChild( navbarWrapper )


    wrapper.appendChild(checkboxWrapper)
    wrapper.appendChild(urlWrapper)


    return wrapper
  }

  getComponent() {
    return this.createComponent()
  }

};
