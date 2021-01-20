export default class {

  constructor() {
    this.init();
  }

  init() {
    for (const nav of document.querySelectorAll('.columnNav')) {
      dragElement(nav)
    }

    function dragElement (elmnt) {
      let pos1 = 0, pos3 = 0

      elmnt.onmousedown = dragMouseDown


      function dragMouseDown (e) {
        e = e || window.event
        e.preventDefault()

        document.onmouseup = closeDragElement

        document.onmousemove = elementDrag
      }

      function elementDrag (e) {
        e = e || window.event
        e.preventDefault()

        const getRightOffset = (index, wrapper) => {
          return wrapper.children.length - parseInt( index )
        }


        let columnIndex = parseInt(elmnt.parentNode.getAttribute('data-column'))
        let stopLeftPosition = 50 * parseInt(columnIndex)
        let stopRightPosition = getRightOffset(columnIndex, elmnt.parentNode.parentNode) * 50
        let mwOffsetLeft = elmnt.parentNode.parentNode.parentNode.parentNode.offsetLeft / 2
        pos1 = e.clientX - mwOffsetLeft

        if ((e.clientX - mwOffsetLeft) < stopLeftPosition) {
          pos1 = stopLeftPosition
        } else if ((e.clientX - mwOffsetLeft) > 950 - stopRightPosition) {
          pos1 = 950 - stopRightPosition
        }

        elmnt.parentNode.style.left = pos1 + 'px';

        if(elmnt.parentNode.parentNode.children.length > columnIndex + 1) {
          for (const wrapper of elmnt.parentNode.querySelectorAll('.flexible_wrapper')){
            wrapper.style.maxWidth =  parseInt(elmnt.parentNode.parentNode.querySelectorAll('.column')[columnIndex + 1].style.left) - parseInt(elmnt.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px';
          }
        }else {
          for (const wrapper of elmnt.parentNode.querySelectorAll('.flexible_wrapper')){
            wrapper.style.maxWidth =  950 - parseInt(elmnt.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) + 'px';
          }
        }

        for (const wrapper of elmnt.parentNode.parentNode.querySelectorAll('.column')[columnIndex - 1].querySelectorAll('.flexible_wrapper')){

          wrapper.style.maxWidth =  parseInt(elmnt.parentNode.parentNode.querySelectorAll('.column')[columnIndex].style.left) - parseInt(elmnt.parentNode.parentNode.querySelectorAll('.column')[columnIndex - 1].style.left)  + 'px';
        }

      }

      function closeDragElement () {
        /* stop moving when mouse button is released: */
        document.onmouseup = null
        document.onmousemove = null
      }
    }
  }
};
