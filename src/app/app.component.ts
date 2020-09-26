import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskData:string="";
  taskList=[];

  addTask(){
    let newTask={title:this.taskData , done:false};
    this.taskList.push(newTask);
    this. taskData="";
  }

  updateTask(sts,index){
    let len=this.taskList.length;
    this.taskList[len-index-1].done=sts;
  }

  clearTask(){
    this.taskList=[];
  }

  deleteTask(index){
    let len=this.taskList.length;
    this.taskList.splice(len-index,1);
  }
}
