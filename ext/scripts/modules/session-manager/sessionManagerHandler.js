import PrivateSessionsSingleDataViewComponent from './privateSessionsSingleDataViewComponent.js'
import SyncSessionsSingleDataViewComponent from './syncSessionsSingleDataViewComponent.js'
import ArchiveSessionsSingleDataViewComponent from './archiveSessionsSingleDataViewComponent.js'
import sortArrayByField from './../assets/sortArrayByField.js'
import delArrayItemByFieldAndValue from './../assets/delArrayItemByFieldAndValue.js'

export default class {

  constructor () {
    this.init();
  }

  init() {
    this.initDefaultData()

    this.initPrivateSessions()
    this.initSyncSessions()
    this.initArchiveSessions()

  }

  initDefaultData() {
    // default data
    this._STORE_privateSessions = [
      {
          name : 'Hello Name',
          config : {
            os: 'windows',
            browser: 'chrome'
          },
          proxy: {
            flag: 'united-kingdom',
            ip: '142.222.147.987'
          },
          created: 1611736652436,
          lastUsed: 1611736659999,
          comments: 'Lorem ipsum dolor sit amet',
        },
      {
            name : 'Hello Name2',
            config : {
              os: 'linux',
              browser: 'opera'
            },
            proxy: {
              flag: 'ukraine',
              ip: '14.2.1.1'
            },
            created: 1611739952437,
            lastUsed: 1611739959999,
            comments: 'Lorem ipsum dolor sit amet',

          },
      {
          name : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ',
              config : {
                os: 'macos',
                browser: 'safari'
              },
              proxy: {
                flag: 'united-states',
                ip: '14.2.1.1'
              },
              created: 1611739952439,
              lastUsed: 1611739959999,
              comments: 'Lorem ipsum dolor sit amet',

          },
      {
                name : 'Hello Name752',
                config : {
                  os: 'android',
                  browser: 'ie'
                },
                proxy: {
                  flag: 'andorra',
                  ip: '14.2.1.1'
                },
                created: 1699939952438,
                lastUsed: 1699939959999,
                comments: 'Lorem ipsum dolor sit amet',
              }]
    this._STORE_syncSessions = [{
          name : 'Hello Name',
          config : {
            os: 'windows',
            browser: 'chrome',
            flag: 'united-kingdom'
          },
          status: 'Free',
          group: 'name',
          creator: 'Rivaldo',
          lastUser: 'Zidane',
          comments: 'Lorem ipsum dolor sit amet',
          created: 1611736652436
        }]
    this._STORE_sessionArchive = [{
          name : 'Hello Name',
          config : {
            os: 'windows',
            browser: 'chrome'
          },
          proxy: {
            flag: 'united-kingdom',
            ip: '142.222.147.987'
          },
          created: 1611722437994,
          lastUsed: 1611722438994,
          archiveDate: 1611722439994,

        }]

    const mainMW = document.querySelectorAll('.mw__session_manager')[0];
    let mwPrivate = document.querySelectorAll('.mw__session_manager .privateTab')[0]


    this._VIEW_privateSessions = {
      table: mwPrivate.querySelectorAll('.static_table .tbody')[0],
      tableItemComponent: PrivateSessionsSingleDataViewComponent,
      mainCheckbox: mwPrivate.querySelectorAll('.thead input[type=checkbox]')[0],
      search: mwPrivate.querySelectorAll('.search input')[0],
      sortBtn: mwPrivate.querySelectorAll('.thead .triangle')[0],
      footer: {
        delete: mainMW.querySelectorAll('.js--private-delete')[0],
        archive: mainMW.querySelectorAll('.js--private-archive')[0],
      }
    }
    this._STATE_privateSessions = {
      sortByName: {
        isActive: false,
        isReverse: false
      },
      checkedIDs: []
    }

    let mwSync = document.querySelectorAll('.mw__session_manager .syncTab')[0]
    this._VIEW_syncSessions = {
      table: mwSync.querySelectorAll('.static_table .tbody')[0],
      tableItemComponent: SyncSessionsSingleDataViewComponent,
      mainCheckbox: mwSync.querySelectorAll('.thead input[type=checkbox]')[0],
      search: mwSync.querySelectorAll('.search input')[0],
      sortBtn: mwSync.querySelectorAll('.thead .triangle')[0],
      footer: {
        delete: mwSync.querySelectorAll('footer .js--delete')[0],
        archive: mwSync.querySelectorAll('footer .js--archive')[0],
      }
    }
    this._STATE_syncSessions = {
      sortByName: {
        isActive: false,
        isReverse: false
      },
      checkedIDs: []
    }

    let mwArchive = document.querySelectorAll('.mw__session_manager .archiveTab')[0]
    this._VIEW_archiveSessions = {
      table: mwArchive.querySelectorAll('.static_table .tbody')[0],
      tableItemComponent: ArchiveSessionsSingleDataViewComponent,
      mainCheckbox: mwArchive.querySelectorAll('.thead input[type=checkbox]')[0],
      search: mwArchive.querySelectorAll('.search input')[0],
      sortBtn: mwArchive.querySelectorAll('.thead .triangle')[0],
      footer: {
        delete: mwArchive.querySelectorAll('footer .js--delete')[0],
        archive: mwArchive.querySelectorAll('footer .js--archive')[0],
      }
    }
    this._STATE_archiveSessions = {
      sortByName: {
        isActive: false,
        isReverse: false
      },
      checkedIDs: []
    }
  }

