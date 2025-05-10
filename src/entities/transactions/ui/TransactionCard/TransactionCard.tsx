import { Amount } from "@/src/entities/amount/ui";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { TransactionType } from "../../types";
import { TransactionCardProps } from "./TransactionCard.props";
import { styles } from "./TransactionCard.styles";

export const TransactionCard: FC<TransactionCardProps> = ({ transaction }) => {
  const prefix = transaction.type === TransactionType.INCOME ? "+" : "-";

  return (
    <Pressable
      onPress={() => console.log("press")}
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
