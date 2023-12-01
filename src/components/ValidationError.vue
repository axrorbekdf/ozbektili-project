<template>
    <span class="text-danger">{{ errorMessage }}</span>
</template>
<script>
export default {
    name: "ValidationError",
    props: {
        errors: {
            type: Object,
            required: true
        }
    },
    computed: {
        errorMessage(){
            return Object.keys(this.errors).map(name => {
                    const msg = this.errors[name].toString();
                    return `${msg}`;
            })
        }
    }
}
</script>
<style scoped>
    ul{
        text-align: left;
    }

    li{
        border: none;
        color: red;
    }
</style>