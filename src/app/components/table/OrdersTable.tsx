import React from "react";
import Table from ".";
import { Order } from "@/app/type";

type Props = {
  orders: Order[];
};

const OrdersTable = ({ orders }: Props) => {
  return (
    <Table>
      <thead>
        <tr className="whitespace-nowrap">
          <th>Kullanıcı Id</th>
          <th>Toplam Fiyat</th>
          <th>Ürün Sayısı</th>
          <th>Sipariş Tarihi</th>
          <th>Nereye</th>
          <th>Durum</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, key) => (
          <tr key={key} className="whitespace-nowrap">
            <td>{order.id}</td>
            <td className="text-green-600">${order.total_price}</td>
            <td>{order.items.reduce((acc, item) => acc + item.quantity, 0)}</td>
            <td>
              {new Date(order.order_date).toLocaleDateString("tr", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </td>
            <td>{order.shipping_address.city}</td>
            <td
              className={`py-1 px-2 rounded-lg text-white ${
                order.status === "Shipped"
                  ? "bg-blue-500"
                  : order.status === "Delivered"
                  ? "bg-green-500"
                  : "bg-yellow-500"
              }`}
            >
              {order.status}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OrdersTable;
