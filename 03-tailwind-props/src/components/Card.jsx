import React from 'react';

const Card = ({ userName = "HC", post = "not designed yet" }) => {
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512" />
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg font-mediu">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laborum?
                        </p>
                    </blockquote>
                    <figcaption>
                        <div>
                            {userName}
                        </div>
                        <div>
                            {post}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
};

export default Card;