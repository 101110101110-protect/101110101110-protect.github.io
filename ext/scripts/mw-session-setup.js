'use strict'
import  ProxyWorker from './modules/proxyWorker.js'
import  TableWorker from './modules/tableWorker.js'


new ProxyWorker();
new TableWorker();

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


// =============================================== plugins worker
let pluginsSearchData = []
let pluginsData = [
  {
    'name': 'Yanado - Task Man',
    'description': 'Yanado - Task Man',
    'version': '6.6',
    'filename': 'Yanado - Task Man',
    'mimetype': 'application/x-unknown',
    'mimedescription': 'Mime description',
    'suffixes': 'ksh'
  },
  {
    'name': 'Yanado - Task Man',
    'description': 'Yanado - Task Man',
    'version': '6.6',
    'filename': 'Yanado - Task Man',
    'mimetype': 'application/x-unknown',
    'mimedescription': 'Mime description',
    'suffixes': 'ksh'
  }

]

const extendedWrapper = document.querySelectorAll('.mw__extended_settings')[0]
const extendedWrapperTable = document.querySelectorAll('.table--plugins')[0]

const rerenderPluginsItems = (data) => {
  let columns = extendedWrapperTable.querySelectorAll('.column')

  let x = 0
  for (const column of columns) {
    column.querySelectorAll('.column_body')[0].innerHTML = ''
    x === 1 ? column.style.left = 57 + 'px' : column.style.left = (115 * x) + 'px'
    x++
  }

  let i = 0
  for (const row of data) {
    let colCounter = 0
    for (const column of columns) {
      colCounter === 0 ?
        extendedWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div><label class="checkbox-container"><input type="checkbox" /><span class="checkmark"></span></label></div>')
      :
        extendedWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div>' + row[Object.keys(row)[colCounter - 1]] + '</div>')
      colCounter++
    }

    i++
  }

  extendedWrapperTable.style.height = data.length * 40 + 40 + 'px'
}

window.addEventListener('load', () => {
  rerenderPluginsItems(pluginsData)
})

const pluginsExtendedSearch = document.querySelectorAll('.mw__extended_settings .main--plugins input')[0]
pluginsExtendedSearch.addEventListener('keyup', (e) => {
  searchPluginsData(e.target.value)
})

const searchPluginsData = (value) => {
  let vals
  let searchData = []
  let dataClone = [...pluginsData].map(x => {

    let isSearchTrueForThisElem = false
    vals = Object.values(x).some((item, i) => {
 // get data obj

      if (typeof item !== 'object') {
        if (item.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem) {
          isSearchTrueForThisElem = true
          searchData.push(x)
        }
      }
    })
  })
  rerenderPluginsItems(searchData)
}

const addPluginBtn = document.querySelectorAll('.plugin-add')[0]
const deletePluginBtn = document.querySelectorAll('.plugin-delete')[0]

addPluginBtn.addEventListener('click', () => {
  pluginsData.splice(pluginsData.length, 0, {
    'name': 'New Yanado - Task Man',
    'description': 'New Yanado - Task Man',
    'version': '6.7',
    'filename': 'New Yanado - Task Man',
    'mimetype': 'application/x-unknown',
    'mimedescription': 'Mime description',
    'suffixes': 'ksh'
  },)

  rerenderPluginsItems(pluginsData)
})

deletePluginBtn.addEventListener('click', () => {
  let i = 0
  let checkboxArray = []
  for (const checkbox of extendedWrapper.querySelectorAll('.table--plugins .column_body input[type=checkbox]')) {
    checkboxArray.push(checkbox.checked)
  }

  let checkboxIndex = 0
  let checkboxecondIndex = 0
  for (const checkbox of checkboxArray) {

    if (checkbox) {
      pluginsData.splice(checkboxecondIndex - checkboxIndex, 1)
      checkboxIndex++
    }
    checkboxecondIndex++
  }

  rerenderPluginsItems(pluginsData)
})
// ========================================= End
// =============================================== Headers worker
let headersSearchData = []
let headersData = [
  {
    'name': 'Name',
    'value': 'Value'
  }
]

const headersWrapperTable = extendedWrapper.querySelectorAll('.table--headers')[0]

const rerenderHeadersItems = (data) => {
  let columns = headersWrapperTable.querySelectorAll('.column')

  let x = 0
  for (const column of columns) {
    column.querySelectorAll('.column_body')[0].innerHTML = ''
    x === 1 ? column.style.left = 57 + 'px' : column.style.left = (115 * x) + 'px'
    x++
  }

  let i = 0
  for (const row of data) {
    let colCounter = 0
    for (const column of columns) {
      colCounter === 0 ?
        headersWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div><label class="checkbox-container"><input type="checkbox" /><span class="checkmark"></span></label></div>')
      :
        headersWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div>' + row[Object.keys(row)[colCounter - 1]] + '</div>')
      colCounter++
    }

    i++
  }

  headersWrapperTable.style.height = data.length * 40 + 40 + 'px'
}

