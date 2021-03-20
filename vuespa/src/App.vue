<template>
  <div>
    <user-list v-bind:data="users" v-bind:users-coming="usersWhoWillCome"></user-list>
    <div v-for="user in usersWhoWillCome" :key="user.id">
      {{user.id}} - {{user.name}}
    </div>
  </div>
</template>

<script>
import UserList from './UserList.vue'

export default {
  name: 'app',
  components: { 
    'user-list' : UserList 
  },
  data () {
    return {
      usersURL: 'https://jsonplaceholder.typicode.com/users',
      users: [],
      usersWhoWillCome: []
    }
  },
  created: function() {
    fetch(this.usersURL)
      .then(response => response.json())
      .then(json => this.users = json)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
