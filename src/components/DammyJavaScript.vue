<template>
  <div class="css">
    <Card :codeSnippet="codeSnippet"> </Card>
  </div>
</template>
<script>
import Card from "./Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      codeSnippet: {
        content: `const Name = Mihcele`,
        codeType: "javascript",
        className: "javascript_header",
        title: "Border Radius",
        id: this._uid
      }
    };
  }
};
</script>
