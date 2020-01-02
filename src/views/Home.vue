<template>
  <div class="home">
    <h1>HOME VIEW</h1>
    <Card></Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  components: {
    Card
  },

  data() {
    return {
      bajs: null
    }
  }

}
</script>
