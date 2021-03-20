<template>
    <div class="user-details">
        <router-link v-bind:to="`/users/${usr.id}`">id: {{usr.id}}, ville: {{usr.address.city}}, email: {{usr.email}}</router-link><br>
        <button v-on:click="acceptInvitation">Accept invit</button>
    </div>
</template>

<script>
export default {
    name: 'user-details',
    props: ['usr'],
    methods: {
        acceptInvitation: function() {
            this.$emit('accept');
        }
    }
}
</script>

<style scoped>
.user-details {
    border: 2px solid gray;
    margin: 10px;
    padding: 15px;
    width: 250px;
    float: left;
}
</style>