export default {
  // THIS is the actual flow. but we can take the commit object off of CONTEXT and use it directly
  // addPet : (context, pet) => {
  //  context.commit('appendPet', pet)
  // }
  // Using PAYLOAD since this will be an object with name and pet details seperately
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
}
