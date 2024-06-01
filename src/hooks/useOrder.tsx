import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";
import Swal from 'sweetalert2'

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const existItem = order.find((orderItem) => orderItem.id === item.id);
    if (existItem) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };
  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((orderItem) => orderItem.id !== id));
  };
  const placeOrder =()=>{
    Swal.fire({
      title: 'Orden guardada',
      text: 'Tu orden ha sido guardada con éxito',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    setOrder([]);
    setTip(0);
  }

  return { order, tip, setTip, addItem, removeItem,placeOrder };
};

export default useOrder;
