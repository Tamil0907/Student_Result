

let v1 = []
let v2 = []
let v3 = []
let v4 = []
let v5 = []
let v6 = []
let v7 = []
let v8 = []
let v9 = []
let v10= []
let v11= []

new1.style.display="none"
new3.style.display="none"


function result1()
 
 {
  
    var tv1 =document.getElementById("tv1").value
    var tv2=document.getElementById("tv2").value
    var tv3=document.getElementById("tv3").value

    var tv4=document.getElementById("tv4").value
    var tv5=document.getElementById("tv5").value
    var tv6=document.getElementById("tv6").value
    var tv7=document.getElementById("tv7").value
    var tv8=document.getElementById("tv8").value

    var tmark=document.getElementById("tv9")
    var avg=document.getElementById("tv10")
    var grd=document.getElementById("tv11")

   if (Number(tv4)>100 || Number(tv5)>100 || Number(tv6)>100 || Number(tv7)>100 || Number(tv8)>100 )
  {
    alert("Please check the value is above 100");
  }
  
   if (!tv1 || !tv2 || !tv3 || !tv4 || !tv5 || !tv6 || !tv7 || !tv8 )
  {
    alert ("please fill the inputs");
    return;
  } 

  tv9.value= (Number(tv4)+Number(tv5)+Number(tv6)+Number(tv7)+Number(tv8));
  tv10.value= (Number( tv9.value)/5);

  if (Number(tv4)>35 && Number(tv5)>35 && Number(tv6)>35 && Number(tv7)>35 && Number(tv8)>35 )
  {
    tv11.value="PASS"
    tv11.style.color="green"
  }

  else 
  {
    tv11.value="FAIL"
    tv11.style.color="red"
  }

  }


function add1()
{

   
    var t1 =document.getElementById("tv1").value
    var t2=document.getElementById("tv2").value
    var t3=document.getElementById("tv3").value

    var t4=document.getElementById("tv4").value
    var t5=document.getElementById("tv5").value
    var t6=document.getElementById("tv6").value
    var t7=document.getElementById("tv7").value
    var t8=document.getElementById("tv8").value

    var tmark=document.getElementById("tv9").value
    var avg=document.getElementById("tv10").value
    var grd=document.getElementById("tv11") .value

    if (!tv1 || !tv2 || !tv3 || !tv4 || !tv5 || !tv6 || !tv7 || !tv8 )
    {
      alert ("please fill the inputs");
      return false;
    } 

   v1.push(t1)
   v2.push(t2)
   v3.push(t3)
   v4.push(t4)
   v5.push(t5)
   v6.push(t6)
   v7.push(t7)
   v8.push(t8)
   v9.push(tmark)
   v10.push(avg)
   v11.push(grd)  


document.getElementById("tv1").value   = "" ;
document.getElementById("tv2").value   = "" ;
document.getElementById("tv3").value   = "" ;
document.getElementById("tv4").value   = "" ;
document.getElementById("tv5").value   = "" ;
document.getElementById("tv6").value   = "" ;
document.getElementById("tv7").value   = "" ;
document.getElementById("tv8").value   = "" ;
document.getElementById("tv9").value   = "" ;
document.getElementById("tv10").value  = "" ;
document.getElementById("tv11").value  = "" ;  

new1.style.display="none"
new3.style.display="none"


}


function view1()
{
  
  
  var table=`

            <tr id="new1">
            <td>S.NO</td>
            <td>Student Name</td>
            <td>Student R.N</td>
            <td>Student class</td>
            <td>Tamil mark</td>
            <td>English mark</td>
            <td>Maths mark</td>
            <td>Science mark</td>
            <td>Social mark</td> 
            <td>Total mark</td>
            <td>Average mark</td>
            <td>Grade</td>
            <td>Edit & Delete & Update</td>
            </tr> `

  
      for (let i=0;i<v1.length;i++)
  {
    
 table+= " <tr id='new3'> <td>"+Number(i+1)+" </td>  <td>"+v1[i]+" </td> <td> "+v2[i]+" </td> <td> "+v3 [i]+" </td> <td>"+v4 [i]+" </td>      <td> "+v5 [i]+"</td> <td> "+v6 [i]+" </td>        <td> "+v7 [i]+"</td>       <td>"+v8 [i]+" </td><td> "+v9 [i]+"</td>  <td>"+v10 [i]+" </td>    <td id='gr'> "+v11 [i]+"</td>  <td>  <button id='b4' onclick='edit1("+i+")' > Edit</button>  <button id='b5' onclick='delete1("+i+")'>Delete </button> <button id='b6' onclick='update1("+i+")'>update </button> </tr>"
             
  }
     /* table+='</table' */
document.getElementById("tab2").innerHTML=table



}


function delete1(i)

{
    v1.splice (i,1)
    v2 .splice(i,1)
    v3 .splice(i,1)
    v4 .splice(i,1)
    v5 .splice(i,1)
    v6 .splice(i,1)
    v7 .splice(i,1)
    v8 .splice(i,1)
    v9 .splice(i,1)
    v10.splice(i,1)
    v11.splice(i,1)
    
    view1()

}


function edit1(i)
{
 

    document.getElementById("tv1").value   = v1[i]
    document.getElementById("tv2").value   = v2[i]
    document.getElementById("tv3").value   = v3[i]
    document.getElementById("tv4").value   = v4[i]
    document.getElementById("tv5").value   = v5[i]
    document.getElementById("tv6").value   = v6[i]
    document.getElementById("tv7").value   = v7[i]
    document.getElementById("tv8").value   = v8[i]
    document.getElementById("tv9").value   = v9[i]
    document.getElementById("tv10").value  = v10[i]
    document.getElementById("tv11").value  = v11[i] 
}


function update1(i)
{
 
  let t1 =document.getElementById("tv1").value
  let t2=document.getElementById("tv2").value
  let t3=document.getElementById("tv3").value
  let t4=document.getElementById("tv4").value
  let t5=document.getElementById("tv5").value
  let t6=document.getElementById("tv6").value
  let t7=document.getElementById("tv7").value
  let t8=document.getElementById("tv8").value
  let tmark=document.getElementById("tv9").value
  let avg=document.getElementById("tv10").value
  let grd=document.getElementById("tv11") .value

  v1.splice (i,1,t1)
  v2 .splice(i,1,t2)
  v3 .splice(i,1,t3)
  v4 .splice(i,1,t4)
  v5 .splice(i,1,t5)
  v6 .splice(i,1,t6)
  v7 .splice(i,1,t7)
  v8 .splice(i,1,t8)
  v9 .splice(i,1,tmark)
  v10.splice(i,1,avg)
  v11.splice(i,1,grd)
  
  view1()

    document.getElementById("id1").value   = "" ;
    document.getElementById("tv1").value   = "" ;
    document.getElementById("tv2").value   = "" ;
    document.getElementById("tv3").value   = "" ;
    document.getElementById("tv4").value   = "" ;
    document.getElementById("tv5").value   = "" ;
    document.getElementById("tv6").value   = "" ;
    document.getElementById("tv7").value   = "" ;
    document.getElementById("tv8").value   = "" ;
    document.getElementById("tv9").value   = "" ;
    document.getElementById("tv10").value  = "" ;
    document.getElementById("tv11").value  = "" ;  


   
}























