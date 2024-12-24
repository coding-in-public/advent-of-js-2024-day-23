import { defineTable, column, NOW, defineDb } from "astro:db";

const Expense = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    vendor: column.text(),
    amount: column.number(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Expense,
  },
});
