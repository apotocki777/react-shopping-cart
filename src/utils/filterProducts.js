const filterProducts = (data, filters) => {
  let filteredData = [...data];

  for (const [key, value] of Object.entries(filters)) {
    if (key === "rating" && value.length > 0) {
      filteredData = filteredData.filter((item) => {
        return value.some((rating) => {
          return +rating === Math.ceil(item[key].value);
        });
      });
    } else if (key === "discountPercentage" && value.length > 0) {
      filteredData = filteredData.filter((item) => {
        return value.some((discount) => {
          return +discount === Math.round(item[key] / 10) * 10;
        });
      });
    } else if (key === "price" && value.length > 0) {
      let splitted = value.map((range) => {
        return range.split("-");
      });

      splitted = splitted.map((range) => {
        return range.map((val) => {
          val = val.match(/\d+/g);
          val = +val;
          return val;
        });
      });

      filteredData = filteredData.filter((item) => {
        return splitted.some((range) => {
          if (range.length === 1) {
            return item[key] >= range[0];
          } else {
            return item[key] >= range[0] && item[key] <= range[1];
          }
        });
      });
    } else if (value.length > 0) {
      filteredData = filteredData.filter((item) => {
        return value.includes(item[key]);
      });
    }
  }
  return filteredData;
};

export default filterProducts;
