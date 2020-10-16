"use strict";

const switchers = document.querySelectorAll('.switcher-wrapper');

for (const switcher of switchers) {
    switcher.addEventListener('click', () => {
        const checkbox = switcher.querySelectorAll('input')[0];
        checkbox.checked = !checkbox.checked;
    });
}