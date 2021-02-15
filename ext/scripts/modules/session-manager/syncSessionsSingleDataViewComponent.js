import DateProvider from './../dist/dateProvider.js'
import IconProvider from './../dist/iconProvider.js'
import Checkbox from './../viewComponents/checkbox.js'

      // name : 'Hello Name',
      // nameIcons: ['windows', 'chrome', 'usa'],
      // status: 'Free',
      // group: 'name',
      // creator: 'Rivaldo',
      // lastUser: 'Zidane',
      // comments: 'Lorem ipsum dolor sit amet',
      // created: 1611736652436

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
    checkboxWrapper.appendChild( new IconProvider(this.dataString.config.os).getIcon())
    checkboxWrapper.appendChild( new IconProvider(this.dataString.config.browser).getIcon())
    checkboxWrapper.appendChild( new IconProvider(this.dataString.config.flag).getIcon())
    checkboxWrapper.appendChild(trimmedWrapper)


    let statusWrapper = document.createElement('div')
    let status = document.createTextNode(this.dataString.status);
    statusWrapper.appendChild(status)
    statusWrapper.classList.add(this.dataString.status === 'Free' ? 'green' : 'orange')

    let groupWrapper = document.createElement('div')
    let group = document.createTextNode(this.dataString.group);
    groupWrapper.appendChild(group)


    let creatorWrapper = document.createElement('div')
    let creator = document.createTextNode(this.dataString.creator);
    creatorWrapper.appendChild(creator)

    let userWrapper = document.createElement('div')
    let user = document.createTextNode(this.dataString.lastUser);
    userWrapper.appendChild(user)

    let commentWrapper = document.createElement('div')
    let trimmedСommentWrapper = document.createElement('div')
    trimmedСommentWrapper.classList.add('trimmed')
    trimmedСommentWrapper.appendChild(document.createTextNode(this.dataString.comments))
    commentWrapper.appendChild( trimmedСommentWrapper )


    let navbarWrapper = document.createElement('div')

    let editWrapper = document.createElement('div')



    editWrapper.addEventListener('click', () => {
      this.handlers.edit()
    })

    checkbox.addEventListener('change', (e) => {
      this.handlers.checkbox(e.target.checked)
    })

    editWrapper.appendChild(new IconProvider('edit').getIcon())

    navbarWrapper.appendChild(editWrapper)
    navbarWrapper.classList.add('row-actions')
    commentWrapper.appendChild( navbarWrapper )


    wrapper.appendChild(checkboxWrapper)
    wrapper.appendChild(statusWrapper)
    wrapper.appendChild(groupWrapper)
    wrapper.appendChild(creatorWrapper)
    wrapper.appendChild(userWrapper)
    wrapper.appendChild(commentWrapper)


    return wrapper
  }

  getComponent() {
    return this.createComponent()
  }

};
