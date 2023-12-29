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
                <p>ichmoq</p>
                <p>yashil</p>
                <p>ko&lsquo;k</p>
                <p>ustida</p>
                <p>stol</p>
                <p>o&lsquo;qimoq</p>
                <p>televizor</p>
                <p>mehmonxona</p>
                <p>orqasida</p>
            </div>
            <div class="col-8">
                <table class="tg table table-bordered">
                <thead>
                <tr>
                    <th class="tg-i3ml">&nbsp;&nbsp;&nbsp;<br><span style="color:black">u</span>&nbsp;&nbsp;&nbsp;</th>
                    <th class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">x</span>&nbsp;&nbsp;&nbsp;</th>
                    <th class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">l</span>&nbsp;&nbsp;&nbsp;</th>
                    <th class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</th>
                    <th class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">m</span>&nbsp;&nbsp;&nbsp;</th>
                    <th class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</th>
                    <th class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">q</span>&nbsp;&nbsp;&nbsp;</th>
                    <th class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">g</span>&nbsp;&nbsp;&nbsp;</th>
                    <th class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</th>
                    <th class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</th>
                    <th class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">q</span>&nbsp;&nbsp;&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">q</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">r</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">s</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">t</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">g</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">i</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">d</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">d</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">i</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">v</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">n</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">b</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">s</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">r</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">i</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">q</span>&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">d</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">l</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">sh</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">x</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">n</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">n</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">e</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">k</span>&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">u</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">k</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">r</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">v</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">t</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">j</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">i</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">f</span>&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">i</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">ch</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">m</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">q</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">q</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">y</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">sh</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">i</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">l</span>&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">k</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o‘</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">k</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">u</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">s</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">t</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">i</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">d</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">l</span>&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">s</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">t</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">l</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">p</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o‘</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">q</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">i</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">m</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-l1pk">&nbsp;&nbsp;&nbsp;<br><span style="color:black">q</span>&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">d</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">t</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">e</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">l</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">e</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">v</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">i</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">z</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">r</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">t</span>&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">m</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">e</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">h</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">m</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">n</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">x</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">n</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">r</span>&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">r</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">q</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">s</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">i</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">d</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">s</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o‘</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">y</span>&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">x</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">z</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">t</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">i</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">ng</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">l</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">a</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">m</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">o</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-gjf8">&nbsp;&nbsp;&nbsp;<br><span style="color:black">q</span>&nbsp;&nbsp;&nbsp;</td>
                    <td class="tg-nrix">&nbsp;&nbsp;&nbsp;<br><span style="color:black">h</span>&nbsp;&nbsp;&nbsp;</td>
                </tr>
                </tbody>
                </table>

            </div>
            <div class="col-2 fw-medium">
                <p>sariq</p>
                <p>uxlamoq</p>
                <p>qora</p>
                <p>oq</p>
                <p>divan</p>
                <p>tagida</p>
                <p>oshxona</p>
                <p>karavot</p>
                <p>tinglamoq</p>
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
    methods:{
        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        }
    }
}
</script>
<style scoped>
    .tg  {border-collapse:collapse;border-spacing:0;}
                .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
                overflow:hidden;padding:10px 5px;word-break:normal;}
                .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
                font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
                .tg .tg-gjf8{background-color:#DBDBDB;text-align:center;vertical-align:middle}
                .tg .tg-i3ml{background-color:#DBDBDB;border-color:inherit;text-align:center;vertical-align:middle}
                .tg .tg-nrix{text-align:center;vertical-align:middle}
                .tg .tg-l1pk{background-color:#FBE5D6;text-align:center;vertical-align:middle}
</style>