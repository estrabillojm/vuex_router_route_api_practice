<template>
  <div>
    <TableVue
      :headers="headers"
      :dataHeader="dataHeader"
      :dataTable="dataTable"
      btnOne="View Details"
      @btnOneFunction="handleViewDetails"
    />

    <div class="container-flex">
      <div class="child-div">
        <vSelect :options="dataTable" label="fullName" index="id"/>
      </div>
    </div>
    <button @click="gotoRoute()">Save Button</button>


    <apiFetchVue/>
  </div>
</template>


<script>
import { ref } from '@vue/reactivity'
import TableVue from './shared/Table'
import apiFetchVue from './apiFetch.vue';
import vSelect from "vue-select";
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from '@vue/runtime-core';

export default {
  components: { TableVue , vSelect, apiFetchVue},
  setup(){
    const router = useRouter()
    const route = useRoute()
    const dataTable = ref([
        { id: 1, fullName: 'Person 1', dateOfBirth: '04/06/1994'},
        { id: 2, fullName: 'Person 2', dateOfBirth: '04/06/1995'},
        { id: 3, fullName: 'Person 3', dateOfBirth: '04/06/1996'}
    ])
    const dataHeader = ref(['id', 'fullName', 'dateOfBirth'])
    const headers = ref(['ID','FULL NAME','DATE OF BIRTH', 'ACTION'])

    const handleViewDetails = (payload) => {
      console.log("PARENT", payload)
    }

    const gotoRoute = () => {
      router.push('/about')
    }

    onMounted(() => {
      // alert(route.params.id)
      // alert(route.query.id)

    })
    return {
      headers, dataHeader, dataTable, handleViewDetails,
      gotoRoute
    }
  }
}
</script>

<style scoped>
 @import "vue-select/dist/vue-select.css";

 .container-flex{
  display: flex;
  justify-content: center;
 }

 .container-flex .child-div{
  min-width:200px;
 }
</style>