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

    if (!textField.classList.contains('hidden') && !inputWrapper.classList.contains('disabled')) {
        setInputEventListeners(textField);
    }
}