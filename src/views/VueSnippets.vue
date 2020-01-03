<template>
  <div class="css">
    <h1>Vue Exampels</h1>
    <Card :cardObject="cardObject">

    </Card>
  </div>
</template>
<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      cardObject: {
        content: `.card {
	border: none !important
};`,
        codeType: "javascript",
        className: "vue_header",
        title: "None Border",
        id: this._uid
      }
    };
  }
};
</script>
