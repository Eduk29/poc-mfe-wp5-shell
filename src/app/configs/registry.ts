import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
    dashboard: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        exposedModule: './web-components'
    })
};
