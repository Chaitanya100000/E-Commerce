import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";

export async function getLocalUser(clerkUser_id : string) {
  const [row] = await db.select().from(users).where(eq(users.clerkUser_id, clerkUser_id)).limit(1);
  return row;
}