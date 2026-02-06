

const asyncHander = (requestHander) =>{
    (req, res, next) =>{
        Promise.resolve(requestHander(req, res, next)).catch((err)=>next(err))
    }
}

export {asyncHander}


// const asyncHander = (fn) = async (req, res, next) =>{
//     try{
//         await fn(req, res, next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }

//wrapper fucntion 


