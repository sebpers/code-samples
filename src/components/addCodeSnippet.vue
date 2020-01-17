<template>
  <div class="relative">
    <div @click="showModal = true" class="positionFixed show_modal">
      {{ showModal }}
    </div>
    <CreateSnippetModal :showModal="showModal" v-if="showModal" @closeModal="closeModal"/>
  </div>
</template>

<script>
import "../css/addCodeSnippet.css";
import CreateSnippetModal from "../modals/CreateSnippetModal";

export default {
  components: {
    CreateSnippetModal
  },
  data() {
    return {
      showModal: false
    };
  },

  methods: {
    closeModal(value) {
      this.showModal = value;
    }
  }
};
</script>
