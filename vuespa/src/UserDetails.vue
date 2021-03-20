<template>
    <div>
        <h1>Détails de l'utilisateur {{this.$route.params.id}}</h1>
        <p><router-link to="/users">retour</router-link></p>
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