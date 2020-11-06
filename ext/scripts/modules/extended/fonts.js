export default class {

  constructor () {
    this.init()
  }


  init () {
    const mwWrapper = document.querySelectorAll('.mw__extended_settings')[0]
    const mwWrapperTable = mwWrapper.querySelectorAll('.main--fonts .flexible_table')[0]
    const searchInput = mwWrapper.querySelectorAll('.main--fonts .search input')[0]


    let dataArr = [
      {
        'title': 'Avenir',
        'id': 1603709258344,
        'state': {
          'checked': false,
        }
      },
      {
        'title': 'Avenir Next',
        'id': 1603709258345,
        'state': {
          'checked': false,
        }
      },
    ]

    // DataWorkers
    const createDataItem = (data) => {
      dataArr.splice(dataArr.length, 0, {
          'title': data[0],
          'id': +new Date(),
          'state': {
            'checked': false
        }
      })

      rerenderItems()
    }


    const changedataArrById = (id, key, value) => {
      dataArr = [...dataArr].map((i) => {
        if (parseInt(i.id) === parseInt(id)) {
          i[key] = value
        }
        return i
      })
    }


    // BUTTONS ============================================
     const closeBtn = mwWrapper.querySelectorAll('.fonts-close')[0]
     const addBtn = mwWrapper.querySelectorAll('.fonts-add')[0]
     const addFromFileBtn = mwWrapper.querySelectorAll('.fonts-addFromFile')[0]
     const deleteBtn = mwWrapper.querySelectorAll('.fonts-delete')[0]
     const saveBtn = mwWrapper.querySelectorAll('.fonts-save')[0]

    addBtn.addEventListener('click', () => {
      createDataItem([''])
    })
    closeBtn.addEventListener('click', () => {
      if (!closeBtn.classList.contains('btn--disabled')) {
        mwWrapper.classList.remove('active')
      }
    })
    saveBtn.addEventListener('click', () => {
      if (!saveBtn.classList.contains('btn--disabled')) {
        mwWrapper.classList.remove('active')
        saveBtn.classList.add('btn--disabled')
        saveBtn.classList.remove('btn--green')
      }
    })
    deleteBtn.addEventListener('click', () => {

      if(!e.target.classList.contains('btn--disabled')) {
      let checkedIds = [];
      [...dataArr].map((i)=> {
        if(i.state.checked){
          checkedIds.push(i.id)
        }
      })

      checkedIds.map(id => {
        let rowCounter = 0;
        [...dataArr].map(dataRow => {
          if(dataRow.id === id) {
            dataArr.splice(rowCounter, 1);
          }
          rowCounter++;
        })
      })
      deleteBtn.classList.add('btn--disabled')
      deleteBtn.classList.remove('btn--red')
      rerenderItems
      }
    })




    // Checkboxes
    const initCheckboxes = () => {
      const checkboxes = mwWrapperTable.querySelectorAll('.column_body')[0].querySelectorAll('input[type=checkbox]')
      for (const checkbox of checkboxes) {
        checkbox.addEventListener('change', (e) => {
          let id = parseInt( e.target.parentNode.parentNode.getAttribute('data-id'))
          let checkedRow
          [...dataArr].map((i) => {
            if (parseInt(i.id) === id) {
              checkedRow = i.state

            }
          })
          checkedRow.checked = e.target.checked

          changedataArrById(id, 'state', checkedRow)

          let checkedIds = [];
          [...dataArr].map((i)=> {
            if(i.state.checked){
              checkedIds.push(i.id)
            }
          })
          if(checkedIds.length > 0) {
            deleteBtn.classList.remove('btn--disabled')
            deleteBtn.classList.add('btn--red')
          }else {
            deleteBtn.classList.add('btn--disabled')
            deleteBtn.classList.remove('btn--red')
          }

        })
      }
    }

    addFromFileBtn.addEventListener('click', e => {
      const importPopup = document.querySelectorAll('.mw__fonts_import')[0]
      importPopup.classList.add('active')
    })

    // Flexible wrapper
    const makeFlexibleWidth = () => {
      for (const columnNav of mwWrapperTable.querySelectorAll('.columnNav')) {
        let columnIndex = parseInt(columnNav.parentNode.getAttribute('data-column'))

        for (const flexibleWrapper of columnNav.parentNode.querySelectorAll('.flexible_wrapper')) {
          if ((columnIndex + 1) < 1) {
            flexibleWrapper.style.maxWidth = parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex + 1].style.left) - parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px'
          } else if ((columnIndex + 1) === 1) {
            flexibleWrapper.style.maxWidth = 950 - parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px'
          }
        }
      }
    }

    const initRowsEvents = () => {
      let lastHoverElemId
      let columnsBody = mwWrapperTable.querySelectorAll('.column_body')
      for (const columnBody of columnsBody) {
        for (const child of columnBody.childNodes) {
          child.addEventListener('mouseover', () => {
            let row = mwWrapper.querySelectorAll('[data-id="' + child.getAttribute('data-id') + '"]')
            for (const rowElem of row) {
              rowElem.classList.add('hover')
            }
          })
          child.addEventListener('mouseout', () => {
            lastHoverElemId = child.getAttribute('data-id')
            let row = mwWrapper.querySelectorAll('[data-id="' + child.getAttribute('data-id') + '"]')
            for (const rowElem of row) {
              rowElem.classList.remove('hover')
            }
          })
        }
      }
    }

    const getCheckbox = (dataRow) => {
      const label = document.createElement('LABEL')
      label.classList.add('checkbox-container')
      let checked = dataRow.state.checked ? 'checked' : ''
      const checkbox = document.createElement('INPUT')
      checkbox.setAttribute('type', 'checkbox')

      if(checked === 'checked'){
        checkbox.setAttribute('checked', checked)
      }
      const checkmark = document.createElement('LABEL')
      checkmark.classList.add('checkmark')

      label.appendChild( checkbox)
      label.appendChild( checkmark)

      return label
    }


    // RERENDER ============================================
    const rerenderItems = () => {
      let columns = mwWrapperTable.querySelectorAll('.column')
      let x = 0
      let data = [...dataArr]

      for (const column of columns) {
        column.querySelectorAll('.column_body')[0].innerHTML = ''
      }
      if(searchInput.value.length !== 0){
        data = getSearchedData(searchInput.value)
      }

      let i = 0
      for (const dataRow of data) {
        let colCounter = 0
        for (const column of columns) {

          let colData = dataRow[Object.keys(dataRow)[colCounter]].toString()

          if (searchInput.value !== 0) {
            colData = colData.replace(new RegExp(searchInput.value, 'i'), "<span class='marker'>" + searchInput.value + '</span>')
          }
          const divWrapper = document.createElement('DIV')
          const rowContent = document.createElement('DIV')
          rowContent.classList.add('font-wrapper')
          divWrapper.classList.add('flexible_wrapper')
          divWrapper.setAttribute('data-id', dataRow.id)

          const x = document.createElement('INPUT')
          x.setAttribute('type', 'text')
          x.setAttribute('value', dataRow[Object.keys(dataRow)[colCounter]])

          x.addEventListener('blur', (e) => {
            changedataArrById(dataRow.id, Object.keys(dataRow)[colDuplicator], e.target.value)
            saveBtn.classList.remove('btn--disabled')
            saveBtn.classList.add('btn--green')
            divWrapper.innerHTML = ''
            divWrapper.appendChild(getCheckbox(dataRow))
            divWrapper.appendChild(rowContent)
            rowContent.innerHTML = e.target.value
          })


          rowContent.addEventListener('click', (e) => {
            divWrapper.innerHTML = ''
            divWrapper.appendChild(getCheckbox(dataRow))
            divWrapper.appendChild(x)
          })

          let colDuplicator = colCounter
          let activeWrapper = true

          rowContent.innerHTML = colData
          divWrapper.appendChild(getCheckbox(dataRow))
          divWrapper.appendChild(rowContent)


          mwWrapperTable.querySelectorAll('.column_body')[colCounter].appendChild(divWrapper)

          colCounter++
        }
        i++
      }

      mwWrapperTable.style.height = data.length * 40 + 260 + 'px'
      initCheckboxes()
      makeFlexibleWidth()
      initRowsEvents()
    }
    rerenderItems()


    // SEARCH ======================================
    searchInput.addEventListener('keyup', (e) => {
      if(e.target.value.length === 0) {
        mwWrapper.querySelectorAll('.clearSearch')[0].style.display = 'none'
      }else {
          mwWrapper.querySelectorAll('.clearSearch')[0].style.display = 'block'
      }
      rerenderItems()
    })

    mwWrapper.querySelectorAll('.clearSearch')[0].addEventListener('click', ()=> {
      searchInput.value = '';
      mwWrapper.querySelectorAll('.search')[0].querySelectorAll('label')[0].classList.remove('active')
      rerenderItems()
    })

    const getSearchedData = (value) => {
      let vals;
      let searchInputData = [];

      [...dataArr].map(x => {

          let isSearchTrueForThisElem = false
          vals = Object.values(x).some((item, i) => {
            if (typeof item !== 'object') {
              if (item.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem) {
                isSearchTrueForThisElem = true
                searchInputData.push(x)
              }
            }
          })
      })


      return [...searchInputData]
    }


    let filesStore = new ClipboardEvent('').clipboardData || new DataTransfer()

    const holder = document.getElementById('fontsHolder')
    const resultWrapper = document.getElementsByClassName('fontsResult')[0]
    const inputElement = document.getElementById('fontsFileInput')

    const importFilesBtn = document.querySelectorAll('.fonts_import_files')[0]
    const importClosesBtn = document.querySelectorAll('.fonts_import_close')[0]

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

    const handleImport = (e) => {
      if(  importFilesBtn.classList.contains('btn--green')) {
      for (let i = 0; i < filesStore.files.length; i++) {

          (function (file) {

            createDataItem([file.name])

          })(filesStore.files[i])

        }
        filesStore = new ClipboardEvent('').clipboardData || new DataTransfer()
        resultWrapper.innerHTML = ''
        importFilesBtn.classList.remove('btn--green')
        importFilesBtn.classList.add('btn--disabled')
        handleClose()
      }
    }

    const handleFiles = (e) => {
      const fileList = e.target.files
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
          if(filesStore.files.length !== 0) {
            importFilesBtn.classList.add('btn--green')
            importFilesBtn.classList.remove('btn--disabled')
          }else {
            importFilesBtn.classList.remove('btn--green')
            importFilesBtn.classList.add('btn--disabled')
          }
        })
        console.log( filesStore.files[i]);
        elem.innerHTML = filesStore.files[i].name
        elem.appendChild(close)
        resultWrapper.appendChild(elem)
      }

      inputElement.files = filesStore.files

      if(filesStore.files.length !== 0) {
        importFilesBtn.classList.add('btn--green')
        importFilesBtn.classList.remove('btn--disabled')
      }else {
        importFilesBtn.classList.remove('btn--green')
        importFilesBtn.classList.add('btn--disabled')
      }
    }

    const handleClose = () => {
      const importPopup = document.querySelectorAll('.mw__fonts_import')[0]
      importPopup.classList.remove('active')
      saveBtn.classList.remove('btn--disabled')
      saveBtn.classList.add('btn--green')
    }

    inputElement.addEventListener('change', handleFiles)

    importFilesBtn.addEventListener('click', handleImport)

    importClosesBtn.addEventListener('click', handleClose)


  }
};
