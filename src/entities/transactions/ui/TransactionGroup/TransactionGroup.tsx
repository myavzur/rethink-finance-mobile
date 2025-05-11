import { Amount } from "@/entities/amounts/ui";
import { type FC, useMemo } from "react";
import { Text, View } from "react-native";
import { TransactionType } from "../../types";
import { TransactionCard } from "../TransactionCard";
import type { TransactionGroupProps } from "./TransactionGroup.props";
import { useStyles } from "./TransactionGroup.styles";

export const TransactionGroup: FC<TransactionGroupProps> = ({
  title,
  transactions,
}) => {
  const styles = useStyles();

  const deltaAmount = useMemo(() => {
    return transactions.reduce((sum, cur) => {
      if (cur.type === TransactionType.INCOME) {
        sum += cur.amount.amount;
      } else {
        sum -= cur.amount.amount;
      }

      return sum;
    }, 0);
  }, [transactions]);

  const deltaAmountPrefix =
    deltaAmount > 0 ? "+" : deltaAmount < 0 ? "-" : null;

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.date}>{title}</Text>
        <Text style={styles.amount}>
          {deltaAmountPrefix}

          <Amount
            amount={{
              amount: deltaAmount,
              currency: "RUB",
            }}
            locale="ru-RU"
          />
        </Text>
      </View>

      <View>
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            onPress={console.log}
          />
        ))}
      </View>
    </View>
  );
};
