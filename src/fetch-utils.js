import request from 'superagent';

const URL = 'https://todo-auth-lab.herokuapp.com'

export async function signup(email, password) {
    const data = await request
    .post(`${URL}/auth/signup`)
    .send({
        email: email,
        password: password
    })
    return data.body.token;

}

export async function login() {
    
}

export async function getTodoList() {
    
}

export async function addTodo() {
    
}

export async function completeTodo() {
    
}