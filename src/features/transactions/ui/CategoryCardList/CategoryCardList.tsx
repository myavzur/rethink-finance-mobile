import { CategoryCard } from "@/entities/transactions/ui/CategoryCard/CategoryCard";
import { database } from "@/shared/db/database";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { type FC } from "react";
import { FlatList, View } from "react-native";
import type { CategoryCardListProps } from "./CategoryCardList.props";
import { styles } from "./CategoryCardList.styles";


export const CategoryCardList: FC<CategoryCardListProps> = ({ onSelect }) => {
  const { data: categories } = useLiveQuery(
    database.query.categories.findMany()
  );

  return (
    <View style={styles.list}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 15 }}
        data={categories}
        keyExtractor={(category) => category.id.toString()}
        renderItem={(category) => (
          <CategoryCard
            category={category.item}
          />
        )}
      />
    </View>
  );
};
