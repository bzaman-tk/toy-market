import React, { useEffect } from 'react';

const Blog = () => {

    useEffect(() => {
        document.title = 'Despicable Me Toy | Blog'
    }, [])

    return (
        <div className='w-1/2 mx-auto my-5 py-5 px-10 text-xl '>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h2 className='text-2xl font-bold text-white mt-5'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                </div>
                <div className="collapse-content">
                    <p className="my-5">
                        <strong>Access token</strong>: It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period.
                        <br /><strong>Refresh token</strong>: The refresh token is used to generate a new access token.
                    </p>
                    <p>To keep them secure, you should always store JWTs inside an httpOnly cookie. This is a special kind of cookie that's only sent in HTTP requests to the server. It's never accessible (both for reading or writing) from JavaScript running in the browser.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    <h2 className='text-2xl font-bold text-white mt-5'>What is MongoDB aggregate and how does it work (google it)?</h2>
                </div>
                <div className="collapse-content">
                    <p className="my-5">Aggregation is the process of combining things. That is, putting those things together so that we can refer to them collectively.  in MongoDB, Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h2 className='text-2xl font-bold text-white mt-5'>What is express js? What is Nest JS?</h2>
                </div>
                <div className="collapse-content">
                    <p className="my-5">Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js</p>
                    <p>Nest. js is a server-side Node. js framework that's great for building highly testable and maintainable backend applications.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    <h2 className='text-2xl font-bold text-white mt-5'>Compare SQL and NoSQL databases?</h2>
                </div>
                <div className="collapse-content">
                    <p className="my-5 grid grid-cols-2">
                        <span className='border-b-2 border-gray-500 py-5 border-r-2'>SQL databases are vertically scalable,</span>
                        <span className='border-b-2 border-gray-500 py-5 pl-5'>while NoSQL databases are horizontally scalable.</span>
                        <span className='border-b-2 border-gray-500 py-5 border-r-2'>SQL databases are table-based,</span>
                        <span className='border-b-2 border-gray-500 py-5 pl-5'>while NoSQL databases are document, key-value, graph, or wide-column stores.</span>
                        <span className='border-b-2 border-gray-500 py-5 border-r-2'>SQL databases are better for multi-row transactions,</span>
                        <span className='border-b-2 border-gray-500 py-5 pl-5'>while NoSQL is better for unstructured data like documents or JSON.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;