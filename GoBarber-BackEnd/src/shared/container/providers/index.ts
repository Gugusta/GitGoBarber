import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
// import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider
);
