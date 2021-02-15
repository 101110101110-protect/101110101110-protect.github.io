export default function delArrayItemByFieldAndValue(array, fieldName, value) {
  return array.filter( i => i[fieldName] !== value)
}
