import { useEffect, useState } from "react";
import { Banner } from "../components/banner";
import Category from "../components/menu/Category";
import SearchProduct from "../components/menu/SearchProduct";
import { searchProducts, filterProducts } from "../helper/functions";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../stores/productSlice";
import { ClipLoader } from "react-spinners";
import { NotFound } from "../components/icons";
import Item from "../components/menu/Item";

function Menu() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setDisplayed(products);
    const initialQuery = Object.fromEntries([...searchParams]);
    setQuery(initialQuery);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query, products, setSearchParams]);

  return (
    <>
      <Banner />

      {/* ===== Tabs group ===== */}
      <div className="bg-neutral-300 py-4 text-neutral-700 mb-4">
        <div className="container flex items-center gap-4 md:gap-10">
          <button className="text-primary border-b-2 pb-2 border-primary font-medium text-sm md:text-xl md:font-bold">
            غذای اصلی
          </button>
          <button className="pb-2 font-medium text-sm md:text-xl">
            پیش غذا
          </button>
          <button className="pb-2 font-medium text-sm md:text-xl">دسر</button>
          <button className="pb-2 font-medium text-sm md:text-xl">
            نوشیدنی
          </button>
        </div>
      </div>

      {/* ===== Category & Search Box ===== */}
      <div className="container mx-auto flex flex-col md:flex-row lg:mt-3.5 lg:mb-3.5 md:justify-between">
        <Category query={query} setQuery={setQuery} />
        <div className="px-5">
          <SearchProduct query={query} setQuery={setQuery} />
        </div>
      </div>

      {/* ===== Loading Spinner ===== */}
      {loading && (
        <div className="min-h-[calc(100vh_-_535px)] flex justify-center items-center">
          <ClipLoader size={50} color="#417F56" />
        </div>
      )}

      {/* ===== Error Message ===== */}
      {error && (
        <h2 className="container max-w-[1224px] mx-auto h-screen text-2xl text-red-500">
          {error}
        </h2>
      )}

      {/* ===== No Result ===== */}
      {!displayed?.length && !loading && query.search && (
        <div className="flex flex-col items-center gap-4 py-8">
          <h3>موردی با این مشخصات پیدا نکردیم!</h3>
          <NotFound />
        </div>
      )}

      {/* ===== Products Grid ===== */}

      <div className="container grid lg:grid-cols-2 gap-8 py-6">
        {displayed?.map((product) => (
          <Item {...product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default Menu;
