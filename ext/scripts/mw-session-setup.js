"use strict";

const setEventsForSelects =  () => {
    const selects = document.querySelectorAll('.select');
    for (const select of selects) {
        select.addEventListener('click', function (e) {
            if (this.classList.contains('active')) {
                for (const select of selects) {
                    select.querySelectorAll('ul')[0].style.display = 'none';
                    select.classList.remove('active')
                }
            } else {
                for (const select of selects) {
                    select.querySelectorAll('ul')[0].style.display = 'none';
                    select.classList.remove('active');
                }
                if (!e.target.classList.contains(".input-option")) {
                    this.classList.add('active');
                    this.querySelectorAll('ul')[0].style.display = 'block';
                }
            }
        })
    }

    const selectOptions = document.querySelectorAll('li.input-option');
    for (const option of selectOptions) {
        option.addEventListener('click', function () {

            if (!this.closest('.select').classList.contains('disabled')) {
                let livalue = this.getAttribute('data-value');
                let lihtml = this.innerHTML;
                this.closest('.select').querySelectorAll('.textfirst')[0].innerHTML = lihtml;
                this.closest('.select').querySelectorAll('.option').value = livalue;
            }
        })

    }

    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains("textfirst") && !e.target.classList.contains("input-option")) {
            for (const select of selects) {
                select.querySelectorAll('ul')[0].style.display = 'none';
                select.classList.remove('active')
            }
        }
    })
}

// =============================================== proxy worker

let proxyData = [
    {
    "type": "Socks5",
    "connectionIp": "46.34.117.152",
    "proxyIp": "46.34.117.152",
    "proxyPort": 4299,
    "proxyLogin": "Admin",
    "proxyPassword": "AspSFdfm",
    "dns": "46.34.117.152"
},
    {
        "type": "Socks5",
        "connectionIp": "46.34.117.152",
        "proxyIp": "46.34.117.152",
        "proxyPort": 4299,
        "proxyLogin": "Admin",
        "proxyPassword": "AspSFdfm",
        "dns": "46.34.117.152"
    },
    {
        "type": "Socks5",
        "connectionIp": "46.34.117.152",
        "proxyIp": "46.34.117.152",
        "proxyPort": 4299,
        "proxyLogin": "Admin",
        "proxyPassword": "AspSFdfm",
        "dns": "46.34.117.152"
    },
    {
        "type": "Socks5",
        "connectionIp": "46.34.117.152",
        "proxyIp": "46.34.117.152",
        "proxyPort": 4299,
        "proxyLogin": "Admin",
        "proxyPassword": "AspSFdfm",
        "dns": "46.34.117.152"
    },
    {
        "type": "Socks5",
        "connectionIp": "46.34.117.152",
        "proxyIp": "46.34.117.152",
        "proxyPort": 4299,
        "proxyLogin": "Admin",
        "proxyPassword": "AspSFdfm",
        "dns": "46.34.117.152"
    }
];


const proxyWrapper = document.querySelectorAll('.mw__proxy_manager')[0];
const proxyWrapperTbody = proxyWrapper.querySelectorAll('.tbody')[0];



const addBtn = proxyWrapper.querySelectorAll('.proxy-add')[0];
const deleteBtn = proxyWrapper.querySelectorAll('.proxy-delete')[0];

addBtn.addEventListener('click', () => {

    proxyData.splice(proxyData.length, 0,    {
        "type": "Tor",
        "connectionIp": "46.34.117.152",
        "proxyIp": "46.34.117.152",
        "proxyPort": 8008,
        "proxyLogin": "root",
        "proxyPassword": "root",
        "dns": "46.34.117.152"
    });

    rerenderProxyItems();

})

deleteBtn.addEventListener('click', () => {


    let i = 0;
    let checkboxArray = [];
    for (const checkbox of proxyWrapper.querySelectorAll('.tbody-item input[type=checkbox]')) {

            checkboxArray.push(checkbox.checked);

    }

    let checkboxIndex = 0;
    let checkboxecondIndex = 0;
    for (const checkbox of checkboxArray) {

        console.log(checkboxArray.indexOf(checkbox) );
        if(checkbox) {
            proxyData.splice(checkboxecondIndex - checkboxIndex, 1);
            checkboxIndex++;
        }else {

        }
        checkboxecondIndex++;

    }


    rerenderProxyItems()

})


