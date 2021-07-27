import storage from "./store"
import ui from "./ui"

class noteData{
    note = storage.getDataFromLocalStorage()
    itemLength = 0

    generateNodeId(){
       let id = 0
       if(this.note.length===0){
          id=0
       }else{
           id = this.note[this.note.length-1].id+1
       }
       return id
    }
    pushDataToNoteArray(dateTime,time,timeFromNow,id,title,description){
       const data = {
           id,
           title,
           description,
           dateTime,
           timeFromNow
       }
       this.note.push(data)
    }
   deleteProductData(id){
       const result = this.note.filter((noteItem)=>{
           return noteItem.id!==id
       })
       this.note=result
   }
   findNote(id) {
       const foundNote = this.note.find((noteItem) => noteItem.id === id)
       if (!foundNote) {
          alert('Your note is not found')
          return
       }
       return foundNote
   }
   updateNoteData(id){
       const{titleElm,descriptionElm} = ui.selectors()
       const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a')
       const time = moment().format()
       const timeFromNow = moment(time).format('m')
       this.note = this.note.map((noteItem) => {
               if (noteItem.id === id) {
               return {
                   ...noteItem,
                   title: titleElm.value,
                   description: descriptionElm.value,
                   dateTime,
                   timeFromNow
               }
               } else {
                 return noteItem
               }
           })
   }
   

}
const data = new noteData()
export default data