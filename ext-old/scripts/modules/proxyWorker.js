export default class {

  constructor () {
    this.init()
  }

  init () {
    const proxyWrapper = document.querySelectorAll('.mw__proxy_manager')[0]
    const proxyWrapperTable = proxyWrapper.querySelectorAll('.flexible_table')[0]
    const theadCheckbox = proxyWrapperTable.querySelectorAll('.thead-checkbox input[type=checkbox]')[0]
    const proxySearch = document.querySelectorAll('.mw__proxy_manager .search input')[0]
    let proxySearchData = []
    let proxyData = [
      {
        'type': 'Socks5',
        'connectionIp': '46.34.117.152',
        'proxyIp': '46.34.117.152',
        'proxyPort': 4299,
        'proxyLogin': 'Admin',
        'proxyPassword': 'AspSFdfm',
        'dns': '46.34.117.152',
        'id': 123,
        'state': {
          'checked': false,
          'check': 'success',
          'set': true,
          'connectionIpFlag': 'usa',
          'proxyIpFlag': 'usa',
        }
      },
      {
        'type': 'Socks5',
        'connectionIp': '46.34.117.152',
        'proxyIp': '46.34.117.152',
        'proxyPort': 4299,
        'proxyLogin': 'User',
        'proxyPassword': '123456',
        'dns': '46.34.117.152',
        'id': 124,
        'state': {
          'checked': false,
          'check': 'error',
          'set': true,
          'connectionIpFlag': 'usa',
          'proxyIpFlag': 'usa',
        }
      },
      {
        'type': 'Socks5',
        'connectionIp': '46.34.117.152',
        'proxyIp': '46.34.117.152',
        'proxyPort': 4299,
        'proxyLogin': 'Minute',
        'proxyPassword': '123456',
        'dns': '46.34.117.152',
        'id': 125,
        'state': {
          'checked': false,
          'check': 'error',
          'set': true,
          'connectionIpFlag': 'usa',
          'proxyIpFlag': 'usa',
        }
      },
      {
        'type': 'Socks5',
        'connectionIp': '46.34.117.152',
        'proxyIp': '46.34.117.152',
        'proxyPort': 4299,
        'proxyLogin': 'Admin',
        'proxyPassword': 'AspSFdfm',
        'dns': '46.34.117.152',
        'id': 126,
        'state': {
          'checked': false,
          'check': 'not checked',
          'set': true,
          'connectionIpFlag': 'usa',
          'proxyIpFlag': 'usa',
        }
      },
      {
        'type': 'Socks5',
        'connectionIp': '46.34.117.152',
        'proxyIp': '46.34.117.152',
        'proxyPort': 4299,
        'proxyLogin': 'Admin',
        'proxyPassword': 'AspSFdfm',
        'dns': '46.34.117.152',
        'id': 128,
        'state': {
          'checked': false,
          'check': 'not checked',
          'set': true,
          'connectionIpFlag': 'usa',
          'proxyIpFlag': 'usa',
        }
      },
      {
        'type': 'Socks5',
        'connectionIp': '46.34.117.152',
        'proxyIp': '46.34.117.152',
        'proxyPort': 4299,
        'proxyLogin': 'Admin',
        'proxyPassword': 'AspSFdfm',
        'dns': '46.34.117.152',
        'id': 130,
        'state': {
          'checked': false,
          'check': 'not checked',
          'set': true,
          'connectionIpFlag': 'usa',
          'proxyIpFlag': 'usa',
        }
      },
      {
        'type': 'Socks5',
        'connectionIp': '46.34.117.152',
        'proxyIp': '46.34.117.152',
        'proxyPort': 4299,
        'proxyLogin': 'Admin',
        'proxyPassword': 'AspSFdfm',
        'dns': '46.34.117.152',
        'id': 140,
        'state': {
          'checked': false,
          'check': 'not checked',
          'set': true,
           'connectionIpFlag': 'usa',
                'proxyIpFlag': 'usa',
        }
      },
      {
        'type': 'Socks5',
        'connectionIp': '46.34.117.152',
        'proxyIp': '46.34.117.152',
        'proxyPort': 4299,
        'proxyLogin': 'Admin',
        'proxyPassword': 'AspSFdfm',
        'dns': '46.34.117.152',
        'id': 165,
        'state': {
          'checked': false,
          'check': 'not checked',
          'set': true,
          'connectionIpFlag': 'usa',
          'proxyIpFlag': 'usa',
        }
      }
    ]

    // DataWorkers
    const createProxy = (data) => {
      proxyData.splice(proxyData.length, 0, {
        'type': data[0],
        'connectionIp': data[1],
        'proxyIp': data[2],
        'proxyPort': data[3],
        'proxyLogin': data[4],
        'proxyPassword': data[5],
        'dns': data[6],
        'id': +new Date(),
        'state': {
          'checked': false,
          'check': 'not checked',
          'set': true,
          'connectionIpFlag': 'unset',
          'proxyIpFlag': 'unset',
        }
      })

      rerenderProxyItems()
    }
    const changeProxyDataById = (id, key, value) => {
      proxyData = [...proxyData].map((i) => {
        if (parseInt(i.id) === parseInt(id)) {
          i[key] = value
        }
        return i
      })
      proxyWrapper.querySelectorAll('.proxy-save')[0].classList.remove('btn--disabled')
      proxyWrapper.querySelectorAll('.proxy-save')[0].classList.add('btn--green')

    }
    const setProxy = (id) => {
        let proxy = [...proxyData].filter(i => i.id === parseInt(id))
    }
    const setProxyAndClose = (data) => {
      let proxyInputWrapper = document.querySelectorAll('.dropdown--proxy')[0]
      let portWrapper = document.querySelectorAll('.dropdown--port')[0]

      document.querySelectorAll('#ip')[0].value = data.connectionIp
      document.querySelectorAll('#ip')[0].parentNode.querySelectorAll('label')[0].classList.add('active')
      document.querySelectorAll('#login')[0].value = data.proxyLogin
      document.querySelectorAll('#login')[0].parentNode.querySelectorAll('label')[0].classList.add('active')
      document.querySelectorAll('#password')[0].value = data.proxyPassword
      document.querySelectorAll('#password')[0].parentNode.querySelectorAll('label')[0].classList.add('active')
      document.querySelectorAll('#dns')[0].value = data.dns
      document.querySelectorAll('#dns')[0].parentNode.querySelectorAll('label')[0].classList.add('active')
      document.querySelectorAll('#web_rtc')[0].value = data.proxyIp
      document.querySelectorAll('#web_rtc')[0].parentNode.querySelectorAll('label')[0].classList.add('active')

      proxyInputWrapper.querySelectorAll('.textfirst')[0].innerHTML = data.type
      proxyInputWrapper.querySelectorAll('input')[0].value = data.type

      portWrapper.querySelectorAll('.textfirst')[0].innerHTML = data.proxyPort
      portWrapper.querySelectorAll('input')[0].value = data.proxyPort


      proxyWrapper.classList.remove('active')
    }

    // BUTTONS ============================================
    const closeProxyBtn = proxyWrapper.querySelectorAll('.proxy-close')[0]
    const addProxyBtn = proxyWrapper.querySelectorAll('.proxy-add')[0]
    const addFromFileProxyBtn = proxyWrapper.querySelectorAll('.proxy-addFromFile')[0]
    const deleteProxyBtn = proxyWrapper.querySelectorAll('.proxy-delete')[0]
    const checkProxyBtn = proxyWrapper.querySelectorAll('.proxy-check')[0]
    const saveProxyBtn = proxyWrapper.querySelectorAll('.proxy-save')[0]
    addProxyBtn.addEventListener('click', () => {
      createProxy(['Not selected', '', '', '', '', '', ''])
    })
    closeProxyBtn.addEventListener('click', () => {
      proxyWrapper.classList.remove('active')
    })
    saveProxyBtn.addEventListener('click', () => {
      if (!saveProxyBtn.classList.contains('btn--disabled')) {
        proxyWrapper.classList.remove('active')
      }
    })
    checkProxyBtn.addEventListener('click', () => {
      if (!checkProxyBtn.classList.contains('btn--disabled')) {
        proxyData = [...proxyData].map((i) => {
          if (i.state.checked) {
            i.state.check = 'load'
          }
          return i
        })
        let searchedData = proxyData.map((i) => {
          if (i.state.checked) {
            i.state.checked = false
            return i
          }
        })

        searchedData.map(i => {
        //  console.log(i);
          setTimeout(()=> {
            let item = i;
            i.state.check = 'success'
            changeProxyDataById(i.id, 'state', i.state)

            for (const status of document.querySelectorAll('.check_status')) {
              if(status.parentNode.getAttribute('data-id') == i.id) {
                status.setAttribute('data-status', 'success')
                status.querySelectorAll('.recheck')[0].classList.add('disabled')
                setTimeout(()=> {
                  status.querySelectorAll('.recheck')[0].classList.remove('disabled')
                }, 3000)
              }
            }
          }, Math.random() * 7500)
        })


        theadCheckbox.checked = false
        saveProxyBtn.classList.remove('btn--disabled')
        saveProxyBtn.classList.add('btn--green')
        rerenderProxyItems()
        hideBtns()
      }
    })
    deleteProxyBtn.addEventListener('click', () => {

      let checkedIds = [];
      [...proxyData].map((i)=> {
        if(i.state.checked){
          checkedIds.push(i.id)
        }
      })

      checkedIds.map(id => {
        let rowCounter = 0;
        [...proxyData].map(dataRow => {
          if(dataRow.id === id) {
            proxyData.splice(rowCounter, 1);
          }
          rowCounter++;
        })
      })

      theadCheckbox.checked = false
      rerenderProxyItems()
    })
    const showBtns = () => {
      deleteProxyBtn.classList.remove('btn--disabled')
      deleteProxyBtn.classList.add('btn--red')
      checkProxyBtn.classList.remove('btn--disabled')
      checkProxyBtn.classList.add('btn--blue')
    }
    const hideBtns = () => {
      deleteProxyBtn.classList.remove('btn--red')
      deleteProxyBtn.classList.add('btn--disabled')
      checkProxyBtn.classList.remove('btn--blue')
      checkProxyBtn.classList.add('btn--disabled')
    }
    const refreshButtonsState = () => {
      let active = false

      proxyData.map((i) => {
        if (i.state.checked) {
          active = true
          showBtns()
        }
      })
    }

    addFromFileProxyBtn.addEventListener('click', e => {
      const proxyImportPopup = document.querySelectorAll('.mw__proxy_import')[0]
      proxyImportPopup.classList.add('active')
    })



    // Checkboxes
    const initCheckboxes = () => {
      const checkboxes = proxyWrapperTable.querySelectorAll('.column_body')[0].querySelectorAll('input[type=checkbox]')
      for (const checkbox of checkboxes) {
        checkbox.addEventListener('change', (e) => {
          let id = parseInt( e.target.parentNode.parentNode.getAttribute('data-id'))
          let checkedRow = [];
          [...proxyData].map((i) => {
            if (parseInt(i.id) === id) {
              checkedRow.push(i.state)
            }
          })
          checkedRow.checked = e.target.checked

          changeProxyDataById(id, 'state', checkedRow)

          refreshButtonsState()
        })
      }
    }

    // init main Checkbox
    theadCheckbox.addEventListener('change', function (e) {
      let data = [...proxyData]
      if(proxySearch.value.length){
        data = getSearchedProxyData(proxySearch.value)
        let searchedIds = [...data].map(i => {
          return i.id
        })

        searchedIds.map(id => {
          let rowCounter = 0;
          [...proxyData].map(dataRow => {
            if(dataRow.id === id) {
              dataRow.state.checked = e.target.value
            }
            rowCounter++;
          })
        })

      }else {
        proxyData.map((i) => {
          i.state.checked = e.target.checked
          if (e.target.checked) {
            showBtns()
          } else {
            hideBtns()
          }
        })
      }
      rerenderProxyItems()
    })

    // init Selects
    const initEventsForSelects = () => {
      const selects = proxyWrapperTable.querySelectorAll('.select')

      for (const select of selects) {
        select.addEventListener('click', function (e) {
          if (select.classList.contains('active')) {
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

      const selectOptions = proxyWrapperTable.querySelectorAll('li.input-option')
      for (const option of selectOptions) {
        option.addEventListener('click', function () {
          if (!option.closest('.select').classList.contains('disabled')) {
            let livalue = option.getAttribute('data-value')
            let lihtml = option.innerHTML
            option.closest('.select').querySelectorAll('.textfirst')[0].innerHTML = lihtml
            option.closest('.select').querySelectorAll('.option').value = livalue
            let id = parseInt(option.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id'))
            changeProxyDataById(id, 'type', livalue)
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
      for (const columnNav of proxyWrapperTable.querySelectorAll('.columnNav')) {
        let columnIndex = parseInt(columnNav.parentNode.getAttribute('data-column'))

        for (const flexibleWrapper of columnNav.parentNode.querySelectorAll('.flexible_wrapper')) {
          if ((columnIndex + 1) < 10) {
            flexibleWrapper.style.maxWidth = parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex + 1].style.left) - parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px'
          } else if ((columnIndex + 1) === 10) {
            flexibleWrapper.style.maxWidth = 950 - parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px'
          }
        }
      }
    }

    const initRowsEvents = () => {
      let lastHoverElemId
      let columnsBody = proxyWrapperTable.querySelectorAll('.column_body')
      for (const columnBody of columnsBody) {
        for (const child of columnBody.childNodes) {
          child.addEventListener('mouseover', () => {
            let row = proxyWrapper.querySelectorAll('[data-id="' + child.getAttribute('data-id') + '"]')
            for (const rowElem of row) {
              rowElem.classList.add('hover')
            }
          })
          child.addEventListener('mouseout', () => {
            lastHoverElemId = child.getAttribute('data-id')
            let row = proxyWrapper.querySelectorAll('[data-id="' + child.getAttribute('data-id') + '"]')
            for (const rowElem of row) {
              rowElem.classList.remove('hover')
            }
          })
        }
      }
    }

    const initEventsForCheckStatus = () => {
      let checkItems = proxyWrapper.querySelectorAll('.check_status')

      for (const wrapper of checkItems) {
        let recheck = wrapper.querySelectorAll('.recheck')[0]
        let status = wrapper.querySelectorAll('.status')[0]

        let id = wrapper.parentNode.getAttribute('data-id')
        recheck.addEventListener('click', () => {
          recheck.classList.add('disabled')
          status.style.display = 'none'

          let proxyDataState
          [...proxyData].map(i => {
            if (parseInt(i.id) === parseInt(id)) {
              proxyDataState = i.state
            }
          })
          proxyDataState.check = 'success'

          changeProxyDataById(id, 'state', proxyDataState)
            status.parentNode.setAttribute('data-status', 'load')
          setTimeout(() => {
              status.parentNode.setAttribute('data-status', 'success')
            status.style.display = 'block'
          }, 3000)

          setTimeout(() => {
              recheck.classList.remove('disabled')
          }, 6000)

        })
      }
    }

    const initSetter = () => {
      let setItems = proxyWrapper.querySelectorAll('.set_status')

      for (const wrapper of setItems) {
        let set = wrapper.querySelectorAll('.setbtn')[0]

        let id = wrapper.parentNode.getAttribute('data-id')
        set.addEventListener('click', () => {
          let proxyDataRow
          [...proxyData].map(i => {
            if (parseInt(i.id) === parseInt(id)) {
              proxyDataRow = i
            }
          })

          if(  proxyDataRow.state.check === 'success') {

              setProxyAndClose(proxyDataRow)

          }

        })
      }
    }

    // RERENDER ============================================
    const rerenderProxyItems = () => {
      let columns = proxyWrapperTable.querySelectorAll('.column')
      let x = 0
      let data = [...proxyData]

      for (const column of columns) {
        column.querySelectorAll('.column_body')[0].innerHTML = ''
      }
      if(proxySearch.value.length !== 0){
        data = getSearchedProxyData(proxySearch.value)
      }

      let i = 0
      for (const proxyRow of data) {
        let colCounter = 0
        for (const column of columns) {
          if (colCounter === 0) {
            let checked = proxyRow.state.checked ? 'checked' : ''
            proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div data-id="' + proxyRow.id + '"><label class="checkbox-container"><input type="checkbox" data-row="' + i + '" ' + checked + '/><span class="checkmark"></span></label></div>')
          } else if (colCounter === 1) {
            proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div class="flexible_wrapper" data-id="' + proxyRow.id + '"><div class="select"><div class="mm-dropdown"><div class="textfirst">' + proxyRow[Object.keys(proxyRow)[colCounter - 1]] + '</div><ul>  <li class="input-option" data-value="Tor">Tor</li><li class="input-option" data-value="Http">Http</li><li class="input-option" data-value="Socks5">Socks5</li><li class="input-option" data-value="Dynamic socks5">Dynamic socks5</li><li class="input-option" data-value="SSH Tunnel">SSH Tunnel</li><li class="input-option" data-value="Tor + SSH Tunnel">Tor + SSH Tunnel</li><li class="input-option" data-value="SSH + Socks5">SSH + Socks5</li></ul><input type="hidden" class="option" value=""/></div></div></div>')
          } else if (colCounter === 8) {
            proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div class="flexible_wrapper" data-id="' + proxyRow.id + '"><div class="check_status" data-status="' + proxyRow.state.check + '"><div class="status"></div><div class="preloader"></div><div class="recheck"></div></div></div>')
          } else if (colCounter === 9) {
            proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div class="flexible_wrapper" data-id="' + proxyRow.id + '"><div class="set_status" data-status="' + proxyRow.state.set + '"><div class="status"></div><div class="setbtn"></div></div></div>')
          } else {
            let colData = proxyRow[Object.keys(proxyRow)[colCounter - 1]].toString()

            if (proxySearch.value !== 0) {
              colData = colData.replace(new RegExp(proxySearch.value, 'i'), "<span class='marker'>" + proxySearch.value + '</span>')
            }
            const divWrapper = document.createElement('DIV')
            divWrapper.classList.add('flexible_wrapper')
            divWrapper.setAttribute('data-id', proxyRow.id)
            const x = document.createElement('INPUT')
            x.setAttribute('type', 'text')
            x.setAttribute('value', proxyRow[Object.keys(proxyRow)[colCounter - 1]])

            if (colCounter === 2 || colCounter === 3) {
                divWrapper.classList.add('flexible_wrapper--flag')
            }
            if (colCounter === 2 ) {
                divWrapper.style.backgroundImage = "url(./images/mw/" + proxyRow.state.connectionIpFlag + ".svg)"
            }
            if ( colCounter === 3) {
                divWrapper.style.backgroundImage = "url(./images/mw/"  + proxyRow.state.proxyIpFlag + ".svg)"
            }
            if (colCounter === 2 || colCounter === 3 || colCounter === 7) {
              let value = x.value
              x.addEventListener('keydown', (e) => {

                if ((e.which >= 48 && e.which <= 57)  // цифры
                      	|| (e.which >= 96 && e.which <= 105)  // num lock
                      	|| e.which == 8 // backspace
                        || e.which == 190 // dot
                      	|| (e.which >= 37 && e.which <= 40) // стрелки
                         || e.which == 46) // delete
                      {

                } else {
                  e.preventDefault()
                }

              })

                x.addEventListener('keyup', (e) => {

                  let ipItems = e.target.value.split('.')
                  ipItems = ipItems.map(i => {
                    if(parseInt(i) > 255) {
                      i = 255
                    }
                    return i
                  })

                  e.target.value = ipItems.join('.')
                })

            }
            if (colCounter === 4) {
              let value = x.value
              x.addEventListener('keydown', (e) => {

                if ((e.which >= 48 && e.which <= 57)  // цифры
                      	|| (e.which >= 96 && e.which <= 105)  // num lock
                      	|| e.which == 8 // backspace
                      	|| (e.which >= 37 && e.which <= 40) // стрелки
                        || e.which == 46) // delete
                      {

                } else {
                  e.preventDefault()
                }

              })

              x.addEventListener('keyup', (e) => {

                  let port = parseInt(e.target.value)

                  if(port > 65535){
                    port = 65535
                  }
                  if( isNaN(port) ) {
                    port = ''
                  }

                  e.target.value = port
                })

            }
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
              changeProxyDataById(proxyRow.id, Object.keys(proxyRow)[colDuplicator], e.target.value)
            })
            divWrapper.innerHTML = colData
            divWrapper.classList.add('wrapper_withoutinput')
            proxyWrapperTable.querySelectorAll('.column_body')[colCounter].appendChild(divWrapper)
          }
          colCounter++
        }
        i++
      }

      proxyWrapperTable.style.height = data.length * 40 + 260 + 'px'
      initCheckboxes()
      initEventsForSelects()
      initEventsForCheckStatus()
      initSetter()
      makeFlexibleWidth()
      initRowsEvents()
    }
    rerenderProxyItems()
      initEventsForSelects()

    // SEARCH ======================================
    proxySearch.addEventListener('keyup', (e) => {
      if(e.target.value.length === 0) {
        proxyWrapper.querySelectorAll('.clearSearch')[0].style.display = 'none'
      }else {
          proxyWrapper.querySelectorAll('.clearSearch')[0].style.display = 'block'
      }
      theadCheckbox.checked = false
      rerenderProxyItems()
    })

    proxyWrapper.querySelectorAll('.clearSearch')[0].addEventListener('click', ()=> {
      proxySearch.value = '';
      proxyWrapper.querySelectorAll('.search')[0].querySelectorAll('label')[0].classList.remove('active')
      rerenderProxyItems()
    })

    const getSearchedProxyData = (value) => {

      let vals1
      let vals2
      let proxySearchData1 = []
      let proxySearchData2 = []
      let arrayOfvaluesId = []
      let dataClone1 = [...proxyData].map(x => {
        let isSearchTrueForThisElem = false
        vals1 = Object.values(x).some((item, i) => {
          if (typeof item !== 'object') {
            if (item.toString().toLowerCase().startsWith(value.toLowerCase()) && !isSearchTrueForThisElem) {
              isSearchTrueForThisElem = true
              arrayOfvaluesId.push(x.id)
              proxySearchData1.push(x)
            }
          }
        })
      })

      let dataClone2 = [...proxyData].map(x => {
        if (arrayOfvaluesId.filter(i => i === x.id).length === 0) {
          let isSearchTrueForThisElem = false
          vals2 = Object.values(x).some((item, i) => {
            if (typeof item !== 'object') {
              if (item.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem) {
                isSearchTrueForThisElem = true
                proxySearchData2.push(x)
              }
            }
          })
        }
      })


      return [...proxySearchData1, ...proxySearchData2]
    }

    // IMPORT PROXY =====================================

    let filesStore = new ClipboardEvent('').clipboardData || new DataTransfer()

    const holder = document.getElementById('proxyHolder')
    const resultWrapper = document.getElementsByClassName('proxyResult')[0]
    const inputElement = document.getElementById('proxyFileInput')

    const importFilesBtn = document.querySelectorAll('.proxy_import_files')[0]
    const importClosesBtn = document.querySelectorAll('.proxy_import_close')[0]

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

            let reader = new FileReader()
            reader.addEventListener('load', function (e) {
              let text = e.target.result
              createProxy(text.split(';'))
            })
            reader.readAsText(file)

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
        elem.innerHTML = filesStore.files[i].name
        elem.appendChild(close)
        resultWrapper.appendChild(elem)
      }

      inputElement.files = filesStore.files
      console.log(filesStore.files.length );
      if(filesStore.files.length !== 0) {
        importFilesBtn.classList.add('btn--green')
        importFilesBtn.classList.remove('btn--disabled')
      }else {
        importFilesBtn.classList.remove('btn--green')
        importFilesBtn.classList.add('btn--disabled')
      }
    }

    const handleClose = () => {
      const proxyImportPopup = document.querySelectorAll('.mw__proxy_import')[0]
      proxyImportPopup.classList.remove('active')
    }

    inputElement.addEventListener('change', handleFiles)

    importFilesBtn.addEventListener('click', handleImport)

    importClosesBtn.addEventListener('click', handleClose)
  }
};
