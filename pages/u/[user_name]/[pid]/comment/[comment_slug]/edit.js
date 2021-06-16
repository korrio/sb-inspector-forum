import React from 'react';

import httpRequest from '@/common/utils/httpRequest';
import { getCookie } from '@/common/utils/session';
import EditCommentComponent from '@/modules/editComment/components';
import Layout from '@/modules/layout/components';

const EditComment = ({ editComment }) => {
	return (
		<>
			<Layout>
				<EditCommentComponent editComment={editComment} />
			</Layout>
		</>
	);
};

export async function getServerSideProps({ req, query }) {
	try {
		const { user_name, pid, comment_slug } = query;
		const resEditComment = await httpRequest.get({
			url: `/comments/${comment_slug}/edit`,
			params: {
				user_name: user_name,
				post_slug: pid
			},
			token: getCookie('token', req)
		});
		if (resEditComment.data.success) {
			return {
				props: {
					editComment: resEditComment.data
				}
			};
		}
	} catch (error) {
		return {
			notFound: true
		};
	}
}

export default EditComment;
