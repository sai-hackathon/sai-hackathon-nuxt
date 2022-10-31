<template>
  <input
    :value="shortText"
    type="text"
    class="input-text"
    @input="
      $emit('update:shortText', ($event.target as HTMLInputElement).value)
    "
  />
</template>
<script lang="ts" setup>
defineProps<{
  shortText: string;
}>();
defineEmits(['update:shortText']);
</script>
<style scoped>
.input-text {
  width: 10em;
  height: 2em;
  padding: 0.3em 1em;
  border-radius: 1em;
  font-size: 1em;
  display: block;
  border: 0.1em solid white;
}
</style>
