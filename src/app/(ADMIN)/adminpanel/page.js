import React from 'react'
import Sidebar from '../(admin-components)/Sidebar'
import ProductForm from '../(admin-components)/ProductForm'
import ProductTable from '../(admin-components)/ProductTable'

const page = () => {
  return (
    <main className=" sm:ml-60 pt-16  max-h-screen overflow-auto bg-slate-400 min-h-screen">
      {/* <ProductForm /> */}
      <ProductTable />
    </main>
  )
}

export default page