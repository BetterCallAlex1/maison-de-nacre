import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Le prerender ajoute systématiquement un trailing slash à chaque URL ;
    // sans ça, /guides/<slug>/ ne matche pas /guides/$slug et renvoie 500.
    trailingSlash: "preserve",
  });

  return router;
};
