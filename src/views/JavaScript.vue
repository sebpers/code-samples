<template>
  <div class="javascript">
    <h1>This is an JavaScript page</h1>

				<dammy-java-script></dammy-java-script>
				<dammy-java-script></dammy-java-script>
  </div>
</template>

<script>
import DammyJavaScript from "../components/DammyJavaScript.vue"

export default {
  components: {
	DammyJavaScript
  },
  data() {
    return {
			cardObject: {
     content: `.card {
	border: none !important
};`,
			codeType: "css",
			className: 'css_header',
			title: 'None Border'
			},

    };
  }
};
</script>
