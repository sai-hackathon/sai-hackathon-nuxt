<template>
  <div>
    <img class="header-img" src="https://picsum.photos/seed/picsum/1000/1000" />
    <div class="user-profile">
      <img class="user-icon" src="https://picsum.photos/id/1/5616/3744" />

      <input-short-text
        v-model:shortText="user.name"
        class="short-text"
      ></input-short-text>
      <!-- <input-short-text
        v-model:shortText="user.id"
        class="short-text"
      ></input-short-text> -->
      <input-long-text
        v-model:longText="user.intro"
        class="long-text"
      ></input-long-text>
    </div>
  </div>
</template>
<script setup lang="ts">
import { idText } from 'typescript';
import { ref, reactive } from 'vue';
class User {
  name: string;
  // id: string;
  intro: string;
}
const user = reactive<User>({
  name: 'sanami',
  // id: '89dabiup87',
  intro: 'よろしくお願いします😊'
});
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
  color: white;
}
.long-text {
  background-color: var(--color-background);
  color: white;
  margin: 1em;
  height: 5em;
}
</style>
