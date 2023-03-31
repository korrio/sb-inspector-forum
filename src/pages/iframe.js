import React, {useState} from 'react';

import MetaWebsite from '@/common/meta/MetaWebsite';
import Layout from '@/modules/layout/components';
import CustomImage from '@/common/components/CustomImage/components';

import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => {

	const [keyValue, setKeyValue] = useState(0);

	return (
		<>
			<MetaWebsite title="Welcome to Social Bureau" />
			<Layout onButtonClick={() => setKeyValue(keyValue + 1)} >
      <div className="flex">
        
        <div className="m-5">
            <iframe src="https://app.socialbureau.io/" key={keyValue}></iframe>
        </div>
      </div>
    </Layout>
		</>
	);
};

export default HomePage;


