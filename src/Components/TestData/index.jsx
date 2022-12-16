import React from "react";
import { axiosClient } from "../../libraries/axiosClient";
function TestData() {
  const [categories, setCategories] = React.useState([]);
  // get dữ liệu
  React.useEffect(() => {}, []);
  return (
    <div className="container flex gap-2">
      {categories.map((category, index) => {
        return (
          <div className="flex-1 w-[100%]" key={index}>
            <a href={category.imageURL}>
              <img src={category.imageURL} alt="" />
            </a>
            <div className="text-center text-primary font-bold">
              {category.name}
            </div>
            <div>{category.description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TestData;
