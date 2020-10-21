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
          'checked' : false,
          'check': 'success',
          'set': true
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
          'checked' : false,
          'check': 'error',
          'set': true
        },
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
          'checked' : false,
          'check': 'error',
          'set': true
        },
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
            'checked' : false,
            'check': 'not checked',
            'set': true
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
          'checked' : false,
          'check': 'not checked',
          'set': true
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
          'checked' : false,
          'check': 'not checked',
          'set': true
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
        'checked' : false,
        'check': 'not checked',
        'set': true
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
        'checked' : false,
        'check': 'not checked',
        'set': true
      }
    }
  ]
    // DataWorkers

    const createProxy = (data) => {
      proxyData.splice(proxyData.length, 0,       {
              'type': data[0],
              'connectionIp': data[1],
              'proxyIp': data[2],
              'proxyPort': data[3],
              'proxyLogin': data[4],
              'proxyPassword': data[5],
              'dns': data[6],
              'id': +new Date,
              'state': {
                'checked' : false,
                'check': 'not checked',
                'set': true
              }
            })

      rerenderProxyItems(proxyData)
    }
    const changeProxyDataById = (id, key, value) => {
      proxyData = [...proxyData].map((i) => {
        if(parseInt(i.id) === parseInt(id)) {
          i[key] = value
        }
        return i
      })
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
        if(!saveProxyBtn.classList.contains('btn--disabled')) {
          proxyWrapper.classList.remove('active')
        }
    })
    checkProxyBtn.addEventListener('click', () => {

      if(!checkProxyBtn.classList.contains('btn--disabled')) {

        proxyData.map((i)=> {
            if(i.state.checked){
              i.state.checked = false;
              i.state.check = 'success'
            }
        });
        theadCheckbox.checked = false
        saveProxyBtn.classList.remove('btn--disabled')
        saveProxyBtn.classList.add('btn--green')
        rerenderProxyItems(proxyData)
      }


    })
    deleteProxyBtn.addEventListener('click', () => {
      let i = 0
      let checkboxArray = []
      for (const checkbox of proxyWrapper.querySelectorAll('.flexible_table .column_body input[type=checkbox]')) {
        checkboxArray.push(checkbox.checked)
      }
      let checkboxIndex = 0
      let checkboxecondIndex = 0
      for (const checkbox of checkboxArray) {

        if (checkbox) {
          proxyData.splice(checkboxecondIndex - checkboxIndex, 1)
          checkboxIndex++
        } else {

        }
        checkboxecondIndex++
      }

      theadCheckbox.checked = false
      rerenderProxyItems(proxyData)
    }) // del by id !!!!!!!!!!!!!
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
      let active = false;

      proxyData.map((i)=> {
          if(i.state.checked){
            active = true;
            showBtns();
          }
      });

    }

    const inputElement = document.getElementById('proxyfileInput')
    // Add File button
    inputElement.addEventListener('change', handleFiles, false)

    function handleFiles (e) {
      const fileList = event.target.files;
      e.preventDefault()

      for (let i=0; i<fileList.length ; i++){
         (function(file) {
            let reader = new FileReader();
            reader.addEventListener('load', function(e) {
                  let text = e.target.result;

                  createProxy(text.split(';'))
            });
            reader.readAsText(file);
          })(fileList[i])
      }
    }




    // Checkboxes
    const initCheckboxes = () => {
      const checkboxes = proxyWrapperTable.querySelectorAll('.column_body')[0].querySelectorAll('input[type=checkbox]');
      for(const checkbox of checkboxes) {
        checkbox.addEventListener('change', (e) => {
          proxyData[+checkbox.getAttribute('data-row')].state.checked = e.target.checked;

          refreshButtonsState();
        })
      }
    }
    // init main Checkbox
    theadCheckbox.addEventListener('change', function (e) {

      proxyData.map((i)=> {
          i.state.checked = e.target.checked;
          if(e.target.checked){
            showBtns();
          }else {
            hideBtns();
          }
      });

      if(proxySearchData.length) {
        searchProxyData(proxySearch.value)
      }else {
        rerenderProxyItems(proxyData)
      }

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
            console.log('else');
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
        let columnIndex =  parseInt(columnNav.parentNode.getAttribute('data-column'));

        for (const flexibleWrapper of columnNav.parentNode.querySelectorAll('.flexible_wrapper')){
          if( 10  > (columnIndex + 1)){
            flexibleWrapper.style.maxWidth = parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex + 1].style.left) - parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px';
          }else if(10 === (columnIndex + 1)){
            flexibleWrapper.style.maxWidth = 950 - parseInt(columnNav.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px';
          }
        }
      }
    }


    const initRowsEvents = () => {
      let lastHoverElemId;
      let columnsBody = proxyWrapperTable.querySelectorAll('.column_body')
          for(const columnBody of columnsBody) {
              for (const child of columnBody.childNodes) {
                child.addEventListener('mouseover', () => {
                  let row = proxyWrapper.querySelectorAll('[data-id="'+ child.getAttribute('data-id') +'"]')
                  for (const rowElem of row) {
                    rowElem.classList.add('hover')
                  }
                })
                child.addEventListener('mouseout', () => {
                    lastHoverElemId = child.getAttribute('data-id')
                    let row = proxyWrapper.querySelectorAll('[data-id="'+ child.getAttribute('data-id') +'"]')
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
        let preloader = wrapper.querySelectorAll('.preloader')[0]

        let id = wrapper.parentNode.getAttribute('data-id')
        recheck.addEventListener('click', () => {
          recheck.style.display = 'none'
          preloader.style.display = 'block'
          status.style.display = 'none'

          let proxyDataState
          [...proxyData].map(i =>  {
            if(parseInt(i.id) === parseInt(id)) {
              proxyDataState = i.state
            }
          })
          proxyDataState.check = 'success'
          status.parentNode.setAttribute('data-status', 'success' )
          changeProxyDataById(id, 'state', proxyDataState)

          setTimeout(()=>{
            preloader.style.display = 'none'
            status.style.display = 'block'
            //recheck.style.display = 'block'
          }, 3000)
        })
      }
    }

    // RERENDER ============================================
    const rerenderProxyItems = (data = proxyData) => {
      let columns = proxyWrapperTable.querySelectorAll('.column')
      let x = 0


      for (const column of columns) {
        column.querySelectorAll('.column_body')[0].innerHTML = ''
      }

      let i = 0
        for (const proxyRow of data) {
          let colCounter = 0
          for (const column of columns) {

          if(colCounter === 0) {
            let checked = proxyRow.state.checked ? 'checked' : '';
                proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div data-id="' + proxyRow.id + '"><label class="checkbox-container"><input type="checkbox" data-row="' + i + '" ' + checked + '/><span class="checkmark"></span></label></div>')
          }else  if(colCounter === 1){
            proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div class="flexible_wrapper" data-id="' + proxyRow.id + '"><div class="select"><div class="mm-dropdown dropdown--port"><div class="textfirst">' + proxyRow[Object.keys(proxyRow)[colCounter - 1]] + '</div><ul>  <li class="input-option" data-value="Tor">Tor</li><li class="input-option" data-value="Http">Http</li><li class="input-option" data-value="Socks5">Socks5</li><li class="input-option" data-value="Dynamic socks5">Dynamic socks5</li><li class="input-option" data-value="SSH Tunnel">SSH Tunnel</li><li class="input-option" data-value="Tor + SSH Tunnel">Tor + SSH Tunnel</li><li class="input-option" data-value="SSH + Socks5">SSH + Socks5</li></ul><input type="hidden" class="option" name="port" id="port" value=""/></div></div></div>')
          }else  if(colCounter === 8){
            proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div class="flexible_wrapper" data-id="' + proxyRow.id + '"><div class="check_status" data-status="' + proxyRow.state.check + '"><div class="status"></div><div class="preloader"></div><div class="recheck"></div></div></div>')
          }else  if(colCounter === 9){
            proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div class="flexible_wrapper" data-id="' + proxyRow.id + '"><div class="set_status" data-status="' + proxyRow.state.set + '"><div class="status"></div><div class="setbtn"></div></div></div>')
          }else {
            let colData = proxyRow[Object.keys(proxyRow)[colCounter - 1]].toString();

            if(proxySearch.value !== 0){
              colData = colData.replace(new RegExp(proxySearch.value, 'i'), "<span class='marker'>" + proxySearch.value + "</span>");
            }
            const divWrapper = document.createElement("DIV");
            divWrapper.classList.add('flexible_wrapper')
            divWrapper.setAttribute("data-id",  proxyRow.id);
            const x = document.createElement("INPUT");
            x.setAttribute("type", "text");
            x.setAttribute("value", proxyRow[Object.keys(proxyRow)[colCounter - 1]]);
            let colDuplicator = colCounter - 1;
            let activeWrapper = true;
            divWrapper.addEventListener('click', (e) => {
                if(activeWrapper){
                  divWrapper.innerHTML = ''
                  divWrapper.classList.remove('wrapper_withoutinput')
                  divWrapper.appendChild(x)
                  activeWrapper = false
                  x.focus();
                }
            });
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


      proxyWrapperTable.style.height = data.length * 40 + 200 + 'px'
      initCheckboxes();
      initEventsForSelects();
      initEventsForCheckStatus();
      makeFlexibleWidth();
      initRowsEvents();
    };
    rerenderProxyItems();
    initEventsForSelects();
    makeFlexibleWidth();
    initRowsEvents();
    initEventsForCheckStatus();














    // SEARCH ======================================
    proxySearch.addEventListener('keyup', (e) => {
      searchProxyData(e.target.value)
    })

    const searchProxyData = (value) => {
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
        if( arrayOfvaluesId.filter( i => i === x.id).length === 0 ) {
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

      rerenderProxyItems([...proxySearchData1, ...proxySearchData2])
    }

    // CHECKBOX =====================================


  }
};
