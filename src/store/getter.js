export default {
  getterPetCount: (state) => {
    return state.cats.length + state.dogs.length
  }
}
