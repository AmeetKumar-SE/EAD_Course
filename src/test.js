function delay() {
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            const apiData = "Arre Bhai";
            if(!apiData){
                return reject("Data not Availabe")
            }
            resolve(apiData)
        },4000)
    }
    
    )}

    function delay2() {
        return new Promise((resolve,reject) => {
            setTimeout(function(){
                const apiData = "Arre Bhai";
                if(!apiData){
                    return reject("Data not Availabe")
                }
                resolve(apiData)
            },5000)
        }
        
        )}
  
  async function example() {
    const [answer1, answer2] = await Promise.all([delay(),delay2()])
    console.log(answer1);
    console.log(answer2);
   }
  
   example();

// async function callMe(){ //if you use async this will return with promise
//     return  1 
// }
// console.log(callMe());
// callMe().then(data=>console.log(data)).catch(err=>console.log(err))
    


// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(function(){
//         const apiData = undefined; // do seconds ke bad yeh funtion call krega
//         if(!apiData)
//             return reject("NO Data Available!")
//         resolve(apiData);
//         },4000)
//     })
//     }

//     (async function(){
//         try{
//         const data = await getData();
//         console.log(JSON.parse(data))
        
//         }catch(err){console.log('Error',err)}})();        

// when ever resolve call, it will goes to then fucntion in that,if reject execute it go to catch block
//getData().then(res=>JSON.parse(res)).then(res=>console.log(res['name'])).catch(err =>{console.log(err)})



// function getData(callback){
//     console.log('Before');
//     setTimeout(function(){
//     const apiData = {name: "Ahmar", age:21} // do seconds ke bad yeh funtion call krega
//     callback(apiData) // this will set data to function
//     },2)
//     console.log('After')
// }

// const cb = function(data){ //nested callback //Callback Hell
//     console.log('Response',data)
//     cb(data)
//     }

// getData(cb);

// function getData(callback){
//     console.log('Before');
//     setTimeout(function(){
//     const apiData = {name: "Ahmar", age:21} // do seconds ke bad yeh funtion call krega
//     callback(apiData) // this will set data to function
//     },4000)
//     console.log('After')
//     }
            
//     getData(function(data){
//     console.log('Response:',data)
//     });


// function getData2(callback){
// console.log('Before2');
// setTimeout(function(){
// const apiData = {name: "Ahmar2", age:21} // do seconds ke bad yeh funtion call krega
// callback(apiData) // this will set data to function
// },4000)
// console.log('After2')
// }
        
// getData2(function(data){
// console.log('Response2:',data)
// });