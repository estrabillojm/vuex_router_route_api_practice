import statePerson from './statePerson'
import mutationPerson from './mutationPerson'
import actionPerson from './actionPerson'
const person = {
    namespaced: true,
    ...statePerson,
    ...mutationPerson,
    ...actionPerson
}
export default person