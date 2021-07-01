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

export async function getTodoList(token) {
    const data = await request
    .get(`${URL}/api/todos`)
    .set('Authorization', token)


    return data.body;
}

export async function addTodo(todo, token) {
    const data = await request
    .post(`${URL}/api/todos`)
    .send({ todo: todo })
    .set('Authorization', token)
    return data.body;
}

export async function completeTodo() {
    
}