const rerenderProxyItems = () => {

    proxyWrapperTbody.innerHTML = '';

    let i = 0;
    for (const proxyItem of proxyData) {

        proxyWrapperTbody.insertAdjacentHTML('beforeend', '<div class="tbody-item" data-index="' + i + '">' +
            '                <div><label class="checkbox-container">' +
            '                    <input type="checkbox" />' +
            '                    <span class="checkmark"></span>' +
            '                </label></div>' +
            '                <div>' +
            '                    <div class="select">' +
            '                        <div class="mm-dropdown dropdown--proxy">' +
            '                            <div class="textfirst">' + proxyItem["type"] + '</div>' +
            '                            <ul>' +
            '                                <li class="input-option" data-value="Socks5">' +
            '                                    Socks5' +
            '                                </li>' +
            '                                <li class="input-option" data-value="Tor">' +
            '                                    Tor' +
            '                                </li>' +
            '                                <li class="input-option" data-value="Http">' +
            '                                    Http' +
            '                                </li>' +
            '                                <li class="input-option" data-value="Dynamic socks5">' +
            '                                    Dynamic socks5' +
            '                                </li>' +
            '                                <li class="input-option" data-value="SSH Tunnel">' +
            '                                    SSH Tunnel' +
            '                                </li>' +
            '                                <li class="input-option" data-value="Tor + SSH Tunnel">' +
            '                                    Tor + SSH Tunnel' +
            '                                </li>' +
            '                                <li class="input-option" data-value="SSH + Socks5">' +
            '                                    SSH + Socks5' +
            '                                </li>' +
            '                            </ul>' +
            '                            <input type="hidden" class="option" name="proxy" id="proxy" value="' + proxyItem["type"] + ' "/>' +
            '                        </div>' +
            '                    </div>' +
            '                    </div>' +
            '                <div><svg width="15" class="flag" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
            '                    <rect width="15" height="11" fill="url(#pattern0)"/>' +
            '                    <defs>' +
            '                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">' +
            '                            <use xlink:href="#image0" transform="translate(-0.0333333) scale(0.0666667 0.0909091)"/>' +
            '                        </pattern>' +
            '                        <image id="image0" width="16" height="11" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC"/>' +
            '                    </defs>' +
            '                </svg>' +
            '                  ' + proxyItem["connectionIp"] + '</div>' +
            '                <div><svg width="15" class="flag" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
            '                    <rect width="15" height="11" fill="url(#pattern0)"/>' +
            '                    <defs>' +
            '                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">' +
            '                            <use xlink:href="#image0" transform="translate(-0.0333333) scale(0.0666667 0.0909091)"/>' +
            '                        </pattern>' +
            '                        <image id="image0" width="16" height="11" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC"/>' +
            '                    </defs>' +
            '                </svg>' +
            '                    ' + proxyItem["proxyIp"] + '</div>' +
            '                <div>' + proxyItem["proxyPort"] + '</div>' +
            '                <div>' + proxyItem["proxyLogin"] + '</div>' +
            '                <div>' + proxyItem["proxyPassword"] + '</div>' +
            '                <div>' + proxyItem["dns"] + '</div>' +
            '                </div>');
        i++;

    }
    const selectOptions = proxyWrapper.querySelectorAll('li.input-option');
    for (const option of selectOptions) {
        option.addEventListener('click', function () {
            if (!this.closest('.select').classList.contains('disabled')) {
                let livalue = this.getAttribute('data-value');
                proxyData[this.closest('.tbody-item').getAttribute('data-index')]["type"] = livalue;
            }
        })
    }


    proxyWrapper.querySelectorAll(' .thead-checkbox input')[0].checked = false;
    setEventsForSelects();


}

window.addEventListener('load', () => {
    rerenderProxyItems();
})
// ========================================= End


const switchers = document.querySelectorAll('.switcher-wrapper');
for (const switcher of switchers) {
    switcher.addEventListener('click', () => {
        const checkbox = switcher.querySelectorAll('input')[0];
        checkbox.checked = !checkbox.checked;
    });
}

