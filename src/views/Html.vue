<template>
  <div class="css">
    <h1>Html Exampels</h1>
    <Card :cardObject="cardObject">

    </Card>
    <Card :cardObject="cardObjectOne">

    </Card>
  </div>
</template>
<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      cardObject: {
        content: `.card {
	border: none
};`,
        codeType: "html",
        className: "html_header",
        title: "Html Border",
        id: this._uid
      },
      cardObjectOne: {
        content: `.card html {
	border: 2px solid black
};`,
        codeType: "html",
        className: "html_header",
        title: "Html Solid border",
        id: this._uid + 1
      }
    };
  }
};
</script>
