import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
  dashboard: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:3001/remoteEntry.js',
    exposedModule: './web-components'
  }).catch(error => alert('MFE Down')),
  product: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:3002/remoteEntry.js',
    exposedModule: './web-components'
  }).catch(error => alert('MFE Down')),
  user: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:3003/remoteEntry.js',
    exposedModule: './web-components'
  }).catch(error => alert('MFE Down')),
  payment: () => loadRemoteModule({
    type: 'script',
    remoteEntry: 'http://localhost:3004/remoteEntry.js',
    remoteName: 'react',
    exposedModule: './web-components'
  }).catch(error => alert('MFE Down'))
};
