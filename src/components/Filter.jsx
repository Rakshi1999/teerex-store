import React, { useEffect } from "react";
import CheckBox from "../ui/CheckBox";
import Title2 from "../ui/Typography/Title2";
import { useSelector } from "react-redux";

export default function Filter({ onCallback }) {
  const [genderFilterValue, setGenderFilterValue] = React.useState([]);
  const [clothsTypeFilterValue, setClothsTypeFilterValue] = React.useState([]);
  const [priceFilterValue, setPriceFilterValue] = React.useState([]);
  const [colorFilterValue, setColorFilterValue] = React.useState([]);
  const [sortFilter, setSortFilter] = React.useState(null);

  const { products } = useSelector((state) => state.productSlice);

  const genderFilter = [
    {
      id: 1,
      label: "Men",
      value: "men",
    },
    {
      id: 2,
      label: "Women",
      value: "women",
    },
  ];

  const clothsTypeFilter = [...new Set(products.map((item) => item.type))].map(
    (type, index) => ({
      id: index,
      label: type,
      value: type.toLowerCase(),
    })
  );

  const priceFilter = [
    {
      id: 1,
      label: "0 to 250",
      value: "0-250",
    },
    {
      id: 2,
      label: "Rs 251 to 450",
      value: "251-450",
    },
    {
      id: 3,
      label: "Rs 451 and above",
      value: "450-",
    },
  ];

  const colorFilter = [...new Set(products.map((item) => item.color))].map(
    (color) => ({
      id: color,
      label: color,
      value: color.toLowerCase(),
    })
  );

  useEffect(() => {
    onCallback({
      gender: genderFilterValue,
      clothsType: clothsTypeFilterValue,
      price: priceFilterValue,
      color: colorFilterValue,
      sort: sortFilter,
    });
  }, [
    genderFilterValue,
    clothsTypeFilterValue,
    priceFilterValue,
    colorFilterValue,
    sortFilter,
  ]);

  return (
    <div className="flex flex-col pl-5 md:flex-row md:justify-evenly items-start py-5 md:gap-x-2 mb-4 bg-slate-200">
      <div className="flex justify-between items-center gap-x-3">
        <label htmlFor="filter" className="text-gray-600 font-medium">
          Sort By:
        </label>
        <select
          onChange={(e) => setSortFilter(e.target.value)}
          id="filter"
          className="bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 text-gray-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" defaultChecked>
            N/A
          </option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div>
        <Title2 text="Color" />
        {colorFilter.map((item) => (
          <CheckBox
            key={item.id}
            label={item.label}
            value={item.value}
            onChange={(e) => {
              if (e.target.checked) {
                setColorFilterValue([...colorFilterValue, e.target.value]);
              } else {
                setColorFilterValue(
                  colorFilterValue.filter((item) => item !== e.target.value)
                );
              }
            }}
          />
        ))}
      </div>

      <div>
        <Title2 text="Gender" />
        {genderFilter.map((item) => (
          <CheckBox
            key={item.id}
            label={item.label}
            value={item.value}
            onChange={(e) => {
              if (e.target.checked) {
                setGenderFilterValue([...genderFilterValue, e.target.value]);
              } else {
                setGenderFilterValue(
                  genderFilterValue.filter((item) => item !== e.target.value)
                );
              }
            }}
          />
        ))}
      </div>

      <div>
        <Title2 text="Type" />
        {clothsTypeFilter.map((item) => (
          <CheckBox
            key={item.id}
            label={item.label}
            value={item.value}
            onChange={(e) => {
              if (e.target.checked) {
                setClothsTypeFilterValue([
                  ...clothsTypeFilterValue,
                  e.target.value,
                ]);
              } else {
                setClothsTypeFilterValue(
                  clothsTypeFilterValue.filter(
                    (item) => item !== e.target.value
                  )
                );
              }
            }}
          />
        ))}
      </div>

      <div>
        <Title2 text="Price" />
        {priceFilter.map((item) => (
          <CheckBox
            key={item.id}
            label={item.label}
            value={item.value}
            onChange={(e) => {
              if (e.target.checked) {
                setPriceFilterValue([...priceFilterValue, e.target.value]);
              } else {
                setPriceFilterValue(
                  priceFilterValue.filter((item) => item !== e.target.value)
                );
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
