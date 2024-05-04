import "../config";
import { Redis } from "ioredis";

export default async function Home() {
  const redis = new Redis(process.env.REDIS_URL!);
  const count = await redis.incr("counter");

  return (
    <main className="w-dvw h-dvh flex justify-center items-center">
      <h1 className="text-5xl">
        Pick-My-<span className="text-violet-400">Trip</span>
      </h1>
      <p>
        <span>{count}</span>
      </p>
    </main>
  );
}
