// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public/upload")
//     },
//     filename: function (req, filewe, cb) {
//         cb(null, new Date().toISOString() + '_' + file.originalname)
//     }
// })
// const fileFilter = (req, file, cb)=>{
//     if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
//         cb(null, true)
//     }else{
//         {'error:', "unsported file format"}
//         false
//     }
// }
// const upload = multer({
// storage,
// limits:{fileSize: 1024 * 1024},
// fileFilter
// })

// export default upload  