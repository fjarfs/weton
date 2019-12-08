import request from '@helpers/api';

const gethari = (param) => {
	return request({
		url: 'weton/hari.php',
		method: 'get',
		params: param
	});
};


const gethariJawa = (param) => {
	return request({
		url: 'weton/hariJawa.php',
		method: 'get',
		params: param
	});
};

const CommonService = {
	gethari,
	gethariJawa
};

export default CommonService;
