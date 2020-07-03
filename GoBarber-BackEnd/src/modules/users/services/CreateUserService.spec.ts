import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import CreateUserService from './CreateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

let createUser: CreateUserService;
let fakeHashProvider: FakeHashProvider;
let fakeCacheProvider: FakeCacheProvider;
let fakeUsersRepository: FakeUsersRepository;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeCacheProvider
    );
  });

  it('Should be able to create a user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@exemple.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create a new user with the same e-mail from another', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@exemple.com',
      password: '123456',
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: 'johndoe@exemple.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
