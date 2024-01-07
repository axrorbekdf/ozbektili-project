<template lang="">
    <div>
        <input type="text" v-model="latter" @blur="checkAnswerByStatus()" @keyup.enter="checkAnswerByStatus()" @input="limit()" @keyup="changeWith($event)" placeholder="___________________________________">
        <Loader v-if="isLoading" style="width:1rem; height:1rem; display: inline-block;" />

        <div v-else-if="is_correct" style="display: inline;">
            <i class="fa-regular fa-circle-check" style="font-size: 20pt; color: rgb(23, 224, 57);"></i>
            <img src="@/assets/winner.gif" alt="" style="position: absolute;top: 0; left: 0;">
        </div>
        <i v-else-if="!is_correct && is_correct!=null" class="fa-regular fa-circle-xmark" style="font-size: 20pt; color: rgb(238, 33, 29);"></i>
    </div>
</template>
<script>
export default {
    name: "InputTextDi",
    props:{
        id:{
            type: Number
        },
        incomplete:{
            type: String
        },
        current_latter:{
            type: String
        }
    },
    data(){
        return {
            latter: '',
            is_correct: null,
            isLoading: false
        }
    },
    methods:{
        changeWith(e){
            e.target.style.width=(e.target.value.length+5)*8+'px';
        },

        checkAnswerByStatus(){

            this.isLoading = true;

            let result_latter = this.latter.replace(this.incomplete, '')

            const exercise = {
                id: this.id,
                answer_body: [result_latter]
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
                
            if(this.latter.length > max_chars) {
                this.latter = this.latter.substr(0, max_chars);
            }
        }
    }
}
</script>
<style scoped>
    input, input:focus{
        border: none;
        outline: none;
        width: 5rem;
        background-color: inherit;
        color: inherit;
    }
    div{
        display: inline;
        white-space: nowrap;
    }
</style>