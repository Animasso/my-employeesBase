
const NewEmployee = () => {
    return (
        <div className=" shadow-2xl w-1/2 border-2 px-9 py-5 mt-10 justify-self-center ">
            <h2 className=" font-bold mt-12 text-center mb-8">Add New Employee</h2>
            <form className=" text-center flex flex-col gap-9" >
                {/* form fields */}

                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input className=" ml-5 bg-slate-100 shadow-lg border-2 rounded-sm" type="text" id="firstName" name="firstName" required />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input className=" ml-5 bg-slate-100 shadow-lg border-2 rounded-sm" type="text" id="lastName" name="lastName" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input className=" ml-5 bg-slate-100 shadow-lg border-2 rounded-sm" type="email" id="email" name="email" required />
                </div>
                <div>
                    <button className=" hover:bg-blue-800 bg-blue-700 border shadow-2xl px-3 py-2 text-white rounded-lg" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewEmployee