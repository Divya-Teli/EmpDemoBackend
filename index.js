import bodyParser from 'body-parser';
import Express from "express";
import cors from "cors";
import DB from './DB/db.js'
import { addEmpList, getEmpList} from './controller/DisplayList.js'
const app = Express();
app.use(bodyParser.json());
app.use(cors());
DB()

app.get('/api/getEmpList',getEmpList)
app.post('/api/addEmpList',addEmpList)



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("server is running on port ", port);
});
