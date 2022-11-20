<template>
  <div>
    {{ person }}
    <h1 v-if="isLoading">Loading Data Please Wait</h1>
    <div v-else>
        <h1>FULL NAME : {{ person.name }}</h1>
        <h2>EMAIL : {{ person.email }}</h2>
        <h3>ID NUMBER : {{ `${currentTime}${person.id}` }}</h3>
      
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, toRefs } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import moment from 'moment'

export default {
  setup(){
    const route = useRoute()
    const store = useStore()
    const person = computed(() => store.state.person.person ? store.state.person.person : {})
    const isLoading = computed(() => store.state.person.isLoading)
    const fetchSinglePerson = async () => await store.dispatch('person/fetchPersonByID', route.params.id)
    const currentTime = moment(Date.now()).format('yyyyMMDD')
    onMounted(async () => {
      store.commit('person/INIT_LOADER')
      await fetchSinglePerson()
    })
    return {
      isLoading, person,currentTime
    }

  }
}
</script>

<style>

</style>