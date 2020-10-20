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
          </fieldset>
        </form>
        <div v-for="nPlanets in numOfPlanets" v-bind:key="nPlanets">
          <TableComponent name="PLANET_TYPE" :data="PLANET_TYPE" />
          <TableComponent name="PLANET_POP" :data="PLANET_POP" />
          <TableComponent name="PLANET_OWNER" :data="PLANET_OWNER" />
          <TableComponent name="PLANET_SIZE" :data="PLANET_SIZE" />
          <TableComponent name="PLANET_ATMOSPHERE" :data="PLANET_ATMOSPHERE" />
          <TableComponent name="PLANET_HYDRO" :data="PLANET_HYDRO" />
          <TableComponent name="PLANET_SPACEPORT" :data="PLANET_SPACEPORT" />
          <TableComponent
            name="PLANET_TEMPERATURE"
            :data="PLANET_TEMPERATURE"
          />
          <TableComponent name="PLANET_GOVERNMENT" :data="PLANET_GOVERNMENT" />
        </div>
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
import TableComponent from "@/components/TableComponent.vue";

export default {
  components: {
    TableComponent,
  },
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
