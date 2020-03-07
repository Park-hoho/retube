import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL, // 어디에 Database가 저장되어 있는지 알려주는 코드
  {
    useNewUrlParser: true,
    useFindAndModify: false // Configuration을 사용 안함으로 해
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✔ Connect to DB");
const handleError = error => console.log(`✔ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);