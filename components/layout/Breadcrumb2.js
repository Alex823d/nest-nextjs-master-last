import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Tags from "../ecommerce/Filter/Tags";

const Breadcrumb2 = ({ parent, sub, subChild, noBreadcrumb }) => {
  const router = useRouter();

  const titlex = router.query.cat;
  console.log(titlex);
  return (
    <>
      <div className="page-header mt-30 mb-50">
        <div className="container">
          <div className="archive-header">
            <div className="row align-items-center">
              <div className="col-xl-3">
                <h1 className="mb-15 text-capitalize">
                  {titlex ? titlex : "პროდუქციის გვერდი 1"}
                </h1>
                <div className="breadcrumb">
                  <Link href="/">
                    <a rel="nofollow">
                      <i className="fi-rs-home mr-5"></i>მთავარი
                    </a>
                  </Link>
                  <span></span> გვერდი 1 <span></span> {titlex}
                </div>
              </div>
              <div className="col-xl-9 text-end d-xl-block">
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb2;
