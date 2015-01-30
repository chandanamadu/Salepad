import dialog from 'plugins/dialog';

class NewTodo {
	constructor(){
		this.autoclose = true;
	}
	addThisTodo(){
		//add new todo
		dialog.close(this);
	}
	cancel(){
		dialog.close(this);
	}
	activate(){

	}
}

export default NewTodo;