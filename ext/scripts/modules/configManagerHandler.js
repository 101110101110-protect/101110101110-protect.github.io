export default class {

  constructor () {
    this.init()
  }
  init () {
    let mw = document.querySelectorAll('.mw__config_manager')[0]
    const refreshBTN = document.querySelectorAll('.config--refresh')[0]
    const resetBTN = document.querySelectorAll('.config--reset')[0]
    const saveBTN = document.querySelectorAll('.config--save')[0]
    const closeBTN = document.querySelectorAll('.config--close')[0]
    let btnsWrapper = mw.querySelectorAll('.btns-wrapper--js')
    let os = 'Windows';
    let browser = 'Chrome';

    refreshBTN.addEventListener('click', () => {
      let text = document.querySelectorAll('#useragent_comment')[0]
      let width = document.querySelectorAll('#manager_width_screen')[0]
      let height = document.querySelectorAll('#manager_height_screen')[0]
      let video = document.querySelectorAll('#config_videocart')[0]


      if(text.value === 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246') {
        text.value = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36'
        width.value = '1920'
        height.value = '1080'
        video.value = 'HD6000'
      }else {
        text.value = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
        width.value = '1366'
        height.value = '768'
        video.value = 'GTX 1060 TI'
      }
    })

    resetBTN.addEventListener('click', () => {
      let text = document.querySelectorAll('#useragent_comment')[0]
      let width = document.querySelectorAll('#manager_width_screen')[0]
      let height = document.querySelectorAll('#manager_height_screen')[0]
      let video = document.querySelectorAll('#config_videocart')[0]

        text.value = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
        width.value = '1366'
        height.value = '768'
        video.value = 'GTX 1060 TI'


      for( let wrapper of btnsWrapper)  {
        let btns = wrapper.querySelectorAll('.btn')
        let counter = 0;
          for( let btn of btns) {
            btn.classList.remove('active')
            if(counter === 0) {
              btn.classList.add('active')
            }
            counter++
          }
      }
    })

    closeBTN.addEventListener('click', () => {
      mw.classList.remove('active')
    })
    saveBTN.addEventListener('click', () => {
      let text = document.querySelectorAll('#useragent_comment')[0]
      let width = document.querySelectorAll('#manager_width_screen')[0]
      let height = document.querySelectorAll('#manager_height_screen')[0]
      let video = document.querySelectorAll('#config_videocart')[0]

      let osOrBrowser = 0;
      for( let wrapper of btnsWrapper)  {
        let btns = wrapper.querySelectorAll('.btn')
        let counter = 0;
          for( let btn of btns) {
            if(btn.classList.contains('active')){
              if(osOrBrowser === 0) {
                os = btn.textContent.replace(/\s/g, '')
              }else {
                browser = btn.textContent.replace(/\s/g, '')
              }
            }

          }

          osOrBrowser++;
      }

      let useragent = document.querySelectorAll('#useragent')[0]
      useragent.value = document.querySelectorAll('#useragent_comment')[0].value

      document.querySelectorAll('#useragent_os')[0].innerHTML = ''
       document.querySelectorAll('#useragent_os')[0].insertAdjacentHTML('beforeend', '<img src="assets/images/mw/' + os.toLowerCase() + '.svg" /> ' + os + '')

       document.querySelectorAll('#useragent_browser')[0].innerHTML = ''
        document.querySelectorAll('#useragent_browser')[0].insertAdjacentHTML('beforeend', '<img src="assets/images/mw/' + browser.toLowerCase() + '.svg" />' + browser + '')

    })

  }

}
