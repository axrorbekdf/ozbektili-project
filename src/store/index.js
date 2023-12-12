import { createStore } from 'vuex'
import auth from '@/modules/auth'
import news from '@/modules/news'
import country from '@/modules/country'
import exercise from '@/modules/exercise'
import module from '@/modules/module'
import student from '@/modules/student'

const store = createStore({
  modules: {
    auth,
    news,
    country,
    exercise,
    module,
    student
  }
})

export default store;