const Task = require("../models/TasK")
const {getData,saveData} = require ("../helpers/fileManager");

class TaskRepository{
    
    _task=null;


    constructor(){
        const data = getData();
        if(data){
            this._task=data;
        }else{
            this._task=[];
        }
            
        

    }

    getAllTask(){
        return this._task;
    }



    createTask(title){
        const task=new Task(title);
        this._task.push(task);
        saveData(this._task);
    }

    deleteTask(){

    }
    completeTask(){

    }


}


module.exports={
    TaskRepository
}