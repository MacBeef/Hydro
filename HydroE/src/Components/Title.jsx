import React from 'react';
import { useTranslation } from "react-i18next";

function Title({ title_ContentKey }) {
    const { t } = useTranslation();

    return (
    <>  
        <div className="Title" id={title_ContentKey}>
            <center><h1>{t(title_ContentKey)}</h1></center>
        </div>
    </>
    )
}

export default Title;
