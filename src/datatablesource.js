export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: "panther",
        img: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        status: "active",
        email: "panther@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "professor",
        img: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        email: "professor@gmail.com",
        status: "passive",
        age: 30,
    },
    {
        id: 3,
        username: "Witch",
        img: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        email: "witch@gmail.com",
        status: "pending",
        age: 25,
    },
    {
        id: 4,
        username: "Stark",
        img: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        email: "stark@gmail.com",
        status: "active",
        age: 35,
    },
    {
        id: 5,
        username: "steve",
        img: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        email: "steve@gmail.com",
        status: "passive",
        age: 22,
    },
    {
        id: 6,
        username: "bill gates",
        img: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        email: "bill@gmail.com",
        status: "active",
        age: 15,
    },
    {
        id: 7,
        username: "jeff",
        img: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        email: "jeff@gmail.com",
        status: "passive",
        age: 44,
    },
    {
        id: 8,
        username: "Elon",
        img: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        email: "elon@gmail.com",
        status: "active",
        age: 36,
    },
    {
        id: 9,
        username: "Larry",
        img: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        email: "larry@gmail.com",
        status: "pending",
        age: 65,
    },
    {
        id: 10,
        username: "sundar",
        img: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        email: "sundar@gmail.com",
        status: "active",
        age: 65,
    },
];