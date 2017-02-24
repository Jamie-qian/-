import Qx 		from './components/qx'
import Ql 		from './components/ql'
import Fc 		from './components/fc'
import Pw 		from './components/pw'
import Ps 		from './components/ps'

import My 		from './components/my'
import Ssq 		from './components/ssq'
import Dlt 		from './components/dlt'
import Pwd 		from './components/pwd'
import User 	from './components/user'

import Jclq 	from './components/jclq'
import Big_otto from './components/big_otto'
import Win_los  from './components/win_los'

import Xwin_los from './components/xwin_los'
import Dltlskj from './components/dltlskj'

import Index from './components/index'


import Notice   from './components/notice'
import Touzhu   from './components/touzhu'
import Lottery  from './components/lottery'
import M_notice  from './components/m_notice'
import X_notice  from './components/x_notice'
import Account   from './components/account'
import X_account from './components/x_account'
import C_account from './components/c_account'
import T_account from './components/t_account'

import Mimaguanli        from './components/mimaguanli'
import Per_details       from './components/per_details'
import Tixian from './components/tixian'

import Arrange_five 	 from './components/arrange_five'
import Shimingrenzheng   from './components/shimingrenzheng'
import Bangdingyinhangka from './components/bangdingyinhangka'
import Xiugaidenglumima  from './components/xiugaidenglumima' 
import Xiugaizhifumima   from './components/xiugaizhifumima'
import Zhaohuizhifumima  from './components/zhaohuizhifumima'
import Records from './components/records'
import P_records from './components/p_records'
import C_records from './components/c_records'
import T_records from './components/t_records'
import Register from './components/register'
import Chongzhi from './components/chongzhi'


var routes = [
	{
		name:'Index',
		path:'/index',
		component:Index
	},
	{
		name:'Dlt',
		path:'/dlt',
		component:Dlt
	},
	{
		name:'Touzhu',
		path:'/touzhu',
		component:Touzhu
	},
	{
		name:'Ssq',
		path:'/ssq',
		component:Ssq
	},
	{
		name:'Qx',
		path:'/qx',
		component:Qx
	},
	{
		name:'Ql',
		path:'/ql',
		component:Ql, 
	},
	{
		name:'Fc',
		path:'/fc',
		component:Fc
	},
	{
		name:'Pw',
		path:'/pw',
		component:Pw
	},
	{
		name:'Ps',
		path:'/ps',
		component:Ps
	},
	{
		name:'Lottery',
		path:'/lottery',
		component:Lottery
	},
	{
		name:'Big_otto',
		path:'/big_otto',
		component:Big_otto
	},
	{
		name:'Arrange_five',
		path:'/arrange_five',
		component:Arrange_five
	},
	{
		name:'Win_los',
		path:'/win_los',
		component:Win_los
	},
	{
		name:'Xwin_los',
		path:'/xwin_los',
		component:Xwin_los
	},
	{
		name:'Jclq',
		path:'/jclq',
		component:Jclq
	},
	{
		name:'Dltlskj',
		path:'/dltlskj',
		component:Dltlskj
	},
	{
		name:'Shimingrenzheng',
		path:'/shimingrenzheng',
		component:Shimingrenzheng
	},
	{
		name:'Per_details',
		path:'/per_details',
		component:Per_details
	},
	{
		name:'Bangdingyinhangka',
		path:'/bangdingyinhangka',
		component:Bangdingyinhangka
	},
	{
		name:'Mimaguanli',
		path:'/mimaguanli',
		component:Mimaguanli
	},
	{
		name:'Xiugaidenglumima',
		path:'/xiugaidenglumima',
		component:Xiugaidenglumima
	},
	{
		name:'Xiugaizhifumima',
		path:'/xiugaizhifumima',
		component:Xiugaizhifumima
	},
	{
		name:'Zhaohuizhifumima',
		path:'/zhaohuizhifumima',
		component:Zhaohuizhifumima
	},
	{	
		name:'My',
		path:'/my',
		component:My
		/*,
		children:[
				{
					path:"index",
					component:Index
				}
		]*/
	},
	{
		name:'Records',
		path:'/records',
		component:Records,
		children:[
			{
				path:'p_records',
				component:P_records
			},
			{
				path:'c_records',
				component:C_records
			},
			{
				path:'t_records',
				component:T_records
			}
		]
	},
	{
		name:'Notice',
		path:'/notice',
		component:Notice,
		children:[
			{
				path:'m_notice',
				component:M_notice
			},
			{
				path:'x_notice',
				component:X_notice
			}
		]
	},
	{
		name:'Account',
		path:'/account',
		component:Account,
		children:[
			{
				path:'x_account',
				component:X_account
			},
			{
				path:'c_account',
				component:C_account
			},
			{
				path:'t_account',
				component:T_account
			}
		]

	},
	{
		name:'Pwd',
		path:'/pwd',
		component:Pwd
	},
	{
		name:'Register',
		path:'/register',
		component:Register
	},
	{
		name:'User',
		path:'/user',
		component:User
	},
	{
		name:'Chongzhi',
		path:'/chongzhi',
		component:Chongzhi
	},
	{
		name:'Tixian',
		path:'/tixian',
		component:Tixian
	},
	{
		path:'/',
		redirect:{name:"Index"}
	}
]
module.exports = routes;