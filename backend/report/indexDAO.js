const mysql = require('mysql');
const mybatisMapper = require('mybatis-mapper');

const connection = mysql.createConnection({  //커넥션 생성
    host: '주소',
    user: '아이디',
    database: '데이터베이스명칭',
    password : '비밀번호'
});

mybatisMapper.createMapper(['./xmluuu/indexXml.xml'])

exports.selectTest = (sqlParamObj) => {
	return new Promise(
		async (resolve, reject) => {
            try {
                console.log("repo");
                let query = await mybatisMapper.getStatement("testMapper", "testBasic", sqlParamObj);
                connection.query(query, function (error, results, fields) {  //조회
                    if (error) {
                        reject(error);
                    }
                    resolve( results );
                });
            } catch(error) {
                reject(error);
            }
        }
    )
}