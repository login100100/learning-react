
export function setupFakeBackend() {
    // could be json-server 
    let users = [{id: 1, login: 'test', password: 'test', username: 'test user'}]

    window.fetch = (url, opts) => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
            if(url.endsWith('/login') && opts.method === 'POST') {
                const params = JSON.parse(opts.body);

                // finding user matched by form data
                const foundUser = users.filter(user => {
                    return user.login === params.login && user.password === params.password;
                });

                if(foundUser.length) {
                    // user found, acquiring data
                    let user = foundUser[0];
                    let response = {
                        id: user.id,
                        login: user.login,
                        username: user.username,                        
                        token: 'fake-jwt-token'
                    };
                    resolve({
                        ok: true,
                        text: () => Promise.resolve(JSON.stringify(response))
                    });
                } else {
                    reject('Unauthorized')
                }
            }
        }, 1000);
        });
    }
}