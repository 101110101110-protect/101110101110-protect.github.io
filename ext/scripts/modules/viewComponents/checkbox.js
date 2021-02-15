export default class  {
  constructor(callback, isChecked) {
    this.callback = callback
    this.isChecked = isChecked
  }

  createCheckbox() {
    let label = document.createElement('label')
    label.classList.add('checkbox-container')
    let input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.checked = this.isChecked
    let span = document.createElement('span')
    span.classList.add('checkmark')

    label.appendChild(input)
    label.appendChild(span)

  //  label.addEventListener('click', this.callback)

    return label
  }

  getCheckbox() {
    return this.createCheckbox()
  }
}
