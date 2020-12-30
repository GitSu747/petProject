<template>
  <div>
    <h1>{{species}} for adoption</h1>
    <b-table striped hover :items="pet">
      <template #cell(firstName)="data">
        <router-link :to="`pets/${species}/${data.index}`">{{ data.value }}</router-link>
      </template>

    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pet: {}
  }
}

</script>
