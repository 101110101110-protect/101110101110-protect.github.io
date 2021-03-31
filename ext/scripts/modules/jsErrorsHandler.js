export default class {

  constructor () {
    this.init()
  }

  init () {
    const mwWrapper = document.querySelectorAll('.mw__js_errors')[0]


    let data = [
      {
        'timestamp' : 1611245096712,
        'message': 'WebSocket connection to wss://chat5-1.jivosite.com/WWzUz7zx7F?bb152f0fb2c34ead failed: Error in connection establishment: net::ERR_SOCKS_CONNECTION_FAILED',
        'line': 12,
        'source': 'emulatorHandler.js'
      },
      {
        'timestamp' : 1611245251451,
        'message': 'WebSocket connection to wss://chat5-1.jivosite.com/WWzUz7zx7F?bb152f0fb2c34ead failed: Error in connection establishment: net::ERR_SOCKS_CONNECTION_FAILED',
        'line': 122,
        'source': 'emulatorHandler.js'
      },
      {
        'timestamp' : 1611245281120,
        'message': 'WebSocket connection to wss://chat5-1.jivosite.com/WWzUz7zx7F?bb152f0fb2c34ead failed: Error in connection establishment: net::ERR_SOCKS_CONNECTION_FAILED',
        'line': 991,
        'source': ' '
      },
      {
        'timestamp' : 1611245216712,
        'message': 'WebSocket connection to wss://chat5-1.jivosite.com/WWzUz7zx7F?bb152f0fb2c34ead failed: Error in connection establishment: net::ERR_SOCKS_CONNECTION_FAILED',
        'line': 8881,
        'source': ' '
      },
      {
        'timestamp' : 1611245096712,
        'message': 'WebSocket connection to wss://chat5-1.jivosite.com/WWzUz7zx7F?bb152f0fb2c34ead failed: Error in connection establishment: net::ERR_SOCKS_CONNECTION_FAILED',
        'line': 12,
        'source': ' '
      },


    ]



    // BUTTONS ============================================
    // const closeAgentsBtn = mwWrapper.querySelectorAll('.')[0]
    //
    //
    // const saveAgentBtn = mwWrapper.querySelectorAll('.')[0]
    // closeAgentsBtn.addEventListener('click', () => {
    //     mwWrapper.classList.remove('active')
    //   })
    // saveAgentBtn.addEventListener('click', () => {
    //   if (!saveAgentBtn.classList.contains('btn--disabled')) {
    //     mwWrapper.classList.remove('active')
    //   }
    // })


    const getTimeFromDate = (timestamp) => {
      let date = new Date(timestamp * 1000);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      const pad = (num) => {
        return ("0"+num).slice(-2);
      }
      return pad(hours)+":"+pad(minutes)+":"+pad(seconds)
    }

    const createDivWithContent = (classNameSuffix, content) => {
      let div = document.createElement('div')
      div.classList.add(classNameSuffix+'__row')
      let p = document.createElement('p')
      p.classList.add(classNameSuffix+'__text')
      p.innerHTML = content
      div.appendChild(p)

      return div
    }


    // RERENDER ============================================
    const renderItems = () => {

      const dataView = data.map( item => {

        let errorWrapper = document.createElement('div')
        errorWrapper.classList.add('error')
        let errorString = '[' + getTimeFromDate(item.timestamp) + '] Message: ' + item.message
        let errorAdditionalString = 'Line: ' + item.line + ' Source: ' + item.source
        let mainWrapper = createDivWithContent('error', errorString)
        let additionalWrapper = createDivWithContent('error', errorAdditionalString)

        errorWrapper.appendChild(mainWrapper)
        errorWrapper.appendChild(additionalWrapper)


        return errorWrapper

      })

      let contentWrapper = mwWrapper.querySelectorAll('.error-content')[0]
      contentWrapper.innerHTML = ''
      dataView.map( item => {
        contentWrapper.appendChild(item)
      })


    }


    renderItems()
  }
};
