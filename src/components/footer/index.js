function Footer(props) {
    const { srcimg } = props
        return(
            <div className="flex justify-center bg-white rounded-t-3xl w-full h-40">
                <div className="flex flex-row justify-center items-center w-5/6">
                    <div className="flex flex-row items-center w-1/2">
                        <div className="logo flex items-center">
                            <img src={srcimg} className="w-20" alt="logo nongski" />
                        </div>
                        <h1 className="md:text-4xl text-xl font-extrabold nunito text-red-600">Never Stop<br />Being Kind</h1>
                    </div>
                    <div className="flex md:flex-row flex-col w-1/2 text-black">
                        <ul className="md:m-auto">
                            <h2 className="md:text-lg text-sm font-semibold leading-loose">Explore us</h2>
                            <div className="md:text-sm text-xs">
                                <li><a href="#">Friends</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </div>
                        </ul>
                        <ul className="md:m-auto">
                            <h2 className="md:text-lg text-sm font-semibold leading-loose">Getting touch</h2>
                            <div className="md:text-sm text-xs">
                                <li><a href="https://instagram.com/nongski_nsbk">@nongski_nsbk</a></li>
                                <li><a href="mailto:nongski.nsbk@gmail.com">nongski.nsbk@gmail.com</a></li>
                                <li><a href="https://wa.me/085773821645">0857-7382-1645</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
}

export default Footer;