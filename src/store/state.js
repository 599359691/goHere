
let defaultCity = '上海'
let defaultID = ''

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (err) {
  console.log(err)
}

try {
  if (localStorage.ID) {
    defaultID = localStorage.ID
  }
} catch (err) {
  console.log(err)
}

export default {
  city: defaultCity,
  ID: defaultID
}
