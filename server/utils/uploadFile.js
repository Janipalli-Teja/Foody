const multer=require('multer');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix= Date.now()+'-'+file.originalname;
        cb(null,file.fieldname+'-'+uniqueSuffix);
    }

})
const upload=multer({storage:storage});

module.exports= upload;