export default class {

  constructor () {
    this.init()
  }

  init () {
    const mwWrapper = document.querySelectorAll('.mw__extended_settings')[0]
    const mwWrapperTable = mwWrapper.querySelectorAll('.main--headers .flexible_table')[0]
    const theadCheckbox = mwWrapperTable.querySelectorAll('.thead-checkbox input[type=checkbox]')[0]
    const searchInput = mwWrapper.querySelectorAll('.main--headers .search input')[0]


    let dataArr = [
      {
        'title': 'Header name',
        'value': 'Header value',
        'id': 1603709258344,
        'state': {
          'checked': false,
        }
      },

    ]

    // DataWorkers
    const createDataItem = (data) => {
      dataArr.splice(dataArr.length, 0, {
          'title': data[0],
          'value': data[1],
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
    const closeBtn = mwWrapper.querySelectorAll('.headers-close')[0]
    const addBtn = mwWrapper.querySelectorAll('.headers-add')[0]
    const deleteBtn = mwWrapper.querySelectorAll('.headers-delete')[0]
    const saveBtn = mwWrapper.querySelectorAll('.headers-save')[0]

   addBtn.addEventListener('click', () => {
     createDataItem(['', ''])
     saveBtn.classList.remove('btn--disabled')
     saveBtn.classList.add('btn--green')
   })
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
   deleteBtn.addEventListener('click', (e) => {

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
       theadCheckbox.checked = false
       e.target.classList.add('btn--disabled')
       e.target.classList.remove('btn--red')
       rerenderItems()
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
    theadCheckbox.addEventListener('change', function (e) {
      let data = [...dataArr]
      if(searchInput.value.length){
        data = getSearchedData(searchInput.value)
        let searchedIds = [...dataArr].map(i => {
          return i.id
        })

        searchedIds.map(id => {
          let rowCounter = 0;
          [...dataArr].map(dataRow => {
            if(dataRow.id === id) {
              dataRow.state.checked = e.target.value
            }
            rowCounter++;
          })
        })

      }else {
        data = [...dataArr]
        let searchedIds = data.map(i => {
          return i.id
        })

        searchedIds.map(id => {
          dataArr.map((i) => {
            if(i.id === id) {
              i.state.checked = e.target.checked
            }
          })
        })
      }


      if(e.target.checked) {
          deleteBtn.classList.add('btn--red')
          deleteBtn.classList.remove('btn--disabled')
      }else {
          deleteBtn.classList.add('btn--disabled')
          deleteBtn.classList.remove('btn--red')
      }

      rerenderItems()
    })
    // Flexible wrapper
    const makeFlexibleWidth = () => {
      for (const columnNav of mwWrapperTable.querySelectorAll('.columnNav')) {
        let columnIndex = parseInt(columnNav.parentNode.getAttribute('data-column'))

        for (const flexibleWrapper of columnNav.parentNode.querySelectorAll('.flexible_wrapper')) {
          if ((columnIndex + 1) < 3) {
            flexibleWrapper.style.maxWidth = parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex + 1].style.left) - parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px'
          } else if ((columnIndex + 1) === 3) {
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
            let checked = dataRow.state.checked ? 'checked' : ''
            mwWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div  data-id="' + dataRow.id + '"><label class="checkbox-container"><input type="checkbox" data-row="' + i + '" ' + checked + '/><span class="checkmark"></span></label></div>')
          }
            else {
            let colData = dataRow[Object.keys(dataRow)[colCounter - 1]].toString()

            if (searchInput.value !== 0) {
              colData = colData.replace(new RegExp(searchInput.value, 'i'), "<span class='marker'>" + searchInput.value + '</span>')
            }
            const divWrapper = document.createElement('DIV')
            divWrapper.classList.add('flexible_wrapper')
            divWrapper.setAttribute('data-id', dataRow.id)
              divWrapper.setAttribute('data-current', dataRow.state.current)
            const x = document.createElement('INPUT')
            x.setAttribute('type', 'text')
            x.setAttribute('value', dataRow[Object.keys(dataRow)[colCounter - 1]])


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
            divWrapper.innerHTML = colData
            divWrapper.classList.add('wrapper_withoutinput')
            mwWrapperTable.querySelectorAll('.column_body')[colCounter].appendChild(divWrapper)
          }
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
      theadCheckbox.checked = false
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


  }
};
