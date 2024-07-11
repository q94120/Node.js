function hello(who) {
	return "Hello! " + who;
}

// module.exports.wow = hello;
// export 匯出
module.exports = function hello(who) {
	return "Hello! " + who;
};