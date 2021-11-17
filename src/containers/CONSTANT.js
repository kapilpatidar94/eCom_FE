import Banana from './Home/banana.jpg';
import Orange from './Home/orange.jpg';
import Drumstick from './Home/drumstick.jpg';
import Potato from './Home/potato.jpg';

export const  data = [ 

  { 
  
  "name":"Potato", 
  
  "id":1, 
  
  "price":30, 
  
  "available":17, 
  
  "vendor":"Himachal Pvt Ltd", 
  
  "category":"Vegetables" ,
   
  "img": <img src={Potato} width="100%" height="200px"/>,
  
  }, 
  
  { 
  
  "name":"Banana", 
  
  "id":2, 
  
  "price":50, 
  
  "available":10, 
  
  "category":"Fruits",
  
  "vendor": "Organic farms",

  "img": <img src={Banana} width="100%" height="200px"/>,
  
  }, 
  
  { 
  
  "name":"Drumsticks", 
  
  "id":3, 
  
  "price":20, 
  
  "available":0, 
  
  "category":"Vegetables", 
  
  "vendor":"Mallikarjuna farms",

  "img": <img src={Drumstick} width="100%" height="200px" />,
  
  }, 
  
  { 
  
  "name":"Orange", 
  
  "id":4, 
  
  "price":25, 
  
  "available":1, 
  
  "vendor":"Nagpur farms", 
  
  "category":"Fruits" ,

  "img": <img src={Orange} width="100%" height="200px" />,
  
  } 
  
  ] 