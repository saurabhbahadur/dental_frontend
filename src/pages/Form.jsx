import React from 'react';

const Form = () => {
    return (
        <div className="border-2 border-black w-80 bg-gray-100 flex flex-col items-center text-center mx-auto mt-10 p-5 rounded-lg shadow-lg">
            <form className="w-full flex flex-col items-center">
                <h1 className="text-2xl font-semibold mb-4">Make An Appointment</h1>
                <input
                    className="border-2 border-black block p-2 rounded w-4/5 mb-3"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                />
                <input
                    className="border-2 border-black block p-2 rounded w-4/5 mb-3"
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Number"
                />
                <input
                    className="border-2 border-black block p-2 rounded w-4/5 mb-3"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                />
                <textarea
                    className="border-2 border-black block p-2 rounded w-4/5 mb-3"
                    name="message"
                    id="message"
                    placeholder="Message"
                />
                <button className="border-2 border-black p-2 mt-3 bg-blue-500 text-white rounded w-4/5">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
