<template>
  <div class="css">
			<Card
			:cardObject="cardObject"
			>
			</Card>

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
			cardObject: {
     content: `const Name = kuk`,
			codeType: "javascript",
			className: 'css_header',
			title: 'Border',
			id: this._uid
			},

    };
  }
};
</script>
