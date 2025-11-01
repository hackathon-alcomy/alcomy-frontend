import { lazy, Suspense } from "react";
import type { ReactElement } from "react";
import {
  createBrowserRouter,
  redirect,
  type LoaderFunctionArgs,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
// import MyLayout from "./layouts/MyLayout";
import ErrorPage from "./pages/ErrorPage";

const Home = lazy(() => import("./pages/Home"));
// const Search = lazy(() => import("./pages/Search"));
// const Cocktail = lazy(() => import("./pages/Cocktail"));
// const Ingredient = lazy(() => import("./pages/Ingredient"));
// const MyHome = lazy(() => import("./pages/MyHome"));
// const Contribute = lazy(() => import("./pages/Contribute"));

function withSuspense<T extends ReactElement>(el: T): ReactElement {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>{el}</Suspense>
  );
}

export type IdLoaderData = { id: string };

export async function requireQueryId({
  request,
}: LoaderFunctionArgs): Promise<IdLoaderData> {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) {
    throw redirect("/?error=missing_id");
  }
  return { id };
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: withSuspense(<Home />) },
      // { path: "search", element: withSuspense(<Search />) },
      // {
      //   path: "cocktail",
      //   loader: requireQueryId,
      //   element: withSuspense(<Cocktail />),
      // },
      // {
      //   path: "ingredient",
      //   loader: requireQueryId,
      //   element: withSuspense(<Ingredient />),
      // },
      // {
      //   path: "my",
      //   element: <MyLayout />,
      //   children: [
      //     { index: true, element: withSuspense(<MyHome />) },
      //     { path: "contribute", element: withSuspense(<Contribute />) },
      //   ],
      // },
    ],
  },
]);
