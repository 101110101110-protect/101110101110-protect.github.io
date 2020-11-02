export default class {

  constructor () {
    this.init()
    console.log('fonts');
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
    // const closeAgentsBtn = mwWrapper.querySelectorAll('.agent-close')[0]
    // const addAgentBtn = mwWrapper.querySelectorAll('.agent-add')[0]
    //
    // const deleteAgentBtn = mwWrapper.querySelectorAll('.agent-delete')[0]
    //
    // const saveAgentBtn = mwWrapper.querySelectorAll('.agent-save')[0]
    // addAgentBtn.addEventListener('click', () => {
    //   createDataItem(['unset', 'unset', ''])
    // })
    // closeAgentsBtn.addEventListener('click', () => {
    //   mwWrapper.classList.remove('active')
    // })
    // saveAgentBtn.addEventListener('click', () => {
    //   if (!saveAgentBtn.classList.contains('btn--disabled')) {
    //     mwWrapper.classList.remove('active')
    //   }
    // })
    // deleteAgentBtn.addEventListener('click', () => {
    //
    //   let checkedIds = [];
    //   [...dataArr].map((i)=> {
    //     if(i.state.checked){
    //       checkedIds.push(i.id)
    //     }
    //   })
    //
    //
    //   checkedIds.map(id => {
    //     let rowCounter = 0;
    //     [...dataArr].map(dataRow => {
    //       if(dataRow.id === id) {
    //         dataArr.splice(rowCounter, 1);
    //       }
    //       rowCounter++;
    //     })
    //   })
    //

    //   rerenderItems()
    // })




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
            deleteAgentBtn.classList.remove('btn--disabled')
            deleteAgentBtn.classList.add('btn--red')
          }else {
            deleteAgentBtn.classList.add('btn--disabled')
            deleteAgentBtn.classList.remove('btn--red')
          }

        })
      }
    }

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
            divWrapper.classList.add('flexible_wrapper')
            divWrapper.setAttribute('data-id', dataRow.id)

            const x = document.createElement('INPUT')
            x.setAttribute('type', 'text')
            x.setAttribute('value', dataRow[Object.keys(dataRow)[colCounter]])


            let colDuplicator = colCounter - 1
            let activeWrapper = true
            // divWrapper.addEventListener('click', (e) => {
            //   if (activeWrapper) {
            //     divWrapper.innerHTML = ''
            //     divWrapper.classList.remove('wrapper_withoutinput')
            //     divWrapper.appendChild(x)
            //     activeWrapper = false
            //     x.focus()
            //   }
            // })
            x.addEventListener('blur', (e) => {
              divWrapper.innerHTML = e.target.value
              divWrapper.classList.add('wrapper_withoutinput')
              activeWrapper = true
              changedataArrById(dataRow.id, Object.keys(dataRow)[colDuplicator], e.target.value)
            })
            divWrapper.innerHTML = ''
            divWrapper.insertAdjacentHTML('beforeend',   '<div  data-id="' + dataRow.id + '"><label class="checkbox-container"><input type="checkbox" data-row="' + i + '" ' + dataRow.state.checked + '/><span class="checkmark"></span></label></div>' + colData )
            divWrapper.classList.add('wrapper_withoutinput')
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


  }
};
