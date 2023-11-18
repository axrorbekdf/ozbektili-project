<template>
    <div>
        {{count}}
    </div>
</template>
<script>
export default {
    name: "Counter",
    props: {
        start: {
            type: Number,
            default: 0,
            required: false
        }
    },
    data(){
        return {
            count: 0,
            message: "And we're done!",
            timer: null // Tracks the setInterval timer
        }
    },
    mounted(){
        this.startCountdown()
    },
    methods: {
      
        // Handler within setInterval
        countDown(){
            if(this.count === this.start){
                clearInterval(this.timer)
            }
            else {
                this.count++
            }
        },
        startCountdown(){
            this.timer = setInterval(this.countDown, 5)
        }
  }
}
</script>
<style>
    
</style>