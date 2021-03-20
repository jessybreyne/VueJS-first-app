<template>
    <div>
        id: {{usr.id}}, ville: {{usr.address.city}}, email: {{usr.email}}
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

</style>