<template>
    <div class="container p-5 mt-5">
        <div class="row">
            <div class="col-md-2">
                <div class="genre">
                    <h4>GENRE</h4>
                    <ul>
                        <li>Comedy</li>
                        <li>Crime</li>
                        <li>Drama</li>
                    </ul>
                </div>
                <div class="director">
                    <h4>DIRECTOR</h4>
                    <ul>
                        <li>Lorene Scaferia</li>
                    </ul>
                </div>
                <div class="producer">
                    <h4>PRODUCER</h4>
                    <ul>
                        <li>Lorene Scaferia</li>
                        <li>Mat Thomas</li>
                        <li>Jennifer Lopez</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 description">
                <h1>True Destrcuctive</h1>
                <!-- Duration is runtime -->
                <div class="showTime mb-3">Duration : 60 minutes</div>
                <div class="show-rating">
                    <i class="fa fa-star rating"></i>
                    <span class="rating-number">7.6</span>
                </div>
                <p>Under the Dome is the story of a small town that is suddenly and inexplicably sealed off from the rest of
                    the
                    world by an enormous transparent dome. The town's inhabitants must deal with surviving the
                    post-apocalyptic
                    conditions while searching for answers about the dome, where it came from and if and when it will go
                    away.
                </p>
                <!-- url is link to read more -->
                <p><a href="#" class="read-more">Read More</a></p>
            </div>
            <div class="col-md-3 show-image">
                <img src="https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg" alt="" />
            </div>
        </div>
    </div>
</template>
<script>

export default {

    setup() {

    },
}
</script>

<style scoped>
    .container {
        color: #fff;
    }

    h4, h1 {
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

    .read-more{
        text-decoration: none;
        font-size: 12px;
        font-weight: bold;
        background: none;
        color: #FAB006;
    }
    .read-more:hover{
        color: rgba(255, 77, 77, 0.72);
    }
</style>
