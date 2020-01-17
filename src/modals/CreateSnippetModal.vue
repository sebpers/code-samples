<template>
  <div>
    <div class="custom_modal" v-if="show">
      <form class="custom_modal-content p-5" @submit.prevent="saveCode">
        <div>
          <b-form-select
            class="mb-4 mt-4"
            v-model="selected"
            :options="codeType"
          ></b-form-select>
          <b-form-input
            class="mb-4"
            v-model="snippet.title"
            placeholder="Title of your codeSnippet"
          ></b-form-input>
          <b-form-textarea
            id="textarea"
            v-model="snippet.content"
            placeholder="Enter your code...."
            rows="3"
            max-rows="6"
            class="mb-4"
          ></b-form-textarea>
           <b-form-input
            class="mb-5"
            v-model="snippet.linkToCode"
            placeholder="Url to code on codepen/jsfiddle etc.."
          ></b-form-input>
          <button class="btn btn-success mr-2">Save</button>
          <button class="btn btn-danger ml-2" @click.prevent="closeModal(false)">Cancel</button>
        </div>
      </form>
    </div>
    <div class="overlay" @click="closeModal(false)"></div>
  </div>
</template>

<script>
export default {
  props: ["showModal"],

  data() {
    return {
      show: this.showModal,
      selected: null,
      
      snippet: {
        title: null,
        content: null,
        linkToCode: null,
      },
      codeType: [
        { value: null, text: "Please select an option" },
        { value: "html", text: "HTML" },
        { value: "css", text: "CSS" },
        { value: "javascript", text: "JavaScript" },
        { value: "javascript", text: "Vue" }
      ]
    };
  },

  mounted() {
    console.log("showModal: ", this.showModal);
  },

  methods: {
    closeModal(value) {
      console.log("value: ", value);
      this.$emit("closeModal", value);
    },

    saveCode() {
      console.log("saved");
    }
  }
};
</script>

<style>
  .custom_modal {
    /* position: relative; */
  }
  
  .custom_modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 3;
    background-color: white;
    border-radius: 5px;
  }

  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: grey;
    z-index: 2;
  }

</style>
