<template>
  <div>
   <PetTable species="cats" :pet="cats"/>
  </div>
</template>

<script>

// import cats from '@/data/catsData.vue'
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'
export default {
  components: {
    PetTable
  },
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
