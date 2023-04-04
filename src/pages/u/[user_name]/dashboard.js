import React from 'react';

import MetaWebsite from '@/common/meta/MetaWebsite';
import httpRequest from '@/common/utils/httpRequest';
import pageNumber from '@/common/utils/pageNumber';
import { getCookie } from '@/common/utils/session';
import LayoutComponent from '@/modules/layout/components';
import SingleUserDashboardComponent from '@/modules/singleUser/components/dashboard';

const SingleUser = ({ singleUser, listPostUser, listTagUser }) => {
	return (
		<>
			<MetaWebsite title={singleUser.data.user_name} image={singleUser.data.avatar} />
			<LayoutComponent>
				<SingleUserDashboardComponent singleUser={singleUser} listPostUser={listPostUser} listTagUser={listTagUser} />
			</LayoutComponent>
		</>
	);
};

export async function getServerSideProps({ req, query }) {
	try {
		const { user_name } = query;
		const [resSingleUser, resListPostUser, resListTag] = await Promise.all([
			httpRequest.get({
				url: `/users/${user_name}`,
				token: getCookie('token', req)
			}),
			httpRequest.get({
				url: '/posts',
				token: getCookie('token', req),
				params: {
					user: user_name,
					sort_by: 'published_at',
					sort_direction: 'desc',
					offset: (pageNumber(query.page) - 1) * process.env.LIMIT_PAGE.LIST_POST_USER,
					limit: process.env.LIMIT_PAGE.LIST_POST_USER
				}
			}),
			httpRequest.get({
				url: `/tags`,
				token: getCookie('token', req),
				params: {
					offset: (pageNumber(query.page) - 1) * process.env.LIMIT_PAGE.LIST_TAG,
					limit: 5
				}
			})
		]);
		console.log("resListTag",resListTag);
		if (resSingleUser.data.success && resListPostUser.data.success) {
			return {
				props: {
					singleUser: resSingleUser.data,
					listPostUser: resListPostUser.data,
					listTagUser: resListTag.data
				}
			};
		}
	} catch (error) {
		return {
			notFound: true
		};
	}
}

export default SingleUser;
