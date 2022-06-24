import React from 'react';
import './Gallery.css';

function Gallery() {
    return (
        <section id="gallery">
            <div className="card" id="card1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="card-img"><img className="sneakersImg" src="/Images/img1.jpg" alt="image"></img></div>
                <div className="card-info">
                    <h2>Multix Shoes</h2>
                    <h3>Men's Originals</h3>
                </div>
            </div>

            <div className="card" id="card2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="card-img"><img className="sneakersImg" src="/Images/img2.jpg" alt="image"></img></div>
                <div className="card-info">
                    <h2>Stan Smith Shoes</h2>
                    <h3>Men's Originals</h3>
                </div>
            </div>

            <div className="card" id="card3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="card-img"><img className="sneakersImg" src="/Images/img3.jpg" alt="image"></img></div>
                <div className="card-info">
                    <h2>Forum Low Shoes</h2>
                    <h3>Youth Originals</h3>
                </div>
            </div>

            <div className="card" id="card4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="card-img"><img className="sneakersImg" src="/Images/img4.jpg" alt="image"></img></div>
                <div className="card-info">
                    <h2>Swift Run 22</h2>
                    <h3>Women's Originals</h3>
                </div>
            </div>

            <div className="card" id="card5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="card-img"><img className="sneakersImg" src="/Images/img5.jpg" alt="image"></img></div>
                <div className="card-info">
                    <h2>Disney Stan Shoes</h2>
                    <h3>Women's Originals</h3>
                </div>
            </div>

            <div className="card" id="card6" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="card-img"><img className="sneakersImg" src="/Images/img6.jpg" alt="image"></img></div>
                <div className="card-info">
                    <h2>NMD_R1 Shoes</h2>
                    <h3>Men's Originals</h3>
                </div>
            </div>

            <div className="card" id="card7" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="card-img"><img className="sneakersImg" src="/Images/img7.jpg" alt="image"></img></div>
                <div className="card-info">
                    <h2>Gazelle Shoes</h2>
                    <h3>Women's Originals</h3>
                </div>
            </div>

            <div className="card" id="card8" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="card-img"><img className="sneakersImg" src="/Images/img8.jpg" alt="image"></img></div>
                <div className="card-info">
                    <h2>Drax Ozelia Shoes</h2>
                    <h3>Men's Originals</h3>
                </div>
            </div>

            <div className="card" id="card9" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="card-img"><img className="sneakersImg" src="/Images/img9.jpg" alt="image"></img></div>
                <div className="card-info">
                    <h2>Multix J Shoes</h2>
                    <h3>Women's Originals</h3>
                </div>
            </div>

            <div className="card" id="card10" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="card-img"><img className="sneakersImg" src="/Images/img10.jpg" alt="image"></img></div>
                <div className="card-info">
                    <h2>4D FWD Shoes</h2>
                    <h3>Men's Originals</h3>
                </div>
            </div>

            <div className="card" id="card11" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="card-img"><img className="sneakersImg" src="/Images/img11.jpg" alt="image"></img></div>
                <div className="card-info">
                    <h2>UltraBoost 5.0</h2>
                    <h3>Sportswear</h3>
                </div>
            </div>

            <div className="card" id="card12" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="card-img"><img className="sneakersImg" src="/Images/img12.jpg" alt="image"></img></div>
                <div className="card-info">
                    <h2>Fortarun Messi El</h2>
                    <h3>Sportswear</h3>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Sneakers | UltraBoost</h5>
                            <button type="button" id="closeBtn" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="modalContainer">
                                <div className="modalCard">
                                    <div className="card-img"><img id="imgModal" className="sneakersImg" src="" alt="image"></img></div>
                                </div>
                                <div className="modalInfo">
                                    <div className="hInfo">
                                        <h2 id="mainH"></h2>
                                        <h3 id="subH"></h3>
                                    </div>
                                    <div className="pInfo">
                                        <ol className="pInfoList" style={{ listStyleType: "disc" }}>
                                            <li>Regular Fit</li>
                                            <li>Lace closure</li>
                                            <li>Boost midsole</li>
                                            <li>Closed mesh upper</li>
                                            <li>Textile lining</li>
                                        </ol>
                                    </div>
                                    <div className="pCounter">
                                        <div className="wrapper">
                                            <span className="minus m1">-</span>
                                            <span className="num n1 ">00</span>
                                            <span className="plus p1">+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" id="cart" className="btn btn-primary atc"><i className='bx bx-cart' ></i>&nbsp;&nbsp;Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
