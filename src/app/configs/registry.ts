import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
  dashboard: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:3001/remoteEntry.js',
    exposedModule: './web-components'
  }),
  product: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:3002/remoteEntry.js',
    exposedModule: './web-components'
  }),
  user: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:3003/remoteEntry.js',
    exposedModule: './web-components'
  })
};