  initPrivateSessions() {

    const rootProps = {
      store: this._STORE_privateSessions,
      state: this._STATE_privateSessions,
      view: this._VIEW_privateSessions
    }


    this.renderData( rootProps )
    this.initSearch( rootProps )
    this.initSort( rootProps )
    this.initRootCheckbox( rootProps )
    this.initFooterButtons( rootProps )


  }

  initSyncSessions() {

    const rootProps = {
      store: this._STORE_syncSessions,
      state: this._STATE_syncSessions,
      view: this._VIEW_syncSessions
    }

    this.renderData( rootProps )
    this.initSearch( rootProps )
    this.initSort( rootProps )
    this.initRootCheckbox( rootProps )
    // this.initFooterButtons( rootProps )

  }

  initArchiveSessions() {

    const rootProps = {
      store: this._STORE_sessionArchive,
      state: this._STATE_archiveSessions,
      view: this._VIEW_archiveSessions
    }

    this.renderData( rootProps )
    this.initSearch( rootProps )
    this.initSort( rootProps )
    this.initRootCheckbox( rootProps )
    //this.initFooterButtons( rootProps )
  }

  getProps(type) {
    let props
    if(type === 'private') {
      props = {
        store: this._STORE_privateSessions,
        state: this._STATE_privateSessions,
        view: this._VIEW_privateSessions
      }
    }else if(type === 'archive'){
      props = {
        store: this._STORE_sessionArchive,
        state: this._STATE_archiveSessions,
        view: this._VIEW_archiveSessions
      }
    }else if(type === 'sync') {
      props = {
        store: this._STORE_syncSessions,
        state: this._STATE_syncSessions,
        view: this._VIEW_syncSessions
      }
    }
    return props
  }

  getRowHandlers(props, tableName, id) { // timestamp -- uniq ID

    const checkboxHandler = (checkboxVal) => {
        if(checkboxVal){
          this._STATE_privateSessions.checkedIDs.push(id)
        }else {
          const index = this._STATE_privateSessions.checkedIDs.indexOf(id);
          if (index > -1) {
            this._STATE_privateSessions.checkedIDs.splice(index, 1);
          }
        }
    }

    const delHandler = () => {
        props.store = delArrayItemByFieldAndValue(props.store, 'created', id)
        console.log(props.store);
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
