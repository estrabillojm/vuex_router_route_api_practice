import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com'
const actionPerson = {
    actions: {
        fetchPerson: ({commit}) => {
            fetch(`${baseURL.value}/users`)
            .then(response => response.json())
            .then(res => {
                commit('FETCH_PERSON' , res.map(person => {
                    return {
                        ...person,
                        address: `${person.address.street} , ${person.address.city} - ${person.address.zipcode}`
                    }
                }))
            })
        },

        fetchPersonByID: ({commit}, payload) => {
            fetch(`${baseURL.value}/users/${payload}`)
            .then(response => response.json())
            .then(res => {
                commit('FETCH_PERSON_BY_ID' , res)
            })
        }
    }
}
export default actionPerson