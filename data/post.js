import peoples from "./peoples"
const POST = [
    {
        imageURl :"https://picsum.photos/200/200?random=2",
        user: peoples[0],
        likes: 5600,
        caption: "after long time mai bhout din baad ye photo dala hu nahi to mar jata so please like to banta hai please please ",
        comments : [
            {
                user:"alok",
                comment: "Wow! gajab lag rage ho"
            },
            {
                user: "anish",
                comment:"sab theek to hai?"
            }
        ]
    },
    {
        imageURl :"https://picsum.photos/200/200?random=2232",
        user: peoples[1],
        likes: 1300,
        caption: "after long time",
        comments : [
            {
                user:"alok",
                comment: "Wow! gajab lag rage ho"
            }
        ]
    },
    {
        imageURl :"https://picsum.photos/200/200?random=223456",
        user: peoples[2],
        likes: 120,
        caption: "feeling happy with friends sab party mang rahe hai aditiya se",
        comments : [
            {
                user:"alok",
                comment: "Wow! gajab lag rage ho"
            },
            {
                user: "anish",
                comment:"sab theek to hai?"
            }
        ]
    }
]

export default POST;