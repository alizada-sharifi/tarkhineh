import { DashboardLayout } from "../../layouts";
import { Address } from "../../components/completeInfo";
import { useState } from "react";

function Addresses() {
  const [list, setList] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);

  const updateShippingCost = (newCost) => {
    setShippingCost(newCost);
  };
  return (
    <DashboardLayout title={"آدرس ها"}>
      <Address
        list={list}
        setList={setList}
        updateShippingCost={updateShippingCost}
      />
    </DashboardLayout>
  );
}

export default Addresses;
