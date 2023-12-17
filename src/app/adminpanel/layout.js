
import "@/app/globals.css"
import Sidebar from "@/app/(admin-components)/Sidebar";

export default function adminlayout({ children }) {
    return (
        <section>
            <Sidebar />
            {children}
        </section>


    )
}