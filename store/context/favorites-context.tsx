import { createContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

type FavoritesContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isMealsFavorite: (id: string) => boolean;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isMealsFavorite: () => false,
});

function FavoritesContextProvider({ children }: Props) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteMealIds((prev) => [...prev, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds((prev) => prev.filter((mealId) => mealId !== id));
  }

  function isMealsFavorite(id: string) {
    return favoriteMealIds.includes(id);
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
    isMealsFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
