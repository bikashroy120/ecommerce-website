import React from "react";
import { useGetAllCategoryQuery } from "../../redux/features/banner/bannerApi";

const OurStoryCategoryFilter = ({selectedCategories,setSelectedCategories, }) => {
 

  const { data: category, isLoading: ctegoryLoading } =
    useGetAllCategoryQuery("");

  const categoryAdd = (title) => {
    const isSelected = Boolean(
      selectedCategories.find((grpStud) => grpStud === title)
    );
    if (isSelected) {
      const updateData = selectedCategories.filter((item) => item !== title);
      setSelectedCategories(updateData);
    } else {
      setSelectedCategories((prev) => [...prev, title]);
    }
  };

  // const getProducts = async () => {
  //   const params = new URLSearchParams();
  //   selectedCategories.forEach((category) => {
  //     params.append("category", category);
  //   });
  //   const url = `${params.toString()}`;
  //   setQuery(url);
  //   setPage(1);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, [selectedCategories]);
  return (
    <div>
      {ctegoryLoading ? (
        <>
          <h2>Loading...</h2>
        </>
      ) : (
        <>
          {" "}
          <div className="form-check">
            {category?.map((item, i) => {
              const isSelected = Boolean(
                selectedCategories.find((grpStud) => grpStud === item?.title)
              );
              return (
                <div
                  key={i}
                  className="form-check"
                  onClick={() => categoryAdd(item?.title)}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={item._id}
                    checked={isSelected}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={item}
                    style={{ fontSize: "17px", marginTop: "-3px" }}
                  >
                    {item?.title}
                  </label>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default OurStoryCategoryFilter;
