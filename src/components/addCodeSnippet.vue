<template>
  <div class="relative">
    <div
      v-show="!showModal"
      @click="showModal = true"
      class="positionFixed show_modal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        v-b-tooltip.hover
        title="Add snippet"
      >
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
        />
      </svg>
    </div>

    <div
      v-show="showModal"
      @click="showModal = false"
      class="positionFixed show_modal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        v-b-tooltip.hover
        title="Close modal"
      >
        <path
          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"
        />
      </svg>
    </div>

    <CreateSnippetModal
      :showModal="showModal"
      v-if="showModal"
      @closeModal="closeModal"
    />
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
