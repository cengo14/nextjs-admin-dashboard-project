import React from "react";
import { getOrders } from "@/app/utils/api";
import { Order } from "@/app/type";
import OrdersTable from "@/app/components/table/OrdersTable";

const Orders = async () => {
  const orders: Order[] = await getOrders();
  return (
    <div>
      <h1 className="title">Siparişler</h1>
      <OrdersTable orders={orders} />
    </div>
  );
};

export default Orders;
