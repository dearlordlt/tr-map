<template>
  <div class="npc">
    <h1>NPC</h1>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class HelloWorld extends Vue {
  setup() {
    const test = ref(0);

    return {
      test,
    };
  }
}
</script>
