import React from 'react';

import MetaWebsite from '@/common/meta/MetaWebsite';
import httpRequest from '@/common/utils/httpRequest';
import pageNumber from '@/common/utils/pageNumber';
import { getCookie } from '@/common/utils/session';
import LayoutComponent from '@/modules/layout/components';




const Disputes = () => {
	return (
		<>
			<MetaWebsite title="Tags" />
			<LayoutComponent>
				<div className="container mt-5 mb-3">
    <div className="row">
        <div className="col-md-4">
            <div className="card p-3 mb-2">
            <div className="d-inline p-2 bg-primary text-white">d-inline</div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"> <i className="bx bxl-mailchimp"></i> </div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0">Mailchimp</h6> <span>1 days ago</span>
                        </div>
                    </div>
                    <div className="badge"> <span>Design</span> </div>
                </div>
                <div className="mt-5">
                    <h3 className="heading">Senior ProductDesigner-Singapore</h3>
                    <div className="mt-5">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="mt-3"> <span className="text1">32 Applied <span className="text2">of 50 capacity</span></span> </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"> <i className="bx bxl-dribbble"></i> </div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0">Dribbble</h6> <span>4 days ago</span>
                        </div>
                    </div>
                    <div className="badge"> <span>Product</span> </div>
                </div>
                <div className="mt-5">
                    <h3 className="heading">Junior Product Designer-Singapore</h3>
                    <div className="mt-5">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="mt-3"> <span className="text1">42 Applied <span className="text2">of 70 capacity</span></span> </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"> <i className="bx bxl-reddit"></i> </div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0">Reddit</h6> <span>2 days ago</span>
                        </div>
                    </div>
                    <div className="badge"> <span>Design</span> </div>
                </div>
                <div className="mt-5">
                    <h3 className="heading">Software Architect  Java - USA</h3>
                    <div className="mt-5">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="mt-3"> <span className="text1">52 Applied <span className="text2">of 100 capacity</span></span> </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className="row">
        <div className="col-6">
        <div className="card float-right">
          <div className="row">
            <div className="col-sm-5">
              <img className="d-block w-100" src="https://picsum.photos/150?image=641" alt="" />
            </div>
            <div className="col-sm-7">
              <div className="card-block">
                <h4 className="card-title">Small card</h4>
                <p>Copy paste the HTML and CSS.</p>
                <p>Change around the content for awsomenes</p>
                <br />
                <a href="#" className="btn btn-primary btn-sm float-right">Read More</a>
              </div>
            </div>
     
          </div>
          </div>
          </div>
    </div>
</div>

 

			</LayoutComponent>
		</>
	);
};

export async function getServerSideProps({ req, query }) {
	try {
		const resListTag = await httpRequest.get({
			url: `/tags`,
			token: getCookie('token', req),
			params: {
				offset: (pageNumber(query.page) - 1) * process.env.LIMIT_PAGE.LIST_TAG,
				limit: process.env.LIMIT_PAGE.LIST_TAG
			}
		});
		if (resListTag.data.success) {
			return {
				props: {
					listTag: resListTag.data
				}
			};
		}
	} catch (error) {
		return {
			notFound: true
		};
	}
}

export default Disputes;
