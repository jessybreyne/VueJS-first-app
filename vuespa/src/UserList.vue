<template>
   <ul>
       <li v-for="user in data" :key="user.id">
           <user-details v-bind:key="user.id" v-bind:usr="user" v-on:accept="registerUser(user)"></user-details>
        </li>
   </ul>
</template>

<script>
import UserDetails from './UserDetails.vue';

export default {
    name: 'user-list',
    components: {
        'user-details': UserDetails
    },
    props: ['data', 'usersComing'],
    methods: {
        registerUser: function(user) {
            this.usersComing.push(user);
        }
    },
    data: function() {
        return {
            usersWhoWillCome: []
        }
    }
}
</script>