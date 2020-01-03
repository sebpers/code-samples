<template>
  <div class="card card_hover mt-5 p-3 m-md-5 p-md-5">
		<div>
			<div class="card_header " align="left">
				{{cardObject.title}}
			</div>
			<div class="card_body" align="left">
				<Prism :language="cardObject.codeType">{{ cardObject.content }}</Prism>
			</div>
		</div>
  </div>
</template>

<script>
import Prism from "vue-prism-component";
import "../css/card.css";
export default {
  components: {
    Prism
  },
  props: ["cardObject"]
};
</script>
