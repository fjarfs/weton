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

const getNeptu = (param) => {
	return request({
		url: 'weton/neptu.php',
		method: 'get',
		params: param
	});
};

const CommonService = {
	gethari,
	gethariJawa,
	getNeptu
};

export default CommonService;