const inputsWrapper = document.querySelectorAll('.input-wrapper');
const setInputEventListeners = (input) => {
    const wrapper =  input.closest('div');

    input.onfocus = function() {
        wrapper.classList.add('active');
        wrapper.querySelectorAll('label')[0].classList.add('active');
    }
    input.onblur = function() {
        wrapper.classList.remove('active');
        if(input.value === '') {
            wrapper.querySelectorAll('label')[0].classList.remove('active');
        }
    }

    const label = wrapper.querySelectorAll('label')[0]
    label.addEventListener('click', () => {
        input.focus();
    })
}
for (const inputWrapper of inputsWrapper) {

    inputWrapper.addEventListener('mouseover', function () {
        this.classList.add('hover')
    });
    inputWrapper.addEventListener('mouseout', function () {
        this.classList.remove('hover')
    });

    let textField = inputWrapper.querySelectorAll('input')[0];
    if(!textField) {
        textField = inputWrapper.querySelectorAll('textarea')[0];
    }

        if (!textField.classList.contains('hidden') && !inputWrapper.classList.contains('disabled')) {
            setInputEventListeners(textField);
        }
}

setEventsForSelects();

//session-color
const sessionColor = document.querySelectorAll('.session-color')[0];
const sessionColorMark = document.querySelectorAll('.session-color-mark')[0];
const sessionColorsWrapper = document.querySelectorAll('.session-colors-wrapper')[0];
const sessionColorOption = document.querySelectorAll('.session-color-option');
const sessionHighlightColorInput = document.querySelectorAll('#session-hightlight-color')[0];

sessionColor.addEventListener('click', (e) => {

    sessionColorsWrapper.classList.toggle("active");
})
let prevActiveMark;
for (const option of sessionColorOption) {
    option.addEventListener('click', function () {
        let color = this.getAttribute('data-color');
        sessionColorsWrapper.classList.remove("active");
        this.classList.add('active');

        if(prevActiveMark){
            prevActiveMark.classList.remove('active');
        }
        sessionHighlightColorInput.value = color;


        if(color !== 'none') {
            sessionColor.classList.add("mark-active");
            sessionColorMark.style.backgroundColor = color;
        }else {
            sessionColor.classList.remove("mark-active");
        }

        prevActiveMark = this;
    })

}

const items = document.querySelectorAll('.item');
for (const item of items) {
    let checkbox = item.querySelectorAll('input')[0];
    checkbox.checked ? item.classList.add('active') : item.classList.remove('active');
    checkbox.addEventListener('click', function (e) {
        e.target.checked ? item.classList.add('active') : item.classList.remove('active');
    });
}

const theadCheckboxes = document.querySelectorAll('.thead-checkbox');
for (const checkbox of theadCheckboxes) {
    checkbox.addEventListener('click', function () {

        let value = this.querySelectorAll('input')[0].checked;

        let items = this.closest('.table').querySelectorAll('.tbody-item');

        for (const item of items) {

            item.querySelectorAll('input')[0].checked = value;
        }
    });
}




const filesStore =  new ClipboardEvent("").clipboardData || new DataTransfer();



const holder = document.getElementById('holder');
const resultWrapper = document.getElementsByClassName('result')[0];
const inputElement = document.getElementById('fileInput');
holder.ondragover = function () { this.className = 'hover'; return false; };
holder.ondragend = function () { this.className = ''; return false; };
holder.ondrop = function (e) {
    this.className = '';
    e.preventDefault();
    resultWrapper.innerHTML = "";
    for (let i = 0, len = e.dataTransfer.files.length; i<len; i++) filesStore.items.add(e.dataTransfer.files[i])

    for (let i = 0, len = filesStore.files.length; i<len; i++) {
        let elem = document.createElement('div');
        let close = document.createElement('div');
        elem.classList.add('filewrapper');
        close.classList.add('close');
        close.addEventListener('click', () => {
            filesStore.items.remove(i);
            elem.remove();
            inputElement.files = filesStore.files;
        })
        elem.innerHTML = filesStore.files[i].name;
        elem.appendChild(close);
        resultWrapper.appendChild(elem);
    }
    inputElement.files = filesStore.files;
}


inputElement.addEventListener("change", handleFiles, false);

