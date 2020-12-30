<template>
  <div>
    <h1>Cats for adoption</h1>
    <b-table striped hover :items="cats">
      <template #cell(firstName)="data">
        <router-link :to="`pets/cats/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>

// import cats from '@/data/catsData.vue'
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
