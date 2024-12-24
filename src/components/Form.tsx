import { actions } from "astro:actions";
import Check from "../assets/check";
import Input from "./Input";
import { useEffect, useRef, useState } from "react";
import Trash from "../assets/trash";
import { formatCurrency } from "../lib/currency";

export type Expense = {
  id: number;
  vendor: string;
  amount: number;
};

const Form = () => {
  const [expenses, setExpenses] = useState<Expense[]>();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const getExpenses = async () => {
      const { data } = await actions.getExpenses();
      setExpenses(data?.expenses);
    };
    getExpenses();
  }, []);

  const handleDeleteExpense = async (
    e: React.SyntheticEvent<HTMLFormElement>,
    id: number
  ) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.set("id", id.toString());
      const { data, error } = await actions.deleteExpense(formData);
      if (error) {
        throw new Error(error.message);
      }
      setExpenses((prev) => prev?.filter((i) => i.id !== data.deletedId));
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    }
  };

  const handleFormSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // @ts-expect-error
      const formData = new FormData(formRef.current);
      const { data, error } = await actions.addExpense(formData);
      if (error) {
        throw new Error(error.message);
      }

      setExpenses((prev) => [
        ...prev,
        {
          id: parseInt(data.expense.lastInsertRowid),
          vendor: formData.get("vendor"),
          amount: parseInt(formData.get("amount") as string),
        },
      ]);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    }
  };

  return (
    <div>
      <div className="grid gap-4 p-8 pb-6">
        <h1>Expense Tracker</h1>
        <form
          className="flex gap-2 items-center"
          action={actions.addExpense}
          onSubmit={handleFormSubmit}
          ref={formRef}
        >
          <Input name="Vendor" type="text" />
          <Input name="Amount" type="number" />
          <button
            type="submit"
            aria-label="add expense"
            className="grid place-items-center mt-4"
          >
            <Check className="size-5" />
          </button>
        </form>
      </div>
      {expenses && expenses.length > 0 && (
        <>
          <div className="border-t-2">
            <div className="px-8 py-6">
              <div className="grid gap-4">
                {expenses?.map((expense) => (
                  <div className="flex justify-between gap-2" key={expense.id}>
                    <p>{expense.vendor}</p>
                    <div className="flex gap-3 items-center">
                      <p>{formatCurrency(expense.amount)}</p>
                      <form
                        onSubmit={(e) => handleDeleteExpense(e, expense.id)}
                        action={actions.deleteExpense}
                      >
                        <input
                          type="number"
                          hidden
                          name="id"
                          defaultValue={expense.id}
                        />
                        <button aria-label="Delete item">
                          <Trash className="size-4" />
                        </button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t-2 px-8 py-6">
            <div className="flex justify-between items-center">
              <p>Total spent</p>
              <div className="flex items-center gap-3">
                <p>
                  {formatCurrency(
                    expenses.reduce((acc, ex) => acc + ex.amount, 0)
                  )}
                </p>
                <p className="size-4"></p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Form;
