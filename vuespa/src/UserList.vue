<template>
   <ul>
       <li v-for="user in data" :key="user.id">
           <user-summary v-bind:key="user.id" v-bind:usr="user" v-on:accept="registerUser(user)"></user-summary>
        </li>
   </ul>
</template>

<script>
import UserSummary from './UserSummary.vue';

export default {
    name: 'user-list',
    components: {
        'user-summary': UserSummary
    },
    props: ['data', 'usersComing'],
    methods: {
        registerUser: function(user) {
            this.usersComing.push(user);
        }
    }
}
</script>