<template >
    <div>
        <div class="d-inline-block p-0 m-0">
            <input type="text" v-model="latter" @blur="checkAnswerByStatus()" @keyup.enter="checkAnswerByStatus()" @input="limit()" class="w-100 card-title m-0 p-0 text-center" placeholder="_______________" style="background-color: #a2e7f607; border: none; font-size: 13pt;">

            <Loader v-if="isLoading" style="width: 1rem; height: 1rem;"/>
            <div v-else-if="is_correct" style="display: inline;">
                <i class="fa-regular fa-circle-check" style="font-size: 20pt; color: rgb(23, 224, 57);"></i>
                <img src="@/assets/winner.gif" alt="" style="position: absolute;top: 0; left: 0;">
            </div>
            <i v-else-if="!is_correct && is_correct!=null" class="fa-regular fa-circle-xmark" style="font-size: 20pt; color: rgb(238, 33, 29);"></i>
        </div>
    </div>
</template>
<script>

export default {
    name: "MashqWord",
    props:{
        incomplete:{
            type: String,
            required: true
        },
        id:{
            type: Number,
            required: true
        },
        current_latter:{
            type: String,
            required: true
        }
    },
    data(){
        return {
            latter: '',
            is_correct: null,
            isLoading: false
        }
    },
    methods: {

        checkAnswerByStatus(){

            this.isLoading = true;
            
            const exercise = {
                id: this.id,
                answer_body: [this.latter]
            };
            
            this.$store.dispatch('checkExercise', exercise)
            .then(response => {
                if(response.exercise_id == this.id){
                    this.is_correct = response.is_correct; 
                    this.isLoading = false;
                }
            })
            .catch(error => {
                this.isLoading = false;
            });
        },

        limit(){
            var max_chars = this.current_latter.length;

            console.log(max_chars, );
                
            if(this.latter.length > max_chars) {
                this.latter = this.latter.substr(0, max_chars);
            }
        }
    }
}
</script>
<style >
    
</style>