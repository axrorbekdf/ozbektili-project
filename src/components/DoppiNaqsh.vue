<template>
    <div class="container" 
        v-bind:style="{ 
            'backgroundImage': 'url(' + getImageUrl + ')',
            'top': top,
            'left': left,
            'right': right,
            'bottom': bottom,
            'transform': 'rotate('+rotate+'deg)'
        }">

    </div>
</template>
<script>
export default {
    name: "DoppiNaqsh",
    props:{
        top: {
            type: String,
            default: null,
        },
        left: {
            type: String,
            default: null,
        },
        right: {
            type: String,
            default: null,
        },
        bottom: {
            type: String,
            default: null,
        },
        image: {
            type: String,
            required: true
        },
        rotate: {
            type: Number,
            required: true
        }
    },
    computed:{
        getImageUrl(){
            return new URL(`../assets/naqsh/${this.image}`, import.meta.url)
        }
    }
}
</script>
<style scoped>
.container {
    position: absolute;
    width:150px;
    height:150px;
    float: inline-start;
    margin:auto;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0;
    overflow: hidden;
    transform-origin: bottom left;
}
</style>