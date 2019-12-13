
let defaultCity = '上海'
let defaultID = ''
let defaultAuthor = false

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

try {
  if (localStorage.author) {
    defaultAuthor = localStorage.author
  }
} catch (err) {
  console.log(err)
}

export default {
  city: defaultCity,
  ID: defaultID,
  author: defaultAuthor
}
