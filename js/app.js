'use strict';
let  hours = ['6 am','7 am' , '8am ','9am', '10 am ','11 am','12pm','1pm' ,'2 pm ','3pm' ,'4 pm', '5pm','6pm','7pm','8pm ']
let Seattle ={
    location : 'Seattlee', 
    seatMin :23 ,
    seatMax: 65,
    avgCookie: 6.3,
    totalPerHour: 0,
    //customerPerHour: function (min, max) {
     //   min = Math.ceil(min);
    //    max = Math.floor(max);
     //   this.hours = Math.floor(Math.random() * (max - min + 1) + min);
    //} ,
   // getRandomInt:function (max) {
    //    return Math.floor(Math.random() * max);
    //  },
randomnum :[],
    getRandom:function (seatMin, seatMax) {
      for (let hour = 0; hour < hours.length; hour++) 
      {
        seatMin = Math.ceil(seatMin);
        seatMax = Math.floor(seatMax);
        this.randomnum.push(Math.floor(Math.random() * (seatMax - seatMin) + seatMin));
      //  return Math.floor(Math.random() * (seatMax - seatMin) + seatMin);
      }
      //The maximum is exclusive and the minimum is inclusive
    },
   customerNum :[],
   getcutstmerNum :function (){
       for (let j =0 ;j<=  hours.length; j++)
       {
        this.customerNum.push(Math.ceil(this. getRandom[j] * this.avgCookie));
        this.totalPerHour += this.randomnum[j];
       // Seattle.getRandom(this.seatMin,this.seatMax);
        //let numCookies = Math.floor(Math.random() * Seattle.avgCookie);
       // Seattle.customerNum.push(numCookies[j]);
        //return [numCookies[j]];
        //console.log(Seattle.getRandom(this.seatMin,this.seatMax));
       // return [numCookies[j]];
       }
    
//Seattle.getcutstmerNum() ;

},


   //customerNum.push(getRandom)

 
 //  customerNum.push(getRandom);
//}

//Seattle.getcutstmerNum() ;

//getRandom:function (min, max) {
//    min = Math.ceil(min);
//    max = Math.floor(max);
//    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
//  },

render: function () {
    let divEl = document.getElementById('SalmonCookie');
    // let articleEl = document.createElement('article');
    // divEl.appendChild(articleEl);
     let h1El =document.createElement('h1');
     divEl.appendChild(h1El);
     h1El.textContent= this.location;
    //let imgEl = document.createElement('img');
    //articleEl.appendChild(imgEl);
   // imgEl.setAttribute('src','images/salmon.png');
    let ulEl = document .createElement('ul');
    // articleEl.appendChild(ulEl);
    for (let i =0 ; i <=hours.length ; i++)
    {
         let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${hours[i]}:${this.customerNum[i]} cookies`
   }
    
    let imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src', 'images/salmon.png');
   // renderTotal: function () {
   //     let total =  document.createElement('li');

  //  }
}
}
 
Seattle.getcutstmerNum() ;
Seattle. getRandom();
  //Seattle.amountsCookies ();
Seattle.render();
 
 // let  hours = ['6 am','7 am' , '8am ','9am', '10 am ','11 am','12pm','1pm' ,'2 pm ','3pm' ,'4 pm', '5pm','6pm','7pm','8pm ']
let Tokyo ={
      location : 'Tokyoo', 
      seatMin :3 ,
      seatMax: 24,
      avgCookie:1.2,
      randomnum :[],
      totalPerHour: 0,
      randomnum :[],
      getRandom:function (seatMin, seatMax) {
        for (let hour = 0; hour < hours.length; hour++) 
        {
          seatMin = Math.ceil(seatMin);
          seatMax = Math.floor(seatMax);
          this.randomnum.push(Math.floor(Math.random() * (seatMax - seatMin) + seatMin));
        }
          },
          customerNum :[],
          getcutstmerNum :function (){
              for (let j =0 ;j<=  hours.length; j++)
              {
               this.customerNum.push(Math.ceil(this. getRandom[j] * this.avgCookie));
               this.totalPerHour += this.randomnum[j];
              }
        // Tokyo.getcutstmerNum() ;
         
  
     },
   
      render: function () {
      let divEl = document.getElementById('SalmonCookie');
      let h1El =document.createElement('h1');
       divEl.appendChild(h1El);
       h1El.textContent= this.location;
      let imgEl = document.createElement('img');
      divEl.appendChild(imgEl);
       imgEl.setAttribute('src','images/salmon.png')
      let ulEl = document .createElement('ul');
         for (let i =0 ; i <=hours.length ; i++)
      {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${hours[i]}:${this.customerNum[i]} cookies`
     }
      } 
     
  }
   
  Tokyo.getcutstmerNum() ;
  Tokyo. getRandom();
  Tokyo.render();  

  let Dubai ={
    location : 'Dubaii', 
    seatMin :11 ,
    seatMax: 38,
    avgCookie: 3.7,
    totalPerHour: 0,
    randomnum :[],
    getRandom:function (seatMin, seatMax) {
      for (let hour = 0; hour < hours.length; hour++) 
      {
        seatMin = Math.ceil(seatMin);
        seatMax = Math.floor(seatMax);
        this.randomnum.push(Math.floor(Math.random() * (seatMax - seatMin) + seatMin));
      }
      },
        customerNum :[],
        getcutstmerNum :function (){
            for (let j =0 ;j<=  hours.length; j++)
            {
             this.customerNum.push(Math.ceil(this. getRandom[j] * this.avgCookie));
             this.totalPerHour += this.randomnum[j];
            }
      
      // Dubai.getcutstmerNum() ;
          
   },
 
   render: function () {
    let divEl = document.getElementById('SalmonCookie');
    let h1El =document.createElement('h1');
     divEl.appendChild(h1El);
     h1El.textContent= this.location;
    let imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
     imgEl.setAttribute('src','images/salmon.png')
    let ulEl = document .createElement('ul');
       for (let i =0 ; i <=hours.length ; i++)
    {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:${this.customerNum[i]} cookies`
   }
    } 
   
}
 
Dubai.getcutstmerNum() ;
Dubai. getRandom();
Dubai.render();  




let Paris ={
    location : 'Paris', 
    seatMin :20 ,
    seatMax: 38,
    avgCookie: 2.3,
    totalPerHour: 0,
    randomnum :[],
    getRandom:function (seatMin, seatMax) {
      for (let hour = 0; hour < hours.length; hour++) 
      {
        seatMin = Math.ceil(seatMin);
        seatMax = Math.floor(seatMax);
        this.randomnum.push(Math.floor(Math.random() * (seatMax - seatMin) + seatMin));
      }
        },
        customerNum :[],
        getcutstmerNum :function (){
            for (let j =0 ;j<=  hours.length; j++)
            {
             this.customerNum.push(Math.ceil(this. getRandom[j] * this.avgCookie));
             this.totalPerHour += this.randomnum[j];
            }
      
      //  Paris.getcutstmerNum() ;
         

   },
 
   render: function () {
    let divEl = document.getElementById('SalmonCookie');
    let h1El =document.createElement('h1');
     divEl.appendChild(h1El);
     h1El.textContent= this.location;
    let imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
     imgEl.setAttribute('src','images/salmon.png')
    let ulEl = document .createElement('ul');
       for (let i =0 ; i <=hours.length ; i++)
    {
      //   let liEl = document.createElement('li');
     //  ulEl.appendChild(liEl);
       
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${hours[i]}:${this.customerNum[i]} cookies`
   }
    } 
   
}
 
