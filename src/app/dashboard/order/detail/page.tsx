import { useRouter } from "next/navigation";
import OrderDetail from "~/custom-component/order/OrderListTable";




const AdminOrderDetail = () => {
    
  return (
    <div className="flex w-full items-start justify-center">
      <OrderDetail/>
    </div>
  )
}

export default AdminOrderDetail
