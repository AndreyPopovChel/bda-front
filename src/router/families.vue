<template>
    <NavBar/>

    <div class="navbar-space"/>

    <div id="float-container" class="g-4 ms-2 me-2 float-container float-container-start">
        <div class="row justify-content-center row-cols-6 w-100">
            <div class="col" v-for="family in additionalDevices">
                <div>{{family.sn}}</div>
            </div>
        </div>
    </div>

    <div id="float-container" class="g-4 ms-2 me-2 float-container float-container-start">
        <div class="row justify-content-center row-cols-6 w-100">
            <div class="col" v-for="family in mainLocations">
                <div>{{family.sn}}</div>
            </div>
        </div>
    </div>

    <div id="float-container" class="g-4 ms-2 me-2 float-container float-container-start">
        <div class="row justify-content-center row-cols-6 w-100">
            <div class="col" v-for="family in otherLocations">
                <div>{{family.sn}}</div>
            </div>
        </div>
    </div>

    <PageFooter/>
</template>

<script>
    import NavBar from "../components/navbar";
    import PageFooter from "../components/pagefooter";

    export default {
    name: "Families",
    components: {PageFooter, NavBar},
    mounted() {
        const floatContainer = document.getElementById('float-container');
        if (!floatContainer) {
            return;
        }

        setTimeout(function () {
            floatContainer.classList.remove('float-container-start')
            floatContainer.classList.add('float-container-end')
        }, 300);
    },
    computed: {
        head() {
            return {
                title: 'Beekeeper soft'
            };
        },
        additionalDevices() {
            return [{sn: "123"}, {sn: "456"}, {sn: "123"}, {sn: "456"}, {sn: "123"}, {sn: "456"}, {sn: "123"}, {sn: "456"}]
        },
        mainLocations() {
            return [{sn: "1234"}, {sn: "4567"}]
        },
        otherLocations() {
            return [{sn: "12345"}, {sn: "45678"}]
        }
    },
    methods: {

    }
}
</script>

<style scoped>

    .dropdown-toggle {
        color: #00b9f4!important;
    }
    .btn-check:focus+.btn, .btn:focus {
        outline: 0;
        box-shadow: 0 0 0 0.25rem #00b9f4;
    }

    .navbar-space {
        height: 94px;
    }

    .card {
        border-radius: 2em;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        transition: all .2s ease-in-out;
    }
    .card img {
        border-radius: 2em;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .card:hover {
        cursor: pointer;
        box-shadow: unset;
        transform: scale(1.03);
    }
    .dropdown-item {
        cursor: pointer;
    }

    .tags {
        display: flex;
        justify-content: space-evenly;
        overflow: hidden;
    }
    .platforms {
        margin-top: 10px;
        margin-bottom: 6px;
        display: flex;
        justify-content: space-evenly;
    }

    .tag {
        display: inline-block;
        font-size: 22px;
        color: #666;
        margin: 0 4px;
        padding: 0 4px;
    }
    .tag:hover {
        cursor: pointer;
        opacity: 1!important;
    }

    .active {
        font-weight: 900;
        opacity: 1!important;
    }

    .platform-tag {
        opacity: 0.5;
    }

    .platform-tag.active {
        transform: scale(1.2);
    }

    .float-container {
        transition: opacity 2s ease, transform 1s ease;
    }

    .float-container-start {
        opacity: 0;
        transform: translateY(20px);
    }

    .float-container-end {
        opacity: 1;
        transform: translateY(0px);
    }

    .row {
        margin-left: 0;
        margin-right: 0;
    }

    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: #10415a;
    }

    .hover-underline-animation:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #10415a;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>
