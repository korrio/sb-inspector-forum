import React from 'react';

import MetaWebsite from '@/common/meta/MetaWebsite';
import httpRequest from '@/common/utils/httpRequest';
import { getCookie } from '@/common/utils/session';
import LayoutComponent from '@/modules/layout/components';
import NewPostComponent from '@/modules/newPost/components';

const NewPost = () => {
	return (
		<>
			<MetaWebsite title="New Post" />
			<LayoutComponent>
				<NewPostComponent />
			</LayoutComponent>
		</>
	);
};

// export async function getServerSideProps({ req }) {
// 	try {
// 		// const resCurrentUser = await httpRequest.get({
// 		// 	url: `/current_user`,
// 		// 	token: getCookie('token', req)
// 		// });
// 		const resCurrentUser = {"success":true,"data":{"id":1,"user_name":"korrio","avatar":"libeyondea.png","access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDg0NjY1YmMxNDg2ODYyNmFmOWQ3ZTY2YzU0ZjJlNGQ5MjNkNGJiZDFmYWQ3MzQzNmE1N2UyM2E3NzNhOGFmMzQzZGVlNmZlMTk4YjRlMmMiLCJpYXQiOjE2Nzk0MzMzNzguNjc1NjUxLCJuYmYiOjE2Nzk0MzMzNzguNjc1NjU0LCJleHAiOjE2Nzk1MTk3NzguMDk0NTMsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.llkOr1KcNfKxxRUulv1HYShuJzAfvacjOPwyjKdi2Y9nptFCo5D3zcrWjyOEWMjjV1e2DXF64NrEYwoIKUwsyIbQ2-bWzG803WEWJb1sN1eNptmL0ep4f2EFMCvkLnnLZuSrI3y9h-DURpKwXTRRZlWS0aSofaLNgHuE8Rr-ZyLINpRnAeLL1ySBT9RtjD9mk6FhveNZY2OCt-NDVxrsw15wv9PPT41SNKDDtq_UHnjgFXIvWOk58q5rPq1QS-AbszFoeHB8rao9wMOv8Di6cAnkPIC8GsdoM6rBbTMMcmU2L9jjNQ0IJJBhtsErIJxNUqM_X6hOrSPeJKHVcWjPsOEbr037-U0jofll7R4oxh_7Ra9rGeE0se6crrFICNc1QyEtWeOp2lj0bApBnLmn8dDuVBkJLlrApIGnmSl1hmyAXcTSdUpkw4_v5Rvz4tjZQXez-ScM0mvoAyTwcEh8L-jvZIjXlbnDHbwCavpjhuSz6s4NUOIYprM5dbBuTJn9PqG9eKMY8wUA7axvqUP61Gb1mV-erKMfbBExId9ra2sN9sjJUx7o-zC8sGptfbWPESHzqN13O6z_qDmZarif0OnMzJhByj4a3Y_p3NEP_AR7-ST5S5uKH0h5C66_9HTfZvf2opTdUrWsiwQqifVSt-Sj22XHHuBUMriu7z5xVhY","token_type":"Bearer","expires_at":"2023-03-23 04:16:18"}}
// 		if (resCurrentUser.success) {
// 			return {
// 				props: {
// 					currentUser: resCurrentUser.data
// 				}
// 			};
// 		}
// 	} catch (error) {
// 		if (error?.response?.status === 401) {
// 			return {
// 				redirect: {
// 					destination: '/login',
// 					permanent: false
// 				}
// 			};
// 		}
// 		return {
// 			notFound: true
// 		};
// 	}
// }

export default NewPost;
