<template>
  <div class="card card_hover mt-5 p-3 m-md-5 p-md-5">
    <div>
      <div :class="[codeSnippet.className]" align="left">
        {{ codeSnippet.title }}
      </div>
      <div class="card_body" align="left">
        <Prism :id="codeSnippet.id" :language="codeSnippet.codeType"
          >{{ codeSnippet.content }}
        </Prism>

        <button
          @click="copyTestingCode(codeSnippet.id)"
          class="btn btn-block mt-2"
          :class="[btnText ? ' btn-primary' : 'btn-success ']"
        >
          {{ btnText ? "Copy" : "Copied" }}
        </button>

        <a class="linkToCode" :href="codeSnippet.linkToCode" target="_blank"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            v-b-tooltip.hover
            title="Link to code"
            class="mt-3 mr-1"
          >
            <path
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 10.199l-3.64 1.801 3.64 1.796v2.204l-6-2.935v-2.131l6-2.934v2.199zm8 2.866l-6 2.935v-2.204l3.64-1.796-3.64-1.801v-2.199l6 2.935v2.13z"
            /></svg
        ></a>
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

  props: ["codeSnippet"],

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
        this.btnText = true;
      }, 1000);

      let removeEl = document.querySelector("#codeCopy");
      // Remove temporary element
      removeEl.remove();
    }
  }
};
</script>
