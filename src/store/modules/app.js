
export default {

  state: () => ({
    captch_data:null
  }),

  getters: {
    CaptchaData: state => state.captch_data
  },

  mutations: {
  CAPTCHA(store,paylaod){
    store.captch_data = paylaod
  }
  },


  namespaced: true
}
