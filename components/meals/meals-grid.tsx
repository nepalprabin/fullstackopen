import React from "react";
import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";

interface Meal {
  id: number
  title: string,
  slug: string,
  image: string,
  summary: string
  creator: string
}

interface MealsGridProps {
    meals: Meal[];
}

const MealsGrid: React.FC<MealsGridProps> = ({meals}) => {
  return (
    <ul className={classes.meals}>
        {meals.map((meal) => (
            <li key={meal.id}>
                <MealItem {...meal} />
            </li>
        ))}
    </ul>
  )
}


export default MealsGrid
