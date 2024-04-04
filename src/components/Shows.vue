<template>
    <div class="genere-name">
        <h1>{{ genereName }}</h1>
    </div>
    <div class="card-container mb-5">
        <div class="card mb-4 text-white bg-dark show-item-card" v-for="show in tvShowsList" :key="show.id"
            @click="showDetailsPage(show.id)">
            <img class="card-img-top show-image" :src="show?.image?.medium" :alt="show.name" />
            <div class="card-body card-content px-5 py-4">
                <h5 class="card-title">{{ show.name }}</h5>
                <p class="summary" v-html="show.summary"></p>
                <div class="show-details">
                    <section class="show-details-values">
                        <div v-if="show.rating.average" class="favourite-section">
                            <i class="fa fa-star rating"></i>
                            <span class="rating-number">{{ show.rating.average }}</span>
                            <span class="genere-list">{{ show?.genereList?.join(" | ") }}</span>
                            <span class="genere-list">Action | Drama | Sports | Sci-fi</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ['genereName', 'tvShowsList'], // Props declaration
    computed: {
        filteredShows() {
            return this.tvShowsList.filter(show =>
                show?.genereList?.includes(this.genereName)
            );
        }
    },
    methods: {
        showDetailsPage(id) {
            console.log('show details');
            this.$router.push({ name: 'ShowDetails', query: { id } });
        }
    }
};
</script>
  
<style scoped>
.card-container {
    display: flex;
    align-items: center;
    text-align: center;
    /* max-width: 1600px; */
    widows: 100%;
    overflow: hidden;
    overflow-x: scroll;
}

.show-item-card {
    margin-right: 20px;
    flex: 0 0 auto;
    height: auto;
    width: 13rem;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease-in-out
}

.show-image {
    max-width: 205px;
    max-height: 300px;
    width: auto;
    height: auto;
    transition: transform 0.3s ease-in-out;
    border-radius: 5px;
}

.show-item-card:hover {
    transform: scale(1.1);
    border-radius: 5px;
}

.card-content {
    position: absolute;
    bottom: 0;
    background: rgba(255, 77, 77, 0.72);
    color: #fff;
    width: 100%;
    transition: height 0.3s ease-in-out;
    height: 0;
    overflow: hidden;
    padding: 20px !important;
    border-radius: 5px;
}

.show-item-card:hover .card-content {
    height: 96%;
    background: linear-gradient(rgba(255, 77, 77, 0.72), #111);
    width: 100%;
}

.genere-name h1 {
    color: aliceblue;
}

.card-title {
    margin-top: 20px;
}

.show-details-values {
    display: flex;
    flex-direction: row;
}

.favourite-section {
    display: flex;
    align-items: center;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 10px;
}

.rating {
    color: #FAB006;
    margin-right: 5px;
    margin-left: 5px;
}

.rating-number {
    margin-right: 10px;
    font-weight: bold;
}

.genere-list {
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 40px;
    text-wrap: nowrap;
    display: inline-block;
    max-width: 120px;
    font-weight: bold;
}

.summary {
    font-weight: normal;
    font-size: 12px;
    max-height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
}</style>
  