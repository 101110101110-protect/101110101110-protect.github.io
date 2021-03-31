export default function sortArrayByField(array, field, isReverse) {

  const byField = (fieldName) => {
    if(!isReverse) {
      return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
    }else {
      return (a, b) => a[fieldName] < b[fieldName] ? 1 : -1;
    }
  }



  return array.map(i => i).sort(byField(field))
}
