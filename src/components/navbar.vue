<template>
    <nav class="navbar fixed-top navbar-expand navbar-light bg-light">
        <div class="container-fluid">
            <img class="navbar-brand" :src="require('./../assets/background.jpg')" @click="gotoFamilies()">
            <ul class="navbar-nav">
            </ul>
        </div>
    </nav>
</template>
<script>


export default {
    name: 'NavBar',
    computed: {
    },
    methods: {
        gotoFamiles() {
            this.$router.push({
                name: 'Families'
            });
        }
    }
}
</script>

<style scoped>
.navbar-brand {
    height: 72px;
    margin-left: 6px;
    margin-right: 0.2rem;
}

.navbar {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    box-shadow: 0px 1px 5px 2px rgba(56, 118, 138, 0.2);
}

.navbar-light .navbar-nav .nav-link {
    padding-right: 0.1rem;
    padding-left: 0.1rem;
}

.active-lang {
    font-weight: bold;
    cursor: default;
}

.nav-item:hover,
.dropdown:hover,
.navbar-brand:hover {
    cursor: pointer;
}

.contact-link {
    width: auto;
    height: 37px;
    float: right;
    padding: 8px 0;
    margin-left: 4px;
    margin-right: 6px;
}
</style>
