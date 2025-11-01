import { useEffect, useState } from "react";

export interface IngredientsListRes {
  ingredients: string[];
}

const BASE = import.meta.env.VITE_API_BASE_URL ?? "";

export async function getIngredientsList(
  signal?: AbortSignal
): Promise<IngredientsListRes> {
  const res = await fetch(`${BASE}/ingredients`, { signal });
  if (!res.ok) throw new Error(`Failed to fetch /ingredients (${res.status})`);
  return res.json() as Promise<IngredientsListRes>;
}

export function useIngredientsList() {
  const [data, setData] = useState<IngredientsListRes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const ac = new AbortController();
    setLoading(true);
    getIngredientsList(ac.signal)
      .then(setData)
      .catch((e) => {
        if ((e as any)?.name !== "AbortError") setError(e);
      })
      .finally(() => setLoading(false));
    return () => ac.abort();
  }, []);

  return { data, loading, error };
}
