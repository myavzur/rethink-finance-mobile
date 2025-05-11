import { Amount } from "@/entities/amounts/ui";
import { Icon } from "@/shared/ui";
import type { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { getTransactionSymbol } from "../../lib/utils";
import type { TransactionCardProps } from "./TransactionCard.props";
import { useStyles } from "./TransactionCard.styles";

export const TransactionCard: FC<TransactionCardProps> = ({ transaction, onPress }) => {
  const styles = useStyles(transaction.category.highlightColor);

  const handlePress = () => {
    onPress(transaction);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => {
        return [
          styles.card,
          pressed && styles.card_active
        ]
      }}
    >
      <View style={styles.icon}>
        <Text style={styles.icon__inline}>
          <Icon
            name={transaction.category.iconName}
            size={20}
          />
        </Text>
      </View>

      <View style={styles.transaction}>
        <View style={styles.header}>
          <Text style={styles.header__title}>{transaction.category.name}</Text>

          <Text style={styles.header__amount}>
            {getTransactionSymbol(transaction.type)}

            <Amount amount={transaction.amount} locale="ru-RU" />
          </Text>
        </View>

        <Text style={styles.footer}>{transaction.name}</Text>
      </View>
    </Pressable>
  );
};
