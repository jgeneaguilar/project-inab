// Grouping state objects by their id
export function groupByCategoryId(objArr) {
  const CATID = 'category_id';
  return objArr.reduce((acc, obj) => {
    let key = obj[CATID];
    if (!acc[key]) {
    	acc[key] = {};
    }
    acc[key] = obj;
    return acc;
  }, {});
}