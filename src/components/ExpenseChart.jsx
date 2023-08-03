import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

export default function ExpenseChart() {
    const { transactions } = useGlobalState();

    const totalIncomes = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalExpenses = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += Math.abs(transaction.amount)), 0); // Utilizamos Math.abs() para obtener el valor absoluto

    const expensesPercentage = totalIncomes !== 0
        ? Math.round((totalExpenses / totalIncomes) * 100)
        : 100;

    const incomesPercentage = 100 - expensesPercentage;

    if (totalIncomes === 0 && totalExpenses === 0) {
        return (
            <div className="bg-zinc-900 p-4 my-2">
                <div className="h-full flex items-center justify-center w-full flex-col">
                    <h1 className="text-3xl font-bold my-2">Sin data</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-zinc-950">
            <VictoryPie
                colorScale={["#e74c3c", "#2ecc71"]}
                data={[
                    { x: "Expenses", y: expensesPercentage },
                    { x: "Incomes", y: incomesPercentage },
                ]}
                animate={{
                    duration: 200,
                }}
                labels={({ datum }) => datum.y}
                labelComponent={
                    <VictoryLabel
                        angle={45}
                        style={{
                            fill: "white",
                        }}
                    />
                }
            />
        </div>
    );
}

