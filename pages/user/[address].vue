<template>
  <div>
    <img class="header-img" src="https://picsum.photos/seed/picsum/1000/1000" />
    <div class="user-profile">
      <img class="user-icon" src="https://picsum.photos/id/237/200/300" />
      <NuxtLink class="button-edit" to="/user/edit"> 🖋 </NuxtLink>
      <div class="user-name">sanami</div>
      <div class="user-address">{{ $route.params.address }}</div>
      <div class="profile-text">よろしくお願いします💻</div>
    </div>
    <BarChart></BarChart>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data: () => ({
    address: '',
    username: '',
    profileText: '',
    occupation: '',
    score: {
      abilities: 2,
      skills: 4,
      interests: 9,
      knowledge: 8
    }
  }),
  async mounted() {
    this.address = this.$route.params.address;
    const sbtInfo = await this.getSbtInfo();
    this.score.abilities = sbtInfo.scores[0];
    this.score.skills = sbtInfo.scores[1];
    this.score.knowledge = sbtInfo.scores[2];
    this.score.interests = sbtInfo.scores[3];
    const userInfo = await this.getUserInfo();
    this.username = userInfo.user.user_name;
    const occupation_code = userInfo.user.occupation_code;
  },
  methods: {
    getUserInfo: async function () {
      var options = {
        method: 'GET',
        url: 'http://18.183.118.0:3000/user/info/' + this.address,
        params: {
          token: this.$store.state.token //jwtToken
        },
        headers: { Authorization: 'Bearer ' }
      };
      try {
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        console.error(error);
        return;
      }
    },
    getSbtInfo: async function () {
      var options = {
        method: 'GET',
        url: 'http://18.183.118.0:3000/sbt/score/' + this.address,
        params: {
          token: this.$store.state.token //jwtToken
        },
        headers: { Authorization: 'Bearer ' }
      };
      try {
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        console.error(error);
        return;
      }
    },
    getOccupation: async function () {
      var options = {
        method: 'GET',
        url: 'http://18.183.118.0:3000/occupation',
        params: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3LCJpYXQiOjE2Njc1ODYzNTMsImV4cCI6MTY2NzY3Mjc1M30.oWHgE01bKuvZLqrq496DceExGogLKkDfwo3dZLxWfMo'
        }
      };
      try {
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        console.error(error);
        return;
      }
    }
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
  border: 0.1em solid var(--color-background);
  text-decoration: none;
  padding: 0.3em;
  border-radius: 0.2em;
}
</style>
