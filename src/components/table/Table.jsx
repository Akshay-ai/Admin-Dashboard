import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
    const rows = [
        {
            id: "7x43512",
            product: "DELL G5",
            img: "https://m.media-amazon.com/images/I/81oWLEoHrgL._SX679_.jpg",
            customer: "Thor",
            date: "31 March",
            amount: 1022,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: "9x43412",
            product: "Playstation 5",
            img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Iron Man",
            date: "31 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: "9a12347",
            product: "MacBook Pro",
            img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585943/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9009480892446.png/mxw_2048,f_auto",
            customer: "Hulk",
            date: "31 March",
            amount: 1400,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: "7s6874",
            product: "Apple Watch Series 7",
            img: "https://m.media-amazon.com/images/I/71SFsTBSJgL._SX679_.jpg",
            customer: "Spidy",
            date: "31 March",
            amount: 600,
            method: "Online",
            status: "Approved",
        },
        {
            id: "9s47125",
            product: "Samsung s22 ultra",
            img: "https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg",
            customer: "Dr Strange",
            date: "31 March",
            amount: 1000,
            method: "Online",
            status: "Pending",
        },
    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Payment Method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default List