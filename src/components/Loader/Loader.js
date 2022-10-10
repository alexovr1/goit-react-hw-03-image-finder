import { Rings } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loader = () => {
    return <Rings
        height="230"
        width="230"
        color="#01779C"
        radius="20"
        wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
    />
} 