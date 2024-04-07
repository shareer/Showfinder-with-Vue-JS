<template>
    <div class="container p-5 mt-5">
        <div class="back-btn mb-5" @click="navigateHome"><img src="../assets/left-arrow.png" alt="back-arrow" class="left-arrow"/><span>Back</span></div>
        <div class="row">
            <div class="col-md-2">
                <div class="genre">
                    <h4>GENRE</h4>
                    <ul>
                        <li v-for="genre in showDetails?.genres" :key="genre">{{ genre }}</li>
                    </ul>
                </div>
                <div class="director">
                    <h4>LANGUAGE</h4>
                    <ul>
                        <li>{{ showDetails?.language }}</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 description">
                <h1 class="title">{{ showDetails?.name }}</h1>
                <div v-if="showDetails?.runtime" class="showTime mb-3">Duration : {{ showDetails.runtime }} minutes</div>
                <div v-if="showDetails?.rating.average" class="show-rating">
                    <img src="../assets/rating.png" alt="rating-icon" class="rating-icon"/>
                    <span class="rating-number">{{ showDetails.rating.average }}</span>
                </div>
                <p v-html="showDetails?.summary"></p>
                <p v-if="showDetails?.url"><a :href="showDetails?.url" target="_blank" class="read-more">Read More</a></p>
            </div>
            <div v-if="showDetails?.image" class="col-md-3 show-image">
                <img :src="showDetails?.image?.original" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useShowStore } from '@/stores/ShowStore';

// Get the route and router instances
const route = useRoute();
const router = useRouter();

// Get the ID parameter from the route
const id = Number(route?.query?.id);

const showStore = useShowStore();

// Fetch the details of the clicked show based on its ID
const showDetails = showStore.getShowsData.find(show => show.id === id);

const navigateHome = () => {
    router.push({ name: 'Home' });
};
</script>

<style scoped>
.container {
    color: #fff;
}
h4,
h1 {
    font-weight: bold;
    padding-bottom: 10px;
}
ul {
    padding-left: 10px;
}
li {
    list-style-type: none;
}
p {
    color: #fff;
}
.show-image {
    display: flex;
    justify-content: center;
    align-items: center;
}
.show-image img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px
}
.show-rating {
    color: #FAB006;
    margin-bottom: 10px;
}
.rating-number {
    margin-right: 10px;
    font-weight: bold;
    margin-left: 5px;
}
.showTime {
    color: #fff;
}
.read-more {
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    background: none;
    color: #FAB006;
}
.rating-icon{
    width:15px;
    height: 15px;
    cursor: pointer;
    margin-top: -5px;
    margin-right: 5px;
}
.read-more:hover {
    color: rgba(255, 77, 77, 0.72);
}
.back-btn {
    color: #FAB006;
}
.back-btn span {
    color: #FAB006;
    margin-left: 10px;
    cursor: pointer;
}
.left-arrow{
    width:20px;
    height: 20px;
    cursor: pointer;
}
</style>
