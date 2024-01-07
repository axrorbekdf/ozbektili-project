<template lang="">
    <div class="list-group">
        <h6>
            {{ data.question}}

            <Loader v-if="isLoading" style="width:1rem; height:1rem; display: inline-block;" />

            <div v-else-if="is_correct" style="display: inline;">
                <i class="fa-regular fa-circle-check" style="font-size: 20pt; color: rgb(23, 224, 57);"></i>
            </div>
            <i v-else-if="!is_correct && is_correct!=null" class="fa-regular fa-circle-xmark" style="font-size: 20pt; color: rgb(238, 33, 29);"></i>
            
        </h6>
        <label class="list-group-item d-flex gap-2" v-for="item,index in data.variants" :key="index">
            <input class="form-check-input flex-shrink-0" @click="checkAnswerByStatus(data.id, $event)" type="radio" :name="`listGroupRadios${data.id}`" :value="item">
            <span>
                {{ item }}
            </span>
        </label>
    </div>
</template>
<script>
export default {
    name: "TextChecked",
    props:{
        data:{
            type: Object
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
        checkAnswerByStatus(id, answer){
            
            this.isLoading = true;

            const exercise = {
                id: id,
                answer_body: [answer.target.value]
            };

            this.$store.dispatch('checkExercise', exercise)
            .then(response => {
                if(response.exercise_id == id){
                    this.is_correct = response.is_correct; 
                    this.isLoading = false;
                }
            })
            .catch(error => {
                this.isLoading = false;
            });
        },
    }
}
</script>
<style lang="">
    
</style>