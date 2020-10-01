import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  taskData:string="";

  @Input() taskList=[];

  isEditMode: boolean = false;
  editIndex: number = -1;

  addTask(){
    let newTask={title:this.taskData , done:false};
    this.taskList.push(newTask);
    this.taskData="";
  }

  editTask(index) {
    let len=this.taskList.length;
    this.taskData = this.taskList[len-index-1].title;
    this.isEditMode = true;
    this.editIndex=len-index-1;
  }

  updateTask() {
    this.taskList[this.editIndex].title=this.taskData;
    this.reset();
  }

  updateTaskState(sts,index){
    let len=this.taskList.length;
    this.taskList[len-index-1].done=sts;
  }

  clearTask(){
    this.taskList=[];
    this.reset();
  }

  deleteTask(index){
    let len=this.taskList.length;
    this.taskList.splice(len-index-1,1);
    this.reset();
  }

  reset(){
    this.isEditMode = false;
    this.editIndex=-1;
    this.taskData='';
  }
}
