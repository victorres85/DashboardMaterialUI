import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, supplier, wine, amount) {
    return { id, date, supplier, wine, amount };
}

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        'Liberty Wines',
        '2018 LAN Reserva, Rioja, Spain ',
        12,
    ),
    createData(
        1,
        '16 Mar, 2019',
        'Liberty Wines',
        '2020 Sauvignon Blanc, Jerman, Veneto, Italy',

        6,
    ),
    createData(
        2, '16 Mar, 2019', 'Liberty Wines', "2021	Vigneti Zabù, Nero d'Avola", 24),
    createData(
        3,
        '16 Mar, 2019',
        'Liberty Wines',
        '2016	Altos Las Hormigas, Mendoza Malbec Clásico',
        12,
    ),
    createData(
        4,
        '15 Mar, 2019',
        'FMV',
        '2020	Domaine Stéphane Aladame, Montagny 1er Cru `Découverte`',
        5,
    ),
];

function preventDefault(event) {
    event.preventDefault();
}

export default function Orders() {
    return (
        <React.Fragment>
            <Title>Recent Orders</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Supplier</TableCell>
                        <TableCell>Wine</TableCell>
                        <TableCell align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.supplier}</TableCell>
                            <TableCell>{row.wine}</TableCell>
                            <TableCell align="right">{`${row.amount}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link>
        </React.Fragment>
    );
}