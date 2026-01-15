// Database exports - tüm database fonksiyonlarını bir araya toplar
export {
    createTables, getDatabase,
    initDatabase
} from './connection';

export {
    getAllFoods, getFoodById, getFoodsByCategory, getFoodsByIds, searchFoods
} from './foods';

export {
    addUser, deleteUser, getUser, updateUser
} from './users';

export {
    deleteRating, getAverageRating, getFoodRatings, getUserRatings,
    rateFood,
    updateRating
} from './ratings';

export {
    deleteMealPlan, getMealPlan,
    getMealPlans, getMealPlansByDiet, saveMealPlan, updateMealPlan
} from './mealPlans';

export * from '../types';
