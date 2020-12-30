<template>
  <div>
    This is a {{$route.params.species}}
    <br />
    Name : {{animal.firstName}}
    Age  : {{animal.age}}
    Type : {{animal.type}}
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  data () {
    return {
      animal: {}
    }
  },
  mounted () {
    this.animal = this[this.$route.params.species][this.$route.params.id]
    // this.animal = this.animal[this.$route.params.id]
    return this.animal
  }

}

</script>
