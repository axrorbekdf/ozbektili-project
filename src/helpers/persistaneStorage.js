export const getItem = key => {
    try{
        return JSON.parse(localStorage.getItem(key))
    }catch(error){
        console.log('Error getting Storage data')
        return null;
    }
}

export const setItem = (key, data) => {
    try{
        localStorage.setItem(key, JSON.stringify(data))
    }catch(error){
        console.log('Error setting Storage data')
        return null;
    }
}

export const removeItem = (key) => {
    try{
        localStorage.removeItem(key)
    }catch (error){
        console.log("Error deleting Storage data")
    }
}