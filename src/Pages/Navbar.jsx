import React from 'react';
import { Link } from 'react-router-dom';
import { LuApple } from 'react-icons/lu'


function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg nav-bg fixed-top pt-4'>
            <div className='container-fluid'>
                <a href='/'><img className='logo me-auto' src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75' alt='img' /></a>

                <select class="form-select form-select-lg text-center align-items-center justify-content-center " aria-label=".form-select-lg example">
                    <option selected><LuApple />Grocery</option>
                    <option value="1">Bakery</option>
                    <option value="2">Makeup</option>
                    <option value="3">Bags</option>
                    <option value="4">Clothing</option>
                    <option value="5">Furniture</option>
                    <option value="6">Daily Needs</option>
                    <option value="7">Books</option>
                </select>



                <div>
                    <ul className='navbar-nav'>
                        <li>
                            <Link className='li-items mb-4' to='/shops'>Shops </Link>
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

                        <form class="container-fluid d-flex justify-content-center align-items-center">
                            <button class="btn btn-outline-success me-2" type="button">Become a Seller</button>
                            <button class="btn btn-sm btn-outline-secondary" type="button">Join</button>
                        </form>
                    </ul>
                </div>

            </div>
        </nav>

    )
}

export default Navbar