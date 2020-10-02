"use strict";

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