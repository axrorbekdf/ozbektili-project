export const gettersTypes = {
    // Auth
    currentUser: '[auth] currentUser',
    isLoggedIn: '[auth] isLoggedIn',
    isAnonymous: '[auth] isAnonymous',
    validationError: '[auth] validationError',

    //news
    news: '[news] news',
    show: '[news] show',
    error: '[news] error',

    //country
    countries: '[country] countries',
    countries_stat: '[country] countries_stat',
    countryError: '[country] error',

    //exercises
    exercises: '[exercises] exercises',
    exerciseError: '[exercises] error',

     //modules
     modules: '[modules] modules',
     one_module: '[modules] one_module',
     moduleError: '[modules] error',

     //student
    student_modules: '[student] student_modules',
    student_units: '[student] student_units',
    studentError: '[student] error',
} 