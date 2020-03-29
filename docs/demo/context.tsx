import React, { useContext } from 'react';
import { Button } from 'antd';
import { UseInfoProvider, Usecontent } from './createContext'


const InfoView = () => {

    return (
        <UseInfoProvider>
            <InfoList />
        </UseInfoProvider>
    )
}

const InfoList = () => {
    const { name, setName } = useContext(Usecontent)
    return (
        <div>
            {name}
            <br />
            <Button onClick={() => setName(name + 1)}>点击</Button>
        </div>
    )
}

export default InfoView;