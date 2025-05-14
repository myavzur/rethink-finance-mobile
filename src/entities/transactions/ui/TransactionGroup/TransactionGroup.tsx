import { TransactionType } from "@/shared/database/schemas/transactions.schema";
import { useRouter } from "expo-router";
import { type FC, useMemo } from "react";
import { Text, View } from "react-native";
import { Amount } from "../Amount";
import { TransactionCard } from "../TransactionCard";
import type { TransactionGroupProps } from "./TransactionGroup.props";
import { useStyles } from "./TransactionGroup.styles";

export const TransactionGroup: FC<TransactionGroupProps> = ({
  title,
  transactions,
}) => {
  const router = useRouter();
  const styles = useStyles();

  const deltaAmount = useMemo(() => {
    return transactions.reduce((sum, cur) => {
      if (cur.type === TransactionType.INCOME) {
        sum += cur.amount_value;
      } else {
        sum -= cur.amount_value;
      }

      return sum;
    }, 0);
  }, [transactions]);

  const deltaAmountPrefix =
    deltaAmount > 0 ? "+" : deltaAmount < 0 ? "-" : null;

  const handlePress = () => {
    router.push("/transaction");
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.date}>{title}</Text>
        <Text style={styles.amount}>
          {deltaAmountPrefix}

          <Amount value={deltaAmount} currency="RUB" locale="ru-RU" />
        </Text>
      </View>

      <View>
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            onPress={handlePress}
          />
        ))}
      </View>
    </View>
  );
};
