export function mapArrayToDictionaryId(data) {
  const dataList = [...data].reduce((dataObj, item) => {
    dataObj[item._id] = item;
    return dataObj;
  }, {});

  return dataList;
}

// Grouping state objects by id (array to dictionary)
export function groupById(objArr, id = 'category_id') {
  return objArr.reduce((acc, obj) => {
    let key = obj[id];
    if (!acc[key]) {
    	acc[key] = {};
    }
    acc[key] = obj;
    return acc;
  }, {});
}