

// Async: setTimeout , setInterval, fetch, XMLHttpRequest (viet truoc nhung ko xong truoc)
// Async: file reading , request animation frame

//Promise of ASync: Call back hell, pyramid of Doom 
//Promise: 
var promise = new Promise( // 1. Khoi tao
    //2. Executor
    function(resolve, reject){ 
        //Logic: Ok = resolve, not = reject, khong khai bao = Memory leak

        // reject('Sai');

        // resolve([
        //     {
        //         id: 199,
        //         name: 'tqt'
        //     }
        // ]);

        resolve();
        
    }
);

// Status:
// 1.Pending: Waiting Status -> Memory leak
// 2.Fullfilled: Resolve
// 3.Reject

promise
    // .then(function(person){ //resolve
    //     console.log(person)        
    // })

    // .then(function(){ 
    //     console.log(0) 
    //     return new Promise(function(resolve, reject){
    //         reject('Loi cmnr');
    //     });  
    // })

    .then(function(){ 
        // No return -> Chay xuong promise duoi  
        return 1;  
    })

    .then(function(num){ 
        console.log(num) 
        return 3;       
    })
    .then(function(num){ 
        console.log(num) 
        return 5;       
    })

    .catch(function(error){ //reject
        console.log(error)
    }) 
    .finally(function(){ //1 of 2
        console.log('Done')
    }) 

