export default function guest ({ next, store }){
    
    if(store.state.auth.isLoggedIn){
    
        return next({
           name: 'home'
        })
    }
   
    return next()
}