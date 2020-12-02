export default class {

  constructor () {
    this.init()
  }

  init () {
    const mwWrapper = document.querySelectorAll('.mw__extended_settings')[0]
    const mwWrapperTable = mwWrapper.querySelectorAll('.main--plugins .flexible_table')[0]
    const theadCheckbox = mwWrapperTable.querySelectorAll('.thead-checkbox input[type=checkbox]')[0]
    const searchInput = mwWrapper.querySelectorAll('.main--plugins .search input')[0]


    let dataArr = [{
        'name': 'Yanado - Task Man',
        'description': 'Yanado - Task Man',
        'version': '6.6',
        'filename': 'Yanado - Task Man',
        'mime': [
          {
            'type' : 'application/x-unknown',
            'description' : 'Mime description',
            'suffix': 'ksh',
          },
          {
            'type' : 'application/x-unknown',
            'description' : 'Portable Nati',
            'suffix': 'ksh',
          }
        ],
        'id': 1603709258344,
        'state': {
          'checked': false,
        }
      },
      {
          'name': 'Yanado - Task Man',
          'description': 'Yanado - Task Man',
          'version': '6.6',
          'filename': 'Yanado - Task Man',
          'mime': [
            {
              'type' : 'application/x-unknown',
              'description' : 'Mime description',
              'suffix': 'ksh',
            }
          ],
          'id': 1603709258345,
          'state': {
            'checked': false,
          }
        }
    ]

    // DataWorkers
    const createDataItem = (data) => {
      dataArr.splice(dataArr.length, 0,   {
          'name': '',
          'description': '',
          'version': '',
          'filename': '',
          'mimetype': '',
          'mimedescription': '',
          'suffixes': '',
          'id': +new Date(),
          'state': {
            'checked': false,
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

    const createMimeTypeById = (id, index) => {
      dataArr.map(i => {
        if(i.id === id){
          i.mime.insert(index,   {
              'type' : 'application/x-unknown',
              'description' : '',
              'suffix': '',
            })
        }
      })

      rerenderItems()
    }
    const delMimeTypeById = (id, index) => {

      dataArr.map(i => {
        if(i.id === id){
          if(i.mime.length !== 1) {
            i.mime.splice(index, 1)
          }
        }
      })
        rerenderItems()
    }
    const delItemById = (id) => {
      let index = 0;
      dataArr.map(i => {
        if(i.id === id){
          dataArr.splice(index, 1)
        }
        index++
      })


        rerenderItems()

    }


    // BUTTONS ============================================
    const closeBtn = mwWrapper.querySelectorAll('.plugins-close')[0]
    const addBtn = mwWrapper.querySelectorAll('.plugins-add')[0]
    const deleteBtn = mwWrapper.querySelectorAll('.plugins-delete')[0]
    const saveBtn = mwWrapper.querySelectorAll('.plugins-save')[0]

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
          if ((columnIndex + 1) < 8) {
            flexibleWrapper.style.maxWidth = parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex + 1].style.left) - parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px'
          } else if ((columnIndex + 1) === 8) {
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

    const initHeightForRow = (rowId, rowsInside) => {
      if(rowsInside !== 0 || rowsInside !== 1){
        let row = mwWrapperTable.querySelectorAll('[data-id="' + rowId + '"]')
        for (const rowElem of row) {
          rowElem.style.height = 40 * rowsInside + 'px'
        }
      }
    }


    const getMimeNav = (index, id) => {
      let nav = document.createElement('DIV')
      let plus = document.createElement('DIV')
      let minus = document.createElement('DIV')

      nav.classList.add('mime_nav')
      plus.classList.add('plus')
      minus.classList.add('minus')

      dataArr.map(i => {
        if(i.id === id) {
          if(i.mime.length === 1) {
            minus.classList.add('dissabled')
          }
        }
      })
      plus.innerHTML = '+'
      minus.innerHTML = '-'

      minus.addEventListener('click', (e) => {

        delMimeTypeById(id, index)

      })

      plus.addEventListener('click', (e) => {

        createMimeTypeById(id, index + 1)

      })

      nav.appendChild(minus)
      nav.appendChild(plus)

      return nav
    }

    const setEventsForRow = (wrapper, input, dataRow, colDuplicator) => {
      let activeWrapper = true

      if(colDuplicator < 4){
        wrapper.addEventListener('click', (e) => {
        let isClickedOnNav = e.target.parentNode.classList.value === 'mime_nav';

        if(isClickedOnNav) {

        }else {
          if (activeWrapper) {
          wrapper.innerHTML = ''
          wrapper.classList.remove('wrapper_withoutinput')
          wrapper.appendChild(input)
          activeWrapper = false
          input.focus()
          }
        }

      })

        input.addEventListener('blur', (e) => {
          wrapper.innerHTML = e.target.value
          wrapper.classList.add('wrapper_withoutinput')
          activeWrapper = true
          changedataArrById(dataRow.id, Object.keys(dataRow)[colDuplicator], e.target.value)
          saveBtn.classList.remove('btn--disabled')
          saveBtn.classList.add('btn--green')
        })
      }



      if(colDuplicator === 4 ) {
          let index = 0;

          for(const i of wrapper.children[0].children) {
            let activeWrapper = true
            let inputClone = input
            let mime = dataRow.mime[index]

            const x = document.createElement('INPUT')
            x.setAttribute('type', 'text')
            x.setAttribute('value', mime.type)
            x.setAttribute('mimeIndex', index)

            i.addEventListener('click', (e) => {
              let isClickedOnNav = e.target.parentNode.classList.value === 'mime_nav';

              if(!isClickedOnNav && activeWrapper)  {
                i.innerHTML = ''
                i.appendChild(getMimeNav(index, wrapper.getAttribute('data-id')))
                i.appendChild(x)
                  activeWrapper = false
                x.focus()
              }
            })

            x.addEventListener('blur', (e) => {
              i.innerHTML = ''
              let index = parseInt(x.getAttribute('mimeIndex'))
              dataRow.mime[index].type = e.target.value

              i.appendChild(getMimeNav(index, wrapper.getAttribute('data-id')))
              i.appendChild(document.createTextNode(e.target.value))
              activeWrapper = true
               changedataArrById(dataRow.id, Object.keys(dataRow)[colDuplicator], dataRow.mime)
              saveBtn.classList.remove('btn--disabled')
              saveBtn.classList.add('btn--green')

            })

            index++;
          }
      }

      if(colDuplicator === 5 ) {
          let index = 0;

          for(const i of wrapper.children[0].children) {
            let activeWrapper = true
            let inputClone = input
            let mime = dataRow.mime[index]

            const x = document.createElement('INPUT')
            x.setAttribute('type', 'text')
            x.setAttribute('value', mime.description)
            x.setAttribute('mimeIndex', index)
            i.addEventListener('click', (e) => {
              if(activeWrapper)  {
                i.innerHTML = ''
                i.appendChild(x)
                  activeWrapper = false
                x.focus()
              }
            })

            x.addEventListener('blur', (e) => {
              i.innerHTML = ''

              let index = parseInt(x.getAttribute('mimeIndex'))
              dataRow.mime[index].description = e.target.value

              i.appendChild(document.createTextNode(e.target.value))
              activeWrapper = true
               changedataArrById(dataRow.id, Object.keys(dataRow)[colDuplicator], dataRow.mime)
              saveBtn.classList.remove('btn--disabled')
              saveBtn.classList.add('btn--green')
            })

            index++;
          }
      }
      if(colDuplicator === 6 ) {
          let index = 0;

          for(const i of wrapper.children[0].children) {
            let activeWrapper = true
            let inputClone = input
            let mime = dataRow.mime[index]

            const x = document.createElement('INPUT')
            x.setAttribute('type', 'text')
            x.setAttribute('value', mime.suffix)
            x.setAttribute('mimeIndex', index)
            i.addEventListener('click', (e) => {

              if( activeWrapper)  {
                i.innerHTML = ''
                i.appendChild(x)
                  activeWrapper = false
                x.focus()
              }
            })

            x.addEventListener('blur', (e) => {
              i.innerHTML = ''
              let index = parseInt(x.getAttribute('mimeIndex'))
              dataRow.mime[index].suffix = e.target.value

              i.appendChild(document.createTextNode(e.target.value))
              activeWrapper = true
               changedataArrById(dataRow.id, Object.keys(dataRow)[colDuplicator], dataRow.mime)
              saveBtn.classList.remove('btn--disabled')
              saveBtn.classList.add('btn--green')
            })

            index++;
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
          }else if(colCounter === 8){
            const divWrapper = document.createElement('DIV')
            const trashIcon = document.createElement('DIV')
            divWrapper.classList.add('flexible_wrapper')
            trashIcon.classList.add('trashIcon')
            divWrapper.setAttribute('data-id', dataRow.id)
            divWrapper.appendChild(trashIcon)
            trashIcon.addEventListener('click', (e) => {
              delItemById(dataRow.id)
            })
                mwWrapperTable.querySelectorAll('.column_body')[colCounter].appendChild(divWrapper)
               initHeightForRow(dataRow.id, dataRow.mime.length)
          }else {
            let colData = dataRow[Object.keys(dataRow)[colCounter - 1]]
            const divWrapper = document.createElement('DIV')
            divWrapper.classList.add('flexible_wrapper')
            divWrapper.setAttribute('data-id', dataRow.id)

            const x = document.createElement('INPUT')
            x.setAttribute('type', 'text')
            x.setAttribute('value', dataRow[Object.keys(dataRow)[colCounter - 1]])


            let colDuplicator = colCounter - 1
            divWrapper.classList.add('wrapper_withoutinput')

            let colContent;
            if (searchInput.value.length !== 0) {
              let searchReg = new RegExp(searchInput.value, "igm");
              colContent = colData.toString().replace(searchReg, "<span class='marker'>$&</span>")
            }else {
                colContent = colData.toString()
            }




            let mimeData = dataRow[Object.keys(dataRow)[4]]
            if (colCounter === 5) {

              const wrapper = document.createElement('DIV')
              wrapper.classList.add('mime_wrapper')

              x.setAttribute('value', dataRow.mime.type)


              for(let [i, mimeItem] of mimeData.entries()) {
                const mimeWrapper = document.createElement('DIV')

                let text = document.createElement('DIV')
                if (searchInput.value.length !== 0) {
                  let searchReg = new RegExp(searchInput.value, "igm");
                  let searchValue = mimeItem.type.toString().replace(searchReg, "<span class='marker'>$&</span>")
                  text.insertAdjacentHTML('beforeend', searchValue);
                }else {
                    text.insertAdjacentHTML('beforeend', mimeItem.type);
                }

                mimeWrapper.appendChild(getMimeNav(i, dataRow.id))
                mimeWrapper.appendChild(text)
                wrapper.appendChild(mimeWrapper)
              }
              divWrapper.appendChild(wrapper)

            }else if (colCounter === 6) {
              const wrapper = document.createElement('DIV')
                wrapper.classList.add('mime_wrapper')

              for(let mimeItem of mimeData) {
                const mimeWrapper = document.createElement('DIV')
                let colContent = mimeItem.description
                if (searchInput.value.length !== 0) {
                  let searchReg = new RegExp(searchInput.value, "igm");
                  colContent = mimeItem.description.toString().replace(searchReg, "<span class='marker'>$&</span>")
                }
                mimeWrapper.innerHTML = colContent
                wrapper.appendChild(mimeWrapper)
              }
              divWrapper.appendChild(wrapper)
            }else if (colCounter === 7) {
              const wrapper = document.createElement('DIV')
                wrapper.classList.add('mime_wrapper')
              for(let mimeItem of mimeData) {
                const mimeWrapper = document.createElement('DIV')
                let colContent = mimeItem.suffix
                if (searchInput.value.length !== 0) {
                  let searchReg = new RegExp(searchInput.value, "igm");
                  colContent = mimeItem.suffix.toString().replace(searchReg, "<span class='marker'>$&</span>")
                }
                mimeWrapper.innerHTML = colContent
                wrapper.appendChild(mimeWrapper)
              }
              divWrapper.appendChild(wrapper)
            }else {
                divWrapper.innerHTML = colContent
            }
              setEventsForRow(divWrapper, x, dataRow, colDuplicator);

            mwWrapperTable.querySelectorAll('.column_body')[colCounter].appendChild(divWrapper)
            initHeightForRow(dataRow.id, dataRow.mime.length)


          }
          colCounter++
        }
        i++
      }

      let rowsCounter = 0
      data.map(i => {
        rowsCounter = rowsCounter + i.mime.length
      })

      mwWrapperTable.style.height = rowsCounter * 40 + 260 + 'px'
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
              if (item.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem && typeof item !== 'boolean') {
                isSearchTrueForThisElem = true
                searchInputData.push(x)
              }
            }

            if (typeof item === 'object') {

              if(Object.prototype.toString.call(item) == '[object Array]'){
                for(const mimeItem of item){
                  if (mimeItem.type.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem && typeof item !== 'boolean') {
                    isSearchTrueForThisElem = true
                    searchInputData.push(x)
                  }
                  if (mimeItem.description.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem && typeof item !== 'boolean') {
                    isSearchTrueForThisElem = true
                    searchInputData.push(x)
                  }
                  if (mimeItem.suffix.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem && typeof item !== 'boolean') {
                    isSearchTrueForThisElem = true
                    searchInputData.push(x)
                  }
                }
              }
            }
          })
      })


      return [...searchInputData]
    }


  }
};

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};
