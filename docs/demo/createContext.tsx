import React, { createContext, useState } from 'react';

type Contentype = {
    name: number;
    setName?: (value: any) => void;
}

export const Usecontent = createContext<Contentype>({
    name: 0
})

type Props = {

}

export const UseInfoProvider:React.FC<Props> = ({ children }) => {
    const [name, setName] = useState(0)
    return (
        <Usecontent.Provider value={{
            name,
            setName,
        }}>
            {children}
        </Usecontent.Provider>
    )
}

export const UseInfoConsumer = Usecontent.Consumer;