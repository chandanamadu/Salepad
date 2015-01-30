import todo from './todoService';
import app from 'durandal/app';
import dialog from 'plugins/dialog';


class Todo {
	constructor(ToDo:todo){
		this.todo = ToDo;
		this.morningTodo = null;
		this.eveningTodo = null;
	}
	showBottomPanel(){
		return dialog['showPanel']('todo/newTodo',{
										autoclose: true,
										position: 'right',
										overlay: true,
										animationSpeed: 'fast',
										animationIn: 'hingeInFromRight',
										animationOut: 'hingeOutFromRight',
										animationEasing: 'bounceIn',
								 });
	}
	activate(){
		this.morningTodo = this.todo.todoMorning;
		this.eveningTodo = this.todo.todoAfterNoon;
	}
}

export default Todo;

