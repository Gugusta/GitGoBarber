import 'reflect-metadata';

import ListProvidersService from './ListProvidersService';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;
let fakeCacheProvider: FakeCacheProvider;

describe('List Providers', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviders = new ListProvidersService(
      fakeUsersRepository,
      fakeCacheProvider
    );
  });

  it('Should be able to list the providers ', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@exemple.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'John Tre',
      email: 'johntre@exemple.com',
      password: '123456',
    });

    const loggeduser = await fakeUsersRepository.create({
      name: 'John Qua',
      email: 'johnqua@exemple.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggeduser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
