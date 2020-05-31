export function mapArrayToDictionaryId(data, key = '_id') {
  const dataList = [...data].reduce((dataObj, item) => {
    dataObj[item[key]] = item;
    return dataObj;
  }, {});

  return dataList;
}

export function insertArrayToDictionaryId(state, data, key = '_id') {
  const dataList = [...data].reduce((dataObj, item) => {
    dataObj[item[key]] = item;
    return dataObj;
  }, {...state});

  return dataList;
}

export function groupArrayToId(data, key = '_id', mapFunction) {
  return [...data].reduce((dataObj, item) => {
    const _key = item[key];
    if (!dataObj[_key]) {
      dataObj[_key] = [];
    }

    dataObj[item[key]].push(mapFunction ? mapFunction(item) : item);
    return dataObj;
  }, {});
}

// // Grouping state objects by id (array to dictionary)
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
