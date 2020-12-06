'use strict'
import  ProxyWorker from './modules/proxyWorker.js'
import  AgentWorker from './modules/useragentWorker.js'
import  ConfigManagerWorker from './modules/configManagerWorker.js'
import  TableWorker from './modules/tableWorker.js'

import ExtendedBlacklistWorker from './modules/extended/urlBlacklist.js'
import ExtendedHeadersWorker from './modules/extended/httpHeaders.js'
import ExtendedPluginsWorker from './modules/extended/plugins.js'
import ExtendedFontsWorker from './modules/extended/fonts.js'
import ExtendedWebGLWorker from './modules/extended/webgl.js'
import ExtendedPropertiesWorker from './modules/extended/properties.js'

new ProxyWorker();
new AgentWorker();
new TableWorker();
new ConfigManagerWorker();

new ExtendedBlacklistWorker();
new ExtendedHeadersWorker();
new ExtendedPluginsWorker();
new ExtendedFontsWorker();
new ExtendedWebGLWorker();
new ExtendedPropertiesWorker();

const setEventsForSelects = () => {
  const selects = document.querySelectorAll('.select')
  for (const select of selects) {
    select.addEventListener('click', function (e) {
      if (this.classList.contains('active')) {
        for (const select of selects) {
          select.querySelectorAll('ul')[0].style.display = 'none'
          select.classList.remove('active')
        }
      } else {
        for (const select of selects) {
          select.querySelectorAll('ul')[0].style.display = 'none'
          select.classList.remove('active')
        }
        if (!e.target.classList.contains('.input-option')) {
          this.classList.add('active')
          this.querySelectorAll('ul')[0].style.display = 'block'
        }
      }
    })
  }

  const selectOptions = document.querySelectorAll('li.input-option')
  for (const option of selectOptions) {
    option.addEventListener('click', function () {
      if (!this.closest('.select').classList.contains('disabled')) {
        let livalue = this.getAttribute('data-value')
        let lihtml = this.innerHTML
        this.closest('.select').querySelectorAll('.textfirst')[0].innerHTML = lihtml
        this.closest('.select').querySelectorAll('.option').value = livalue
      }
    })
  }

  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('textfirst') && !e.target.classList.contains('input-option')) {
      for (const select of selects) {
        select.querySelectorAll('ul')[0].style.display = 'none'
        select.classList.remove('active')
      }
    }
  })
}


const switchers = document.querySelectorAll('.switcher-wrapper')
for (const switcher of switchers) {
  switcher.addEventListener('click', () => {
    const checkbox = switcher.querySelectorAll('input')[0]
    checkbox.checked = !checkbox.checked
  })
}

const inputsWrapper = document.querySelectorAll('.input-wrapper')
const setInputEventListeners = (input) => {
  const wrapper = input.closest('div')

  input.onfocus = function () {
    wrapper.classList.add('active')
    wrapper.querySelectorAll('label')[0].classList.add('active')
  }
  input.onblur = function () {
    wrapper.classList.remove('active')
    if (input.value === '') {
      wrapper.querySelectorAll('label')[0].classList.remove('active')
    }
  }

  const label = wrapper.querySelectorAll('label')[0]
  label.addEventListener('click', () => {
    input.focus()
  })
}
for (const inputWrapper of inputsWrapper) {
  inputWrapper.addEventListener('mouseover', function () {
    this.classList.add('hover')
  })
  inputWrapper.addEventListener('mouseout', function () {
    this.classList.remove('hover')
  })

  let textField = inputWrapper.querySelectorAll('input')[0]
  if (!textField) {
    textField = inputWrapper.querySelectorAll('textarea')[0]
  }

  if (!textField.classList.contains('hidden') && !inputWrapper.classList.contains('disabled')) {
    setInputEventListeners(textField)
  }
}

setEventsForSelects()

const sessionColor = document.querySelectorAll('.session-color')[0]
const sessionColorMark = document.querySelectorAll('.session-color-mark')[0]
const sessionColorsWrapper = document.querySelectorAll('.session-colors-wrapper')[0]
const sessionColorOption = document.querySelectorAll('.session-color-option')
const sessionHighlightColorInput = document.querySelectorAll('#session-hightlight-color')[0]

sessionColor.addEventListener('click', (e) => {
  sessionColorsWrapper.classList.toggle('active')
})
let prevActiveMark
for (const option of sessionColorOption) {
  option.addEventListener('click', function () {
    let color = this.getAttribute('data-color')
    sessionColorsWrapper.classList.remove('active')
    this.classList.add('active')

    if (prevActiveMark) {
      prevActiveMark.classList.remove('active')
    }
    sessionHighlightColorInput.value = color

    if (color !== 'none') {
      sessionColor.classList.add('mark-active')
      sessionColorMark.style.backgroundColor = color
    } else {
      sessionColor.classList.remove('mark-active')
    }

    prevActiveMark = this
  })
}

