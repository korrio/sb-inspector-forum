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
				<button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
>
    Launch modal iframe
</button>


<div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-body">
        <iframe
            width="100%"
            height="200vh"
            src="https://www.youtube.com/embed/rBd0h-g59dg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        </div>
    </div>
    </div>
</div>
      	
    </Layout>
		</>
	);
};

export default HomePage;


