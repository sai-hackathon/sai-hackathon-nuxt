<template>
  <div>
    <img class="header-img" src="https://picsum.photos/seed/picsum/1000/1000" />
    <div class="user-profile">
      <img class="user-icon" src="https://picsum.photos/id/1/5616/3744" />
      <NuxtLink class="button-edit" to="/user/edit"> 🖋 </NuxtLink>
      <div class="user-name">sanami</div>
      <div class="user-address">hiohdajkljadiodakljlkj</div>
      <div class="profile-text">よろしくお願いします💻</div>
    </div>
    <BarChart></BarChart>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data: () => ({
    address: ''
  }),
  mounted() {
    this.address = this.$router.currentRoute.params.address;
    var options = {
      method: 'GET',
      url: 'http://18.183.118.0:3000/user/info/' + this.address,
      params: {
        token: store.state.token //jwtTokenをいれたい
      },
      headers: { Authorization: 'Bearer ' }
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
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
.button-edit {
  border: 0.1em solid white;
  padding: 0.3em;
  border-radius: 0.2em;
}
</style>
