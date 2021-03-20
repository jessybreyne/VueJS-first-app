<template>
    <div class="user-details">
        id: {{usr.id}}, ville: {{usr.address.city}}, email: {{usr.email}} <br>
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
    },
    data: function() {
        return {
            usersWhoWillCome: []
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