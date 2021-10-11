import Sidebar from "../components/Layout/Sidebar";
import Footer from "../components/Layout/Footer";
import styles from "../styles/Layout.module.css"
export default function Layout({ children }) {
    return (
        <>
            <div className={styles.layout}>
                <Sidebar/>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}