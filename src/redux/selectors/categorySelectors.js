import { createSelector } from "reselect";
import { groupArrayToId } from "../../utils/commonUtils";
import { getMasterCategories, getCategories, getCategoryBudgets } from "./commonSelectors";
import { getTransactionsByCurrentTimespan } from "./transactionSelectors";

export const getCategoriesByMasterCategory = createSelector(
  getMasterCategories,
  getCategories,
  getCategoryBudgets,
  getTransactionsByCurrentTimespan,
  (masterCategories, categories, categoryBudgets, transactions) => {
    const _categories = groupArrayToId(categories, "master_category_id", category => {
      const budgeted = categoryBudgets[category._id] ? (categoryBudgets[category._id].budgeted / 100): 0;
      const activity = transactions.filter(item => item.category_id === category._id).reduce((total, item) => total = total + (item.amount / 100), 0);
      return {
        key: category._id,
        type: "category",
        category: category.name,
        category_budgets: categoryBudgets[category._id],
        rawBudgeted: budgeted,
        rawActivity: activity,
        rawAvailable: budgeted - Math.abs(activity),
        budgeted: budgeted.toFixed(2),
        activity: activity.toFixed(2),
        available: (budgeted - Math.abs(activity)).toFixed(2),
      };
    });

    return masterCategories
      .map(item => {
        const _cat = _categories[item._id];
        return {
          key: item._id,
          type: 'master',
          name: item.name,
          category: item.name,
          budgeted: _cat ? _cat.reduce((total, item) => total = total + item.rawBudgeted, 0).toFixed(2) : 0,
          activity: _cat ? _cat.reduce((total, item) => total = total + item.rawActivity, 0).toFixed(2) : 0,
          available: _cat ? _cat.reduce((total, item) => total = total + item.rawAvailable, 0).toFixed(2) : 0,
          children: _cat || []
        }
      })
  }
);
