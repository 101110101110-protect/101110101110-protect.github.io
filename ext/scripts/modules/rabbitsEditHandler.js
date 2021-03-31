export default class {

  constructor () {
    this.init()
  }

  init () {
    const mwWrapper = document.querySelectorAll('.mw__rabbitsEdit')[0]
    const searchInput = mwWrapper.querySelectorAll('.search input')[0]
    let contentWrapper = mwWrapper.querySelectorAll('.edit-search-body')[0]

    let data = [
      {
        'name': 'Shevchenko',
        'id': 1,
      },
      {
        'name': 'Rebrov',
        'id': 2,
      },
      {
        'name': 'Roberto',
        'id': 3,
      },
      {
        'name': 'Zidane',
        'id': 4,
      },
      {
        'name': 'James',
        'id': 5,
      },
      {
        'name': 'Sheringham',
        'id': 6,
      },
      {
        'name': 'Lemon Brother =)',
        'id': 7,
      },
    ];



    let proxiedData = new Proxy(data, {
      get(target, prop) {
        console.log(target);
        return target
      }
    })

    let qwe = proxiedData[0]

    // get index of object with id:37
    const removeHashtag = (id) => {
      let removeIndex = data.map(function(item) { return item.id; }).indexOf(id);
      data.splice(removeIndex, 1);
    }

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

    const createHashtag = (hashtagData) => {
      let div = document.createElement('div')
      div.classList.add('edit-hashtag')
      div.setAttribute('id', hashtagData.id)
      let close = document.createElement('div')
      close.classList.add('close-hashtag')

      div.innerHTML = hashtagData.name
      div.appendChild(close)

      div.addEventListener('click', e => {
        div.classList.add('hidden')
        setTimeout(()=> {
          div.remove()
          removeHashtag(hashtagData.id)
        }, 1000)
      })


      return div
    }


    // RERENDER ============================================
    const renderItems = () => {

      const clonedData = searchInput.value.length === 0 ? [...data] : [...getSearchedData(searchInput.value)] // Original data or searched

      const hashtagArray = clonedData.map( item => {
            return createHashtag(item)
      })

      contentWrapper.innerHTML = ''
      hashtagArray.map( item => {
        contentWrapper.appendChild(item)
      })

    }

    renderItems()

    // SEARCH ======================================
    searchInput.addEventListener('keyup', (e) => {
      if(e.target.value.length === 0) {
        mwWrapper.querySelectorAll('.clearSearch')[0].style.display = 'none'
      }else {
          mwWrapper.querySelectorAll('.clearSearch')[0].style.display = 'block'
      }

      renderItems()
    })


    mwWrapper.querySelectorAll('.clearSearch')[0].addEventListener('click', ()=> {
      searchInput.value = '';
      mwWrapper.querySelectorAll('.search')[0].querySelectorAll('label')[0].classList.remove('active');
      mwWrapper.querySelectorAll('.clearSearch')[0].style.display = 'none';

      renderItems()
    })

    const getSearchedData = (value) => {
      let vals;
      let searchInputData = [];


      data.map(x => {

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
