import "./Member.css";


const Member = ({imgsrc,name,pos,info}) => {
    const images=["/memm-image-1.jpg","memf-image-2.jpg","/memm-image-1.jpg",
        "memf-image-2.jpg","/memm-image-1.jpg",
        "memf-image-2.jpg","/memm-image-1.jpg","memf-image-2.jpg",
        "/memm-image-1.jpg","memf-image-2.jpg",
        "/memm-image-1.jpg","memf-image-2.jpg",
        "/memm-image-1.jpg","memf-image-2.jpg",
        "/memm-image-1.jpg","memf-image-2.jpg",
        "memf-image-2.jpg","/memm-image-1.jpg","memf-image-2.jpg",
        "/memm-image-1.jpg","memf-image-2.jpg",
        "/memm-image-1.jpg","memf-image-2.jpg",
        "/memm-image-1.jpg","memf-image-2.jpg",
        "/memm-image-1.jpg","memf-image-2.jpg",



    ];
    const mInfo = [
        { name: "Prof. Karthik Raman", position: "Principal Investigator" },
        { name: "Anirudh Rao", position: "Team Lead" },
        { name: "Niharika Balasubramanian", position: "Team Lead" },
        { name: "Twisha T S", position: "Team Lead" },
        { name: "Aadityanshu Abhinav", position: "Member" },
        { name: "Alan Royce", position: "Member" },
        { name: "Aldis Daniel", position: "Member" },
        { name: "Bharvi Arora", position: "Member" },
        { name: "Ganesh P", position: "Member" },
        { name: "Harshavardhan Madhan", position: "Member" },
        { name: "Hitesh Kandarpa", position: "Member" },
        { name: "Ishaan Yadav", position: "Member" },
        { name: "J V Shreya", position: "Member" },
        { name: "Karthik Rajesh", position: "Member" },
        { name: "Oviya Suresh", position: "Member" },
        { name: "Pranav Ram", position: "Member" },
        { name: "Ridhima Minkuri", position: "Member" },
        { name: "Rohan Krishnan", position: "Member" },
        { name: "Ruchir R", position: "Member" },
        { name: "Sanjana N T", position: "Member" },
        { name: "Shreya Patki", position: "Member" },
        { name: "Shreyas Balakarthikeyan", position: "Member" },
        { name: "Skandaagraja Sundhar", position: "Member" },
        { name: "Sreelatha P", position: "Member" },
        { name: "Vaidehi Patil", position: "Member" },
        { name: "Yaswitha Reddy", position: "Member" }
    ];
    return ( 
        <div className="Member">
            <img src={imgsrc} alt="img" />
           <div className="info">{info}</div>
            <div className="intro">{name}<p>{pos}</p> </div><br />
            
            
        </div>
     );
}
 
export default Member;