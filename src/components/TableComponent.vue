
<template>
  <div class="map_code_table">
    <h3>{{ name }}</h3>
    <pre>{{ picked }}</pre>
    <table class="pure-table pure-table-bordered pure-table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th v-for="key in Object.keys(data['0'])" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tr in data" :key="tr">
          <td>
            <input type="radio" :name="name" @input="checked(tr)" />
          </td>
          <td v-for="td in tr" :key="td">{{ td }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Ref, ref } from "vue";

export default {
  props: {
    data: Object,
    name: String,
  },
  setup() {
    let picked = ref({});
    const checked = (selected: Ref<{}>) => {
      console.log(selected);
      picked = selected;
    };

    return {
      picked,
      checked,
    };
  },
};
</script>

<style scoped lang="scss">
.map_code_table {
  text-align: left;
  padding-left: 5px;
}
</style>
