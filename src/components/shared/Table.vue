<template>
  <div>
    <table border=1 width="100%">
        <thead>
            <tr>
                <th v-for="h in headers" :key="h">{{ h }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="d in dataTable" :key="d">
                <td v-for="(dh,index) in dataHeader" :key="index">
                    {{ d[dh] }}
                </td>
                <td v-if="btnOne || btnTwo || btnThree || btnFour">
                    <button v-if="btnOne" @click="handleEmit(d, 'btnOneFunction')">{{ btnOne }}</button>
                    <button v-if="btnTwo" @click="handleEmit(d, 'btnTwoFunction')">{{ btnTwo }}</button>
                    <button v-if="btnThree" @click="handleEmit(d, '3')">{{ btnThree }}</button>
                    <button v-if="btnFour" @click="handleEmit(d, '4')">{{ btnFour }}</button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
export default {
    props: {
        headers: {
            type: Array,
            required: true
        },
        dataHeader: {
            type: Array, 
            required: true
        },
        dataTable: {
            type: Array,
            required: true
        },
        payload: { type: Object },
        btnOne: { type: String },
        btnTwo: { type: String },
        btnThree: { type: String },
        btnFour: { type: String }
    },
    setup(props, { emit }){
        const handleEmit = (payload, fn) => {
            
            emit(fn , payload)
        }
        return {
            handleEmit
        }
    }
}
</script>

<style scoped>
    table{
        border-collapse: collapse;
    }
</style>