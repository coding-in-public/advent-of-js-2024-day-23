import { defineAction } from "astro:actions";
import { db, Expense } from "astro:db";
import { z } from "astro:schema";

export const addExpense = defineAction({
  accept: "form",
  input: z.object({
    vendor: z.string().max(20),
    amount: z.number().int(),
  }),
  handler: async ({ vendor, amount }) => {
    const expense = await db.insert(Expense).values({
      vendor,
      amount,
    });

    return {
      message: "success",
      expense: expense.toJSON(),
    };
  },
});
