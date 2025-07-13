import { createClient } from "redis";

let redisClient: ReturnType<typeof createClient> | null = null;

export async function getRedisClient() {
  if (!redisClient) {
    redisClient = createClient({
      url: process.env.REDIS_URL || "redis://localhost:6379",
    });

    redisClient.on("error", (err) => {
      console.error("Redis Client Error:", err);
    });

    await redisClient.connect();
  }

  return redisClient;
}

export async function getCachedData<T>(key: string): Promise<T | null> {
  try {
    const client = await getRedisClient();
    const data = await client.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error getting cached data:", error);
    return null;
  }
}

export async function setCachedData<T>(
  key: string,
  data: T,
  expirationSeconds: number = 3600
): Promise<void> {
  try {
    const client = await getRedisClient();
    await client.setEx(key, expirationSeconds, JSON.stringify(data));
  } catch (error) {
    console.error("Error setting cached data:", error);
  }
}
