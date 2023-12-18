import React from 'react'
import ProductTable from '../../(admin-components)/ProductTable'

const page = () => {
    return (
        <main className="sm:ml-60 pt-16 max-h-screen overflow-auto bg-slate-400 min-h-screen">
            <ProductTable />
        </main>
    )
}

export default page