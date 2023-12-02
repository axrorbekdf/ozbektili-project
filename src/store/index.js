import { createStore } from 'vuex'
import auth from '@/modules/auth'
import news from '@/modules/news'

const store = createStore({
  modules: {
    auth,
    news
  }
})

export default store;