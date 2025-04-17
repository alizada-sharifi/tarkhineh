import { useDispatch } from "react-redux";
import { convertToFa } from "../../helper/functions";
import { removeItem, increase, decrease } from "../../stores/cartSlice";
import { Trash } from "../icons";

function FactorItem({ props }) {
  const dispatch = useDispatch(); // ✅ فراخوانی درست هوک

  const { title, discountedPrice, quantity } = props.data;

  return (
    <>
      <div className="flex items-center justify-between py-2 px-2">
        <div>
          <h3 className="text-neutral-800 text-sm mb-1">{title}</h3>
          <div className="text-neutral-700 text-xs flex items-center gap-1">
            <span>{convertToFa(discountedPrice)}</span>
            <span>تومان</span>
          </div>
        </div>

        <div className="text-primary bg-primary-100 py-1 px-1 rounded flex items-center gap-x-2">
          <button
            onClick={() => dispatch(increase(props.data))}
            className="text-2xl"
          >
            +
          </button>
          <span>{convertToFa(quantity)}</span>
          {quantity > 1 ? (
            <button
              onClick={() => dispatch(decrease(props.data))}
              className="text-2xl"
            >
              -
            </button>
          ) : (
            <button onClick={() => dispatch(removeItem(props.data))}>
              <Trash className={"fill-primary"} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default FactorItem;
