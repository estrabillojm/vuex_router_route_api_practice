const mutationPerson = {
    mutations: {
        INIT_LOADER: (state, payload) => state.isLoading = true,
        FETCH_PERSON: (state, payload) => state.persons = payload ,
        REMOVE_PERSON: (state, payload) => {
            state.persons = state.persons.filter(p => p.id != payload.id)
            state.isLoading = false
        },
        FETCH_PERSON_BY_ID: (state, payload) => {
            state.person = payload
            state.isLoading = false
        }
   }
}
export default mutationPerson