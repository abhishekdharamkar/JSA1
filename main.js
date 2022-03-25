
const url = "https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5";
var dataarr=[];//array 
async function getData(url){
    await fetch(url).then((data)=>{
        return data.json();
    }).then((objdata)=>{
        if (objdata) {
            hideloader();
        }
        // console.log(objdata);
        objdata.map((values)=>{
            dataarr.push(values);
        })
       
        tableData(dataarr);
        getUserData(0);
    }).catch((err)=>{
        alert("Problem Fetching User Data ! :( ");
        console.log(err);
    })
    }
    getData(url);
// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
    //document.getElementById('loading1').style.display = 'none';
}

    function tableData(dataarr){
        if (dataarr) {
            hideloader();
        }
        var data = "";
        for (let i = 0; i < dataarr.length; i++) {
            console.log()
            data+="<tr onClick=getUserData("+i+")>";
            data+="<td>"+dataarr[i].first_name+"</td>";
            data+="<td>"+dataarr[i].last_name+"</td>";
            data+="<td>"+dataarr[i].username+"</td>";
            data+="<td>"+dataarr[i].employment.title+"</td>";
            data+="<td>"+dataarr[i].address.country+"</td>";
            data+="<td onClick=deleteUser("+i+")><i class='fa fa-trash-o' style='font-size:40px;color:tomato;cursor:pointer'></i></td>"
          
            data+="</tr>";
    }
    document.getElementById("table_body").innerHTML = data;
    }

    // <i class="bi bi-x-circle-fill"></i>
   function deleteUser(del){


    for(let i=0;i<dataarr.length;i++){
        if(del===i){
            dataarr.splice(i,1);
            tableData(dataarr);
        }
    }
 }
   
function greeting() {
    const d = new Date();
    let hour = d.getHours();
    console.log("h",hour);
    var event;
    if (hour > 12 && hour < 17) {
        event = "Good Afternoon"
    }
    else if (hour >= 6 && hour <= 12) {

        event = "Good Morning"
    }
    else if (hour >= 17 && hour <= 22) {
        event = "Good Evening"
    }
   
    document.getElementById("msg").innerText = event;
   
}

// window.onload=getUserData(0);
function getUserData(rd){
    console.log("Name"+rd);
    
    
      
        
        
            for(let i=0;i<dataarr.length;i++){
            if(i==rd){
            greeting()
            document.getElementById("emp-name").innerText = dataarr[i].first_name;
            document.getElementById("Avatar").src = dataarr[i].avatar; 
       
          
          document.getElementById("id").innerHTML = `${dataarr[i].id}`;
			document.getElementById("uid").innerHTML = `${dataarr[i].uid}`;
			document.getElementById("pass").innerHTML = `${dataarr[i].password}`;  
			document.getElementById("uname").innerHTML = `${dataarr[i].first_name} ${dataarr[i].last_name}` ;
			document.getElementById("usrname").innerHTML = `${dataarr[i].username}`;
			document.getElementById("email").innerHTML = `${dataarr[i].email}`;
			document.getElementById("gn").innerHTML = `${dataarr[i].gender}`;
			document.getElementById("phone").innerHTML = `${dataarr[i].phone_number}`  ;
			document.getElementById("sin").innerHTML = `${dataarr[i].social_insurance_number}`  ;
			document.getElementById("dob").innerHTML = `${dataarr[i].date_of_birth}`  ;
			document.getElementById("title").innerHTML = `${dataarr[i].employment.title}` ;
			document.getElementById("skill").innerHTML = `${dataarr[i].employment.key_skill}`  ;
			document.getElementById("address").innerHTML = `${dataarr[i].address.city}, ${dataarr[i].address.state}, ${dataarr[i].address.country}`  ;
			document.getElementById("ccn").innerHTML = `${dataarr[i].credit_card.cc_number}`   ;
			document.getElementById("ss").innerHTML = `${dataarr[i].subscription.status}`   ;
		
           
          }
        }
}


