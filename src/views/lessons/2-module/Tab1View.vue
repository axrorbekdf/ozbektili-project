<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-6">
                <h3 class="fw-bold text-primary">Men va oilam. </h3>
                <p class="text">Lug'at</p>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center ">
                <button @click="chengeTabView('Tab2View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="tree">
                <ul>
                    <li>
                        <a href="#">Oila a'zolari</a>
                        <ul>
                            <li>
                                <a href="#">Bobom</a>
                                <ul>
                                    <li>
                                    <a href="#">Grand Child</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Buvim</a>
                                <ul>
                                    <li>
                                    <a href="#">Grand Child</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Bobom</a>
                                <ul>
                                    <li>
                                    <a href="#">Grand Child</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Buvim</a>
                                <ul>
                                    <li>
                                        <a href="#">Grand Child</a>
                                    </li>
                                </ul>
                                <!-- <ul>
                                    <li>
                                        <a href="#">Grand Child</a>
                                    </li>
                                    <li>
                                        <a href="#">Grand Child</a>
                                        <ul>
                                            <li>
                                                <a href="#">Great Grand Child</a>
                                            </li>
                                            <li>
                                                <a href="#">Great Grand Child</a>
                                            </li>
                                            <li>
                                                <a href="#">Great Grand Child</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Grand Child</a>
                                    </li>
                                </ul> -->
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            
            <!-- <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('a')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: blueviolet;"></i> 
                        </button>
                        <audio id="a">
                            <source src="@/assets/ovoz/ovoz_qiz/a.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ayiq.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: blueviolet;">Aa</p>
                    </div>
                    <p class="card-text fw-bold m-0" style="font-size: 30pt; color: blueviolet;"><span style="color: red;">A</span>yiq</p>
                </div>
            </div>
            </div> -->
            
            <div class="col-12 d-flex justify-content-end align-items-center my-2">
                <button @click="chengeTabView('Tab2View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div class="col-12 my-3"></div>
            
        </div>
    </div>
</template>
<script>

export default {
    
    methods:{
        toggleAudio(item) {
            var audio = document.getElementById(`${item}`);
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        },

        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        }
    }
}
</script>
<style scoped>

    .tree {
        width: 900px;
        margin: 50px auto;
    }
    .tree ul {
        padding-top: 20px;
        position: relative;
        transition: all 0.5s;
    }
    .tree li {
        float: left;
        text-align: center;
        list-style-type: none;
        position: relative;
        padding: 20px 5px 0 5px;
        transition: all 0.5s;
    }
    .tree li::before, .tree li::after {
        content: "";
        position: absolute;
        top: 0;
        right: 50%;
        border-top: 1px solid #ccc;
        width: 50%;
        height: 20px;
    }
    .tree li::after {
        right: auto;
        left: 50%;
        border-left: 1px solid #ccc;
    }
    .tree li:only-child::after, .tree li:only-child::before {
        display: none;
    }
    .tree li:only-child {
        padding-top: 0;
    }
    .tree li:first-child::before, .tree li:last-child::after {
        border: 0 none;
    }
    .tree li:last-child::before {
        border-right: 1px solid #ccc;
        border-radius: 0 5px 0 0;
    }
    .tree li:first-child::after {
        border-radius: 5px 0 0 0;
    }
    .tree ul ul::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        border-left: 1px solid #ccc;
        width: 0;
        height: 20px;
    }
    .tree li a {
        border: 1px solid #ccc;
        padding: 5px 10px;
        text-decoration: none;
        color: #666;
        font-family: arial, verdana, tahoma;
        font-size: 11px;
        display: inline-block;
        border-radius: 5px;
        transition: all 0.5s;
    }
    .tree li a:hover, .tree li a:hover + ul li a {
        background: #c8e4f8;
        color: #000;
        border: 1px solid #94a0b4;
    }
    .tree li a:hover + ul li::after,
    .tree li a:hover + ul li::before,
    .tree li a:hover + ul::before,
    .tree li a:hover + ul ul::before {
        border-color: #94a0b4;
    }

</style>