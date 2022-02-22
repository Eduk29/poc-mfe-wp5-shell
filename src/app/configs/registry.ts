import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
  dashboard: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:3001/remoteEntry.js',
    exposedModule: './Module'
  })
    .then(m => m.DashboardModule)
    .catch(error => alert('This MFE has an error, please return later!')),
  product: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:3002/remoteEntry.js',
    exposedModule: './Module'
  })
    .then(m => m.ProductModule)
    .catch(error => alert('This MFE has an error, please return later!')),
  user: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:3003/remoteEntry.js',
    exposedModule: './Module'
  }),
  payment: () => loadRemoteModule({
    type: 'script',
    remoteEntry: 'http://localhost:3004/remoteEntry.js',
    remoteName: 'react',
    exposedModule: './web-components'
  }),
};