const items = document.querySelectorAll('.item')
for (const item of items) {
  let checkbox = item.querySelectorAll('input')[0]
  checkbox.checked ? item.classList.add('active') : item.classList.remove('active')
  checkbox.addEventListener('click', function (e) {
    e.target.checked ? item.classList.add('active') : item.classList.remove('active')
  })
}

const filesStore = new ClipboardEvent('').clipboardData || new DataTransfer()

const holder = document.getElementById('holder')
const resultWrapper = document.getElementsByClassName('result')[0]
const inputElement = document.getElementById('fileInput')
holder.ondragover = function () { this.className = 'hover'; return false }
holder.ondragend = function () { this.className = ''; return false }
holder.ondrop = function (e) {
  this.className = ''
  e.preventDefault()
  resultWrapper.innerHTML = ''
  for (let i = 0, len = e.dataTransfer.files.length; i < len; i++) filesStore.items.add(e.dataTransfer.files[i])

  for (let i = 0, len = filesStore.files.length; i < len; i++) {
    let elem = document.createElement('div')
    let close = document.createElement('div')
    elem.classList.add('filewrapper')
    close.classList.add('close')
    close.addEventListener('click', () => {
      filesStore.items.remove(i)
      elem.remove()
      inputElement.files = filesStore.files
    })
    elem.innerHTML = filesStore.files[i].name
    elem.appendChild(close)
    resultWrapper.appendChild(elem)
  }
  inputElement.files = filesStore.files
}

inputElement.addEventListener('change', handleFiles, false)

function handleFiles (e) {
  const fileList = this.files

  e.preventDefault()

  resultWrapper.innerHTML = ''

  for (let i = 0, len = fileList.length; i < len; i++) filesStore.items.add(fileList[i])

  for (let i = 0, len = filesStore.files.length; i < len; i++) {
    let elem = document.createElement('div')
    let close = document.createElement('div')
    elem.classList.add('filewrapper')
    close.classList.add('close')
    close.addEventListener('click', () => {
      filesStore.items.remove(i)
      elem.remove()
      inputElement.files = filesStore.files
    })
    elem.innerHTML = filesStore.files[i].name
    elem.appendChild(close)
    resultWrapper.appendChild(elem)
  }

  inputElement.files = filesStore.files
}

const tabsManager = document.getElementsByClassName('tabs_manager')

for (const singleTabsManager of tabsManager) {
  for (const tabsManagerLink of singleTabsManager.querySelectorAll('span')) {
    tabsManagerLink.addEventListener('click', function () {
      for (const tabsManagerLink1 of singleTabsManager.querySelectorAll('span')) {
        tabsManagerLink1.classList.remove('active')
      }

      tabsManagerLink.classList.add('active')

      let indexData = tabsManagerLink.getAttribute('data-index')
      for (const main of tabsManagerLink.closest('.mw').querySelectorAll('main')) {
        main.classList.contains('active') ? main.classList.remove('active') : null

        if(main.getAttribute('data-index') === indexData){
           main.classList.add('active')
           main.querySelectorAll('.search input')[0].focus()
         }
      }
      for (const footer of tabsManagerLink.closest('.mw').querySelectorAll('footer')) {
        footer.classList.contains('active') ? footer.classList.remove('active') : null

        footer.getAttribute('data-index') === indexData ? footer.classList.add('active') : null
      }
    })
  }
}

const btnsWrapper = document.querySelectorAll('.btns-wrapper--js')
for (const btnWrapper of btnsWrapper) {
  const btns = btnWrapper.querySelectorAll('.btn')

  for (const btn of btns) {
    btn.addEventListener('click', () => {
      for (const btn0 of btns) btn !== btn0 ? btn0.classList.remove('active') : btn.classList.add('active')
    })
  }
}

const windows = document.querySelectorAll('.mw')
for (const singleWindow of windows) {
  singleWindow.querySelectorAll('.close')[0].addEventListener('click', () => {
    singleWindow.classList.remove('active')
  })
}

const sessionName = document.getElementById('session_name')
document.querySelectorAll('.rename')[0].addEventListener('click', () => {
  sessionName.removeAttribute('disabled')
  setInputEventListeners(sessionName)
  sessionName.focus()
})
sessionName.addEventListener('blur', () => {
  sessionName.setAttribute('disabled', 'true')
})

document.querySelectorAll('.clone')[0].addEventListener('click', () => {
  document.querySelectorAll('.clone--success')[0].classList.add('active')

  document.querySelectorAll('#session_name')[0].select()
  document.execCommand('copy')

  setTimeout(() => {
    document.querySelectorAll('.clone--success')[0].classList.remove('active')
  }, 3000)
})