Paris.getcutstmerNum() ;
Paris. getRandom();
Paris.render();  

let Lima ={
    location : 'Lima', 
    seatMin :2	 ,
    seatMax: 16	,
    avgCookie: 4.6,
    totalPerHour: 0,
    randomnum :[],
        getRandom:function (min, max) {
       min = Math.ceil(min);
         max = Math.floor(max);
          return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        },
    customerNum :[],
    customerNum :[],
        getcutstmerNum :function (){
            for (let j =0 ;j<=  hours.length; j++)
            {
             this.customerNum.push(Math.ceil(this. getRandom[j] * this.avgCookie));
             this.totalPerHour += this.randomnum[j];
            }
     //  Lima.getcutstmerNum() ;

   },
 
   render: function () {
    let divEl = document.getElementById('SalmonCookie');
    let h1El =document.createElement('h1');
     divEl.appendChild(h1El);
     h1El.textContent= this.location;
    let imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
     imgEl.setAttribute('src','images/salmon.png')
    let ulEl = document .createElement('ul');
       for (let i =0 ; i <=hours.length ; i++)
    {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${hours[i]}:${this.customerNum[i]} cookies`
       // liEl.textContent = hours[i] + ':' + Lima.getcutstmerNum[i] ;
       // ulEl.appendChild(liEl); 
       // return [liEl.textContent];
   }
    } 
   
}
 
Lima.getcutstmerNum() ;
Lima. getRandom();
Lima.render();  

  







