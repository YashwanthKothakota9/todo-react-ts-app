import axios from "axios";
import Todo from "../models/todo";

class TodoService{
    http = axios.create({
        baseURL:'https://jsonplaceholder.typicode.com/'
    })
    async getTodos(){
        const response = await this.http.get<Todo[]>('/todos')
        return response.data
    }
    async addTodo(title:string){
        const response = await this.http.post<Todo>('/todos',{title})
        return response.data;
    }
    async removeTodo(id:number){
        const response = await this.http.delete('/todos/'+id)
        return response.data
    }
}

export default new TodoService()