function handleFiles(e) {

    const fileList = this.files;

    e.preventDefault();

    resultWrapper.innerHTML = "";

    for (let i = 0, len = fileList.length; i<len; i++) filesStore.items.add(fileList[i])

    for (let i = 0, len = filesStore.files.length; i<len; i++) {
        let elem = document.createElement('div');
        let close = document.createElement('div');
        elem.classList.add('filewrapper');
        close.classList.add('close');
        close.addEventListener('click', () => {
            filesStore.items.remove(i);
            elem.remove();
            inputElement.files = filesStore.files;
        })
        elem.innerHTML = filesStore.files[i].name;
        elem.appendChild(close);
        resultWrapper.appendChild(elem);
    }

    inputElement.files = filesStore.files;
}


const tabsManager =  document.getElementsByClassName('tabs_manager');

for (const singleTabsManager of tabsManager) {

    for (const tabsManagerLink of singleTabsManager.querySelectorAll('span')) {

        tabsManagerLink.addEventListener('click', function () {

            for (const tabsManagerLink1 of singleTabsManager.querySelectorAll('span')) {
                tabsManagerLink1.classList.remove('active');
            }

            tabsManagerLink.classList.add('active');

            let indexData = tabsManagerLink.getAttribute('data-index');
            for (const main of tabsManagerLink.closest('.mw').querySelectorAll('main')) {

                main.classList.contains('active') ? main.classList.remove('active') : null;


                main.getAttribute('data-index') === indexData ? main.classList.add('active') : null;
            }
            for (const footer of tabsManagerLink.closest('.mw').querySelectorAll('footer')) {

                footer.classList.contains('active') ? footer.classList.remove('active') : null;


                footer.getAttribute('data-index') === indexData ? footer.classList.add('active') : null;
            }
        });


    }

}

const btnsWrapper = document.querySelectorAll('.btns-wrapper--js');
for (const btnWrapper of btnsWrapper) {
    const btns = btnWrapper.querySelectorAll('.btn');

    for (const btn of btns) {

        btn.addEventListener('click', () => {
            for (const btn0 of btns) btn !== btn0 ? btn0.classList.remove('active') : btn.classList.add('active');

        });

    }
}



const windows = document.querySelectorAll('.mw');

for (const singleWindow of windows) {

    singleWindow.querySelectorAll('.close')[0].addEventListener('click', () => {
        singleWindow.classList.remove('active');
    });

}


const sessionName = document.getElementById('session_name');
document.querySelectorAll('.rename')[0].addEventListener('click', () => {
    sessionName.removeAttribute("disabled");
    setInputEventListeners(sessionName);
    sessionName.focus();
});
sessionName.addEventListener('blur', ()=> {
    sessionName.setAttribute("disabled", 'true');
})


document.querySelectorAll('.clone')[0].addEventListener('click', () => {
    document.querySelectorAll('.clone--success')[0].classList.add('active');

    document.querySelectorAll('#session_name')[0].select();
    document.execCommand('copy');

    setTimeout(() => {
        document.querySelectorAll('.clone--success')[0].classList.remove('active');

    }, 3000);
});


for(const nav of document.querySelectorAll('.columnNav')) {
    dragElement(nav);
}


function dragElement(elmnt) {
  var pos1 = 0, pos3 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }
    let initialPos = 0;
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;

    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
      document.onmousedown = (e) => {
          initialPos = e.clientX;
          console.log(initialPos);
      };
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 =  e.clientX - elmnt.parentNode.offsetLeft;

    console.log(pos1 + ' e.clientX')

      let col1Width = pos1;
        if(col1Width > 185) {
            col1Width = 185;
        }else if (col1Width < 70){
            col1Width = 70;
        }
      let col2Width = 128  - (pos1 - 128) ;
      if(col2Width > 185) {
          col2Width = 185;
      }else if (col2Width < 70){
          col2Width = 70;
      }
      elmnt.parentNode.style.width =  col1Width + "px";
      document.querySelectorAll('.mw__extended_settings .thead > div')[ +elmnt.getAttribute('data-index') + 1 ].style.width = col2Width + "px";



      for(const item of document.querySelectorAll('.mw__extended_settings .table--plugins .tbody-item')) {

          item.querySelectorAll('div')[+elmnt.getAttribute('data-index')].style.width = col1Width + 'px';
          item.querySelectorAll('div')[+elmnt.getAttribute('data-index') + 1].style.width =  col2Width + "px";
      }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

