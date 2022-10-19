module.exports = {
	lintOnSave: false,
	devServer: {
		proxy: {
			'/api': {
				target: 'https://www.bilibili.com',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
		
	}
}



// module.exports = {
// 	lintOnSave: false,
// 	devServer: {
// 		proxy: {
// 			'/api': {
// 				target: 'https://www.runoob.com',
// 				changeOrigin: true,
// 				pathRewrite: {
// 					'^/api': ''
// 				}
// 			}
// 		}
// 	}
// }


// module.exports = {
// 	lintOnSave: false,
//     devServer: {
//         proxy: {
//             '/apix': {
//                 target: 'https://www.runoob.com/', //接口域名
//                 changeOrigin: true,             //是否跨域
//                 ws: true,                       //是否代理 websockets
//                 secure: true,                   //是否https接口
//                 pathRewrite: {                  //路径重置
//                     '^/apix': ''
//                 }
//             }
//         }
//     }
// };

