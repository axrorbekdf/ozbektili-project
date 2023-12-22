<template>
    <div class="w-100">
        <h2 class="fw-bold">Ro'yhatdan o'tish</h2> 
        <div class="text-start mb-4">
            <p>Akkauntingiz bormi? <RouterLink to="/login" class="link-underline-light">Kiring</RouterLink></p>
        </div>
        
        <FormWizard @on-complete="submitHandler" color="#307AD5" nextButtonText="Keyingi" backButtonText="Oldingi" finishButtonText="Ro'yhatdan o'tish">
            <TabContent 
            title="Umumiy ma'lumotlar" 
            customIcon="<i class='fa-regular fa-user'></i>">

                <div style="padding: 2vh 0;">
                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-outline mt-2">
                            <label class="form-label fw-medium" for="form3Example1">Familiyasi *</label>
                            <input v-model="surname" type="text" id="form3Example1" class="form-control" placeholder="Familiya kiriting"/>
                            <ValidationError v-if="validationErrors" :item="'surname'" :errors="validationErrors" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-outline mt-2">
                            <label class="form-label fw-medium" for="form3Example2">Ismi *</label>
                            <input v-model="name" type="text" id="form3Example2" class="form-control" placeholder="Ismi kiriting"/>
                            <ValidationError v-if="validationErrors" :item="'name'" :errors="validationErrors" />
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12">
                        <div class="form-outline mt-2">
                            <label class="form-label fw-medium" for="form3Example3">Otasining ismi</label>
                            <input v-model="lastname" type="text" id="form3Example3" class="form-control" placeholder="Otasining ismi kiriting"/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-outline mt-3">
                            <label class="form-label fw-medium">Jinsi *</label><br>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" selected id="inlineRadio1" value="option1">
                                <label class="form-check-label" for="inlineRadio1">Erkak</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                <label class="form-check-label" for="inlineRadio2">Ayol</label>
                            </div>
                        
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="flex-auto form-outline mt-3">
                            <label class="form-label fw-medium" for="icondisplay">Tugʼilgan sanasi *</label>
                            <Calendar v-model="date_of_birth" showIcon iconDisplay="input" inputId="icondisplay" dateFormat="yy-mm-dd" class="w-100 sana" placeholder="Sanani tanlang" />
                            <ValidationError v-if="validationErrors" :item="'date_of_birth'" :errors="validationErrors" />
                        </div>
                    </div>
                    </div>
                </div>
            </TabContent>
            <TabContent
            title="Qo'shimcha ma'lumotlar"  
            customIcon="<i class='fa-solid fa-lightbulb'></i>" > 
                <div style="padding: 2vh 0;">
                    <div class="row">
                        <div class="col-md-6 flex justify-content-center">
                            <label class="form-label fw-medium mt-2" for="form3Example6">Bandlik maqomi</label><br>
                            <Dropdown v-model="selectedBandlik" :options="bandlik" optionLabel="name" placeholder="Bandlikni tanlang" class="w-100">
                                <template #value="slotProps">
                                    <div v-if="slotProps.value" class="flex align-items-center ">
                                        {{ slotProps.value.name }}
                                    </div>
                                    <span v-else>
                                        {{ slotProps.placeholder }}
                                    </span>
                                </template>
                                <template #option="slotProps">
                                    <div class="flex align-items-center">
                                        {{ slotProps.option.name }}
                                    </div>
                                </template>
                            </Dropdown>
                            <ValidationError v-if="validationErrors" :item="'employment_status'" :errors="validationErrors" />
                        </div>
                    
                        <div class="col-md-6 flex justify-content-center">
                            <label class="form-label fw-medium mt-2" for="form3Example6">Xorijiy davlat *</label><br>
                            <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Davlatni tanlang" class="w-100">
                                <template #value="slotProps">
                                    <div v-if="slotProps.value" class="flex align-items-center ">
                                        <img :alt="slotProps.value.label" :src="slotProps.value.image" style="width: 25px;"  />
                                        {{ slotProps.value.name }}
                                    </div>
                                    <span v-else>
                                        {{ slotProps.placeholder }}
                                    </span>
                                </template>
                                <template #option="slotProps">
                                    <div class="flex align-items-center">
                                        <img :alt="slotProps.option.label" :src="slotProps.option.image" style="width: 25px;" />
                                        {{ slotProps.option.name }}
                                    </div>
                                </template>
                            </Dropdown>
                            <ValidationError v-if="validationErrors" :item="'country_id'" :errors="validationErrors" />
                        </div>

                        
                    </div>
                </div>
            </TabContent>
            <TabContent title="Login va parol" customIcon="<i class='fa-solid fa-passport'></i>">
                <ul class="px-0" v-if="error">
                    <li class="list-group-item text-danger fw-bold" style="font-size: 14px;">{{ error }}</li>                   
                </ul>

                <div style="padding: 2vh 0;">
                    <!-- Email input -->
                    <div class="form-outline mt-2">
                        <label class="form-label fw-medium" for="form3Example7">Elektron pochta manzili (login) *</label>
                        <input v-model="email" type="email" id="form3Example7" class="form-control" placeholder="Elektron pochta manzili kiriting"/>
                        <ValidationError v-if="validationErrors" :item="'email'" :errors="validationErrors" />
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mt-2">
                        <label class="form-label fw-medium" for="form3Example8">Parol *</label>
                        <input v-model="password" type="password" id="form3Example8" class="form-control" placeholder="Parol kiriting"/>
                        <ValidationError v-if="validationErrors" :item="'password'" :errors="validationErrors" />
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mt-2">
                        <label class="form-label fw-medium" for="form3Example9">Qaytadan parol *</label>
                        <input v-model="password_confirmation" type="password" id="form3Example9" class="form-control" placeholder="Parolni qaytadan kiriting"/>
                        <ValidationError v-if="validationErrors" :item="'password_confirmation'" :errors="validationErrors" />
                    </div>

                    <!-- <ReCaptcha  class="mt-4"/> -->
                    
                    <div class="row g-3 mt-2 align-items-center">
                        <div class="col-auto">
                            <img src="https://pm.gov.uz:8020/api/captcha?v=656999c9ab0c1" width="125" height="27" alt="captcha">
                        </div>
                        <div class="col-auto">
                            <input type="number" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                        </div>
                    </div>

                </div>
                
            </TabContent>
            
            <template v-slot:footer="props">
                <div class="wizard-footer-left">
                    <button
                        v-if="props.activeTabIndex > 0 && !props.isLastStep"
                        :style="props.fillButtonStyle"
                        @click.native="props.prevTab()"
                        class="wizard-button btn"
                    >
                        Oldingi
                    </button>
                </div>
                <div class="wizard-footer-right">
                    
                    <button
                        v-if="!props.isLastStep"
                        @click.native="props.nextTab()"
                        class="wizard-button btn"
                        :style="props.fillButtonStyle"
                    >
                        Keyingi
                    </button>

                    <button
                        v-else
                        @click.native="submitHandler"
                        class="finish-button btn"
                        :style="props.fillButtonStyle"
                        :disabled="isLoading"
                    >
                        <span v-if="isLoading" class="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>
                        {{ props.isLastStep ? "Ro'yhatdan o'tish" : "Keyingi" }}
                    </button>
                </div>
            </template>
        </FormWizard>
        
    </div>
