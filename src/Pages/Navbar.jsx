import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg nav-bg fixed-top'>
            <div className='container-fluid'>
                {/* <a className='navbar-brand logo' href='/'>Pick<span>Bazar</span></a> */}
                <img className='logo me-auto' src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75' />
                <div>
                    <ul className='navbar-nav'>
                        <li>
                            <Link className='li-items' to='/shops'>Shops </Link>
                        </li>
                        <li>
                            <Link className='li-items' to='/offers'>Offers </Link>
                        </li>
                        <li>
                            <Link className='li-items' to='/help'>FAQ </Link>
                        </li>
                        <li>
                            <Link className='li-items' to='/contact'>Contact </Link>
                        </li>
                        <a className='btn btn-primary btn-lg'>Become a Seller</a>
                        <a className='btn btn-primary btn-lg'>Join</a>
                    </ul>
                </div>

            </div>
        </nav>

    )
}

export default Navbar