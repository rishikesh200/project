const form=document.getElementById('form')
const uname=document.getElementById('uname')
const mail=document.getElementById('mail')
const pwd=document.getElementById('pwd')
const cpwd=document.getElementById('cpwd')

form.addEventListener('submit',(e)=>{
   if(!valid()){
    e.preventDefault()
    
   }
})
 function valid(){
    const unamev=uname.value
    const mailv=mail.value
    const pwdv=pwd.value
    const cpwdv=cpwd.value
    let don=true

    if(unamev===''){
        don=false
        seteror(uname,'enter user name');
    }
    else{
        setsuces(uname)
    }
    if(mailv===''){
        don=false
        seteror(mail,'Enter valid email')
    }
    else{
        setsuces(mail)
    }
    if(pwdv.length<8){
        don=false
        seteror(pwd,'min length 8')
    }
    else{
        setsuces(pwd)
    }
    if(!(cpwdv==pwdv)){
        don=false
        seteror(cpwd,'enter valid password')
    }
    else{
        setsuces(cpwd)
    }
    return don
 }
 function seteror(el,ms){
    const pe=el.parentElement;
    const erel=pe.querySelector('.eror')
    erel.innerText=ms

    el.classList.add('err')
    el.classList.remove('sus')
 }
 function setsuces(el){
    const pe=el.parentElement;
    const erel=pe.querySelector('.eror')
    erel.innerText=''

    el.classList.add('sus')
    el.classList.remove('err')
 }