export default class {

  constructor () {
    this.init()
  }

  init () {
    const proxyWrapper = document.querySelectorAll('.mw__proxy_manager')[0]
    const proxyWrapperTable = proxyWrapper.querySelectorAll('.flexible_table')[0]
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
        'state': {
          'checked' : false,
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
        'state': {
          'checked' : true,
        }
      }
    ]



    // BUTTONS ============================================
    const addProxyBtn = proxyWrapper.querySelectorAll('.proxy-add')[0]
    const deleteProxyBtn = proxyWrapper.querySelectorAll('.proxy-delete')[0]
    addProxyBtn.addEventListener('click', () => {
      proxyData.splice(proxyData.length, 0, {
        'type': 'Tor',
        'connectionIp': '46.34.117.152',
        'proxyIp': '46.34.117.152',
        'proxyPort': 8008,
        'proxyLogin': 'root',
        'proxyPassword': 'root',
        'dns': '46.34.117.152'
      })

      rerenderProxyItems(proxyData)
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
        console.log(checkboxArray.indexOf(checkbox))
        if (checkbox) {
          proxyData.splice(checkboxecondIndex - checkboxIndex, 1)
          checkboxIndex++
        } else {

        }
        checkboxecondIndex++
      }

      rerenderProxyItems(proxyData)
    })


    // Checkboxes
    const initCheckboxes = () => {
      const checkboxes = proxyWrapperTable.querySelectorAll('.column_body')[0].querySelectorAll('input[type=checkbox]');
      for(const checkbox of checkboxes) {
        checkbox.addEventListener('change', (e) => {
          proxyData[+checkbox.getAttribute('data-row')].state.checked = e.target.checked;
        })
      }
    }

    // Flexible wrapper
    const makeFlexibleWidth = () => {
      for (const elmnt of document.querySelectorAll('.columnNav')) {
        let columnIndex = elmnt.parentNode.getAttribute('data-column');
        for (const wrapper of elmnt.parentNode.querySelectorAll('.flexible_wrapper')){
          wrapper.style.maxWidth =  parseInt(elmnt.parentNode.parentNode.querySelectorAll('.column')[+columnIndex + 1].style.left)  -  parseInt(elmnt.parentNode.parentNode.querySelectorAll('.column')[+columnIndex].style.left) + 'px';
        }
    }
    }


    // RERENDER ============================================
    const rerenderProxyItems = (data = proxyData) => {
      let columns = proxyWrapperTable.querySelectorAll('.column')
      let x = 0
      for (const column of columns) {
        column.querySelectorAll('.column_body')[0].innerHTML = ''
        x === 1 ? column.style.left = 57 + 'px' : column.style.left = (115 * x) + 'px'
        x++
      }

      let i = 0
      for (const proxyRow of data) {
        let colCounter = 0
        for (const column of columns) {

        if(colCounter === 0) {
          let checked = proxyRow.state.checked ? 'checked' : '';
              proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div><label class="checkbox-container"><input type="checkbox" data-row="' + i + '" ' + checked + '/><span class="checkmark"></span></label></div>')
        }else  if(colCounter === 1){
          proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div class="flexible_wrapper"><div class="select"><div class="mm-dropdown dropdown--port"><div class="textfirst">' + proxyRow[Object.keys(proxyRow)[colCounter - 1]] + '</div><ul><li class="input-option" data-value="1"> My Favorite Session </li><li class="input-option" data-value="2">My Favorite Session</li><li class="input-option" data-value="3">My Favorite Session</li></ul><input type="hidden" class="option" name="port" id="port" value=""/></div></div></div>')
        }else {
            proxyWrapperTable.querySelectorAll('.column_body')[colCounter].insertAdjacentHTML('beforeend', '<div>' + proxyRow[Object.keys(proxyRow)[colCounter - 1]] + '</div>')
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

    // SEARCH ======================================
    const proxySearch = document.querySelectorAll('.mw__proxy_manager .search input')[0]
    proxySearch.addEventListener('keyup', (e) => {
      searchProxyData(e.target.value)
    })
    const searchProxyData = (value) => {
      let vals
      let proxySearchData = []
      let dataClone = [...proxyData].map(x => {
   // get array

        let isSearchTrueForThisElem = false
        vals = Object.values(x).some((item, i) => {
   // get data obj

          if (typeof item !== 'object') {
            if (item.toString().toLowerCase().includes(value.toLowerCase()) && !isSearchTrueForThisElem) {
              isSearchTrueForThisElem = true

              proxySearchData.push(x)
            }
          }
        })
      })
      rerenderProxyItems(proxySearchData)
    }

    // CHECKBOX =====================================


  }
};
