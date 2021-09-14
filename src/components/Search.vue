<template>
  <div>
    <h3>Input page</h3>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <!-- <div v-for="item in filteredItems" :key="item">
      {{ item.name }}
    </div> -->
  </div>
</template>

<script>
// import { computed, ref } from "@vue/reactivity";
export default {
  name: "Input",
  props: {
    modelValue: String,
  },
  data() {
    return {
      items: [
        { name: "dog" },
        { name: "cat" },
        { name: "bat" },
        { name: "ant" },
        { name: "elephant" },
        { name: "frog" },
      ],
    };
  },
  computed: {
    filteredItems(){
      return this.items.filter((item) => {
        return item.name.toLowerCase().includes(this.modelValue.toLowerCase());
      });
    }
  }
  // setup(){
  //   const items = ref([
  //     {name: "dog"},
  //   {name: "cat"},
  //   {name: "bat"},
  //   {name: "ant"},
  //   {name: "elephant"},
  //   {name: "frog"},
  //   ]);

  //   const filteredItems = computed(() => {
  //     return items.filter((item) => {
  //       return item.name.toLowerCase().includes($event.target.value.toLowerCase());
  //     });
  //   })

  //   return { items, filteredItems }
  // }
};
</script>

<style scoped>
input[type="text"] {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>