import { API_URL } from './constants';

async function login(email, password) {
    return await post('login', { email, password }, false);
}

async function register(email, password) {
    return await post('users', { email, password }, false);
}

async function createProfile(userId, firstName, lastName, bio) {
    return await patch(`users/${userId}`, {
        firstName,
        lastName,
        bio,
    });
}

async function createGolfShot(userId, shotData) {
    return await post(`users/${userId}/golfshot`, shotData);
}

async function post(endpoint, data, auth = true) {
    return await request('POST', endpoint, data, auth);
}

async function patch(endpoint, data, auth = true) {
    return await request('PATCH', endpoint, data, auth);
}

async function get(endpoint, auth = true) {
    return await request('GET', endpoint, null, auth);
}

async function request(method, endpoint, data, auth = true) {
    const opts = {
        headers: {
            'Content-Type': 'application/json',
        },
        method,
    };

    if (method.toUpperCase() !== 'GET') {
        opts.body = JSON.stringify(data);
    }

    if (auth) {
        opts.headers['Authorization'] = `Bearer ${localStorage.getItem(
            'token'
        )}`;
    }

    const response = await fetch(`${API_URL}/${endpoint}`, opts);
    console.log(response.json());
    return response.json();
}

export { login, createGolfShot, register, createProfile, get, post, patch };
