import { defineAction } from "astro:actions";
import { db, Expense } from "astro:db";
import { z } from "astro:schema";

export const getExpenses = defineAction({
  handler: async () => {
    const expenses = await db.select().from(Expense);
    return {
      expenses,
    };
  },
});
