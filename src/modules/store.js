class Store{
    getDataFromLocalStorage(){
       let items = ''
       if(localStorage.getItem('notesItem') === null){
          items=[]
       }else{
        items = JSON.parse(localStorage.getItem('notesItem'))
       }
       return items
    }
    
     saveDataLocalStorage(item){
        let items = ''
        if(localStorage.getItem('notesItem') === null){
           items=[]
           items.push(item)
           localStorage.setItem('notesItem',JSON.stringify(items))
        }else{
           items = JSON.parse(localStorage.getItem('notesItem'))
           items.push(item)
           localStorage.setItem('notesItem',JSON.stringify(items))
        }
    }
     deleteItemFromLocalStorage(id){
       const items  =  JSON.parse(localStorage.getItem('notesItem'))
       const result = items.filter((noteItem)=>{
           return noteItem.id!==id
       })
       localStorage.setItem('notesItem',JSON.stringify(result))
       if(result.length===0){
           location.reload()
       }
   }
}
const storage = new Store()
export default storage