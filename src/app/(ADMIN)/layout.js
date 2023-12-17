
import "@/app/globals.css"
import Sidebar from "@/app/(ADMIN)/(admin-components)/Sidebar";
import AdminHeader from "./(admin-components)/Adminheader";

export default function adminlayout({ children }) {
    return (
        <section>
            <AdminHeader/>
            <Sidebar />
            {children}
        </section>


    )
}