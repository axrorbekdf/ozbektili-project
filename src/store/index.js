import { createStore } from 'vuex'
import auth from '@/modules/auth'
import news from '@/modules/news'
import country from '@/modules/country'
import exercise from '@/modules/exercise'

const store = createStore({
  modules: {
    auth,
    news,
    country,
    exercise
  }
})

export default store;