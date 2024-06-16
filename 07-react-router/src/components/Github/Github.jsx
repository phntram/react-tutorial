// import { useEffect } from "react";
// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// use to get data from router dom

const Github = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/phntram').then((res) => res.json()).then((data) => {
    //         console.log(data);
    //         setData(data);
    //     });
    // }, []);

    const data = useLoaderData();
    // console.log(data);

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}
            <img src={data.avatar_url} width={300} alt="avatar" />
        </div>
    );
};

export default Github;

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/phntram');
    return res.json();
};