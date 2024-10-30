import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

function Section({ section_Type, section_Color, header_ContentKey, body_ContentKey, img_ContentKey, video_ContentKey }) {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
    <>  
        <div className={section_Color}>
            <div className={section_Type}>
                <div className="sectionContent">
                    <div className='sectionDivider'>
                    <div className="sectionBody">
                        <div className="sectionText">
                        <h1>{t(header_ContentKey)}</h1>
                            <p>{t(body_ContentKey)}</p>
                        </div>
                        <div className="sectionImage">
                            <img src={img_ContentKey} alt="image"/>
                        </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Section;