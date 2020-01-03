<template>
  <div class="card card_hover mt-5 p-3 m-md-5 p-md-5">
    <div>
      <div class="card_header" align="left">
        {{ cardObject.title }}
      </div>
      <div class="card_body" align="left">
        <Prism :id="cardObject.id" :language="cardObject.codeType">{{ cardObject.content }} </Prism>

        <button @click="copyTestingCode(cardObject.id)" class="btn btn-block mt-2"  :class="[btnText ? ' btn-primary' : 'btn-success ', ]">
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
    copyTestingCode(id) {



			let idOne = `${id}`;

			const pres = document.getElementById(idOne);


			// console.log(pres);
      const copyTextOne = pres.innerText;

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
