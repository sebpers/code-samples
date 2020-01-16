<template>
  <div class="relative">
    <div @click="showModal = !showModal" class="positionFixed">
      Add code snippet
      {{ showModal }}
    </div>
    <CreateSnippetModal :showModal="showModal" v-show="showModal" />
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
  }
};
</script>
