import { DataGrid } from '@mui/x-data-grid';
export default function Invoices() {


  const rows = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      address: "0912 Won Street, Alabama, Sy 18001",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
      address: "1234 Main Street, New York, NY 16001",
      city: "New York",
      zipCode: "13151",
      registrarId: 123512,
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone: "(422)982-6739",
      address: "3333 Want Blvd, Estanza, NAY 42125",
      city: "New York",
      zipCode: "87281",
      registrarId: 4132513,
    },
    {
      id: 4,
      name: "Mohammed Ali",
      email: "mohammed.ali@gmail.com",
      age: 28,
      phone: "(441)923-4576",
      address: "1234 Al Nour Street, Cairo, Egypt",
      city: "Cairo",
      zipCode: "11224",
      registrarId: 987654,
    },
    {
      id: 5,
      name: "Sami Farouk",
      email: "sami.farouk@gmail.com",
      age: 34,
      phone: "(432)657-1834",
      address: "5678 Al Hayat Blvd, Dubai, UAE",
      city: "Dubai",
      zipCode: "12035",
      registrarId: 776344,
    },
    {
      id: 6,
      name: "Fahad Al-Zahrani",
      email: "fahad.zahrani@gmail.com",
      age: 30,
      phone: "(453)678-2342",
      address: "4321 Prince Street, Riyadh, Saudi Arabia",
      city: "Riyadh",
      zipCode: "12459",
      registrarId: 557923,
    },
    {
      id: 7,
      name: "Nada Hassan",
      email: "nada.hassan@gmail.com",
      age: 29,
      phone: "(422)342-9431",
      address: "8765 Al Shams Street, Casablanca, Morocco",
      city: "Casablanca",
      zipCode: "10101",
      registrarId: 102456,
    },
    {
      id: 8,
      name: "Yasmin Kadri",
      email: "yasmin.kadri@gmail.com",
      age: 32,
      phone: "(563)412-9832",
      address: "4312 Avenue of Hope, Beirut, Lebanon",
      city: "Beirut",
      zipCode: "21547",
      registrarId: 192837,
    },
    {
      id: 9,
      name: "Tariq Al-Mansoori",
      email: "tariq.mansoori@gmail.com",
      age: 38,
      phone: "(543)123-4567",
      address: "9911 Jumeirah Street, Doha, Qatar",
      city: "Doha",
      zipCode: "34556",
      registrarId: 448837,
    }
  ];
  
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "registrarId", headerName: "Registrar ID", width: 150 },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left", width: 100 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
  ];
  
  return (
    
    <div style={{ height: 600, width: '100%' }}>
    <DataGrid checkboxSelection  rows={rows} columns={columns} />
  </div>
  )
}
