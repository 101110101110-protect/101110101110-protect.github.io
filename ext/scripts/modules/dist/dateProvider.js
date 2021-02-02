export default class {

  constructor(timestamp) {
      this.timestamp = timestamp
      this.date = new Date(this.timestamp );
  }

  prepear(numb) {
    if(parseInt(numb) < 10) {
       return '0' + numb.toString()
    }
    return numb
  }


  getFullTime() {
    return this.date.getFullYear() + '.' + this.prepear(this.date.getMonth()+1) + '.' + this.prepear(this.date.getDate()) + ' '  + this.prepear(this.date.getHours()) + ':' + this.prepear(this.date.getMinutes()) + ':' + this.prepear(this.date.getSeconds())
  }


}
