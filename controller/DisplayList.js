
import EmployeeList from '../model/EmpList.js'


export const getEmpList=(req,res)=>{
  EmployeeList.find({}, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.send(doc);
  });
}

export const addEmpList=(req,res)=>{
    console.log('req',req.body)
    const Employee = new EmployeeList(req.body);
    Employee.save((err, doc) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({
        post: true,
        bookId: doc._id,
      });
    });
}