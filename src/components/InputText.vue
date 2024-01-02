<template lang="">
    <div>
        <input type="text" name="" id="" @keypress="this.style.width=(this.value.length)*2+'px'" >
        <Loader />
    </div>
</template>
<script>
export default {
    name: "InputText",
}
</script>
<style scoped>
    input, input:focus{
        border: none;
        outline: none;
    }
    div{
        /* display: inline; */
        /* white-space: nowrap; */
    }
</style>