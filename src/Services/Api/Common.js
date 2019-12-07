import request from '@helpers/api';

const gethari = (param) => {
	return request({
		url: 'hari.php',
		method: 'get',
		params: param
	});
};

const CommonService = {
	gethari
};

export default CommonService;
