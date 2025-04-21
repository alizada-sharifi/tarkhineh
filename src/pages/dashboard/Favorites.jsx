import Category from "../../components/menu/Category";
import SearchProduct from "../../components/menu/SearchProduct";
import { DashboardLayout } from "../../layouts";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "../../components/favorites/Item";
import { NotFound } from "../../components/icons";
import { useSearchParams } from "react-router";

function Favorites() {
  const [displayed, setDisplayed] = useState([]);
  const { selectedItems } = useSelector((state) => state.favorite);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (query.search) {
      const filtered = selectedItems.filter((item) =>
        item.title.toLowerCase().includes(query.search.toLowerCase())
      );
      setDisplayed(filtered);
    } else {
      setDisplayed(selectedItems);
    }
  }, [query, selectedItems]);

  useEffect(() => {
    setDisplayed(query);
    const initialQuery = Object.fromEntries([...searchParams]);
    setQuery(initialQuery);
  }, [query]);

  return (
    <DashboardLayout title={"علاقمندی‌ها"}>
      {/* ===== Category & Search Box ===== */}
      <div className="flex flex-col lg:flex-row lg:mt-3.5 lg:mb-3.5">
        <Category
          query={query}
          setQuery={setQuery}
          className={"hidden lg:flex"}
        />
        <div className="px-5">
          <SearchProduct
            query={query}
            setQuery={setQuery}
            className={"!w-auto"}
          />
        </div>
      </div>
      {/* ===================== */}

      {displayed.length ? (
        <div className="grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 mb-5 mx-0 grid md:grid-cols-2">
          {displayed.map((item, index) => (
            <Item key={index} productData={item} />
          ))}
        </div>
      ) : query.search ? (
        <div className="flex flex-col items-center gap-4 py-8">
          <h3>موردی با این مشخصات پیدا نکردیم!</h3>
          <NotFound />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 py-8">
          <h3>موردی در لیست علاقه‌مندی‌ها نیست!</h3>
          <NotFound />
        </div>
      )}
    </DashboardLayout>
  );
}

export default Favorites;
