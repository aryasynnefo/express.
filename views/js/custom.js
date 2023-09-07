
document.getElementById("task")
async function displayUser(){
    let sec="";
    fetch("http://localhost:3001/api/display").then((res)=>res.json()).then((data)=>{
        data.reverse().forEach(d=>{
       
          sec+=`<section class="sec" id="sec">
          <div class="col1">${d.name}</div>
          <div class="col2">
            <span class="material-symbols-outlined" onClick="deleteUser('${d.name}')">
                close
                </span>
          </div>
      </section>`;
        })
      document.getElementById("display").innerHTML=sec;
    }).catch((error)=>{
      console.log(error);
    })
   
}


displayUser();

add.addEventListener("click",()=>{
  if(task.value!=''){
    convertToBase64(task.files[0].then((dt)=>{
      fetch("http://localhost:3001/api/add",{method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
  date:Date.now(),
  name:dt
})

}).then(()=>{
  displayUser();
}).catch((error)=>{
  console.log(error);
})
task.value='';
    }).catch((error)=>{
      console.log(error);
    })
)}
  else{
    alert("must add task")
}
})
//   else{
//     alert("task should be added!")
//   }
// task.value='';
// })


function  deleteUser(param){
  console.log(("for delete :"+param));
  fetch(`http://localhost:3001/api/delete/${param}`,{method:"DELETE",
  headers:{"Content-Type":"application/json"}
  }).then(()=>{
    displayUser();
  }).catch((e)=>{
    console.log(e);
  })
}


function convertToBase64(file){
  return new Promise((resolve,reject)=>{
    const fileReader=new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload=()=>{
      resolve(fileReader.result);
    }
    fileReader.onerror=()=>{
      reject(error); 
    }
  })
}