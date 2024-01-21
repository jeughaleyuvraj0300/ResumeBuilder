function addSkillsField(){
    let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("skillsfield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder", "Enter Here")

    let skOb=document.getElementById("sk");
    let skillsAddButtonOb=document.getElementById("skillsAddButton");

    skOb.insertBefore(newNode, skillsAddButtonOb);
}

function addProjectField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("Projectfield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder", "Enter Here")

    let prOb=document.getElementById("pr");
    let ProjectAddButtonOb=document.getElementById("ProjectAddButton");

    prOb.insertBefore(newNode, ProjectAddButtonOb);
}

function addnewWEField(){
    //console.log("Adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder", "Enter Here")

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder", "Enter Here")

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating CV
function generatecv(){
    console.log("Adding new field");
   // name
//    let namefield=document.getElementById("namefield").value;
//    let nameT1=document.getElementById('nameT1')

  // nameT1.innerHTML = namefield;
   //name2
   let namefield=document.getElementById("namefield").value;
   let nameT2=document.getElementById('nameT2')
   nameT2.innerHTML = namefield;
   //document.getElementById('nameT2').innerHTML = namefield;

    //contact
   let contactfield=document.getElementById("contactfield").value;
   let contactT=document.getElementById('contactT')

   contactT.innerHTML = contactfield;
    //address
   let addressfield=document.getElementById("addressfield").value;
   let addressT=document.getElementById('addressT')

   addressT.innerHTML = addressfield;

   //image
   let file = document.getElementById('imgfield').files[0];

   let reader = new FileReader()
   reader.readAsDataURL(file);

   reader.onloadend = function(){
    document.getElementById("imgT").src= reader.result;
   }

   //facebook
   document.getElementById('fbT').innerHTML = document.getElementById('fbfield').value;

   //instagram
   document.getElementById('instaT').innerHTML = document.getElementById('instafield').value;

   //linkdin
   document.getElementById('liT').innerHTML = document.getElementById('lifield').value;

   //objective
   document.getElementById('objectiveT').innerHTML = document.getElementById('objectivefield').value;

   //skills
   let sks=document.getElementsByClassName('skillsfield')
   let skr='';

   for(let e of sks)
   {
    skr = skr + `<li>${e.value}</li>`;
   }
   document.getElementById('skillsT').innerHTML = skr;

   //working experience
   let wes=document.getElementsByClassName('wefield')
   let str='';

   for(let e of wes)
   {
    str = str + `<li>${e.value}</li>`;
   }
   document.getElementById('weT').innerHTML = str;

   //Projects
   let prs=document.getElementsByClassName('projectfield')
   let str2='';

   for(let e of prs)
   {
    str2 = str2 + `<li>${e.value}</li>`;
   }
   document.getElementById('projectT').innerHTML = str2;
   
   //academic qualification

   let aqs=document.getElementsByClassName('aqfield')
   let str1='';

   for(let a of aqs)
   {
    str1 += `<li>${a.value}</li>`;
   }
   document.getElementById('aqT').innerHTML = str1;

   document.getElementById('cv-form').style.display='none'
   document.getElementById('cv-template').style.display= 'block'
}

function printCV(){
    window.print();
}