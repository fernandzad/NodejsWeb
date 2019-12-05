const app = require('../index'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

describe('UT for express API', () =>{
    it('GET Test status (200) /', async (done) => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        done();
    });

    it('GET Test body /', async (done) => {
        let personas = require('../models/persona').personas;
        let obj = {
            titulo : 'Pug',
            mensaje : 'Prueba',
            personas : personas 
        };
        const response = await request.get('/');
        
        console.log(response.body);
        expect(response.body).toEqual(obj);
        done();
    });
});