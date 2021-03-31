import DownloadsSingleDataViewComponent from './downloadsSingleDataViewComponent.js'

import sortArrayByField from './../assets/sortArrayByField.js'
import delArrayItemByFieldAndValue from './../assets/delArrayItemByFieldAndValue.js'

export default class {

  constructor () {
    this.init();
  }

  init() {
    this.initDefaultData()
    this.initdownloads()
  }

  initDefaultData() {

    const mainMW = document.querySelectorAll('.mw__downloads')[0];
    let mwPrivate = mainMW.querySelectorAll('.downloadsTab')[0]



    this._STATE_downloads = {
      sortByName: {
        isActive: false,
        isReverse: false
      },
      checkedIDs: []
    }
    this._VIEW_downloads = {
      table: mwPrivate.querySelectorAll('.static_table .tbody')[0],
      tableItemComponent: DownloadsSingleDataViewComponent,
      mainCheckbox: mwPrivate.querySelectorAll('.thead input[type=checkbox]')[0],
      search: mwPrivate.querySelectorAll('.search input')[0],
      sortBtn: mwPrivate.querySelectorAll('.thead .triangle')[0],
      footer: {
        delete: mainMW.querySelectorAll('.js--private-delete')[0],
        archive: mainMW.querySelectorAll('.js--private-archive')[0],
      }
    }
    this._STORE_downloads = [
      {
        file : 'lorem.dw',
        size: '456 bytes',
        date: 1611736652436,
      },
      {
        file : 'lorem.pdf',
        size: '456 bytes',
        date: 1611736652436,
      },
      {
        file : 'lorem.doc',
        size: '456 bytes',
        date: 1611736652436,
      }
    ]

  }

  initdownloads() {

    const rootProps = {
      store: this._STORE_downloads,
      state: this._STATE_downloads,
      view: this._VIEW_downloads
    }


    this.renderData( rootProps )
    this.initSearch( rootProps )
    //this.initSort( rootProps )
    //this.initRootCheckbox( rootProps )
    //this.initFooterButtons( rootProps )


  }



  getProps(type) {
    let props = {
        store: this._STORE_downloads,
        state: this._STATE_downloads,
        view: this._VIEW_downloads
      }

    return props
  }

  getRowHandlers(props, tableName, id) { // timestamp -- uniq ID

    const checkboxHandler = (checkboxVal) => {
        if(checkboxVal){
          this._STATE_downloads.checkedIDs.push(id)
        }else {
          const index = this._STATE_downloads.checkedIDs.indexOf(id);
          if (index > -1) {
            this._STATE_downloads.checkedIDs.splice(index, 1);
          }
        }
    }

    const delHandler = () => {
        props.store = delArrayItemByFieldAndValue(props.store, 'created', id)

        this.renderData(props)
    }

    const editHandler = () => {
      console.log('edit');
    }

    return {
      checkbox: checkboxHandler,
      del: delHandler,
      edit: editHandler
    }
  }

  renderData(props) {

    props.view.table.innerHTML = ''

    this.getData(props).map(item => {

      let isChecked = props.state.checkedIDs.includes(item.created)

      const componentInstance = new props.view.tableItemComponent(item, this.getRowHandlers(props, 'privateSessions', item.created), isChecked)
      const component = componentInstance.getComponent()
      props.view.table.appendChild(component)
    })

  }

  getData(props) {
    let data;
    if(props.view.search.value.length) {
      let vals
      let searchedData = []
      props.store.map(x => {
        let isSearchTrueForThisElem = false
        Object.values(x).some((item, i) => {
            if (typeof item !== 'object') {
              if (item.toString().toLowerCase().includes(props.view.search.value.toLowerCase()) && !isSearchTrueForThisElem) {
                isSearchTrueForThisElem = true
                searchedData.push(x)
              }
            }
        })
      })
     data = searchedData

    }else {
      data = props.store
    }

    return this.sortData(data, props.state.sortByName)
  }

  initRootCheckbox(props) {
    props.view.mainCheckbox.addEventListener('click', e => {

      this.getData(props).map(i => {
        if(e.target.checked) {
          if(!props.state.checkedIDs.includes(i.created)){
            props.state.checkedIDs.push(i.created)
          }
        }else {
          const index = props.state.checkedIDs.indexOf(i.created);
          if (index > -1) {
            props.state.checkedIDs.splice(index, 1);
          }
        }
      });

      this.renderData(props)
    })

    props.view.mainCheckbox.reset = (e) => {
      props.view.mainCheckbox.checked = false
    }


  }

  resetRootCheckbox(props) {

    props.view.mainCheckbox.reset()

  }

  initSearch(props) {
   props.view.search.addEventListener('keyup', (e) => {
      this.renderData(props)
      this.resetRootCheckbox(props)
    })

  }

  initSort(props) {

    let sortState = props.state.sortByName

    props.view.sortBtn.addEventListener('click', e => {

      this.renderData(props)
      if(!sortState.isActive && !sortState.isReverse){

        sortState.isActive = true
        e.target.classList.add('active')
        e.target.classList.add('down')
        let sortedData =  sortArrayByField(props.store, 'name', sortState.isReverse )

        this.renderData(props)
        return
      }
      if(sortState.isActive && !sortState.isReverse){
        sortState.isReverse = true
        e.target.classList.remove('down')
        let sortedData = sortArrayByField(props.store, 'name', sortState.isReverse )
        this.renderData(props)
        return
      }

      if(sortState.isActive && sortState.isReverse){

        sortState.isReverse = false
        sortState.isActive = false
        e.target.classList.remove('active')


        this.renderData(props)
        return
      }

    })
  }

  sortData(data, sortState) {
    if(!sortState.isActive && !sortState.isReverse){
      return data
    }
    if(sortState.isActive && !sortState.isReverse){
      return sortArrayByField(data, 'name', sortState.isReverse )
    }

    if(sortState.isActive && sortState.isReverse){
      return sortArrayByField(data, 'name', sortState.isReverse )
    }
  }

  initFooterButtons(props) {

      const that = this
      props.view.footer.delete.addEventListener('click', () => {
        props.state.checkedIDs.map( (item) => {
          props.store = delArrayItemByFieldAndValue(props.store, 'created', item)
        })
        props.state.checkedIDs = []
        that.renderData(props)
      })

      props.view.footer.archive.addEventListener('click', () => {
        const archivedRows = []
        props.state.checkedIDs.map( (item) => {
          let archiveITEM = (props.store.filter( i => i['created'] === item))[0]
          archiveITEM.archiveDate = +new Date();
          archivedRows.push( archiveITEM)
          props.store = delArrayItemByFieldAndValue(props.store, 'created', item)

        })




        const archiveProps = this.getProps('archive');
        archivedRows.map( i => {
          archiveProps.store.push(i)
        })

        props.state.checkedIDs = []
        that.renderData(props) // rerender PRIVATE items
        that.renderData(archiveProps) // rerender ARCHIVE items
      })

  }
};
