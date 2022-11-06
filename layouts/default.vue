<template>
  <div class="default-layout">
    <AppHeader></AppHeader>
    <slot />
  </div>
</template>
<script>
export default {
  auth: false
};
</script>
