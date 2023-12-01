<template>
    <ul class="px-0">
        <li v-for="errorMessage in errorMessages" :key="errorMessage" class="list-group-item">{{ errorMessage }}</li>                   
    </ul>
</template>
<script>
import Toast from 'primevue/toast';
export default {
    name: "ValidationError",
    components: {
        Toast
    },
    props: {
        errors: {
            type: Object,
            required: true
        },
        item: {
            type: String
        }
    },
    computed: {
        errorMessages(){
            
            // return Object.keys(this.errors).map(name => {
            //     if(name == this.item){
            //         const msg = this.errors[name].toString();
            //         return `${msg}`;
            //     }else{
            //         console.log("yoq");
            //     }
            //     const msg = this.errors[name].toString();
            //     return `${msg}`;
            // })
            return this.errors[this.item];
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