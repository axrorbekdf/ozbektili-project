export default function auth ({ next, store }){

    store.dispatch('getUser')
    .then(response => {
       return next();
    })
    .catch(error => {
        return next({
            name: 'login'
        })
    });
    
    // if(!store.state.auth.isLoggedIn){
    //     return next({
    //        name: 'login'
    //     })
    // }
   
    // return next()
}