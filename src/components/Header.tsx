

const Header = () => {
    return (
        <header className=" bg-slate-700  items-center text-white font-semibold  flex justify-between p-3">
            <div><h2 className="hover:text-yellow-300"><a href="/">My Employees Base</a></h2></div>
            <div >
                <nav className=" space-x-6">
                    <a className="hover:text-yellow-300" href="/employees">Employees</a>
                    <a className="hover:text-yellow-300" href="/about">Management </a>
                    <a className="hover:text-yellow-300" href="/about">Application </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
