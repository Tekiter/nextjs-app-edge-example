import { sleep } from "@/lib/sleep";

export const runtime = "edge";
export const revalidate = 5;

export default async function Loading() {
  console.log("Loading Test RSC Reloading...");

  await sleep(2000);

  return <div>Loading Completed!</div>;
}