</template>
<script>
import 'vue3-form-wizard/dist/style.css'
import 'primevue/resources/themes/lara-light-green/theme.css'
import ValidationError from './../validationerror.vue';
import {FormWizard, TabContent} from 'vue3-form-wizard'
import { mapState } from 'vuex';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';

 export default {
    name: "MyFormWizard",
    
    components: {
        FormWizard,
        TabContent,
        Dropdown,
        Calendar,
        ValidationError
    },
    data() {
        return {
            name: '',
            surname: '',
            lastname: '',
            date_of_birth: '',
            gender: 'f',
            // employment_status: 1,
            // country_id: 1,
            email: '',
            password: '',
            password_confirmation: '',
            
            selectedBandlik: null,
            bandlik: [
                { "id": 1, "name": "O'quvchi"},
                { "id": 2, "name": "Talaba"},
                { "id": 3, "name": "Ishchi"},
                { "id": 4, "name": "Ishsiz"},

            ],

            selectedCountry: null,
            // countries: [
            //     { "id": 1, "name": "Afghanistan", "code": "AF" },
            //     { "id": 2, "name": "Åland Islands", "code": "AX" },
            //     { "id": 3, "name": "Albania", "code": "AL" },
            //     { "id": 4, "name": "Algeria", "code": "DZ" },
            //     { "id": 5, "name": "American Samoa", "code": "AS" },
            //     { "id": 6, "name": "Andorra", "code": "AD" },
            //     { "id": 7, "name": "Angola", "code": "AO" },
            //     { "id": 8, "name": "Anguilla", "code": "AI" },
            //     { "id": 9, "name": "Antarctica", "code": "AQ" },
            //     { "id": 10, "name": "Antigua and Barbuda", "code": "AG" },
            //     { "id": 11, "name": "Argentina", "code": "AR" },
            //     { "id": 12, "name": "Armenia", "code": "AM" },
            //     { "id": 13, "name": "Aruba", "code": "AW" },
            //     { "id": 14, "name": "Australia", "code": "AU" },
            //     { "id": 15, "name": "Austria", "code": "AT" },
            //     { "id": 16, "name": "Azerbaijan", "code": "AZ" },
            //     { "id": 17, "name": "Bahamas", "code": "BS" },
            //     { "id": 18, "name": "Bahrain", "code": "BH" },
            //     { "id": 19, "name": "Bangladesh", "code": "BD" },
            //     { "id": 20, "name": "Barbados", "code": "BB" },
            //     { "id": 21, "name": "Belarus", "code": "BY" },
            //     { "id": 22, "name": "Belgium", "code": "BE" },
            //     { "id": 23, "name": "Belize", "code": "BZ" },
            //     { "id": 24, "name": "Benin", "code": "BJ" },
            //     { "id": 25, "name": "Bermuda", "code": "BM" },
            //     { "id": 26, "name": "Bhutan", "code": "BT" },
            //     { "id": 27, "name": "Bolivia", "code": "BO" },
            //     { "id": 28, "name": "Bosnia and Herzegovina", "code": "BA" },
            //     { "id": 29, "name": "Botswana", "code": "BW" },
            //     { "id": 30, "name": "Bouvet Island", "code": "BV" },
            //     { "id": 31, "name": "Brazil", "code": "BR" },
            //     { "id": 32, "name": "British Indian Ocean Territory", "code": "IO" },
            //     { "id": 33, "name": "Brunei Darussalam", "code": "BN" },
            //     { "id": 34, "name": "Bulgaria", "code": "BG" },
            //     { "id": 35, "name": "Burkina Faso", "code": "BF" },
            //     { "id": 36, "name": "Burundi", "code": "BI" },
            //     { "id": 37, "name": "Cambodia", "code": "KH" },
            //     { "id": 38, "name": "Cameroon", "code": "CM" },
            //     { "id": 39, "name": "Canada", "code": "CA" },
            //     { "id": 40, "name": "Cape Verde", "code": "CV" },
            //     { "id": 41, "name": "Cayman Islands", "code": "KY" },
            //     { "id": 42, "name": "Central African Republic", "code": "CF" },
            //     { "id": 43, "name": "Chad", "code": "TD" },
            //     { "id": 44, "name": "Chile", "code": "CL" },
            //     { "id": 45, "name": "China", "code": "CN" },
            //     { "id": 46, "name": "Christmas Island", "code": "CX" },
            //     { "id": 47, "name": "Cocos (Keeling) Islands", "code": "CC" },
            //     { "id": 48, "name": "Colombia", "code": "CO" },
            //     { "id": 49, "name": "Comoros", "code": "KM" },
            //     { "id": 50, "name": "Congo", "code": "CG" },
            //     { "id": 51, "name": "Congo, The Democratic Republic of the", "code": "CD" },
            //     { "id": 52, "name": "Cook Islands", "code": "CK" },
            //     { "id": 53, "name": "Costa Rica", "code": "CR" },
            //     { "id": 54, "name": "Cote D'Ivoire", "code": "CI" },
            //     { "id": 55, "name": "Croatia", "code": "HR" },
            //     { "id": 56, "name": "Cuba", "code": "CU" },
            //     { "id": 57, "name": "Cyprus", "code": "CY" },
            //     { "id": 58, "name": "Czech Republic", "code": "CZ" },
            //     { "id": 59, "name": "Denmark", "code": "DK" },
            //     { "id": 60, "name": "Djibouti", "code": "DJ" },
            //     { "id": 61, "name": "Dominica", "code": "DM" },
            //     { "id": 62, "name": "Dominican Republic", "code": "DO" },
            //     { "id": 63, "name": "Ecuador", "code": "EC" },
            //     { "id": 64, "name": "Egypt", "code": "EG" },
            //     { "id": 65, "name": "El Salvador", "code": "SV" },
            //     { "id": 66, "name": "Equatorial Guinea", "code": "GQ" },
            //     { "id": 67, "name": "Eritrea", "code": "ER" },
            //     { "id": 68, "name": "Estonia", "code": "EE" },
            //     { "id": 69, "name": "Ethiopia", "code": "ET" },
            //     { "id": 70, "name": "Falkland Islands (Malvinas)", "code": "FK" },
            //     { "id": 71, "name": "Faroe Islands", "code": "FO" },
            //     { "id": 72, "name": "Fiji", "code": "FJ" },
            //     { "id": 73, "name": "Finland", "code": "FI" },
            //     { "id": 74, "name": "France", "code": "FR" },
            //     { "id": 75, "name": "French Guiana", "code": "GF" },
            //     { "id": 76, "name": "French Polynesia", "code": "PF" },
            //     { "id": 77, "name": "French Southern Territories", "code": "TF" },
            //     { "id": 78, "name": "Gabon", "code": "GA" },
            //     { "id": 79, "name": "Gambia", "code": "GM" },
            //     { "id": 80, "name": "Georgia", "code": "GE" },
            //     { "id": 81, "name": "Germany", "code": "DE" },
            //     { "id": 82, "name": "Ghana", "code": "GH" },
            //     { "id": 83, "name": "Gibraltar", "code": "GI" },
            //     { "id": 84, "name": "Greece", "code": "GR" },
            //     { "id": 85, "name": "Greenland", "code": "GL" },
            //     { "id": 86, "name": "Grenada", "code": "GD" },
            //     { "id": 87, "name": "Guadeloupe", "code": "GP" },
            //     { "id": 88, "name": "Guam", "code": "GU" },
            //     { "id": 89, "name": "Guatemala", "code": "GT" },
            //     { "id": 90, "name": "Guernsey", "code": "GG" },
            //     { "id": 91, "name": "Guinea", "code": "GN" },
            //     { "id": 92, "name": "Guinea-Bissau", "code": "GW" },
            //     { "id": 93, "name": "Guyana", "code": "GY" },
            //     { "id": 94, "name": "Haiti", "code": "HT" },
            //     { "id": 95, "name": "Heard Island and Mcdonald Islands", "code": "HM" },
            //     { "id": 96, "name": "Holy See (Vatican City State)", "code": "VA" },
            //     { "id": 97, "name": "Honduras", "code": "HN" },
            //     { "id": 98, "name": "Hong Kong", "code": "HK" },
            //     { "id": 99, "name": "Hungary", "code": "HU" },
            //     { "id": 100, "name": "Iceland", "code": "IS" },
            //     { "id": 101, "name": "India", "code": "IN" },
            //     { "id": 102, "name": "Indonesia", "code": "ID" },
            //     { "id": 103, "name": "Iran, Islamic Republic Of", "code": "IR" },
            //     { "id": 104, "name": "Iraq", "code": "IQ" },
            //     { "id": 105, "name": "Ireland", "code": "IE" },
            //     { "id": 106, "name": "Isle of Man", "code": "IM" },
            //     { "id": 107, "name": "Israel", "code": "IL" },
            //     { "id": 108, "name": "Italy", "code": "IT" },
            //     { "id": 109, "name": "Jamaica", "code": "JM" },
            //     { "id": 110, "name": "Japan", "code": "JP" },
            //     { "id": 111, "name": "Jersey", "code": "JE" },
            //     { "id": 112, "name": "Jordan", "code": "JO" },
            //     { "id": 113, "name": "Kazakhstan", "code": "KZ" },
            //     { "id": 114, "name": "Kenya", "code": "KE" },
            //     { "id": 115, "name": "Kiribati", "code": "KI" },
            //     { "id": 116, "name": "Korea, Democratic People'S Republic of", "code": "KP" },
            //     { "id": 117, "name": "Korea, Republic of", "code": "KR" },
            //     { "id": 118, "name": "Kuwait", "code": "KW" },
            //     { "id": 119, "name": "Kyrgyzstan", "code": "KG" },
            //     { "id": 120, "name": "Lao People'S Democratic Republic", "code": "LA" },
            //     { "id": 121, "name": "Latvia", "code": "LV" },
            //     { "id": 122, "name": "Lebanon", "code": "LB" },
            //     { "id": 123, "name": "Lesotho", "code": "LS" },
            //     { "id": 124, "name": "Liberia", "code": "LR" },
            //     { "id": 125, "name": "Libyan Arab Jamahiriya", "code": "LY" },
            //     { "id": 126, "name": "Liechtenstein", "code": "LI" },
            //     { "id": 127, "name": "Lithuania", "code": "LT" },
            //     { "id": 128, "name": "Luxembourg", "code": "LU" },
            //     { "id": 129, "name": "Macao", "code": "MO" },
            //     { "id": 130, "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" },
            //     { "id": 131, "name": "Madagascar", "code": "MG" },
            //     { "id": 132, "name": "Malawi", "code": "MW" },
            //     { "id": 133, "name": "Malaysia", "code": "MY" },
            //     { "id": 134, "name": "Maldives", "code": "MV" },
            //     { "id": 135, "name": "Mali", "code": "ML" },
            //     { "id": 136, "name": "Malta", "code": "MT" },
            //     { "id": 137, "name": "Marshall Islands", "code": "MH" },
            //     { "id": 138, "name": "Martinique", "code": "MQ" },
            //     { "id": 139, "name": "Mauritania", "code": "MR" },
            //     { "id": 140, "name": "Mauritius", "code": "MU" },
            //     { "id": 141, "name": "Mayotte", "code": "YT" },
            //     { "id": 142, "name": "Mexico", "code": "MX" },
            //     { "id": 143, "name": "Micronesia, Federated States of", "code": "FM" },
            //     { "id": 144, "name": "Moldova, Republic of", "code": "MD" },
            //     { "id": 145, "name": "Monaco", "code": "MC" },
            //     { "id": 146, "name": "Mongolia", "code": "MN" },
            //     { "id": 147, "name": "Montserrat", "code": "MS" },
            //     { "id": 148, "name": "Morocco", "code": "MA" },
            //     { "id": 149, "name": "Mozambique", "code": "MZ" },
            //     { "id": 150, "name": "Myanmar", "code": "MM" },
            //     { "id": 151, "name": "Namibia", "code": "NA" },
            //     { "id": 152, "name": "Nauru", "code": "NR" },
            //     { "id": 153, "name": "Nepal", "code": "NP" },
            //     { "id": 154, "name": "Netherlands", "code": "NL" },
            //     { "id": 155, "name": "Netherlands Antilles", "code": "AN" },
            //     { "id": 156, "name": "New Caledonia", "code": "NC" },
            //     { "id": 157, "name": "New Zealand", "code": "NZ" },
            //     { "id": 158, "name": "Nicaragua", "code": "NI" },
            //     { "id": 159, "name": "Niger", "code": "NE" },
            //     { "id": 160, "name": "Nigeria", "code": "NG" },
            //     { "id": 161, "name": "Niue", "code": "NU" },
            //     { "id": 162, "name": "Norfolk Island", "code": "NF" },
            //     { "id": 163, "name": "Northern Mariana Islands", "code": "MP" },
            //     { "id": 164, "name": "Norway", "code": "NO" },
            //     { "id": 165, "name": "Oman", "code": "OM" },
            //     { "id": 166, "name": "Pakistan", "code": "PK" },
            //     { "id": 167, "name": "Palau", "code": "PW" },
            //     { "id": 168, "name": "Palestinian Territory, Occupied", "code": "PS" },
            //     { "id": 169, "name": "Panama", "code": "PA" },
            //     { "id": 170, "name": "Papua New Guinea", "code": "PG" },
            //     { "id": 171, "name": "Paraguay", "code": "PY" },
            //     { "id": 172, "name": "Peru", "code": "PE" },
            //     { "id": 173, "name": "Philippines", "code": "PH" },
            //     { "id": 174, "name": "Pitcairn", "code": "PN" },
            //     { "id": 175, "name": "Poland", "code": "PL" },
            //     { "id": 176, "name": "Portugal", "code": "PT" },
            //     { "id": 177, "name": "Puerto Rico", "code": "PR" },
            //     { "id": 178, "name": "Qatar", "code": "QA" },
            //     { "id": 179, "name": "Reunion", "code": "RE" },
            //     { "id": 180, "name": "Romania", "code": "RO" },
            //     { "id": 181, "name": "Russian Federation", "code": "RU" },
            //     { "id": 182, "name": "RWANDA", "code": "RW" },
            //     { "id": 183, "name": "Saint Helena", "code": "SH" },
            //     { "id": 184, "name": "Saint Kitts and Nevis", "code": "KN" },
            //     { "id": 185, "name": "Saint Lucia", "code": "LC" },
            //     { "id": 186, "name": "Saint Pierre and Miquelon", "code": "PM" },
            //     { "id": 187, "name": "Saint Vincent and the Grenadines", "code": "VC" },
            //     { "id": 188, "name": "Samoa", "code": "WS" },
            //     { "id": 189, "name": "San Marino", "code": "SM" },
            //     { "id": 190, "name": "Sao Tome and Principe", "code": "ST" },
            //     { "id": 191, "name": "Saudi Arabia", "code": "SA" },
            //     { "id": 192, "name": "Senegal", "code": "SN" },
            //     { "id": 193, "name": "Seychelles", "code": "SC" },
            //     { "id": 194, "name": "Sierra Leone", "code": "SL" },
            //     { "id": 195, "name": "Singapore", "code": "SG" },
            //     { "id": 196, "name": "Slovakia", "code": "SK" },
            //     { "id": 197, "name": "Slovenia", "code": "SI" },
            //     { "id": 198, "name": "Solomon Islands", "code": "SB" },
            //     { "id": 199, "name": "Somalia", "code": "SO" },
            //     { "id": 200, "name": "South Africa", "code": "ZA" },
            //     { "id": 201, "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
            //     { "id": 202, "name": "Spain", "code": "ES" },
            //     { "id": 203, "name": "Sri Lanka", "code": "LK" },
            //     { "id": 204, "name": "Sudan", "code": "SD" },
            //     { "id": 205, "name": "Suriname", "code": "SR" },
            //     { "id": 206, "name": "Svalbard and Jan Mayen", "code": "SJ" },
            //     { "id": 207, "name": "Swaziland", "code": "SZ" },
            //     { "id": 208, "name": "Sweden", "code": "SE" },
            //     { "id": 209, "name": "Switzerland", "code": "CH" },
            //     { "id": 210, "name": "Syrian Arab Republic", "code": "SY" },
            //     { "id": 211, "name": "Taiwan, Province of China", "code": "TW" },
            //     { "id": 212, "name": "Tajikistan", "code": "TJ" },
            //     { "id": 213, "name": "Tanzania, United Republic of", "code": "TZ" },
            //     { "id": 214, "name": "Thailand", "code": "TH" },
            //     { "id": 215, "name": "Timor-Leste", "code": "TL" },
            //     { "id": 216, "name": "Togo", "code": "TG" },
            //     { "id": 217, "name": "Tokelau", "code": "TK" },
            //     { "id": 218, "name": "Tonga", "code": "TO" },
            //     { "id": 219, "name": "Trinidad and Tobago", "code": "TT" },
            //     { "id": 220, "name": "Tunisia", "code": "TN" },
            //     { "id": 221, "name": "Turkey", "code": "TR" },
            //     { "id": 222, "name": "Turkmenistan", "code": "TM" },
            //     { "id": 223, "name": "Turks and Caicos Islands", "code": "TC" },
            //     { "id": 224, "name": "Tuvalu", "code": "TV" },
            //     { "id": 225, "name": "Uganda", "code": "UG" },
            //     { "id": 226, "name": "Ukraine", "code": "UA" },
            //     { "id": 227, "name": "United Arab Emirates", "code": "AE" },
            //     { "id": 228, "name": "United Kingdom", "code": "GB" },
            //     { "id": 229, "name": "United States", "code": "US", synonym: ['USA','United States of America'] },
            //     { "id": 230, "name": "United States Minor Outlying Islands", "code": "UM" },
            //     { "id": 231, "name": "Uruguay", "code": "UY" },
            //     { "id": 232, "name": "Uzbekistan", "code": "UZ" },
            //     { "id": 233, "name": "Vanuatu", "code": "VU" },
            //     { "id": 234, "name": "Venezuela", "code": "VE" },
            //     { "id": 235, "name": "Viet Nam", "code": "VN" },
            //     { "id": 236, "name": "Virgin Islands, British", "code": "VG" },
            //     { "id": 237, "name": "Virgin Islands, U.S.", "code": "VI" },
            //     { "id": 238, "name": "Wallis and Futuna", "code": "WF" },
            //     { "id": 239, "name": "Western Sahara", "code": "EH" },
            //     { "id": 240, "name": "Yemen", "code": "YE" },
            //     { "id": 241, "name": "Zambia", "code": "ZM" },
            //     { "id": 242, "name": "Zimbabwe", "code": "ZW" }
            // ],
            error: null
            
        }
    },
    computed:{
        ...mapState({
            isLoading: (state) => state.auth.isLoading,
            validationErrors: (state) => state.auth.errors,
            countries: (state) => state.country.countries,
        })
    },
    created(){
        // for (let i = 0; i < this.countries.length; i++) {
        //     this.countries[i].image = 'https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/' + this.countries[i].code.toLowerCase() + '.svg';
        // },
        this.$store.dispatch('getCountries');
    },
    methods: {
        submitHandler(e){
            
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                password: this.password,
                date_of_birth: this.formatDate(this.date_of_birth),
                country_id: this.selectedCountry.id,
                gender: this.gender,
                employment_status: this.selectedBandlik.id,
                password_confirmation: this.password_confirmation
            }

            this.$store.dispatch('register', data)
            .then(data => {
                this.$router.push({name: 'profile'})
            })
            .catch(data => {
                if(data.status !== 'error' && !data.errors){
                  this.error = "Serverda xatolik yuzaga keldi! Qaytadan urunib ko'ring.";
                }else{
                    this.error = "";
                }
            });
        },

        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            return [year, month, day].join('-');
        }
    },
 }
