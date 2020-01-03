<template>
  <div class="card card_hover mt-5 p-3 m-md-5 p-md-5">
    <div>
      <div class="card_header " align="left">
        {{ cardObject.title }}
      </div>
      <div class="card_body" align="left">
        <Prism :language="cardObject.codeType">{{ cardObject.content }} </Prism>
        <button @click="copyTestingCode" class="btn btn-success mt-2">
          {{btnText ? 'Copy' : 'Copied'}}
        </button>
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

  props: ["cardObject"],

  data() {
    return {
			btnText: true
    };
  },
  methods: {
    copyTestingCode() {
      //
      // al pre tags on the page
      const pres = document.getElementsByTagName("pre");

      const copyTextOne = pres[0].innerText;

      // Create new element
      var el = document.createElement("textarea");

      el.setAttribute("id", "codeCopy");
      // Set value (string to be copied)
      el.value = copyTextOne;
      // Set non-editable to avoid focus and move outside of view

      document.body.appendChild(el);
      // Select text inside element
      el.select();
      // Copy text to clipboard
      document.execCommand("copy");


		this.btnText = !this.btnText;
			setTimeout(() => {
				this.btnText = true
			}, 1000);

			let removeEl = document.querySelector("#codeCopy")
			// Remove temporary element
      removeEl.remove()
    }
  }
};
</script>
