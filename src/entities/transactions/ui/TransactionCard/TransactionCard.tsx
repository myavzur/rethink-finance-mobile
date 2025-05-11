import { Amount } from "@/entities/amounts/ui";
import type { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { TransactionType } from "../../types";
import type { TransactionCardProps } from "./TransactionCard.props";
import { useStyles } from "./TransactionCard.styles";

export const TransactionCard: FC<TransactionCardProps> = ({ transaction, onPress }) => {
  const styles = useStyles();

  const prefix = transaction.type === TransactionType.INCOME ? "+" : "-";

  const handlePress = () => {
    onPress(transaction);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => {
        return [
          styles.card,
          pressed ? styles.card_active : null
        ]
      }}
    >
      <View style={styles.image}>
        <Text style={styles.image__text}>20</Text>
      </View>

      <View style={styles.transaction}>
        <View style={styles.header}>
          <Text style={styles.header__title}>{transaction.category.name}</Text>

          <Text style={styles.header__amount}>
            {prefix}

            <Amount amount={transaction.amount} locale="ru-RU" />
          </Text>
        </View>

        <Text style={styles.footer}>{transaction.name}</Text>
      </View>
    </Pressable>
  );
};
