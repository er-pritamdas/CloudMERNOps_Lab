// This is also a Way 
const asyncHandler = (requestHandler) => {
    (err, req, res, next) => {
        Promise.resolve(requestHandler(err, req, res, next)).catch((error) => next(error));
    }
}

export {asyncHandler} // This is used to export the asyncHandler function to use it in other files.


// Easy One way 
// This is a wrapper async function that will be used to handle the async functions.
// const asyncHandler = (fn) => 
//     async (err, req, res, next)=>{
//         try{
//             await fn(err, req, res, next);
//         }catch(error){
//             res.status(err.code || 500).json({
//                 success: false,  
//                 message: error.message || "Something went wrong",
//             });
//         }
//     }
