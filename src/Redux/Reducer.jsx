// const basicReducer = (storedata={
//     name:"shivam",
// },action ) =>{
//     return storedata
// }
// export default basicReducer;

var initialData ={
    name:"shivam"
} 
const basicReducer = (storedata=initialData ,action ) =>{

    if(action.type === "name"){
        return {
            name:action.username,
        }
    }
    return storedata
}
export default basicReducer;