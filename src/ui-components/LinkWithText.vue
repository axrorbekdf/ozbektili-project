<template>
    <a class="btn" :href="path" :role="type">{{ msg }}</a>
</template>

<script>
    export default{
        name: "LinkWithText",
        props:{
            path:{
                type: String,
                default: '#'
            },
            type:{
                type: String,
                default: ''
            },
            msg:{
                type: String,
                required: true
            }
        }
    }
</script>