import Layout from "../components/layout/Layout";
import Link from "next/link"
import React, { useState } from "react";

function Account() {

    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };


    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Account">
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="dashboard-menu">
                                            <ul className="nav flex-column" role="tablist">
                                                <li className="nav-item">
                                                    <a className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)}><i className="fi-rs-settings-sliders mr-10"></i>პანელი</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 2 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(2)}><i className="fi-rs-shopping-bag mr-10"></i>შეკვეთები</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 3 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(3)}><i className="fi-rs-shopping-cart-check mr-10"></i>ჩემი შეკვეთები</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 4 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(4)}><i className="fi-rs-marker mr-10"></i>ჩემი მისამართი</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 5 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(5)}><i className="fi-rs-user mr-10"></i>ჩემი ანგარიში</a>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/page-login"><a className="nav-link"><i className="fi-rs-sign-out mr-10"></i>გამოსვლა</a></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="tab-content account dashboard-content pl-50">
                                            <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">მოგესალმებით მომხმარებლის სახელი!</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და არაბუნებრივად გამოიყურება.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">შეკვეთები</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>შეკვეთა</th>
                                                                        <th>თარიღი</th>
                                                                        <th>სტატუსი</th>
                                                                        <th>ჯამი</th>
                                                                        <th>ქმედება</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>#1357</td>
                                                                        <td>20 მარტი, 2022</td>
                                                                        <td>მუშავდება</td>
                                                                        <td>₾125.00, 2 ნივთი</td>
                                                                        <td><a href="#" className="btn-small d-block">ნახვა</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#2468</td>
                                                                        <td>20 მარტი, 2022</td>
                                                                        <td>დასრულებული</td>
                                                                        <td>₾364.00, 5 ნივთი</td>
                                                                        <td><a href="#" className="btn-small d-block">ნახვა</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#2366</td>
                                                                        <td>20 მარტი, 2022</td>
                                                                        <td>დასრულებული</td>
                                                                        <td>₾280.00, 3 ნივთი</td>
                                                                        <td><a href="#" className="btn-small d-block">ნახვა</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">შეკვეთის ძებნა</h3>
                                                    </div>
                                                    <div className="card-body contact-from-area">
                                                        <p>თქვენი შეკვეთის თვალყურის დევნებისთვის, გთხოვთ, შეიყვანოთ თქვენი შეკვეთის ID ქვემოთ ველში და დააჭიროთ ღილაკს ნახვა. ეს მოგეწოდებათ ქვითარზე და დამადასტურებელ ელფოსტაში, რომელიც უნდა მიეღოთ.</p>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <form className="contact-form-style mt-30 mb-50" action="#" method="post">
                                                                    <div className="input-style mb-20">
                                                                        <label>შეკვეთის ID</label>
                                                                        <input name="order-id" placeholder="გთხოვთ მიუთითოთ შეკვეთის ID" type="text" />
                                                                    </div>
                                                                    <div className="input-style mb-20">
                                                                        <label>თქვენი ფოსტა</label>
                                                                        <input name="billing-email" placeholder="გთხოვთ მიუთითოთ თქვენი ელ-ფოსტა" type="email" />
                                                                    </div>
                                                                    <button className="submit submit-auto-width" type="submit">ძებნა</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="card mb-3 mb-lg-0">
                                                            <div className="card-header">
                                                                <h3 className="mb-0">ჩემი მისამართი</h3>
                                                            </div>
                                                            <div className="card-body">
                                                                <address>
                                                                    42 აკაკი წერეთლის გამზირი<br />
                                                                    75 Business Spur,<br />
                                                                    Sault Ste. <br />Marie, MI 49783
                                                                </address>
                                                                <p>New York</p>
                                                                <a href="#" className="btn-small">Edit</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5 className="mb-0">Shipping Address</h5>
                                                            </div>
                                                            <div className="card-body">
                                                                <address>
                                                                    4299 Express Lane<br />
                                                                    Sarasota, <br />FL 34249 USA <br />Phone: 1.941.227.4444
                                                                </address>
                                                                <p>Sarasota</p>
                                                                <a href="#" className="btn-small">Edit</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5>Account Details</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>Already have an account? <Link href="/page-login"><a>Log in instead!</a></Link></p>
                                                        <form method="post" name="enq">
                                                            <div className="row">
                                                                <div className="form-group col-md-6">
                                                                    <label>First Name <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="name" type="text" />
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label>Last Name <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="phone" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Display Name <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="dname" type="text" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Email Address <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="email" type="email" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Current Password <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="password" type="password" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>New Password <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="npassword" type="password" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Confirm Password <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="cpassword" type="password" />
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <button type="submit" className="btn btn-fill-out submit font-weight-bold" name="submit" value="Submit">Save Change</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Account;
