<template lang="">
    <div>
        <input type="text" name="" id="" @keyup="changeWith($event)" placeholder="___________________________________">
        <Loader style="width:1rem; height:1rem; display: inline-block;" />
    </div>
</template>
<script>
export default {
    name: "InputText",
    methods:{
        changeWith(e){
            e.target.style.width=(e.target.value.length+5)*8+'px'
            console.log((e.target.value.length+5)*8+'px');
        }
    }
}
</script>
<style scoped>
    input, input:focus{
        border: none;
        outline: none;
        width: 3rem;
        background-color: inherit;
        color: inherit;
    }
    div{
        display: inline;
        white-space: nowrap;
    }
</style>