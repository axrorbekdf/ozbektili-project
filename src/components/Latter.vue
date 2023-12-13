<template >
    <div>
        <div class="card-text fw-bold m-0" style="font-size: 30pt; color: blueviolet;">
            <div class="col-2 d-inline-block p-0 m-0">
                <input type="text" v-model="latter" @input="checkAnswerByStatus()" class="form-control form-control-sm card-text fw-bold m-0 p-0" placeholder="__" style="background-color: #a2e7f607; border: none; font-size: 30pt; color: rgb(130, 144, 139);">
            </div>{{incomplete}}
            <Loader v-if="isLoading" style="width: 1rem; height: 1rem;"/>
            <i v-else-if="is_correct" class="fa-regular fa-circle-check" style="font-size: 20pt; color: rgb(23, 224, 57);"></i>
            <i v-else-if="!is_correct && is_correct!=null" class="fa-regular fa-circle-xmark" style="font-size: 20pt; color: rgb(238, 33, 29);"></i>
        </div>
    </div>
</template>
<script>

export default {
    name: "Latter",
    props:{
        incomplete:{
            type: String,
            required: true
        },
        id:{
            type: Number,
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
        }
    }
}
</script>
<style >
    
</style>