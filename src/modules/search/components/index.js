import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';

import EmptyBoxComponent from '@/common/components/EmptyBox/components';
import LoadingPost from '@/common/components/LoadingPost/components';
import TabHorizontalComponent from '@/common/components/TabHorizontal/components';
import TabVertical from '@/common/components/TabVertical/components';
import useUser from '@/common/hooks/useUser';
import ListCommentComponent from '@/modules/search/components/listComment';
import ListPostComponent from '@/modules/search/components/listPost';
import ListTagComponent from '@/modules/search/components/listTag';
import ListUserComponent from '@/modules/search/components/listUser';

const SearchComponent = () => {
	const { user } = useUser();
	const { query } = useRouter();
	const q = query?.q || '';
	const type = query?.type || 'post';
	const sort = query?.sort === 'latest' ? 'desc' : query?.sort === 'oldest' ? 'asc' : 'desc';

	// const { data: listSearch, error } = useSWR(
	// 	`/search?offset=0&limit=${process.env.LIMIT_PAGE.LIST_POST_HOME}&search_fields=${q}&type=${type}&sort_direction=${sort}`,
	// 	{
	// 		revalidateOnFocus: false
	// 	}
	// );

	const { data: listSearch, error } = {
"success": true,
"data": [
{
"id": 42,
"title": "Hello World 42",
"slug": "hello-world-42",
"excerpt": "Hello World 42 is the best",
"pinned": 0,
"published": 1,
"published_at": "2020-10-31 03:14:14",
"created_at": "2020-10-30T13:56:21.000000Z",
"updated_at": "2020-12-14T12:01:55.000000Z",
"total_comments": 0,
"total_favorited": 0,
"favorited": false,
"user": {
"id": 1,
"user_name": "korrio",
"avatar": "libeyondea.png",
"role": {
"id": 1,
"title": "Administrator",
"slug": "administrator"
}
},
"category": {
"id": 3,
"title": "Hacking",
"slug": "hacking"
},
"tags": [
{
"id": 13,
"title": "Devops",
"slug": "devops"
}
]
},
{
"id": 50,
"title": "Hello World 50",
"slug": "hello-world-50",
"excerpt": "Hello World 50 is the best",
"pinned": 0,
"published": 1,
"published_at": "2020-10-31 03:14:14",
"created_at": "2020-10-30T13:56:22.000000Z",
"updated_at": "2020-12-14T12:01:36.000000Z",
"total_comments": 0,
"total_favorited": 0,
"favorited": false,
"user": {
"id": 1,
"user_name": "korrio",
"avatar": "libeyondea.png",
"role": {
"id": 1,
"title": "Administrator",
"slug": "administrator"
}
},
"category": {
"id": 3,
"title": "Hacking",
"slug": "hacking"
},
"tags": [
{
"id": 17,
"title": "PHP",
"slug": "php"
}
]
},
{
"id": 49,
"title": "Hello World 49",
"slug": "hello-world-49",
"excerpt": "Hello World 49 is the best",
"pinned": 0,
"published": 1,
"published_at": "2020-10-31 03:14:14",
"created_at": "2020-10-30T13:56:23.000000Z",
"updated_at": "2020-12-14T12:01:40.000000Z",
"total_comments": 0,
"total_favorited": 0,
"favorited": false,
"user": {
"id": 1,
"user_name": "korrio",
"avatar": "libeyondea.png",
"role": {
"id": 1,
"title": "Administrator",
"slug": "administrator"
}
},
"category": {
"id": 3,
"title": "Hacking",
"slug": "hacking"
},
"tags": [
{
"id": 17,
"title": "PHP",
"slug": "php"
}
]
},
{
"id": 48,
"title": "Hello World 48",
"slug": "hello-world-48",
"excerpt": "Hello World 48 is the best",
"pinned": 0,
"published": 1,
"published_at": "2020-10-31 03:14:14",
"created_at": "2020-10-30T13:56:23.000000Z",
"updated_at": "2020-12-14T12:01:42.000000Z",
"total_comments": 0,
"total_favorited": 0,
"favorited": false,
"user": {
"id": 1,
"user_name": "korrio",
"avatar": "libeyondea.png",
"role": {
"id": 1,
"title": "Administrator",
"slug": "administrator"
}
},
"category": {
"id": 3,
"title": "Hacking",
"slug": "hacking"
},
"tags": [
{
"id": 16,
"title": "Github",
"slug": "github"
}
]
},
{
"id": 47,
"title": "Hello World 47",
"slug": "hello-world-47",
"excerpt": "Hello World 47 is the best",
"pinned": 0,
"published": 1,
"published_at": "2020-10-31 03:14:14",
"created_at": "2020-10-30T13:56:23.000000Z",
"updated_at": "2020-12-14T12:01:44.000000Z",
"total_comments": 0,
"total_favorited": 0,
"favorited": false,
"user": {
"id": 1,
"user_name": "korrio",
"avatar": "libeyondea.png",
"role": {
"id": 1,
"title": "Administrator",
"slug": "administrator"
}
},
"category": {
"id": 3,
"title": "Hacking",
"slug": "hacking"
},
"tags": [
{
"id": 16,
"title": "Github",
"slug": "github"
}
]
},
{
"id": 46,
"title": "Hello World 46",
"slug": "hello-world-46",
"excerpt": "Hello World 46 is the best",
"pinned": 0,
"published": 1,
"published_at": "2020-10-31 03:14:14",
"created_at": "2020-10-30T13:56:22.000000Z",
"updated_at": "2020-12-14T12:01:45.000000Z",
"total_comments": 0,
"total_favorited": 0,
"favorited": false,
"user": {
"id": 1,
"user_name": "korrio",
"avatar": "libeyondea.png",
"role": {
"id": 1,
"title": "Administrator",
"slug": "administrator"
}
},
"category": {
"id": 3,
"title": "Hacking",
"slug": "hacking"
},
"tags": [
{
"id": 15,
"title": "HTML",
"slug": "html"
}
]
},
{
"id": 45,
"title": "Hello World 45",
"slug": "hello-world-45",
"excerpt": "Hello World 45 is the best",
"pinned": 0,
"published": 1,
"published_at": "2020-10-31 03:14:14",
"created_at": "2020-10-30T13:56:23.000000Z",
"updated_at": "2020-12-14T12:01:47.000000Z",
"total_comments": 0,
"total_favorited": 0,
"favorited": false,
"user": {
"id": 1,
"user_name": "korrio",
"avatar": "libeyondea.png",
"role": {
"id": 1,
"title": "Administrator",
"slug": "administrator"
}
},
"category": {
"id": 3,
"title": "Hacking",
"slug": "hacking"
},
"tags": [
{
"id": 15,
"title": "HTML",
"slug": "html"
}
]
},
{
"id": 44,
"title": "Hello World 44",
"slug": "hello-world-44",
"excerpt": "Hello World 44 is the best",
"pinned": 0,
"published": 1,
"published_at": "2020-10-31 03:14:14",
"created_at": "2020-10-30T13:56:21.000000Z",
"updated_at": "2020-12-14T12:01:49.000000Z",
"total_comments": 0,
"total_favorited": 0,
"favorited": false,
"user": {
"id": 1,
"user_name": "korrio",
"avatar": "libeyondea.png",
"role": {
"id": 1,
"title": "Administrator",
"slug": "administrator"
}
},
"category": {
"id": 3,
"title": "Hacking",
"slug": "hacking"
},
"tags": [
{
"id": 14,
"title": "Node",
"slug": "node"
}
]
},
{
"id": 43,
"title": "Hello World 43",
"slug": "hello-world-43",
"excerpt": "Hello World 43 is the best",
"pinned": 0,
"published": 1,
"published_at": "2020-10-31 03:14:14",
"created_at": "2020-10-30T13:56:22.000000Z",
"updated_at": "2020-12-14T12:01:51.000000Z",
"total_comments": 0,
"total_favorited": 0,
"favorited": false,
"user": {
"id": 1,
"user_name": "korrio",
"avatar": "libeyondea.png",
"role": {
"id": 1,
"title": "Administrator",
"slug": "administrator"
}
},
"category": {
"id": 3,
"title": "Hacking",
"slug": "hacking"
},
"tags": [
{
"id": 14,
"title": "Node",
"slug": "node"
}
]
},
{
"id": 36,
"title": "Hello World 36",
"slug": "hello-world-36",
"excerpt": "Hello World 36 is the best",
"pinned": 0,
"published": 1,
"published_at": "2020-10-31 03:14:14",
"created_at": "2020-10-30T13:56:22.000000Z",
"updated_at": "2020-12-14T12:02:21.000000Z",
"total_comments": 0,
"total_favorited": 0,
"favorited": false,
"user": {
"id": 1,
"user_name": "korrio",
"avatar": "libeyondea.png",
"role": {
"id": 1,
"title": "Administrator",
"slug": "administrator"
}
},
"category": {
"id": 2,
"title": "Software",
"slug": "software"
},
"tags": [
{
"id": 10,
"title": "Tutorial",
"slug": "tutorial"
}
]
}
],
"meta": {
"total": 65
}
}

	return (
		<div className="container-xl py-4">
			<h3 className="mb-4 fw-bold">Search results</h3>
			<div className="row">
				<div className="col-lg-3 mb-4">
					<TabVertical
						pidTab={type}
						items={[
							{
								title: 'Posts',
								slug: 'post',
								href: `/search?q=${q}&type=post`
							},
							{
								title: 'Users',
								slug: 'user',
								href: `/search?q=${q}&type=user`
							},
							{
								title: 'Comments',
								slug: 'comment',
								href: `/search?q=${q}&type=comment`
							},
							{
								title: 'Tags',
								slug: 'tag',
								href: `/search?q=${q}&type=tag`
							},
							user
								? {
										title: 'My posts',
										slug: 'my_post',
										href: `/search?q=${q}&type=my_post`
								  }
								: {}
						]}
					/>
				</div>
				<div className="col-lg-9">
					<div className="d-flex align-items-center mb-3">
						<div className="ms-auto">
							<TabHorizontalComponent
								pidTab={query?.sort}
								items={[
									{
										title: 'Latest',
										slug: 'latest',
										href: `/search?q=${q}&type=${type}&sort=latest`
									},
									{
										title: 'Oldest',
										slug: 'oldest',
										href: `/search?q=${q}&type=${type}&sort=oldest`
									}
								]}
							/>
						</div>
					</div>
					{!error?.response?.data?.success && error?.response?.data?.error?.status === 422 ? (
						<EmptyBoxComponent text="Please enter a search keyword" />
					) : (
						<>
							{(type === 'post' || (type === 'my_post' && user)) && <ListPostComponent listPost={listSearch} />}
							{type === 'tag' && <ListTagComponent listTag={listSearch} />}
							{type === 'user' && <ListUserComponent listUser={listSearch} />}
							{type === 'comment' && <ListCommentComponent listComment={listSearch} />}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default SearchComponent;
