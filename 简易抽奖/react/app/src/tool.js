
var tool = {};

//��ǰ��λ0
tool.complement = (x) => {

	if (typeof x !== "number") throw new Error("complement ������ x ����һ������");

	if (x < 10) return "00" + x;
	else if (x < 100) return "0" + x;
	else { return x.toString() };
}

//����һ�������
tool.getRandomNumber = (min, max) => {

	var _num = (min + (max - min) * Math.random()).toFixed(0);
	return parseInt(_num);
}







export default tool;
