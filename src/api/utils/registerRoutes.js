const routeTypeHandler = {
  get: (router, route, response) => router.get(route, response),
  post: (router, route, response) => router.post(route, response),
};

export const registerRoutes = (router, routes) =>
  routes.forEach((route) => routeTypeHandler[route.type](router, route.url, route.response));