<template>
  <div class="css">
    <h1>CSS Exampels</h1>
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
        codeType: "css",
        className: "css_header",
        title: "None Border",
        id: this._uid
      }
    };
  }
};
</script>
