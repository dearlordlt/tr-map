<template>
  <div>
    <div class="map-input" id="mapInput">
      <form class="pure-form">
        <fieldset>
          <legend>Map code parser:</legend>
          <input
            type="text"
            placeholder="Enter Map Code"
            v-model="mapCode"
            @input="mapCodeChange"
          />
        </fieldset>
      </form>
    </div>
    <div>{{ mapObject }}</div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import { planetType, planetPop } from "@/planet-types/planetTypes";

export default {
  setup() {
    const mapCode = ref("22x");
    const mapObject = reactive({
      planets: [
        {
          type: planetType(0),
          pop: planetPop(1),
          port: `A`,
        },
      ],
      bases: [],
    });
    const mapCodeChange = () => {
      console.log(mapCode.value);
    };
    return {
      mapCode,
      mapCodeChange,
      mapObject,
    };
  },
};
</script>
