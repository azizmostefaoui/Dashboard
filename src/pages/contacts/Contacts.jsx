import { DataGrid } from '@mui/x-data-grid';
import {  GridToolbar } from '@mui/x-data-grid';
const rows = [
  {
    id: 1,
    name: "Mohammed Ahmed",
    email: "mohammed.ahmed@gmail.com",
    age: 30,
    phone: "01112223344",
    address: "Al-Nour Street, Cairo, Egypt",
    city: "Cairo",
    zipCode: "11511",
    registrarId: 101101,
  },
  {
    id: 2,
    name: "Khaled Ibrahim",
    email: "khaled.ibrahim@gmail.com",
    age: 40,
    phone: "01234455667",
    address: "Al-Rayan District, Riyadh, Saudi Arabia",
    city: "Riyadh",
    zipCode: "12241",
    registrarId: 202202,
  },
  {
    id: 3,
    name: "Fatima Zahra",
    email: "fatima.zahraa@gmail.com",
    age: 28,
    phone: "01056677889",
    address: "Hassan II Street, Rabat, Morocco",
    city: "Rabat",
    zipCode: "10000",
    registrarId: 303303,
  },
  {
    id: 4,
    name: "Ali Hassan",
    email: "ali.hassan@gmail.com",
    age: 35,
    phone: "01199887766",
    address: "Al-Tahrir Street, Baghdad, Iraq",
    city: "Baghdad",
    zipCode: "11001",
    registrarId: 404404,
  },
  {
    id: 5,
    name: "Salma Mahmoud",
    email: "salma.mahmoud@gmail.com",
    age: 26,
    phone: "01022334455",
    address: "City District, Dubai, UAE",
    city: "Dubai",
    zipCode: "99999",
    registrarId: 505505,
  },
  {
    id: 6,
    name: "Youssef Omar",
    email: "youssef.omar@gmail.com",
    age: 33,
    phone: "01334455677",
    address: "King Faisal Street, Amman, Jordan",
    city: "Amman",
    zipCode: "11953",
    registrarId: 606606,
  },
  {
    id: 7,
    name: "Amna Abdullah",
    email: "amna.abdullah@gmail.com",
    age: 29,
    phone: "01222334455",
    address: "Al-Yarmouk District, Jeddah, Saudi Arabia",
    city: "Jeddah",
    zipCode: "21577",
    registrarId: 707707,
  },
  {
    id: 8,
    name: "Abdulrahman Saleh",
    email: "abdulrahman.saleh@gmail.com",
    age: 45,
    phone: "01555667788",
    address: "Al-Mustaqbal Street, Sanaa, Yemen",
    city: "Sanaa",
    zipCode: "96701",
    registrarId: 808808,
  },
  {
    id: 9,
    name: "Leila Abdelkareem",
    email: "leila.abdelkareem@gmail.com",
    age: 22,
    phone: "01466778899",
    address: "Al-Zohour District, Tunis, Tunisia",
    city: "Tunis",
    zipCode: "2091",
    registrarId: 909909,
  },
  {
    id: 10,
    name: "Ibrahim Saeed",
    email: "ibrahim.saeed@gmail.com",
    age: 38,
    phone: "01233445566",
    address: "Al-Hikma Street, Khartoum, Sudan",
    city: "Khartoum",
    zipCode: "12234",
    registrarId: 101010,
  },
  {
    id: 11,
    name: "Huda Ali",
    email: "huda.ali@gmail.com",
    age: 27,
    phone: "01177889966",
    address: "Al-Amal District, Muscat, Oman",
    city: "Muscat",
    zipCode: "112",
    registrarId: 111111,
  },
];


export default function Contacts() {
  const { data, loading } = ({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "registrarId", headerName: "Registrar ID", width: 150 },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { 
      field: "age", 
      headerName: "Age", 
      type: "number", 
      width: 100, 
      headerAlign: "left", 
      align: "left" 
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
  ];
  
      
       
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid {...data} loading={loading} slots={{ toolbar: GridToolbar }}  rows={rows} columns={columns} />
    </div>
  );
}
