import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'
function Main() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <ul className='navbar-nav'>
                        <li className="nav-item" >
                            <Link to={"/"} className="nav-link active " aria-current="page" id='main' href="#">School <span>Mangement</span> </Link>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">About</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row mt-4 text-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="card" style={{ width: '18rem', }}>
                            <img src="https://t3.ftcdn.net/jpg/00/07/32/48/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Admin</h5>

                                <p className="card-text">If you are looking All details moving on Dashbaord </p>

                                <Link to={'/Admin'} className="btn btn-primary ">Go Dashboard</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=sph" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Teacher</h5>
                                <p className="card-text">If you are looking All details moving on Dashbaord </p>

                                <Link to={'/Teacher'} className="btn btn-primary">Go Dashboard</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fcBxxWM3b_a2Ig9vqW8C6eW7U34fXM9hUw9FpHhzQX3ZMpPFL6ZBvizSOodN0OpbIaU&usqp=CAU" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Student</h5>
                                <p className="card-text">If you are looking All details moving on Dashbaord </p>
                                <Link to={'/Student'} className="btn btn-primary">Go Dashboard</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Main 