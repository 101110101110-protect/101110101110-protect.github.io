"use strict";

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

    let textField = inputWrapper.querySelectorAll('input')[0];
    if(!textField) {
        textField = inputWrapper.querySelectorAll('textarea')[0];
    }

    setInputEventListeners(textField);

}


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

        let livalue = this.getAttribute('data-value');
        let lihtml = this.innerHTML;

        this.closest('.select').querySelectorAll('.textfirst')[0].innerHTML = lihtml;
        this.closest('.select').querySelectorAll('.option').value = livalue;

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
