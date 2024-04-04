// Add your code here

function submitData(name,email){
    const url ="http://localhost:3000/users"
    const users ={
        name:name,
        email:email
    }
    const configurationData ={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
        body:JSON.stringify(users),
        }
    return fetch(url,configurationData)
    .then((res) =>res.json())
    .then((data)=>{console.log('user data added successfuly',data)
    appenddata(data)
     return data})
    .catch((error)=>{console.log(error.message)
        appendError(error.message)
    })
}
function appenddata(data){
    const list=document.createElement('li')
    list.className="userData"
    list.innerHTML =`${data.id}`
   document.querySelector('#userContent').appendChild(list)
   }
function appendError(error){
    const errorM =document.createElement('li')
    errorM.className="errorLog"
    errorM.innerHTML=`error in adding user is: ${error}`
    document.querySelector('#userContent').appendChild(errorM)
}
submitData('Ephy','ephywachira89@gmail.com')