</script>

<style>
.p-inputtext {
    font-size: 1rem;
    color: #4b5563;
    background: #ffffff;
    padding: 0.41rem 0.75rem;
    border: 1px solid #d1d5db;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    appearance: none;
    border-radius: 6px;
}
.p-dropdown-items {
    padding: 0;
}
.p-dropdown:not(.p-disabled).p-focus{
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0 rgb(104, 177, 238);
    border-color: rgb(104, 177, 238);
}

.p-dropdown:not(.p-disabled):hover{
    border-color: rgb(104, 177, 238);
}

.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
    color: rgb(104, 177, 238);
    background: #F0FDFA;
}
.p-inputtext {
    font-size: 1rem;
    color: #4b5563;
    background: #ffffff;
    padding: 0.41rem 0.75rem;
    border: none;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    appearance: none;
    border-radius: 6px;
}

.captcha {
    -moz-box-align: center;
    align-items: center;
    cursor: pointer;
}

.captcha, .d-flex {
    display: -moz-box;
    display: flex;
    flex-wrap: wrap;
}
.p-calendar:not(.p-calendar-disabled).p-focus > .p-inputtext {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0 rgb(104, 177, 238);
    border-color: rgb(104, 177, 238);
}

.sana{
    border: 1px solid #dee2e6;
    border-radius: 5px;
}
</style>