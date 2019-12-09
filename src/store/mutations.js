export default {

  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (err) {
      console.log(err)
    }
  },
  changeUserID (ctx, ID) {
    ctx.ID = ID
    try {
      localStorage.ID = ID
    } catch (err) {
      console.log(err)
    }
  }
}