window.addEventListener('load', () => {
  rerenderHeadersItems(headersData)
})

const headersSearch = document.querySelectorAll('.mw__extended_settings .main--headers input')[0]
headersSearch.addEventListener('keyup', (e) => {
  searchHeadersData(e.target.value)
})

const searchHeadersData = (value) => {
  let vals
  let searchData = []
  let dataClone = [...headersData].map(x => {

    let isSearchTrueForThisElem = false
    vals = Object.values(x).some((item, i) => {

      if (typeof item !== 'object') {
        if (item.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem) {
          isSearchTrueForThisElem = true
          searchData.push(x)
        }
      }
    })
  })
  rerenderHeadersItems(searchData)
}

const addHeadersBtn = extendedWrapper.querySelectorAll('.headers-add')[0]
const deleteHeadersBtn = extendedWrapper.querySelectorAll('.headers-delete')[0]

addHeadersBtn.addEventListener('click', () => {
  headersData.splice(headersData.length, 0, {
    'Http headers': 'New name',
    'Header value': 'New Value',
  })

  rerenderHeadersItems(headersData)
})

deleteHeadersBtn.addEventListener('click', () => {
  let i = 0
  let checkboxArray = []
  for (const checkbox of extendedWrapper.querySelectorAll('.table--headers .column_body input[type=checkbox]')) {
    checkboxArray.push(checkbox.checked)
  }

  let checkboxIndex = 0
  let checkboxecondIndex = 0
  for (const checkbox of checkboxArray) {

    if (checkbox) {
      headersData.splice(checkboxecondIndex - checkboxIndex, 1)
      checkboxIndex++
    }
    checkboxecondIndex++
  }

  rerenderHeadersItems(headersData)
})
// ========================================= End
// =============================================== Blocked worker
let blockedSearchData = []
let blockedData = [
  {
    'title': 'Twitter website title',
    'value': 'https://twitter.com/adv/detection'
  }
]

const blockedWrapperTable = extendedWrapper.querySelectorAll('.table--blocked')[0]

const rerenderBlockedItems = (data) => {
  let columns = blockedWrapperTable.querySelectorAll('.column')

  let x = 0
  for (const column of columns) {
    column.querySelectorAll('.column_body')[0].innerHTML = ''
    x === 1 ? column.style.left = 57 + 'px' : column.style.left = (115 * x) + 'px'
    x++
  }

  let i = 0
  for (const row of data) {
    let colCounter = 0
    for (const column of columns) {
      colCounter === 0 ?
        blockedWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div><label class="checkbox-container"><input type="checkbox" /><span class="checkmark"></span></label></div>')
      :
       blockedWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div>' + row[Object.keys(row)[colCounter - 1]] + '</div>')
      colCounter++
    }

    i++
  }

  blockedWrapperTable.style.height = data.length * 40 + 40 + 'px'
}

window.addEventListener('load', () => {
  rerenderBlockedItems(blockedData)
})

const blockedSearch = document.querySelectorAll('.mw__extended_settings .main--blocked input')[0]
blockedSearch.addEventListener('keyup', (e) => {
  searchBlockedData(e.target.value)
})

const searchBlockedData = (value) => {
  let vals
  let searchData = []
  let dataClone = [...blockedData].map(x => {

    let isSearchTrueForThisElem = false
    vals = Object.values(x).some((item, i) => {

      if (typeof item !== 'object') {
        if (item.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem) {
          isSearchTrueForThisElem = true
          searchData.push(x)
        }
      }
    })
  })
  rerenderBlockedItems(blockedData)
}

const addBlockedBtn = extendedWrapper.querySelectorAll('.blocked-add')[0]
const deleteBlockedBtn = extendedWrapper.querySelectorAll('.blocked-delete')[0]

addBlockedBtn.addEventListener('click', () => {
  blockedData.splice(blockedData.length, 0, {
    'Website': 'Twitter website title',
    'Banned URL': 'Banned URL',
  })

  rerenderBlockedItems(blockedData)
})
deleteBlockedBtn.addEventListener('click', () => {
  let i = 0
  let checkboxArray = []
  for (const checkbox of extendedWrapper.querySelectorAll('.table--blocked .column_body input[type=checkbox]')) {
    checkboxArray.push(checkbox.checked)
  }

  let checkboxIndex = 0
  let checkboxecondIndex = 0
  for (const checkbox of checkboxArray) {

    if (checkbox) {
      blockedData.splice(checkboxecondIndex - checkboxIndex, 1)
      checkboxIndex++
    }
    checkboxecondIndex++
  }

  rerenderBlockedItems(blockedData)
})
// ========================================= End

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

// session-color
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

        main.getAttribute('data-index') === indexData ? main.classList.add('active') : null
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
