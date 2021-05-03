'use strict';
let  hours = ['6 am','7 am' , '8am ','9am', '10 am ','11 am','12pm','1pm' ,'2 pm ','3pm' ,'4 pm', '5pm','6pm','7pm','8pm ']
let salmonCookie = [];
function Cookie (location,seatMin,seatMax,avgCookie)
{
   this.location = location ;
   this.seatMin = seatMin ;
   this.seatMax = seatMax ;
   this.avgCookie = avgCookie ;
   this.randomCustPerHour=[];
   this.salesPerHour=[];
   this.totalPerHour= 0,
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
  console.log(this.randomCustPerHour)
}
    
Cookie.prototype.customerNum = function ()
{
  for (let j =0 ;j<= hours.length-1 ; j++)
  {
   this.salesPerHour.push(Math.ceil(this. randomCustPerHour[j] * this.avgCookie));
   this.totalPerHour += this.salesPerHour[j];
  }
  console.log(this.salesPerHour)
}
Cookie.prototype.DailyLocationTotal = function ()
{
  for(let r=0 ; r<= hours.length ;r++ )
  {
    this.DailyTotal = totalPerHour[r] +totalPerHour[loca];
    //this.total = 
  }
  console.log(this.DailyTotal)
}
Cookie.prototype.LocationTotal = function ()
{
  for (let loca =0 ; loca <= this.location ;loca++)
  {
    this.TotalOfLocation = totalPerHour[loca];
    
  }
  console.log(this.TotalOfLocation)
}



Cookie.prototype.render = function ()
{
  let divEl = document.getElementById('SalmonCookie');
  let h1El =document.createElement('h1');
  divEl.appendChild(h1El);
  h1El.textContent= this.location;
  let ulEl = document.createElement('ul');
  divEl.appendChild(ulEl);
  for (let i =0 ; i <=hours.length ; i++)
    {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${hours[i]}:${this.salesPerHour[i]} cookies`
   }
 let tableEl = document.createElement('table');
 divEl.appendChild( tableEl); 
 let trEl =document.createElement('tr');
 tableEl.appendChild(trEl);
 for (let hou =0 ; hou <= hours.length ; hou++)
 {
   let thEl1 =document.createElement('th');
   thEl1.textContent =hours[hou];
   trEl.appendChild(thEl1) ;
 }
 let trEl2 =document.createElement('tr');
 tableEl.appendChild( trEl2);
 for (let loc =0 ; loc <=this.location ; loc++)
 {
  let thEl2 =document.createElement('th');
  thEl2.textContent =this.location;
  trEl2.appendChild(thEl2) ;
 }
/*
 let thEl0 =document.createElement('th');
 for (let i = 0; i < hours.length ; i++)
  {
   let thEl0 = document.createElement('th')
   thEl0.textContent = this.totalPerHour;
   trEl.appendChild(thEl0) ;
  }
  */
/*

    let liEl = document.createElement('li');
    liEl.textContent = this.likes[i];
    ulEl.appendChild(liEl)
 let thEl01 =document.createElement('th');
 thEl01.textContent = this.location;
 trEl.appendChild(thEl01) ;

 let thEl02 =document.createElement('th');
 thEl02.textContent = this.location;
 trEl.appendChild(thEl02) ;
 */
/*
 let thEl1 =document.createElement('th');
 thEl1.textContent = hours[0];
 trEl.appendChild(thEl1) ;

 let thEl2 =document.createElement('th');
 thEl2.textContent =hours[1];
 trEl.appendChild(thEl2) ;

 let thEl3 =document.createElement('th');
 thEl3.textContent =hours[2];
 trEl.appendChild(thEl3) ;

 let thEl4 =document.createElement('th');
 thEl4.textContent =hours[3];
 trEl.appendChild(thEl4) ;

 let thEl5 =document.createElement('th');
 thEl5.textContent =hours[4];
 trEl.appendChild(thEl5) ;

 let thEl6 =document.createElement('th');
 thEl6.textContent =hours[5];
 trEl.appendChild(thEl6) ;

 let thEl7 =document.createElement('th');
 thEl7.textContent =hours[6];
 trEl.appendChild(thEl7) ;

 let thEl8 =document.createElement('th');
 thEl8.textContent =hours[7];
 trEl.appendChild(thEl8) ;

 
 /*
 let trEl0 =document.createElement('tr');
 tableEl.appendChild(trEl0); 
*/
 let tableBody = document.createElement('tr');
 tableEl.appendChild(tableBody);
 for (let i = 0 ; i <= hours.length-1 ;i++)
 {
  let td1 = document.createElement('td');
  tableBody.appendChild(td1);
  td1.textContent = this.totalPerHour;
 }
 let tableBody2 = document.createElement('tr');
 tableEl.appendChild(tableBody2 );
 for (let i = 0 ; i <= hours.length-1 ;i++)
 {
  let td2 = document.createElement('td');
  tableBody2 .appendChild(td2);
  td2.textContent = this.totalPerHour;
 }

 let tableBody3 = document.createElement('tr');
 tableEl.appendChild(tableBody3 );
 for (let i = 0 ; i <= hours.length-1 ;i++)
 {
  let td3 = document.createElement('td');
  tableBody3 .appendChild(td3);
  td3.textContent = this.totalPerHour;
 }
 let tableBody4 = document.createElement('tr');
 tableEl.appendChild(tableBody4 );
 for (let i = 0 ; i <= hours.length-1 ;i++)
 {
  let td4 = document.createElement('td');
  tableBody4 .appendChild(td4);
  td4.textContent = this.totalPerHour;
 }

 let tableBody5 = document.createElement('tr');
 tableEl.appendChild(tableBody5 );
 for (let i = 0 ; i <= hours.length-1 ;i++)
 {
  let td5 = document.createElement('td');
  tableBody5 .appendChild(td5 );
  td5 .textContent = this.totalPerHour;
 }

 
 /*

 let td2 = document.createElement('td');
 tableBody.appendChild(td2);
 td2.textContent = this.totalPerHour;

 let td3 = document.createElement('td');
 tableBody.appendChild(td3);
 td3.textContent = this.totalPerHour;

 let td4 = document.createElement('td');
 tableBody.appendChild(td4);
 td4.textContent = this.totalPerHour;

 let td5 = document.createElement('td');
 tableBody.appendChild(td5);
 td5.textContent = this.totalPerHour;
 */
}

let Seattle = new Cookie('Seattle', 23,65,6.3);
Seattle.getRandom(23 ,65);
Seattle.customerNum();
Seattle.render();

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
