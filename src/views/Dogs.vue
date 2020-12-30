<template>
  <div>
    <h1>Dogs for adoption</h1>
      <b-table striped hover :items="dogs">
        <template #cell(firstName)="data">
          <router-link :to="`pets/dogs/${data.index}`">{{ data.value }}</router-link>
        </template>

      </b-table>
  </div>
</template>

<script>
/// import dogs from '@/data/dogsData'
// import dogsDataVue from '@/data/dogsData1.js'
import { mapState } from 'vuex'

export default {
  data () {
    return { }
  },
  computed: {
    ...mapState([
      'dogs'])
  }
}
</script>
