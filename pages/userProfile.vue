<template>
  <div>
    <img class="header-img" src="https://picsum.photos/seed/picsum/1000/1000" />
    <div class="user-profile">
      <img class="user-icon" src="https://picsum.photos/id/1/5616/3744" />
      <div class="user-name">sanami</div>
      <div class="user-id">sanamiev</div>
      <div class="profile-text">よろしくお願いします💻</div>
    </div>
  </div>
</template>
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
</style>
