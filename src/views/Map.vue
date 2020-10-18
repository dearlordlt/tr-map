<template>
  <div class="map">
    <h1>MAP</h1>
    <div class="map-code"><MapCode /></div>
  </div>
</template>

<script lang="ts">
import MapCode from "@/components/MapCode.vue";

export default {
  components: {
    MapCode,
  },
  setup() {
    return {};
  },
};
</script>
