<template>
    <div class="container">
        <div class="row mt-5">
            
            <div class="col-6">
                <h3 class="fw-bold text-primary">Alifbo harflari? </h3>
                <p class="text">Tinglang! Takrorlang!</p>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center ">
                <button @click="chengeTabView('Tab2View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711); color: hsl(264, 81%, 43%);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('a')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="a">
                            <source src="@/assets/ovoz/ovoz_qiz/a.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ayiq.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Aa</p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">A</span>yiq</p>
                        <button @click="toggleAudio('ayiq')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="ayiq">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/ayiq.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('b')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="b">
                            <source src="@/assets/ovoz/ovoz_qiz/b.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/banan.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Bb</p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color: rgba(16, 72, 184, 0.575);"><span style="color: red;">B</span>anan</p>
                        <button @click="toggleAudio('banan')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="banan">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/banan.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('d')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="d">
                            <source src="@/assets/ovoz/ovoz_qiz/d.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Dd</p>
                        <img src="@/assets/alifbo/image/deraza.png" style="width: 12vh;" alt="...">
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">D</span>eraza</p>
                        <button @click="toggleAudio('deraza')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="deraza">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/deraza.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('e')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="e">
                            <source src="@/assets/ovoz/ovoz_qiz/e.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/eshik.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Ee</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">E</span>shik</p>
                        <button @click="toggleAudio('eshik')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="eshik">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/eshik.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('f')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="f">
                            <source src="@/assets/ovoz/ovoz_qiz/f.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/fill.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Ff</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">F</span>il</p>
                        <button @click="toggleAudio('fil')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="fil">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/fil.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('g')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="g">
                            <source src="@/assets/ovoz/ovoz_qiz/g.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/gilam.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Gg</p>
                    </div>

                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color: rgba(16, 72, 184, 0.575);"><span style="color: red;">G</span>ilam</p>
                        <button @click="toggleAudio('gilam')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="gilam">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/gilam.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('h')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="h">
                            <source src="@/assets/ovoz/ovoz_qiz/h.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/hassa.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Hh</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color: rgba(16, 72, 184, 0.575);"><span style="color: red;">H</span>assa</p>
                        <button @click="toggleAudio('hassa')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="hassa">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/hassa.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('i')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="i">
                            <source src="@/assets/ovoz/ovoz_qiz/i.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ilon.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Ii</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">I</span>lon</p>
                        <button @click="toggleAudio('ilon')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="ilon">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/ilon.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('j')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="j">
                            <source src="@/assets/ovoz/ovoz_qiz/j.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/joja.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Jj</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">J</span>o'ja</p>
                        <button @click="toggleAudio('jo`ja')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="jo`ja">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/jo`ja.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('l')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="l">
                            <source src="@/assets/ovoz/ovoz_qiz/l.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/lola.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Ll</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">L</span>ola</p>
                        <button @click="toggleAudio('lola')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="lola">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/lola.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>
            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('k')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="k">
                            <source src="@/assets/ovoz/ovoz_qiz/k.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/kitob.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Kk</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">K</span>itob</p>
                        <button @click="toggleAudio('kitob')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="kitob">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/kitob.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('m')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="m">
                            <source src="@/assets/ovoz/ovoz_qiz/m.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/mushuk.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">Mm</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">M</span>ushuk</p>
                        <button @click="toggleAudio('mushuk')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="mushuk">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/mushuk.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('n')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="n">
                            <source src="@/assets/ovoz/ovoz_qiz/n.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/non.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Nn</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">N</span>on</p>
                        <button @click="toggleAudio('non')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="non">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/non.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('o')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="o">
                            <source src="@/assets/ovoz/ovoz_qiz/o.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/olma.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Oo</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">O</span>lma</p>
                        <button @click="toggleAudio('olma')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="olma">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/olma.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('p')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="p">
                            <source src="@/assets/ovoz/ovoz_qiz/p.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/piyoz.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Pp</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">P</span>iyoz</p>
                        <button @click="toggleAudio('piyoz')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="piyoz">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/piyoz.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('q')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="q">
                            <source src="@/assets/ovoz/ovoz_qiz/q.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/qalam.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Qq</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">Q</span>alam</p>
                        <button @click="toggleAudio('qalam')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="qalam">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/qalam.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('r')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="r">
                            <source src="@/assets/ovoz/ovoz_qiz/r.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/raketa.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Rr</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">R</span>aketa</p>
                        <button @click="toggleAudio('raketa')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="raketa">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/raketa.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('s')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="s">
                            <source src="@/assets/ovoz/ovoz_qiz/s.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/suv.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Ss</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">S</span>uv</p>
                        <button @click="toggleAudio('suv')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="suv">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/suv.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('t')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="t">
                            <source src="@/assets/ovoz/ovoz_qiz/t.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/taroq.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Tt</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">T</span>aroq</p>
                        <button @click="toggleAudio('taroq')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="taroq">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/taroq.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('u')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="u">
                            <source src="@/assets/ovoz/ovoz_qiz/u.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/uzum.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Uu</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">U</span>zum</p>
                        <button @click="toggleAudio('taroq')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="taroq">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/taroq.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('v')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="v">
                            <source src="@/assets/ovoz/ovoz_qiz/v.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/varak.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Vv</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">V</span>arrak</p>
                        <button @click="toggleAudio('varrak')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="varrak">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/varrak.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('x')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="x">
                            <source src="@/assets/ovoz/ovoz_qiz/x.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/xoroz.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Xx</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">X</span>o'roz</p>
                        <button @click="toggleAudio('xo`roz')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="xo`roz">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/xo`roz.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('y')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="y">
                            <source src="@/assets/ovoz/ovoz_qiz/y.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/yulduz.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Yy</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">Y</span>ulduz</p>
                        <button @click="toggleAudio('yulduz')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="yulduz">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/yulduz.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('z')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="z">
                            <source src="@/assets/ovoz/ovoz_qiz/z.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/zebra.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">Zz</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">Z</span>ebra</p>
                        <button @click="toggleAudio('zebra')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="zebra">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/zebra.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('o`')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="o`">
                            <source src="@/assets/ovoz/ovoz_qiz/o`.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ordak.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">O'o'</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">O'</span>rdak</p>
                        <button @click="toggleAudio('o`rdak')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="o`rdak">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/o`rdak.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('g`')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="g`">
                            <source src="@/assets/ovoz/ovoz_qiz/g`.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/gildirak.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 25pt; color: rgb(244, 72, 24);">G'g'</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">G'</span>ildirak</p>
                        <button @click="toggleAudio('g`ildirak')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="g`ildirak">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/g`ildirak.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('sh')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="sh">
                            <source src="@/assets/ovoz/ovoz_qiz/sh.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/sham.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 20pt; color: rgb(244, 72, 24);">Shsh</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">Sh</span>am</p>
                        <button @click="toggleAudio('sham')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="sham">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/sham.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('ch')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="ch">
                            <source src="@/assets/ovoz/ovoz_qiz/ch.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/chumoli.png" style="width: 12vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 20pt; color: rgb(244, 72, 24);">Chch</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);"><span style="color: red;">Ch</span>umoli</p>
                        <button @click="toggleAudio('chumoli')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="chumoli">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/chumoli.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('ng')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="ng">
                            <source src="@/assets/ovoz/ovoz_qiz/ng.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/bodring.png" style="width: 11vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 20pt; color: rgb(244, 72, 24);">Ngng</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);">Bodri<span style="color: red;">ng</span></p>
                        <button @click="toggleAudio('bodring')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="bodring">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/bodring.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="card justify-content-around align-items-center mb-3 p-2">
                <div class="text-center rounded text-dark w-100" style="background-color: #F0ECEC;">
                    <div class="card-text text-end m-2">
                        <button @click="toggleAudio('tutuq belgisi')" class="btn">
                        <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="tutuq belgisi">
                            <source src="@/assets/ovoz/ovoz_qiz/tutuq belgisi.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="card-title text-start mx-2 d-flex align-items-end justify-content-between">
                        <img src="@/assets/alifbo/image/ok.png" style="width: 11vh;" alt="...">
                        <p class="card-text text-end fw-bold" style="font-size: 30pt; color: rgb(244, 72, 24);">'</p>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <p class="card-text fw-bold m-0" style="font-size: 25pt; color:  rgba(16, 72, 184, 0.575);">A<span style="color: red;">'</span>lo</p>
                        <button @click="toggleAudio('a`lo')" class="btn">
                            <i class="fa-solid fa-volume-high" style="color: rgb(222, 14, 170);"></i> 
                        </button>
                        <audio id="a`lo">
                            <source src="@/assets/ovoz/ovoz_qiz/sozlar/a`lo.mp3" type="audio/mpeg">
                        </audio>
                    </div>

                </div>
            </div>
            </div>
            
            <div class="col-12 d-flex justify-content-end align-items-center my-2">
                <button @click="chengeTabView('Tab2View')" class="btn text-white" style="background-color: hsla(264, 88%, 55%, 0.711);">Keyingisi <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div class="col-12 my-3"></div>
            
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        toggleAudio(item) {
            var audio = document.getElementById(`${item}`);
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        },

        chengeTabView(tab){
            this.$emit('chengeTabView', tab);
        }
    }
}
</script>
<style scoped>
</style>