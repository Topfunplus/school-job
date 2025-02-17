<script setup lang="ts">

defineProps(['title'])
console.log()
</script>

<template>
  <div class="item">
    {{ title }}
  </div>
</template>

<style scoped lang="scss">


.item {
  display: inline-block;
  margin: 5px;
  padding-left: 4px;
  padding-right: 4px;
  background-color: $primary-300;
  border-radius: 10px;
  color: $primary-100;
  height: 25px;
  font-size: 14px;
  line-height: 25px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: $accent-100;
  }
}
</style>
