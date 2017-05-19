const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
    {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
        path: '/about',
        name: 'about',
        getComponent(nextState, comMod) {
          import('containers/About')
            .then(loadModule(comMod))
            .catch(errorLoading);
        },
      },
      {
         path: '/news',
         name: 'news',
         getComponent(nextState, comMod) {
           import('containers/News')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
          path: '/contact',
          name: 'contact',
          getComponent(nextState, comMod) {
            import('containers/Contact')
              .then(loadModule(comMod))
              .catch(errorLoading);
          },
        },
        {
           path: '/shop',
           name: 'shop',
           getComponent(nextState, comMod) {
             import('containers/Shop')
               .then(loadModule(comMod))
               .catch(errorLoading);
           },
         },
     {
       path: '/dashboard',
       name: 'dashboard',
        getComponent(nextState, comMod) {
          import('containers/Dashboard')
            .then(loadModule(comMod))
            .catch(errorLoading);
        },
      },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
