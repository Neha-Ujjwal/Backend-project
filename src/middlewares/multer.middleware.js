import multer from "multer";

const storage = multer.diskStorage({
  //here cb is callback function
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); //destination location
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
