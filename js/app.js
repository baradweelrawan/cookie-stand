'use strict';
let  hours = ['6 am','7 am' , '8am ','9am', '10 am ','11 am','12pm','1pm' ,'2 pm ','3pm' ,'4 pm', '5pm','6pm','7pm','8pm ']
let salmonCookie = [];
let div =document.getElementById("sales")
//let div =document.getElementById("footer")
let table=document.createElement('table')
div.appendChild(table)
let sumOfTotal=0;
//let totalPerHour= 0

function Cookie (location,seatMin,seatMax,avgCookie)
{
   this.location = location ;
   this.seatMin = seatMin ;
   this.seatMax = seatMax ;
   this.avgCookie = avgCookie ;
   this.randomCustPerHour=[];
   this.salesPerHour=[];
   this.totalPerHour= 0,
  // this.grandTotals=[];

   salmonCookie.push(this);

}
Cookie.prototype.getRandom = function (seatMin ,seatMax)
{
  for (let hour = 0; hour < hours.length; hour++) 
  {
    seatMin = Math.ceil(seatMin);
    seatMax = Math.floor(seatMax);
    this.randomCustPerHour.push(Math.floor(Math.random() * (seatMax - seatMin) + seatMin));
  //  return Math.floor(Math.random() * (seatMax - seatMin) + seatMin);
  }
//  console.log(this.randomCustPerHour)
}
    
Cookie.prototype.customerNum = function ()
{
  for (let j =0 ;j<= hours.length-1 ; j++)
  {
   this.salesPerHour.push(Math.ceil(this. randomCustPerHour[j] * this.avgCookie));
   this.totalPerHour += this.salesPerHour[j];
  // console.log(this.salesPerHour[j])
  }
 //console.log(this.salesPerHour)
 console.log( this.totalPerHour)
}
function tableHead (){
  let tr=document.createElement('tr')
  table.appendChild(tr)
  let td =document.createElement('td')
  tr.appendChild(td)
  td.textContent='Location Name'
  for (let i=0 ;i<=hours.length;i++ )
  {
    let td=document.createElement('td')
    tr.appendChild(td)
    td.textContent=hours[i]
  }
  let td2 =document.createElement('td')
  tr.appendChild(td2)
  td2.textContent='Total Of Total'

}
tableHead()

Cookie.prototype.render = function ()
{
  let tableBody = document.createElement('tr');
  table.appendChild(tableBody);
  let td =document.createElement('td')
  tableBody.appendChild(td)
  td.textContent=this.location
   
  for (let j = 0 ; j <= hours.length ;j++)
  {
   let td01 = document.createElement('td');
   tableBody.appendChild( td01);
   td01.textContent= this.salesPerHour[j];
  }
  let td3 =document.createElement('td')
  tableBody.appendChild(td3)
  td3.textContent=this.totalPerHour

  console.log (this.salesPerHour)
   
}



let Seattle = new Cookie('Seattle', 23,65,6.3);
Seattle.getRandom(23 ,65);
Seattle.customerNum();
Seattle.render();
//tableHead.render();
let Tokyo = new Cookie('Tokyo', 3, 24, 1.2);
Tokyo.getRandom(3 ,24);
Tokyo.customerNum();
Tokyo.render();

let Paris = new Cookie('Paris', 20 , 38 , 2.3);
Paris.getRandom(20,38);
Paris.customerNum();
Paris.render();

let Lima	 = new Cookie('Lima', 2 , 16 ,4.6);
Lima.getRandom(2 ,16);
Lima.customerNum();
Lima.render();
console.log(salmonCookie)
console.log(salmonCookie)


 let storeForm = document.getElementById('storeForm')
storeForm.addEventListener('submit',addNewStore)
function addNewStore(event){
  event.preventDefault();
  table.removeChild(table.lastChild);
  let location = event.target.location.value;
  let seatMin = event.target.seatMin.value;
  let seatMax = event.target.seatMax.value;
  let avgCookie = event.target.avgCookie.value;

  let newStore =new Cookie (location,seatMin,seatMax,avgCookie )
  
 
  newStore.getRandom(20 ,5);
  newStore.customerNum();
  newStore.render();
  tablefooter()
  
}



function tablefooter (){
  let trEl =document.createElement('tr');
  table.appendChild(trEl);
  let td6 =document.createElement('td')
  trEl.appendChild(td6)
  td6.textContent='Total'
 
  for(let i =0 ;i< hours.length ; i++)
  {
    let hourlyTotals =0;
    for (let j=0 ; j<salmonCookie.length ; j++)
    {
     
       hourlyTotals += salmonCookie[j].salesPerHour[i];
       console.log (salmonCookie[j])
       //console.log()
      
          //  console.loge (hourlyTotals)
    }
    let td03=document.createElement('td')
    trEl.appendChild(td03)
    td03.textContent= hourlyTotals
       
  }
  for(let i =0 ;i< salmonCookie.length ; i++)
  {

    sumOfTotal+=salmonCookie[i].totalPerHour;

  }
  
  let td04=document.createElement('td')
  trEl.appendChild(td04)
  td04.textContent=sumOfTotal

}
tablefooter()




