import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskData:string="";
  taskList=[{title: 't1', done: false},{title: 't2', done: true},{title: 't3', done: false}];

  isEditMode: boolean = false;
  editIndex: number = -1;

  addTask(){
    let newTask={title:this.taskData , done:false};
    this.taskList.push(newTask);
    this. taskData="";
  }

  editTask(index) {
    let len=this.taskList.length;
    this.taskData = this.taskList[len-index-1].title;
    this.isEditMode = true;
    this.editIndex=len-index-1;
  }

  updateTask() {
    this.taskList[this.editIndex].title=this.taskData;
    this.isEditMode = false;
    this.editIndex=-1;
    this.taskData='';
  }

  updateTaskState(sts,index){
    let len=this.taskList.length;
    this.taskList[len-index-1].done=sts;
  }

  clearTask(){
    this.taskList=[];
  }

  deleteTask(index){
    let len=this.taskList.length;
    this.taskList.splice(len-index-1,1);
  }
}
