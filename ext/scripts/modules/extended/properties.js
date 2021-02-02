export default class {

  constructor () {
    this.init()
  }


  init () {
    const mwWrapper = document.querySelectorAll('.mw__extended_settings')[0]
    const mwWrapperTable = mwWrapper.querySelectorAll('.main--properties .flexible_table')[0]
    const searchInput = mwWrapper.querySelectorAll('.main--properties .search input')[0]


    let dataArr = [
      {
        'option': 'navigator.vendor',
        'value': 'Google Inc.',
        'editable': true,
        'id': 1603709258344
      },
      {
        'option': 'navigator.language',
        'value': 'ru-UA',
        'editable': true,
        'id': 1603709257344
      },
      {
        'option': 'navigator.productSub',
        'value': '20030107',
        'editable': true,
        'id': 1603709259344
      },
      {
        'option': 'navigator.hardwareConcurrency',
        'value': '2',
        'editable': true,
        'id': 1603709253344
      },
      {
        'option': 'navigator.gamepads',
        'value': {
          'current': 'true',
          'values': ['true', 'false']
          },
        'editable': true,
        'id': 1603709258345,
      },
      {
        'option': 'navigator.deviceMemory',
        'value': {
          'current': '15',
          'values': ['15', '30']
          },
        'editable': true,
        'id': 1603709258335,
      },

    ]


    const changedataArrById = (id, key, value) => {
      dataArr = [...dataArr].map((i) => {
        if (parseInt(i.id) === parseInt(id)) {
          i[key] = value
        }
        return i
      })
    }


    // BUTTONS ============================================
     const closeBtn = mwWrapper.querySelectorAll('.properties-close')[0]
     const saveBtn = mwWrapper.querySelectorAll('.properties-save')[0]


    closeBtn.addEventListener('click', () => {
      mwWrapper.classList.remove('active')
    })
    saveBtn.addEventListener('click', () => {
      if (!saveBtn.classList.contains('btn--disabled')) {
        mwWrapper.classList.remove('active')
        saveBtn.classList.add('btn--disabled')
        saveBtn.classList.remove('btn--green')
      }
    })


    // init Selects
    const initEventsForSelects = () => {
      const selects = mwWrapperTable.querySelectorAll('.select')

      for (const select of selects) {
        select.addEventListener('click', function (e) {
          if (!select.classList.contains('active')) {
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
              select.classList.add('active')
              select.querySelectorAll('ul')[0].style.display = 'block'
            }
          }
        })
      }

      const selectOptions = mwWrapperTable.querySelectorAll('li.input-option')
      for (const option of selectOptions) {

        option.addEventListener('click', function () {

          if (!option.closest('.select').classList.contains('disabled')) {
            let livalue = option.getAttribute('data-value')
            let lihtml = option.innerHTML
            option.closest('.select').querySelectorAll('.textfirst')[0].innerHTML = lihtml
            option.closest('.select').querySelectorAll('.option').value = livalue
            let id = parseInt(option.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id'))
            let dataArrItem = [...dataArr].filter(i => i.id === parseInt(id))

            let valueObj = {
              'current': livalue,
              'values': dataArrItem[0].value.values,
              'editable':  dataArrItem[0].editable
            }
            changedataArrById(id, 'value', valueObj)

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



    // Flexible wrapper
    const makeFlexibleWidth = () => {
      for (const columnNav of mwWrapperTable.querySelectorAll('.columnNav')) {
        let columnIndex = parseInt(columnNav.parentNode.getAttribute('data-column'))

        for (const flexibleWrapper of columnNav.parentNode.querySelectorAll('.flexible_wrapper')) {
          if ((columnIndex + 1) < 2) {
            flexibleWrapper.style.maxWidth = parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex + 1].style.left) - parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px'
          } else if ((columnIndex + 1) === 2) {
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

          if (colCounter === 0) {

              let colData = dataRow[Object.keys(dataRow)[colCounter]].toString()

              if (searchInput.value.length !== 0) {
                let text = searchInput.value
                let searchReg = new RegExp(text, "igm");
                colData = colData.toString().replace(searchReg, "<span class='marker'>$&</span>")
              }else {
                colData = colData.toString().replace(/(<span class='marker'>|<\/span>)/igm, "");
              }

              mwWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div  data-id="' + dataRow.id + '">' + colData + '</div>')

          }else {

            let colData = dataRow[Object.keys(dataRow)[colCounter]]
            let isSelect = typeof dataRow[Object.keys(dataRow)[colCounter]] === 'object' ? true : false;

            if(isSelect){
              const divWrapper = document.createElement('DIV')
              const select = document.createElement('DIV')
              const dropdown = document.createElement('DIV')
              const textfirst = document.createElement('DIV')
              const list = document.createElement('UL')


              divWrapper.classList.add('flexible_wrapper')
              divWrapper.setAttribute('data-id', dataRow.id)
              select.classList.add('select')
              if(!dataRow.editable){
                select.classList.add('disabled')
              }
              dropdown.classList.add('mm-dropdown')
              textfirst.classList.add('textfirst')


              let tfContent = dataRow[Object.keys(dataRow)[colCounter]].current
              if (searchInput.value !== 0) {
                 tfContent = tfContent.replace(new RegExp(searchInput.value, 'i'), "<span class='marker'>" + searchInput.value + '</span>')
              }


              textfirst.innerHTML = tfContent


              const x = document.createElement('INPUT')
              x.setAttribute('type', 'hidden')
              x.classList.add('option')
              x.setAttribute('value', dataRow[Object.keys(dataRow)[colCounter]].current )

              for(const option of dataRow[Object.keys(dataRow)[colCounter]].values){
                const li =  document.createElement('LI')
                  li.setAttribute('data-value', option)
                  li.classList.add('input-option')
                  li.innerHTML = option.replace(new RegExp(searchInput.value, 'i'), "<span class='marker'>" + searchInput.value + '</span>')
                list.appendChild(li)
              }


              dropdown.appendChild(textfirst)
              dropdown.appendChild(list)
              dropdown.appendChild(x)
              select.appendChild(dropdown)
              divWrapper.appendChild(select)

              mwWrapperTable.querySelectorAll('.column_body')[colCounter].appendChild(divWrapper)

            }else {

              const divWrapper = document.createElement('DIV')
              divWrapper.classList.add('flexible_wrapper')
              divWrapper.setAttribute('data-id', dataRow.id)

              if(dataRow.editable){
                const x = document.createElement('INPUT')
                x.setAttribute('type', 'text')
                x.setAttribute('value', dataRow[Object.keys(dataRow)[colCounter]])

                let colDuplicator = colCounter - 1
                let activeWrapper = true
                divWrapper.addEventListener('click', (e) => {
                  if (activeWrapper) {
                    divWrapper.innerHTML = ''
                    divWrapper.classList.remove('wrapper_withoutinput')
                    divWrapper.appendChild(x)
                    activeWrapper = false
                    x.focus()
                  }
                })
                x.addEventListener('blur', (e) => {
                  divWrapper.innerHTML = e.target.value
                  divWrapper.classList.add('wrapper_withoutinput')
                  activeWrapper = true
                  changedataArrById(dataRow.id, Object.keys(dataRow)[colDuplicator], e.target.value)
                  saveBtn.classList.remove('btn--disabled')
                  saveBtn.classList.add('btn--green')
                })

              }else {
                divWrapper.classList.add('disabled')
              }




              if (searchInput.value.length !== 0) {
                let text = searchInput.value
                let searchReg = new RegExp(text, "igm");
                divWrapper.innerHTML = colData.toString().replace(searchReg, "<span class='marker'>$&</span>")
              }else {
                divWrapper.innerHTML = colData.toString().replace(/(<span class='marker'>|<\/span>)/igm, "");
              }
              divWrapper.classList.add('wrapper_withoutinput')
              mwWrapperTable.querySelectorAll('.column_body')[colCounter].appendChild(divWrapper)
            }


        }
          colCounter++
        }
        i++
      }

      mwWrapperTable.style.height = data.length * 40 + 260 + 'px'

      makeFlexibleWidth()
      initRowsEvents()
      initEventsForSelects()
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
      mwWrapper.querySelectorAll('.main--properties .search')[0].querySelectorAll('label')[0].classList.remove('active')
      rerenderItems()
    })

    const getSearchedData = (value) => {
      let vals;
      let searchInputData = [];

      [...dataArr].map(x => {

          let isSearchTrueForThisElem = false
          vals = Object.values(x).some((item, i) => {
            if (typeof item !== 'object') {
              if (item.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem && typeof item !== 'boolean') {
                isSearchTrueForThisElem = true
                searchInputData.push(x)
              }
            }

            if (typeof item === 'object') {
              if (item.current.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem && typeof item !== 'boolean') {
                isSearchTrueForThisElem = true
                searchInputData.push(x)
              }

              for( const values of item.values){
                if (values.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem && typeof item !== 'boolean') {
                  isSearchTrueForThisElem = true
                  searchInputData.push(x)
                }
              }

            }
          })
      })


      return [...searchInputData]
    }


  }
};
