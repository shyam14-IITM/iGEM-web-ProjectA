import { useState } from "react";
import Member from "./Member";
import PageHeader from "./PageHeader";
import './Team.css';

const Team = () => {
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
        { name: "Prof. Karthik Raman", position: "Principal Investigator",info:"Name is a dedicated and detail-oriented lab member of the iGEM team. With a strong background in molecular biology and synthetic biology, Jordan excels in designing experiments and optimizing  boundaries of science. " },
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
    for (let i = 0; i < mInfo.length; i++) {
        mInfo[i].info="Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member. Some details about the Member.";
        
    }


   
    return ( 
        
        <div   className="Team">
             <PageHeader Title="Members" darktext=""></PageHeader>
            <br /><br /><br /><br /><br /><br /><br />
        <Member name={"name"} pos={"mem.position"} imgsrc={images[0]} info={mInfo[0].info}></Member>
            {
                mInfo.map((mem,index)=>

                (<Member name={mem.name} pos={mem.position} imgsrc={images[index]} info={mem.info}></Member> )  
                )
            }
            <img  src="https://static.igem.wiki/teams/5155/new-footer.webp" />
        </div>
     );
}
 
export default Team;