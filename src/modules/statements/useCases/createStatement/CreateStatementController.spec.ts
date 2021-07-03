import { app } from '../../../../app';
import request from 'supertest';
import createConnection from '../../../../database';
import { Connection } from 'typeorm';
import { send } from 'process';

let connection: Connection;
describe('Create statement controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to create a deposit', async () => {
    await request(app)
      .post('/api/v1/users')
      .send({
        name: 'user test',
        email: 'user@mail.com',
        password: '123456'
      });

    const session = await request(app).post('/api/v1/sessions').send({
      email: 'user@mail.com',
      password: '123456'
    });

    const response = await request(app).post('/api/v1/statements/deposit')
      .send({
        amount: 100,
        description: 'deposit test'
      })
      .set({ authorization: `Bearer ${session.body.token}`, })


    expect(response.status).toEqual(201);
    expect(response.body.type).toEqual('deposit');
  });

  it('should be able to create a withdraw', async () => {
    await request(app)
      .post('/api/v1/users')
      .send({
        name: 'user test',
        email: 'user@mail.com',
        password: '123456'
      });

    const session = await request(app).post('/api/v1/sessions').send({
      email: 'user@mail.com',
      password: '123456'
    });

    const response = await request(app).post('/api/v1/statements/withdraw')
      .send({
        amount: 100,
        description: 'deposit test'
      })
      .set({ authorization: `Bearer ${session.body.token}`, })


    expect(response.status).toEqual(201);
    expect(response.body.type).toEqual('withdraw');
  });
});
