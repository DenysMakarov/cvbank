import React from 'react';
import BtnPublish from "./BtnPublish";
import {FaPrint, FaDownload, FaCopy, FaShareAlt, FaTrash} from "react-icons/fa";
// <FaFacebook className='icon-modal'/>

const template_1 = require('../../img/concept-10-1.png');
const template_2 = require('../../img/concept-10-2.png');
const template_3 = require('../../img/concept-10-3.png');
const template_4 = require('../../img/concept-10-4.png');
const template_5 = require('../../img/concept-10-5.png');
const template_6 = require('../../img/concept-10-6.png');
const template_7 = require('../../img/concept-10-7.png');

const template = [template_1, template_2, template_3, template_4, template_5, template_6, template_7].reverse()

const AddCVEmployeePage = () => {
    return (
        <div className='container-fluid'>
            <div className='row create-cv-block'>
                <div className='col-2 cv-template-block'>
                    <BtnPublish/>
                    <p>TRY NEW TEMPLATES</p>
                    {
                        template.map(el =>
                            <div key={el} style={{backgroundImage: `url(${el})`}} className='cv-template '/>
                        )
                    }
                </div>
                <div className='col-10 ' style={{position: 'relative'}}>
                    <div className='create-cv-nav'>
                        <FaPrint className='cv-nav-item'/>
                        <FaDownload className='cv-nav-item'/>
                        <FaCopy className='cv-nav-item'/>
                        <FaShareAlt className='cv-nav-item'/>
                        <div className='cv-nav-item cv-nav-item-line'></div>
                        <FaTrash className='cv-nav-item'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCVEmployeePage;


// {
//     "firstName": "Peter",
//     "lastName": "Parker",
//     "email": "peter@spidermail.com",
//     "phone": "+1 557 890 8901",
//     "isVerified": 0,
//     "preambule": "Lorem ipsum dolor sit amet, usu nominati voluptatum te, his ei summo abhorreant. Ex tantas nonumes assentior vix, in mea iusto detraxit efficiantur. No mei erat sensibus evertitur, at exerci gloriatur his, mel ea possim ocurreret. Dico eruditi probatus ei eam, an tale instructior mea. Eos ex porro oblique, liber tantas eu mel. Dicunt regione oportere duo ei.",
//     "skills": ["Programming languages", "Scripting languages", "Version control systems", "Virtualization", "DevOps tools"],
//     "experience": [{
//     "date": "2016-present",
//     "company": "Spideroid Technologies",
//     "website": "www.spidertech.com",
//     "address": "New-York, WA",
//     "projects": [{
//         "project": "Project1",
//         "techologies": "Techologies1"
//     },
//         {
//             "project": "Project2",
//             "techologies": "Techologies12"
//         }
//     ]
// }],
//     "educations": [{
//     "date": "2005-2006",
//     "place": "Microsoft Virtual Academy",
//     "degree": "Microsoft Certified Solution Associate"
// },
//     {
//         "date": "2005-2005",
//         "place": "Oracle Education Center",
//         "degree": "Java Certification"
//     }
// ],
//     "other": {
//     "languages": ["English", "Hebrew", "German"]
// },
//     "links": ["https://www.linkedin.com/peterparker", "https://www.behance.com/peterparker", "https://www.facebook.com/peterparker"]
// }