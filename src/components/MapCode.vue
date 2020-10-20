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
    <div class="pure-g">
      <div class="pure-u-1-2">
        <form class="pure-form pure-form-aligned">
          <fieldset>
            <legend>Create System {{ numOfPlanets }}</legend>
            <div class="pure-control-group">
              <label for="PLANET_NUM">Number of planets:</label>
              <select id="PLANET_NUM" v-model="numOfPlanets">
                <option
                  v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
                  v-bind:key="item"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
              <hr />
            </div>
            <div v-for="nPlanets in numOfPlanets" v-bind:key="nPlanets">
              <div class="pure-control-group">
                <label for="PLANET_TYPE">Planet type:</label>
                <select id="PLANET_TYPE">
                  <option v-for="item in PLANET_TYPE" v-bind:key="item">
                    {{ item }}
                  </option>
                </select>
              </div>
              <hr />
            </div>
          </fieldset>
        </form>
      </div>
      <div class="pure-u-1-2">{{ PLANET_TYPE }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import {
  planetType,
  planetPop,
  planetOwner,
  planetSize,
  planetAtmosphere,
  planetHydro,
  planetSpaceport,
  planetTemperature,
  planetGovernment,
  PLANET_TYPE,
  PLANET_POP,
  PLANET_OWNER,
  PLANET_SIZE,
  PLANET_ATMOSPHERE,
  PLANET_HYDRO,
  PLANET_SPACEPORT,
  PLANET_TEMPERATURE,
  PLANET_GOVERNMENT,
} from "@/planet-types/planetTypes";

export default {
  setup() {
    const mapCode = ref("");
    const mapObject = reactive({});
    const numOfPlanets = ref(0);

    const mapCodeChange = () => {
      console.log(mapCode.value);
    };
    return {
      mapCode,
      mapObject,
      numOfPlanets,
      mapCodeChange,
      // Planet types
      planetType,
      planetPop,
      planetOwner,
      planetSize,
      planetAtmosphere,
      planetHydro,
      planetSpaceport,
      planetTemperature,
      planetGovernment,
      PLANET_TYPE,
      PLANET_POP,
      PLANET_OWNER,
      PLANET_SIZE,
      PLANET_ATMOSPHERE,
      PLANET_HYDRO,
      PLANET_SPACEPORT,
      PLANET_TEMPERATURE,
      PLANET_GOVERNMENT,
    };
  },
};
</script>
