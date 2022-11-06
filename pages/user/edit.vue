<template>
  <div>
    <img class="header-img" src="https://picsum.photos/seed/picsum/200/300" />
    <div class="user-profile">
      <img class="user-icon" src="https://picsum.photos/id/237/200/300" />
      <input-short-text
        v-model:shortText="username"
        class="short-text"
      ></input-short-text>
      <input-short-text
        v-model:shortText="address"
        class="short-text"
      ></input-short-text>
      <input-long-text
        v-model:longText="profileText"
        class="long-text"
      ></input-long-text>
    </div>
    <BarChart></BarChart>
  </div>
</template>
<script>
export default {
  data: () => ({
    address: '',
    name: '',
    profileText: '',
    occupation: ''
  })
};
</script>
<style scoped>
.header-img {
  width: 100vw;
  height: 10em;
  object-fit: cover;
  border-radius: 4em 4em 0em 0em;
}
.user-profile {
  position: relative;
  top: -3em;
  left: 5em;
  width: 70vw;
}
.user-icon {
  height: 8em;
  width: 8em;
  object-fit: cover;
  border-radius: 20em;
  border: 0.2em solid var(--color-background);
}
.user-name {
  font-size: 2em;
}
.profile-text {
  padding-top: 2em;
}
.short-text {
  margin: 1em;
  background-color: var(--color-background);
}
.long-text {
  background-color: var(--color-background);
  margin: 1em;
  height: 5em;
}
</style>
