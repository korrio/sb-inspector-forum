import React from 'react';

import CustomLink from '@/common/components/CustomLink/components';

const UserTagListComponent = ({ tags }) => {
	console.log("tags",tags);
	return (
		<div className="mb-3">
			{tags.map((tag) => (
				<CustomLink key={tag.id} href={`/t/${tag.slug}`} className="tag p-1 text-decoration-none text-secondary">
					<span className="tag">#{tag.slug}</span>
					
				</CustomLink>
			))}
		</div>
	);
};

export default UserTagListComponent;
