import { useEffect, useState } from "react";

export interface Cocktail {
  id: number;
  name: string;
  content: number; // 도수
  description: string;
  thumbnail?: string; // 백엔드에서 주면 사용
}

export interface DailyCocktailsRes {
  cocktails: Cocktail[];
}

const BASE = import.meta.env.VITE_API_BASE_URL ?? "";

export async function getDailyCocktails(
  signal?: AbortSignal
): Promise<DailyCocktailsRes> {
  const res = await fetch(`${BASE}/daily/cocktails`, { signal });
  if (!res.ok)
    throw new Error(`Failed to fetch /daily/cocktails (${res.status})`);
  return res.json() as Promise<DailyCocktailsRes>;
}

export function useDailyCocktails() {
  const [data, setData] = useState<DailyCocktailsRes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const ac = new AbortController();
    setLoading(true);
    getDailyCocktails(ac.signal)
      .then(setData)
      .catch((e) => {
        if ((e as any)?.name !== "AbortError") setError(e);
      })
      .finally(() => setLoading(false));
    return () => ac.abort();
  }, []);

  return { data, loading, error };
}
