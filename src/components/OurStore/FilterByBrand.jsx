import React from "react";
import { useGetAllBrandQuery } from "../../redux/features/banner/bannerApi";

const FilterByBrand = ({ selectedBrands, setSelectedBrands }) => {


  const { data: category, isLoading: ctegoryLoading } =
  useGetAllBrandQuery("");

  const categoryAdd = (title) => {
    const isSelected = Boolean(
        selectedBrands.find((grpStud) => grpStud === title)
    );
    if (isSelected) {
      const updateData = selectedBrands.filter((item) => item !== title);
      setSelectedBrands(updateData);
    } else {
        setSelectedBrands((prev) => [...prev, title]);
    }
  };

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
                selectedBrands.find((grpStud) => grpStud === item?.title)
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

export default FilterByBrand;
