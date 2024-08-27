import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

export default function Table() {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <TableHeader />
                <TableBody />
            </table>
            <TableFooter />
        </div>
    )
}