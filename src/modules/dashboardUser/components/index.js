import React from 'react';

import LoadingSpinner from '@/common/components/LoadingSpinner/components';
import TabVertical from '@/common/components/TabVertical/components';
import useUser from '@/common/hooks/useUser';
import ListFavoritedPostComponent from '@/modules/dashboardUser/components/listFavoritedPost';
import ListFollowingTagComponent from '@/modules/dashboardUser/components/listFollowingTag';
import ListFollowingUserComponent from '@/modules/dashboardUser/components/listFollowingUser';
import ListPostComponent from '@/modules/dashboardUser/components/listPost';
import ListUserFollowerComponent from '@/modules/dashboardUser/components/listUserFollower';
import CustomImage from '@/common/components/CustomImage/components';

import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

const DashboardUserComponent = ({ dashboardUser, pid }) => {
	const { user } = useUser();
	pid[0] = 'posts';
	return (
		<div className="container-xl py-4">
{/*			{!user ? (
				<LoadingSpinner />
			) : (*/}
				<>
					<Link href="https://mint-jutc.vercel.app/" passHref target="_blank">
						<Nav.Link><CustomImage className="pb-4 img-fluid" src={`/images/stake.png`} width={1320} height={340} alt={'stake_area'} /></Nav.Link>
					</Link>
					
					<h3 className="mb-4 fw-bold">
						Dashboard »{' '}
						{!pid[0] || pid[0] === 'posts'
							? 'All'
							: pid[0] === 'favorited_posts'
							? 'Dispute'
							: pid[0] === 'user_followers'
							? 'Crime Report'
							: pid[0] === 'following_users'
							? 'Bounty Hunting'
							: pid[0] === 'following_tags'
							? 'Data Sales'
							: null}
					</h3>
					<div className="row">
						<div className="col-lg-3 mb-4">
							<TabVertical
								pidTab={pid[0]}
								items={[
									{
										title: 'All tasks',
										slug: 'posts',
										href: '/dashboard/posts'
									},
									{
										title: 'Dispute',
										slug: 'favorited_posts',
										href: '/dashboard/favorited_posts'
									},
									{
										title: 'Crime Report',
										slug: 'user_followers',
										href: '/dashboard/user_followers'
									},
									{
										title: 'Bounty Hunting',
										slug: 'following_users',
										href: '/dashboard/following_users'
									},
									{
										title: 'Data Sales',
										slug: 'following_tags',
										href: '/dashboard/following_tags'
									}
								]}
							/>
						</div>
						<div className="col-lg-9">
							{(!pid[0] || pid[0] === 'posts') && <ListPostComponent listPost={dashboardUser} />}
							{pid[0] === 'favorited_posts' && <ListFavoritedPostComponent listPost={dashboardUser} />}
							{pid[0] === 'user_followers' && <ListUserFollowerComponent listUser={dashboardUser} />}
							{pid[0] === 'following_users' && <ListFollowingUserComponent listUser={dashboardUser} />}
							{pid[0] === 'following_tags' && <ListFollowingTagComponent listTag={dashboardUser} />}
						</div>
					</div>
				</>
			{/* )} */}
		</div>
	);
};

export default DashboardUserComponent;
