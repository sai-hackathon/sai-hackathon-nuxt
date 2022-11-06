<template>
  <div class="the-header">
    <NuxtLink to="/" class="header-sai"> Sai </NuxtLink>
    <div class="header-icons">
      <button class="button-sign" @click="sign">Sign in</button>
      <button class="button-sign" @click="sign">Sign in</button>
    </div>
  </div>
</template>
<script>
export default {
  auth: false
};
</script>
<style>
.the-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: 300;
  height: 4em;
}

.the-header .header-sai {
  white-space: nowrap;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  border: 0.4em var(--color-background) solid;
  padding: 0 0.2em;
  margin: 0 0.5em;
  font-size: 1.3em;
  color: white;
  text-decoration: none;
  border-radius: 0.5em;
}
.header-sai:hover {
  background: var(--color-darknight);
  border: 0.4em var(--color-darknight) solid;
}
.header-icons {
  margin: 0 0.4em 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.current-page-link {
  background: white;
  border: 0.4em white solid;
}
.button-sign-in {
  border-radius: 0.2em;
  padding: 0 0.6em;
  margin: 0 0.2em;
  color: white;
  text-decoration: none;
}
.no-border {
  border: transparent solid 0.1em;
}
</style>
