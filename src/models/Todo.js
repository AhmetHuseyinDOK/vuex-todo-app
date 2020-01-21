export default class Model{
    
    constructor(task , done = false){
        this.task = task;
        this.done = done;
        this.createdAt= new Date();
        this.id = this.createdAt.getTime();
    }

}