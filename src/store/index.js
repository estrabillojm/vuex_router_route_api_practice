import { createStore } from 'vuex'
import person from './person/person.js'

export default createStore({
  modules: {
    person
  }
})
