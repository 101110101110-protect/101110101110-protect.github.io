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



    // BUTTONS ============================================
    const closeProxyBtn = proxyWrapper.querySelectorAll('.proxy-close')[0]
    const addProxyBtn = proxyWrapper.querySelectorAll('.proxy-add')[0]
    const deleteProxyBtn = proxyWrapper.querySelectorAll('.proxy-delete')[0]
    const checkProxyBtn = proxyWrapper.querySelectorAll('.proxy-check')[0]
    const saveProxyBtn = proxyWrapper.querySelectorAll('.proxy-save')[0]
    addProxyBtn.addEventListener('click', () => {
      proxyData.splice(proxyData.length, 0,       {
              'type': 'Socks5',
              'connectionIp': '46.34.117.152',
              'proxyIp': '46.34.117.152',
              'proxyPort': 4299,
              'proxyLogin': 'NEW USER',
              'proxyPassword': 'AspSFdfm',
              'dns': '46.34.117.152',
              'id': 17171,
              'state': {
                'checked' : false,
                'check': 'not checked',
                'set': true
              }
            })

      rerenderProxyItems(proxyData)
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
      let active = false;

      proxyData.map((i)=> {
          if(i.state.checked){
            active = true;
            showBtns();
          }
      });

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
            proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div class="flexible_wrapper" data-id="' + proxyRow.id + '"><div class="select"><div class="mm-dropdown dropdown--port"><div class="textfirst">' + proxyRow[Object.keys(proxyRow)[colCounter - 1]] + '</div><ul><li class="input-option" data-value="1"> My Favorite Session </li><li class="input-option" data-value="2">My Favorite Session</li><li class="input-option" data-value="3">My Favorite Session</li></ul><input type="hidden" class="option" name="port" id="port" value=""/></div></div></div>')
          }else  if(colCounter === 8){
            proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div class="flexible_wrapper" data-id="' + proxyRow.id + '"><div class="check_status" data-status="' + proxyRow.state.check + '"></div></div>')
          }else  if(colCounter === 9){
            proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div class="flexible_wrapper" data-id="' + proxyRow.id + '"><div class="set_status" data-status="' + proxyRow.state.set + '"></div></div>')
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
            x.addEventListener('blur', () => {
              divWrapper.innerHTML = colData
              divWrapper.classList.add('wrapper_withoutinput')
              activeWrapper = true
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
      makeFlexibleWidth();
    };

    rerenderProxyItems();
    makeFlexibleWidth();

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
