<template>
  <div class="css">
    <h1>Vue Exampels</h1>
    <Card :codeSnippet="codeSnippet"> </Card>
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
      codeSnippet: {
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
