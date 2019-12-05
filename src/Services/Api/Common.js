import request from '@helpers/api';

const gethari = () => {
	return request({
		url: 'hari.php',
		method: 'get'
	});
};

const CommonService = {
	gethari
};

export default CommonService;
