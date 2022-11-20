<template>
  <div>
    <TableVue
      :headers="headers"
      :dataHeader="dataHeader"
      :dataTable="dataTable"
      btnOne="Edit"
      @btnOneFunction="handleEditDetails"
      btnTwo="Delete"
      @btnTwoFunction="handleDeleteDetails"
    />
    <button @click="loadData()">Load Data From API</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import TableVue from './shared/Table.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'


export default {
    components: {
        TableVue
    },
    setup(){
        const router = useRouter()
        const store = useStore()
        const dataHeader = ref(['id', 'name', 'email', 'address'])
        const headers = ref(['ID', 'FULL NAME', 'EMAIL', 'ADDRESS', 'ACTION'])    
        const dataTable = computed(() => store.state.person.persons ? store.state.person.persons : [] )
        const handleDeleteDetails = (payload) => store.commit('person/REMOVE_PERSON', payload)
        const fetchPersons = async () => await store.dispatch('person/fetchPerson')
        const handleEditDetails = (payload) => router.push(`/about/${payload.id}`)
        const loadData = async () => await fetchPersons()   
        onMounted(async () => {     
            await fetchPersons()   
        })
        
        return {
            dataHeader, headers, handleDeleteDetails,
            dataTable, handleEditDetails, loadData
        }
    }
}
</script>

<style>

</style>