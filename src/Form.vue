<template>

  <form id="main">

    <h1>Services</h1>

    <ul>
      <li v-for="(service, index) in services"
          v-bind:key="service"
          v-on:click="toggleActive(service)"
          v-on:remove="services.splice(index, 1)"
          v-bind:class="{ 'active': service.active}">
          {{ service.name }} <span>{{ service.price | currency }}</span>
      </li>
    </ul>
    <div class="total">
      Total: <span>{{ total() | currency }}</span>
    </div>

  </form>
</template>

<script>
export default {
  name: 'form',
    data () {
      return{
      showForm: false,
      newListItem:'',
      services: [
        {
          name: 'Web Development',
          price: 300,
          active: true
        }, {
          name: 'Design',
          price: 400,
          active: false
        }, {
          name: 'Integration',
          price: 250,
          active: false
        }, {
          name: 'Training',
          price: 220,
          active: false
        }
      ]
    }
  },
  methods: {
    toggleActive: function(s) {
      s.active = !s.active;
    },
    total: function() {
      var total = 0;

      this.services.forEach(function(s){
        if (s.active){
          total+=s.price;
        }
      });
      return total;
    }
  }
}
</script>
