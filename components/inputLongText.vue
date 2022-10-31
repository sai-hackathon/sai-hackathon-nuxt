<template>
  <textarea
    :value="longText"
    type="text"
    class="input-text"
    @input="$emit('update:longText', ($event.target as HTMLInputElement).value)"
  />
</template>
<script lang="ts" setup>
defineProps<{
  longText: string;
}>();
defineEmits(['update:longText']);
</script>
<style scoped>
.input-text {
  width: 100%;
  height: 10em;
  border-radius: 1em;
  display: block;
  font-size: 1em;
  padding: 1em;
  border: 0.1em solid white;
}
</style>
