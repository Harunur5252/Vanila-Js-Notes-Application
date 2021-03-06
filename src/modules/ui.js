import data from "./data"
import storage from "./store"

// show on ui
class UI{
    // all selectors
    selectors(){
        const header_3ELm = document.querySelector('#header_3')
        const cNBtnElm = document.querySelector('#cBtn')
        const titleElm = document.querySelector('#title')
        const descriptionElm = document.querySelector('#description')
        const sBtnELm = document.querySelector('#sBtn')
        const formElm = document.querySelector('form')
        const dFormElm = document.querySelector('#dForm')
        const wrMsgElm = document.querySelector('#wrMsg')
        const insertElm = document.querySelector('#insert')
        const searchElm = document.querySelector('#search')
        const msgElm   = document.querySelector('#msg')
        const showMsgElm   = document.querySelector('#showMsg')
        const gbBtnElm   = document.querySelector('#gbBtn')
        const newNoteTitleElm   = document.querySelector('#newNoteTitle')
        const noNoteMsgElm   = document.querySelector('#noNoteMsg')

        return {
            header_3ELm,cNBtnElm,titleElm,descriptionElm,sBtnELm,formElm,dFormElm,wrMsgElm,insertElm
            ,searchElm,msgElm,showMsgElm,gbBtnElm,newNoteTitleElm,noNoteMsgElm
        }
    }
    // initial state from here
    loadAllEventListener(){
        const{sBtnELm,insertElm,cNBtnElm,searchElm} = this.selectors()
        sBtnELm.addEventListener('click',(e)=>this.addNote(e))
        window.addEventListener('DOMContentLoaded',(e)=>this.getData(data.note))
        insertElm.addEventListener('click',(e)=>this.deleteOrModifyNoteData(e))
        cNBtnElm.addEventListener('click',()=>this.otherItemRemove())
        searchElm.addEventListener('keyup',(e)=>this.searchNoteItem(e))
    }
    invalidInput(){
        const{wrMsgElm,newNoteTitleElm} = this.selectors()
            newNoteTitleElm.style.display='none'
            wrMsgElm.style.display='block'
            wrMsgElm.style.color='red'
            setTimeout(()=>{
                wrMsgElm.style.display='none'
                newNoteTitleElm.style.display='block'
            },2000)
    }    
    // show error msg and 
    showMessage(msg=''){
        const{msgElm,showMsgElm,} = this.selectors()
        msgElm.style.display='block'
        showMsgElm.textContent=msg
        showMsgElm.style.color='red'
    }
    // create a new note and box
    getData(notes){
        const{insertElm,noNoteMsgElm} = this.selectors()
        let elm = ''
        if(notes.length>0){
            notes.forEach(element => {
                        elm = `<div class="p-2 find" id=note-${element.id}>
                        <span class="titleCl" id="nTitle">${element.title}</span>
                        <p class="text-center box mb-2" id="nDes">
                            ${element.description}
                        </p>
                        <a class="btn btn-primary btn-sm" id="note-edit" title="Edit">Edit</a>
                        <a class="btn btn-danger  btn-sm" id="note-delete" title="Delete">Delete</a>
                            ${element.dateTime} ${element.timeFromNow}
                    </div>`
                    insertElm.insertAdjacentHTML('beforeend',elm)
                    });
        }else{
            noNoteMsgElm.style.display='block'
        }
       
        
    }
    resetValue(){
        const{titleElm,descriptionElm} = this.selectors()
        titleElm.value=''
        descriptionElm.value=''
    }
    // adding note
    addNote(e){
        const{titleElm,descriptionElm,insertElm} = this.selectors()
        e.preventDefault()
        const title = titleElm.value
        const description = descriptionElm.value
        const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a')
        const time = moment().format()
        const timeFromNow = moment(time).format('m')
        const id = data.generateNodeId()
        if(title === '' || description === ''){
            this.invalidInput()
        }else{
            data.pushDataToNoteArray(dateTime,time,timeFromNow,id,title,description)
            insertElm.innerHTML=''
            this.getData(data.note)
            storage.saveDataLocalStorage({dateTime,time,timeFromNow,id,title,description})
            this.resetValue()
        }
    }
    // edit noteItem
    populateEditItem(foundNote) {
        const{titleElm,descriptionElm,formElm,cNBtnElm,gbBtnElm,header_3ELm,dFormElm,sBtnELm} = this.selectors()
        titleElm.value = foundNote.title
        descriptionElm.value = foundNote.description
        dFormElm.style.display='block'
        sBtnELm.style.display = 'none'
        const updateBtn =
            "<button type='button' class='btn btn-primary update-note'>update</button>"
        formElm.insertAdjacentHTML('beforeend', updateBtn)
        // header_3ELm.style.display='none'
        // cNBtnElm.style.display='none'
        gbBtnElm.style.display='block'
        gbBtnElm.onclick=function(){
            location.reload()
        }
    }
    // update noteItem
    updateNoteItem(id){
        const{titleElm,descriptionElm,insertElm,sBtnELm} = this.selectors()
        document.querySelector('.update-note').addEventListener('click',(e)=>{
            e.preventDefault()
            const title = titleElm.value
            const description = descriptionElm.value
            if(title === '' || description === ''){
            this.invalidInput()
            }else{
                data.updateNoteData(id)
            }
            insertElm.innerHTML=''
            this.getData(data.note)
            titleElm.value = ''
            descriptionElm.value = ''
            sBtnELm.style.display = ''
            document.querySelector('.update-note').remove()
            //save updated array to localStorage
            localStorage.setItem('notesItem', JSON.stringify(data.note))
        }) 
    }
    // delete or modify note data
    deleteOrModifyNoteData(e){
        const target = e.target.parentElement
        let id = Number(target.id.split('-')[1])
        if(e.target.id === 'note-delete'){
            e.target.parentElement.remove()
            data.deleteProductData(id)
            storage.deleteItemFromLocalStorage(id)
        }else if(e.target.id === 'note-edit'){
            const foundNote = data.findNote(id)
            this.populateEditItem(foundNote)
            e.target.style.display='none'
            this.updateNoteItem(foundNote.id)
        }
    }
    otherItemRemove(){
        const{dFormElm,header_3ELm,cNBtnElm,gbBtnElm} = this.selectors()
        dFormElm.style.display='block'
        header_3ELm.remove()
        cNBtnElm.remove()
        gbBtnElm.style.display='block'
        gbBtnElm.onclick=function(){
            location.reload()
        }
    }
    searchNoteItem(e){
        const text = e.target.value.toLowerCase()
        let itemLength = 0
        document.querySelectorAll('#insert .find').forEach((item)=>{
            const nameOfNote = item.firstElementChild.textContent.toLowerCase()
            console.log(nameOfNote)
            if(nameOfNote.indexOf(text)===-1){
                item.style.display='none'
            }else{
                item.style.display='block'
                itemLength++
            }
        })
        if(itemLength>0){
            this.showMessage()
        }else{
            this.showMessage('No note item found')
        }
    }
}

const ui = new UI()
export default ui