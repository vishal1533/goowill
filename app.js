class UI{
  constructor(arr,pauseTime,currentWord=0){
    this.arr=arr;
    this.pauseTime=pauseTime;
    this.currentWord=Math.floor(Math.random()*(this.arr.length));
    this.tempString='';
    this.isDeleting=false;
  }

   type(){
     this.pauseTime=300;
     if(!this.isDeleting)
     {
       this.tempString=this.arr[this.currentWord].substring(0,this.tempString.length+1);
     } else{
       this.tempString=this.arr[this.currentWord].substring(0,this.tempString.length-1);
       this.pauseTime=150;
     }

     if(this.tempString==this.arr[this.currentWord])
     {
       this.isDeleting=true;
       this.pauseTime=2000;
     }

     if(this.tempString==="")
      {
       this.isDeleting=false;
       this.currentWord=Math.floor(Math.random()*(this.arr.length));
       this.pauseTime=300;
     }
     document.querySelector("#array").innerHTML=this.tempString;
    setTimeout(()=>{
      this.type();
    },this.pauseTime);
  }
}

document.addEventListener("DOMContentLoaded",mouseEffect);

function mouseEffect(e){
  fetch("data.json").then(res=>res.json()).then(arr=>{
    let pauseTime=300;
    const obj= new UI(arr,pauseTime,0);
    obj.type();
  });
}



// call the settime out function at last
// get the current currentWord
// get each letter of word and print
// check if word is complete
// if not repeat
// else start deleting
// after delete jump to next word
