export default class {

  constructor () {
    this.init()
  }

  init () {
    const agentWrapper = document.querySelectorAll('.mw__useragent_manager')[0]
    const agentWrapperTable = agentWrapper.querySelectorAll('.flexible_table')[0]
    const theadCheckbox = agentWrapperTable.querySelectorAll('.thead-checkbox input[type=checkbox]')[0]
    const agentSearch = agentWrapper.querySelectorAll('.search input')[0]

    let mwState = {
      'category': 'lastUsed',
      'config': {
        'os': 'windows',
        'browser': 'chrome'
      }
    }

    const btnsWrappers = agentWrapper.querySelectorAll('.btns-wrapper--js')
    for(let btnsWrapper of btnsWrappers){
      let buttons = btnsWrapper.querySelectorAll('.btn')
      for(let btn of buttons) {
        btn.addEventListener('click', e => {
            let cat = e.target.getAttribute('data-category')
            let val = e.target.getAttribute('data-value')

            mwState.config[cat] = val
            theadCheckbox.checked = false
            rerenderAgentsItems()
        })
      }
    }
    let tabsBtns = agentWrapper.querySelectorAll('.tabs_manager span')
    for(let btn of tabsBtns) {
      btn.addEventListener('click', (e)=> {
        let val = e.target.getAttribute('data-value')

        mwState.category = val
        theadCheckbox.checked = false
        rerenderAgentsItems()
      })
    }

    let agentData = [
      {
        'config': {
          'os': 'windows',
          'browser': 'chrome',
        },
        'useragent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
        'id': 123,
        'state': {
          'checked': false,
          'current': true,
            'set': true,
          'lastUsed': 1603709258344,
          'dateAdded':  1603709258322,
          'setCounter': 1
        }
      },
      {
        'config': {
          'os': 'windows',
          'browser': 'chrome',
        },
        'useragent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
        'id': 124,
        'state': {
          'checked': false,
          'current': false,
            'set': true,
            'lastUsed': 111,
            'dateAdded':  110,
          //'lastUsed': 1603709258344,
          //'dateAdded':  1603709258322,
          'setCounter': 2
        }
      },
      {
        'config': {
          'os': 'linux',
          'browser': 'safari',
        },
        'useragent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
        'id': 125,
        'state': {
          'checked': false,
          'current': false,
            'set': true,
          'lastUsed': 222,
          'dateAdded':  220,
          'setCounter': 0
        }
      },
      {
        'config': {
          'os': 'windows',
          'browser': 'chrome',
        },
        'useragent': 'useragent',
        'id': 126,
        'state': {
          'checked': false,
          'current': false,
            'set': true,
          'lastUsed': 1603709258344,
          'dateAdded':  1603709258322,
          'setCounter': 1
        }
      },
    ]

    // DataWorkers
    const createAgent = (data) => {
      agentData.splice(agentData.length, 0, {
        'config': {
          'os': data[0],
          'browser': data[1],
        },
        'useragent': data[2],
        'id': +new Date(),
        'state': {
          'checked': false,
          'current': false,
          'set': true,
          'lastUsed': 0,
          'dateAdded':  +new Date(),
          'setCounter': 0
        }
      })



      rerenderAgentsItems()
    }

    const changeAgentDataById = (id, key, value) => {
      agentData = [...agentData].map((i) => {
        if (parseInt(i.id) === parseInt(id)) {
          i[key] = value
        }
        return i
      })
      agentWrapper.querySelectorAll('.agent-save')[0].classList.remove('btn--disabled')
      agentWrapper.querySelectorAll('.agent-save')[0].classList.add('btn--green')

    }

    const setAgentAndClose = (data) => {
      agentData.map(i => {
        if(i.state.current){
            i.state.current = false
          }

        return i
      })

      agentData.map(i => {
        if(i.id == data.id){
          i.state.current = true
          i.state.lastUsed = +new Date()
          i.state.setCounter = i.state.setCounter++

          }

        return i
      })

      rerenderAgentsItems()

       document.querySelectorAll('#useragent')[0].value = data.useragent
       document.querySelectorAll('#useragent')[0].parentNode.querySelectorAll('label')[0].classList.add('active')

       setTimeout(()=> {
         agentWrapper.classList.remove('active')
       }, 500)
    }

    // BUTTONS ============================================
    const closeAgentsBtn = agentWrapper.querySelectorAll('.agent-close')[0]
    const addAgentBtn = agentWrapper.querySelectorAll('.agent-add')[0]

    const deleteAgentBtn = agentWrapper.querySelectorAll('.agent-delete')[0]

    const saveAgentBtn = agentWrapper.querySelectorAll('.agent-save')[0]
    addAgentBtn.addEventListener('click', () => {
      createAgent(['unset', 'unset', ''])
    })
    closeAgentsBtn.addEventListener('click', () => {
      agentWrapper.classList.remove('active')
    })
    saveAgentBtn.addEventListener('click', () => {
      if (!saveAgentBtn.classList.contains('btn--disabled')) {
        agentWrapper.classList.remove('active')
      }
    })
    deleteAgentBtn.addEventListener('click', () => {

      let checkedIds = [];
      [...agentData].map((i)=> {
        if(i.state.checked){
          checkedIds.push(i.id)
        }
      })


      checkedIds.map(id => {
        let rowCounter = 0;
        [...agentData].map(dataRow => {
          if(dataRow.id === id) {
            agentData.splice(rowCounter, 1);
          }
          rowCounter++;
        })
      })

      theadCheckbox.checked = false
      rerenderAgentsItems()
    })
    const showBtns = () => {
      deleteAgentBtn.classList.remove('btn--disabled')
      deleteAgentBtn.classList.add('btn--red')

    }
    const hideBtns = () => {
      deleteAgentBtn.classList.remove('btn--red')
      deleteAgentBtn.classList.add('btn--disabled')

    }
    const refreshButtonsState = () => {
      let active = false

      agentData.map((i) => {
        if (i.state.checked) {
          active = true
          showBtns()
        }
      })
    }



    // Checkboxes
    const initCheckboxes = () => {
      const checkboxes = agentWrapperTable.querySelectorAll('.column_body')[0].querySelectorAll('input[type=checkbox]')
      for (const checkbox of checkboxes) {
        checkbox.addEventListener('change', (e) => {
          let id = parseInt( e.target.parentNode.parentNode.getAttribute('data-id'))
          let checkedRow
          [...agentData].map((i) => {
            if (parseInt(i.id) === id) {
              checkedRow = i.state

            }
          })
          checkedRow.checked = e.target.checked

          changeAgentDataById(id, 'state', checkedRow)

          let checkedIds = [];
          [...agentData].map((i)=> {
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
          refreshButtonsState()
        })
      }
    }
    theadCheckbox.addEventListener('change', function (e) {
      let data = getCategorizedData()
      if(agentSearch.value.length){
        data = getSearchedagentData(agentSearch.value)
        let searchedIds = getCategorizedData().map(i => {
          return i.id
        })

        console.log(searchedIds);
        searchedIds.map(id => {
          let rowCounter = 0;
          [...agentData].map(dataRow => {
            if(dataRow.id === id) {
              dataRow.state.checked = e.target.value
            }
            rowCounter++;
          })
        })

      }else {
        data = getCategorizedData()
        let searchedIds = data.map(i => {
          return i.id
        })
        //mwState.config.
        searchedIds.map(id => {
          agentData.map((i) => {
            if(i.id === id) {
              i.state.checked = e.target.checked
            }
            if (e.target.checked) {
              showBtns()
            } else {
              hideBtns()
            }
          })
      })
      }
      rerenderAgentsItems()
    })

    // Flexible wrapper
    const makeFlexibleWidth = () => {
      for (const columnNav of agentWrapperTable.querySelectorAll('.columnNav')) {
        let columnIndex = parseInt(columnNav.parentNode.getAttribute('data-column'))

        for (const flexibleWrapper of columnNav.parentNode.querySelectorAll('.flexible_wrapper')) {
          if ((columnIndex + 1) < 4) {
            flexibleWrapper.style.maxWidth = parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex + 1].style.left) - parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px'
          } else if ((columnIndex + 1) === 4) {
            flexibleWrapper.style.maxWidth = 950 - parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px'
          }
        }
      }
    }

    const initRowsEvents = () => {
      let lastHoverElemId
      let columnsBody = agentWrapperTable.querySelectorAll('.column_body')
      for (const columnBody of columnsBody) {
        for (const child of columnBody.childNodes) {
          child.addEventListener('mouseover', () => {
            let row = agentWrapper.querySelectorAll('[data-id="' + child.getAttribute('data-id') + '"]')
            for (const rowElem of row) {
              rowElem.classList.add('hover')
            }
          })
          child.addEventListener('mouseout', () => {
            lastHoverElemId = child.getAttribute('data-id')
            let row = agentWrapper.querySelectorAll('[data-id="' + child.getAttribute('data-id') + '"]')
            for (const rowElem of row) {
              rowElem.classList.remove('hover')
            }
          })
        }
      }
    }

    const initSetter = () => {
      let setItems = agentWrapper.querySelectorAll('.set_status')

      for (const wrapper of setItems) {
        let set = wrapper.querySelectorAll('.setbtn')[0]

        if(set){

        let id = wrapper.parentNode.getAttribute('data-id')
        set.addEventListener('click', () => {

          let agentDataRow
          [...agentData].map(i => {

            if (parseInt(i.id) === parseInt(id)) {
              agentDataRow = i
            }
          })

          if( !agentDataRow.state.current) {

              setAgentAndClose(agentDataRow)

          }

        })
        }
      }
    }


    const getCategorizedData = () => {
        let data = [...agentData];
        let rowCounter = 0;
        let lastUsedIndex = 0;
            switch (mwState.category) {
              case 'lastUsed':
                data.sort((a,b)=> {
                  return b.['state'].lastUsed - a['state'].lastUsed
                })
                data.map(i => {
                  if(i.state.current) {
                      lastUsedIndex = rowCounter
                  }
                  rowCounter++
                });

                data.unshift(...data.splice(lastUsedIndex,1));
                break;
                case 'dateAdded':
                data.sort((a,b)=> {
                  return b.['state'].dateAdded - a['state'].dateAdded
                })


                data.map(i => {
                  if(i.state.current) {
                      lastUsedIndex = rowCounter
                  }
                  rowCounter++
                });

                data.unshift(...data.splice(lastUsedIndex,1));

                break;
                case 'mostUsed':

                  data.sort((a,b)=> {
                    return b['state'].setCounter - a['state'].setCounter
                  })


                  data.map(i => {
                    if(i.state.current) {
                        lastUsedIndex = rowCounter
                    }
                    rowCounter++
                  });

                  data.unshift(...data.splice(lastUsedIndex,1));

                  break;
              default:
                break;
            }

            let newData = [];
            switch (mwState.config.os) {
              case 'windows':
                [...data].map((i)=>{
                  if(i.config.os === 'windows') {
                    newData.push(i)
                  }
                })
                break;
                case 'linux':
                  [...data].map((i)=>{
                    console.log(i.config.os);
                    if(i.config.os === 'linux') {
                      newData.push(i)
                    }
                  })
                  break;
                  case 'macos':
                    [...data].map((i)=>{
                      if(i.config.os === 'macos') {
                        newData.push(i)
                      }
                    })
                    break;
                    case 'android':
                      [...data].map((i)=>{
                        if(i.config.os === 'android') {
                          newData.push(i)
                        }
                      })
                      break;
                      case 'ios':
                        [...data].map((i)=>{
                          if(i.config.os === 'ios') {
                            newData.push(i)
                          }
                        })
                        break;
              default:
                break;
            }

            let newData1 = [];
            switch (mwState.config.browser) {
              case 'chrome':
                [...newData].map((i)=>{
                  if(i.config.browser === 'chrome') {
                    newData1.push(i)
                  }
                })
                break;
                case 'safari':
                  [...newData].map((i)=>{
                    if(i.config.browser === 'safari') {
                      newData1.push(i)
                    }
                  })
                  break;
                  case 'firefox':
                    [...newData].map((i)=>{
                      if(i.config.browser === 'firefox') {
                        newData1.push(i)
                      }
                    })
                    break;
                    case 'opera':
                      [...newData].map((i)=>{
                        if(i.config.browser === 'opera') {
                          newData1.push(i)
                        }
                      })
                      break;
                      case 'explorer':
                        [...newData].map((i)=>{
                          if(i.config.browser === 'explorer') {
                            newData1.push(i)
                          }
                        })
                        break;
              default:
                break;
            }

            let uncatData = []
            agentData.map((i) => {
               if(i.config.os === 'unset' || i.config.browser === 'unset'){
                 uncatData.push(i)
               }
             })
            return [...newData1, ...uncatData]
    };

    // RERENDER ============================================
    const rerenderAgentsItems = () => {
      let columns = agentWrapperTable.querySelectorAll('.column')
      let x = 0
      let data = getCategorizedData()

      for (const column of columns) {
        column.querySelectorAll('.column_body')[0].innerHTML = ''
      }
      if(agentSearch.value.length !== 0){
        data = getSearchedAgentData(agentSearch.value)
      }

      let i = 0
      for (const agentRow of data) {
        let colCounter = 0
        for (const column of columns) {
          if (colCounter === 0) {
            let checked = agentRow.state.checked ? 'checked' : ''
            agentWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div data-current="' + agentRow.state.current + '" data-id="' + agentRow.id + '"><label class="checkbox-container"><input type="checkbox" data-row="' + i + '" ' + checked + '/><span class="checkmark"></span></label></div>')
          } else if (colCounter === 1) {
            let osImg = '<img src="./images/userAgents/' + agentRow.config.os + '.png" style="margin-top: 12px;margin-left: 16px;margin-right: 12px;"/>';
            let browserImg = '<img src="./images/userAgents/' + agentRow.config.browser + '.png"/>';
            agentWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div data-current="' + agentRow.state.current + '" class="flexible_wrapper" data-id="' + agentRow.id + '">' + osImg + browserImg  + '</div>')
          } else if (colCounter === 3) {
            let rowContent;

            if(agentRow.state.current){
              rowContent = '<div class="set_status" data-status="' + agentRow.state.set + '"><svg width="12" style="margin:13px 25px" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8125 6.5C11.8125 3.3125 9.1875 0.6875 6 0.6875C2.78906 0.6875 0.1875 3.3125 0.1875 6.5C0.1875 9.71094 2.78906 12.3125 6 12.3125C9.1875 12.3125 11.8125 9.71094 11.8125 6.5ZM5.32031 9.59375C5.17969 9.73438 4.92188 9.73438 4.78125 9.59375L2.34375 7.15625C2.20312 7.01562 2.20312 6.75781 2.34375 6.61719L2.88281 6.10156C3.02344 5.9375 3.25781 5.9375 3.39844 6.10156L5.0625 7.74219L8.57812 4.22656C8.71875 4.0625 8.95312 4.0625 9.09375 4.22656L9.63281 4.74219C9.77344 4.88281 9.77344 5.14062 9.63281 5.28125L5.32031 9.59375Z" fill="#E99C61"/></svg></div>' ;
            }else {
              rowContent =  '<div class="set_status" data-status="' + agentRow.state.set + '"><div class="status"></div><div class="setbtn"></div></div>';
            }
            agentWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div data-current="' + agentRow.state.current + '" class="flexible_wrapper" data-id="' + agentRow.id + '">' + rowContent + '</div>'  ) }
            else {
            let colData = agentRow[Object.keys(agentRow)[colCounter - 1]].toString()

            const divWrapper = document.createElement('DIV')
            divWrapper.classList.add('flexible_wrapper')
            divWrapper.setAttribute('data-id', agentRow.id)
            divWrapper.setAttribute('data-current', agentRow.state.current)
            const x = document.createElement('INPUT')
            x.setAttribute('type', 'text')
            x.setAttribute('value', agentRow[Object.keys(agentRow)[colCounter - 1]])


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
              changeAgentDataById(agentRow.id, Object.keys(agentRow)[colDuplicator], e.target.value)
            })


            if (agentSearch.value.length !== 0) {
              let text = agentSearch.value
              let searchReg = new RegExp(text, "igm");
              divWrapper.innerHTML = colData.toString().replace(searchReg, "<span class='marker'>$&</span>")
            }else {
              divWrapper.innerHTML = colData.toString().replace(/(<span class='marker'>|<\/span>)/igm, "");
            }

            divWrapper.classList.add('wrapper_withoutinput')
            agentWrapperTable.querySelectorAll('.column_body')[colCounter].appendChild(divWrapper)
          }
          colCounter++
        }
        i++
      }

      agentWrapperTable.style.height = data.length * 40 + 260 + 'px'
      initCheckboxes()
      initSetter()
      makeFlexibleWidth()
      initRowsEvents()
    }
    rerenderAgentsItems()


    // SEARCH ======================================
    agentSearch.addEventListener('keyup', (e) => {
      if(e.target.value.length === 0) {
        agentWrapper.querySelectorAll('.clearSearch')[0].style.display = 'none'
      }else {
          agentWrapper.querySelectorAll('.clearSearch')[0].style.display = 'block'
      }
      theadCheckbox.checked = false
      rerenderAgentsItems()
    })

    agentWrapper.querySelectorAll('.clearSearch')[0].addEventListener('click', ()=> {
      agentSearch.value = '';
      agentWrapper.querySelectorAll('.search')[0].querySelectorAll('label')[0].classList.remove('active')
      rerenderAgentsItems()
    })

    const getSearchedAgentData = (value) => {
      let vals2
      let agentSearchData2 = []



      getCategorizedData().map(x => {

          let isSearchTrueForThisElem = false
          vals2 = Object.values(x).some((item, i) => {
            if (typeof item !== 'object') {
              if (item.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem) {
                isSearchTrueForThisElem = true

                agentSearchData2.push(x)
              }
            }
          })
      })




      return [ ...agentSearchData2]
    }


  }
};
