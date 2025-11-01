import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">에러</h1>
        <p className="mt-2 text-gray-700">
          {error.status} {error.statusText}
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">문제가 발생했어요</h1>
      <pre className="mt-3 whitespace-pre-wrap text-sm text-gray-600">
        {String(error)}
      </pre>
    </div>
  );
}
