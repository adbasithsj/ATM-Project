
var balance_amt=10000;
let os=document.getElementById('os');

function del(){
    os.value=os.value.slice(0,-1);
}
function display(txt){
    os.value=os.value+txt;
}

//services
function services_page(){
    window.location.assign("services.html");
}
function services(){
    let pin=document.getElementById('os').value
    if(pin=="1234"){
        window.location.assign("services.html");
        alert("Login Successfully....!");
    }
    else{
        alert("You have entered wrong PIN Number")
        os.value=""
    }
}
function gohome(){
    window.location.assign("index.html")
}
//Balance enquiry
function balance(){
    window.location.assign("balance.html");
}
function balanceamt(){
    
    document.getElementById('balance-amt').innerHTML=`AVALABLE BALANCE : Rs.${balance_amt}`;
}   
//Withdrawel
let os1=document.getElementById('os1');
function display1(txt){
    os1.value=os1.value+txt;
}
function del1(){
    os1.value=os1.value.slice(0,-1);
}

function withdrawel(){
    window.location.assign("withdrawel.html");
}
function withdrawelamt(){
    console.log(balance_amt,os1.value)
    if(os1.value>0){
        document.getElementById('wd').innerHTML=`Your account has been debited for Rs.${os1.value}</br>
        AVALABLE BALANCE : Rs.${balance_amt-os1.value}`;
        os1.value=""
    }
    else{
        alert("Invalid amount")
    }
    
} 
// Deposit
let os2=document.getElementById('os2');
function display2(txt){
    os2.value=os2.value+txt;
}
function del2(){
    os2.value=os2.value.slice(0,-1);
}

function deposit(){
    window.location.assign("deposit.html");
}
function depositamt(){
    console.log(balance_amt,os2.value)
    if(os2.value>0){
        document.getElementById('dp').innerHTML=`Your account credited for Rs.${os2.value}</br>
        AVALABLE BALANCE : Rs.${balance_amt+Number(os2.value)}`;
        os2.value=""
    }
    else{
        alert("Invalid amount")
    }
    
} 

// PIN change
let os3=document.getElementById('os3');
function display3(txt){
    os3.value=os3.value+txt;
}
function del3(){
    os3.value=os3.value.slice(0,-1);
}

function pinchange(){
    window.location.assign("pinchange.html");
}
var pin="1234"
function pincheck(){
    console.log(os3.value)
    let npin=document.getElementById('os3').value
    if(npin!="1234" && npin!==""){
        pin=npin
        console.log(pin)
        alert("your New PIN was successfuly updated")
        os3.value=""
    }
    
    else{
        alert("Please enter new PIN Number")
        os3.value=""
    }
    
} 

    