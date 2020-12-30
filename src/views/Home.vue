<template>
  <div class="home-view-container">
    <h1>Home Page</h1>
      <br />
  Total count of pets : {{getterPetCount}}
  <br />
  <button @click="toggleFormVisibility" class="btn btn-primary">ADD PET</button>

  <div id="formDiv" v-if="showForm">
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="input-group-1"
                    label="First Name"
                    label-for="firstName"
                    description="Please enter your first name">
        <b-form-input id="input-1"
                      v-model="form.firstName"
                      type="text"
                      placeholder="Enter Name"
                      required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Type:" label-for="input-2">
        <b-form-input id="input-2"
                      v-model="form.type"
                      placeholder="Enter Breed"
                      required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Age:" label-for="input-3">
        <b-form-input id="input-3"
                      v-model="form.age"
                      type="number"
                      placeholder="Enter age"
                      required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select id="input-3"
                       v-model="form.species"
                       :options="speciesData"
                       placeholder="Choose a Species"
                       required></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <!--<b-button type="reset" variant="danger">Reset</b-button>-->
    </b-form>
    <!--<b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
  </div>

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      showForm: false,
      form: {
        firstName: '',
        age: 0,
        type: '',
        species: null
      },
      speciesData: ['cats', 'dogs']
    }
  },
  methods: {
    ...mapActions(
      ['addPet']),
    toggleFormVisibility () {
      this.showForm = !this.showForm
    },
    handleSubmit () {
      const { species, firstName, age, type } = this.form
      var payload = {
        species,
        pet: {
          firstName,
          age,
          type
        }
      }
      this.addPet(payload)
      this.form = {
        firstName: '',
        age: 0,
        type: '',
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'getterPetCount'
    ])
  }
}
</script>
