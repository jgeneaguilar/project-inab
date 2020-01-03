export function mapArrayToDictionaryId(data) {
  const dataList = [...data].reduce((dataObj, item) => {
    dataObj[item._id] = item;
    return dataObj;
  }, {});

  return dataList;
}