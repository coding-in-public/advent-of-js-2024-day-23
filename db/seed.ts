import { db, Expense } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Expense).values([
    {
      amount: 1234,
      vendor: "Walmart",
    },
  ]);
}
