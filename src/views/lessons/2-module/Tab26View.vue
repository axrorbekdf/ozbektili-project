<template>
    <div class="container">
        <div class="row mt-5">
            <p class="text-danger fw-bold"  style="font-size: 10pt;">{{ error }}</p>
            <h3 class="fw-bold text-primary my-3">O‘ylang va toping.</h3>
            
            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab25View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab27View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <h4 class="text-primary text-center">Boshqotirma</h4>
            <div class="col-2 fw-medium">
                <p v-for="item,index in words1" :key="index" v-html="item"></p>
            </div>
            
            <div class="col-8">
                <div class="d-flex align-items-center  my-2">
                    <button v-if="status" @click="generate()" class="btn d-inline" style="background-color: hsla(218, 71%, 51%, 0.711); color: hsl(0, 0%, 98%);">Qayta boshlash</button>
                    <h4 class="d-inline pt-2 mx-4" v-if="word.length > 0">So'z: {{ word }}</h4>
                </div>
                
                <table class="table table-bordered align-middle" style="text-align:center;">
                    <tbody>
                        <tr>
                            <td  @click="checkChar($event)">u</td>
                            <td  @click="checkChar($event)">x</td>
                            <td  @click="checkChar($event)">l</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">m</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">q</td>
                            <td  @click="checkChar($event)">g</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">q</td>
                        </tr>
                        <tr>
                            <td  @click="checkChar($event)">q</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">r</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">s</td>
                            <td  @click="checkChar($event)">t</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">g</td>
                            <td  @click="checkChar($event)">i</td>
                            <td  @click="checkChar($event)">d</td>
                            <td  @click="checkChar($event)">a</td>
                        </tr>
                        <tr>
                            <td  @click="checkChar($event)">d</td>
                            <td  @click="checkChar($event)">i</td>
                            <td  @click="checkChar($event)">v</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">n</td>
                            <td  @click="checkChar($event)">b</td>
                            <td  @click="checkChar($event)">s</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">r</td>
                            <td  @click="checkChar($event)">i</td>
                            <td  @click="checkChar($event)">q</td>
                        </tr>
                        <tr>
                            <td  @click="checkChar($event)">d</td>
                            <td  @click="checkChar($event)">l</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">sh</td>
                            <td  @click="checkChar($event)">x</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">n</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">n</td>
                            <td  @click="checkChar($event)">e</td>
                            <td  @click="checkChar($event)">k</td>
                        </tr>
                        <tr>
                            <td  @click="checkChar($event)">u</td>
                            <td  @click="checkChar($event)">k</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">r</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">v</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">t</td>
                            <td  @click="checkChar($event)">j</td>
                            <td  @click="checkChar($event)">i</td>
                            <td  @click="checkChar($event)">f</td>
                        </tr>
                        <tr>
                            <td  @click="checkChar($event)">i</td>
                            <td  @click="checkChar($event)">ch</td>
                            <td  @click="checkChar($event)">m</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">q</td>
                            <td  @click="checkChar($event)">q</td>
                            <td  @click="checkChar($event)">y</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">sh</td>
                            <td  @click="checkChar($event)">i</td>
                            <td  @click="checkChar($event)">l</td>
                        </tr>
                        <tr>
                            <td  @click="checkChar($event)">k</td>
                            <td  @click="checkChar($event)">o‘</td>
                            <td  @click="checkChar($event)">k</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">u</td>
                            <td  @click="checkChar($event)">s</td>
                            <td  @click="checkChar($event)">t</td>
                            <td  @click="checkChar($event)">i</td>
                            <td  @click="checkChar($event)">d</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">l</td>
                        </tr>
                        <tr>
                            <td  @click="checkChar($event)">s</td>
                            <td  @click="checkChar($event)">t</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">l</td>
                            <td  @click="checkChar($event)">p</td>
                            <td  @click="checkChar($event)">o‘</td>
                            <td  @click="checkChar($event)">q</td>
                            <td  @click="checkChar($event)">i</td>
                            <td  @click="checkChar($event)">m</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">q</td>
                        </tr>
                        <tr>
                            <td  @click="checkChar($event)">d</td>
                            <td  @click="checkChar($event)">t</td>
                            <td  @click="checkChar($event)">e</td>
                            <td  @click="checkChar($event)">l</td>
                            <td  @click="checkChar($event)">e</td>
                            <td  @click="checkChar($event)">v</td>
                            <td  @click="checkChar($event)">i</td>
                            <td  @click="checkChar($event)">z</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">r</td>
                            <td  @click="checkChar($event)">t</td>
                        </tr>
                        <tr>
                            <td  @click="checkChar($event)">m</td>
                            <td  @click="checkChar($event)">e</td>
                            <td  @click="checkChar($event)">h</td>
                            <td  @click="checkChar($event)">m</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">n</td>
                            <td  @click="checkChar($event)">x</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">n</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">r</td>
                        </tr>
                        <tr>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">r</td>
                            <td  @click="checkChar($event)">q</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">s</td>
                            <td  @click="checkChar($event)">i</td>
                            <td  @click="checkChar($event)">d</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">s</td>
                            <td  @click="checkChar($event)">o‘</td>
                            <td  @click="checkChar($event)">y</td>
                        </tr>
                        <tr>
                            <td  @click="checkChar($event)">x</td>
                            <td  @click="checkChar($event)">z</td>
                            <td  @click="checkChar($event)">t</td>
                            <td  @click="checkChar($event)">i</td>
                            <td  @click="checkChar($event)">ng</td>
                            <td  @click="checkChar($event)">l</td>
                            <td  @click="checkChar($event)">a</td>
                            <td  @click="checkChar($event)">m</td>
                            <td  @click="checkChar($event)">o</td>
                            <td  @click="checkChar($event)">q</td>
                            <td  @click="checkChar($event)">h</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="col-2 fw-medium">
                <p v-for="item,index in words2" :key="index" v-html="item"></p>
            </div>

            <div class="col-12 d-flex justify-content-between my-3">
                <button @click="chengeTabView('Tab25View')" class="btn" style="background-color: hsla(265, 11%, 78%, 0.514); color: hsl(264, 81%, 43%);">
                    <i class="fa-solid fa-arrow-left"></i> Oldingisi 
                </button>
                <button @click="chengeTabView('Tab27View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        error: {
            type: String
        }
    },
    data(){
        return {
            word: "",
            words1: ['ichmoq','yashil','ko‘k','ustida','stol','o‘qimoq','televizor','mehmonxona','orqasida'],
            words2: ['sariq','uxlamoq','qora','oq','divan','tagida','oshxona','karavot','tinglamoq'],
            nodes: [],
            status: false,
        }
    },

    methods:{
        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        },

        generate(){
            this.word = "";
            for (let index = 0; index < this.nodes.length; index++) { 
                const element = this.nodes[index];

                element.className = "";
            }
            this.nodes = [];
        },

        checkChar(e){
            this.status = true;
            this.nodes.push(e.target);

            if(e.target.className == "" || e.target.className == "table-success"){
                e.target.className = "table-info"
            }else if(e.target.className != "table-success"){ 
                e.target.className = ""
            }
        
            
            if(e.target.className == "table-info"){
                this.word = this.word + e.target.textContent.toLocaleLowerCase(); 
            }

            // let soz = "";
            // for (let index = 0; index < this.nodes.length; index++) { 
            //     const element = this.nodes[index];

            //     if(element.className == "table-info"){ 
            //         soz = soz + element.textContent.toLocaleLowerCase(); 
            //     }else{
            //         this.nodes.slice(index,2);
            //     }
            // }

            // this.word = soz;
            // console.log(this.nodes);
            
            
            if((this.words1).includes(this.word) || (this.words2).includes(this.word)){

                for (let index = 0; index < this.nodes.length; index++) {
                    this.nodes[index].className = "table-success";
                }

                if((this.words1).includes(this.word)){
                    
                    let newArray = [];
                    for (let index = 0; index < this.words1.length; index++) {
                        let element = this.words1[index];
                        if(this.word == element){
                            element = `<span class="badge text-bg-primary">${element}</span>`;
                        }

                        newArray[index] = element;
                    }
                    this.words1 = newArray;
                }

                if((this.words2).includes(this.word)){
                    
                    let newArray = [];
                    for (let index = 0; index < this.words2.length; index++) {
                        let element = this.words2[index];
                        if(this.word == element){
                            element = `<span class="badge text-bg-primary">${element}</span>`;
                        }

                        newArray[index] = element;
                    }
                    this.words2 = newArray;
                }

                this.nodes = [];
                this.word = "";
            }
        },
    }
}
</script>
<style scoped>
    
</style>