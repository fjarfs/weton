import request from '@helpers/api';

const gethari = (param) => {
	return request({
		url: 'hari.php',
		method: 'get',
		params: param
	});
};


const gethariJawa = (param) => {
	return request({
		url: 'hariJawa.php',
		method: 'get',
		params: param
	});
};

const CommonService = {
	gethari,
	gethariJawa
};

export default CommonService;
