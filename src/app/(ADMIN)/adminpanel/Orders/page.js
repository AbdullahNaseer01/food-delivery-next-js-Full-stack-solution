import React from 'react'
import OrdersTable from '../../(admin-components)/OrdersTable'

const page = () => {
  return (
    <main className="sm:ml-60 pt-16 max-h-screen overflow-auto bg-slate-400 min-h-screen">
            <OrdersTable/>
        </main>
  )
}

export default page