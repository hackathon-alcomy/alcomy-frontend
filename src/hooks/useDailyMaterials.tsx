import { useEffect, useState } from "react";

export interface Material {
  name: string;
  description: string;
  thumbnail?: string; // 백엔드에서 주면 사용
}

const BASE = import.meta.env.VITE_API_BASE_URL ?? "";

export async function getDailyMaterials(
  signal?: AbortSignal
): Promise<Material> {
  const res = await fetch(`${BASE}/daily/ingredient`, { signal });
  if (!res.ok)
    throw new Error(`Failed to fetch /daily/Materials (${res.status})`);
  return res.json() as Promise<Material>;
}

export function useDailyMaterials() {
  const [data, setData] = useState<Material | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const ac = new AbortController();
    setLoading(true);
    getDailyMaterials(ac.signal)
      .then(setData)
      .catch((e) => {
        if ((e as any)?.name !== "AbortError") setError(e);
      })
      .finally(() => setLoading(false));
    return () => ac.abort();
  }, []);

  return { data, loading, error };
}
