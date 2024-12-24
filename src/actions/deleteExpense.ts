import { defineAction } from "astro:actions";
import { db, eq, Expense } from "astro:db";
import { z } from "astro:schema";

export const deleteExpense = defineAction({
  accept: "form",
  input: z.object({
    id: z.number().int(),
  }),
  handler: async ({ id }) => {
    const expense = await db
      .delete(Expense)
      .where(eq(Expense.id, id))
      .returning({ deletedId: Expense.id });
    return {
      message: "success",
      deletedId: expense[0].deletedId,
    };
  },
});
