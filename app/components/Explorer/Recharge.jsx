import React from "react";
import {Link} from "react-router/es";
import Translate from "react-translate-component";
import Icon from "../Icon/Icon";

require("./global.css");
require("./ct.css");


class Recharge extends React.Component {
	
	constructor(){
		super()
		this.state={
			showHide:false
		}
	}
	
    render() {
		
        return (
        	<div className="wrap1">
			<div className="container">
				<div className="dw" >
					<div className="container">
						<div className="dw-title">充值</div>
						<div className="dw-body f-cb">
							{/*充值币种 */}
							<div className="f-fl" style={{minHeight: "521px"}}>
								<div className="depositBox">
									<div className="asset-info">
										<div className="selectBox selectAsset">
											<div className="selectIpt" 
											onClick={()=>{ this.setState({showHide : !this.state.showHide}) }}>
												<span className="selectTip">
													请选择充值币种
												</span>
											</div>
											<i className="iconfont icon-upsj"></i>
											<ul className="scrollStyle" className={this.state.showHide?"":"hide"}>
												<li className="filterIpt">
													<input type="text" placeholder="请输入币种关键字"/>
												</li>
												<li className="coinInfo">
													<img src="image/icon-01.png" />
													<strong>BTC</strong>
													<span> - bitcion</span>
													<span className="notallowed" ></span>
												</li>
												<li className="coinInfo">
													<img src="image/icon-02.png" />
													<strong>BTC</strong>
													<span> - bitcion</span>
													<span className="notallowed" ></span>
												</li>
												<li className="coinInfo">
													<img src="image/icon-03.png" />
													<strong>BTC</strong>
													<span> - bitcion</span>
													<span className="notallowed" ></span>
												</li>
												<li className="coinInfo">
													<img src="image/icon-04.png" />
													<strong>BTC</strong>
													<span> - bitcion</span>
													<span className="notallowed" ></span>
												</li>
												<li className="coinInfo">
													<img src="image/icon-05.png" />
													<strong>BTC</strong>
													<span> - bitcion</span>
													<span className="notallowed" ></span>
												</li>
												<li className="coinInfo">
													<img src="image/icon-06.png" />
													<strong>BTC</strong>
													<span> - bitcion</span>
													<span className="notallowed" ></span>
												</li>
												<li className="coinInfo">
													<img src="image/icon-07.png" />
													<strong>BTC</strong>
													<span> - bitcion</span>
													<span className="notallowed" ></span>
												</li>
												<li className="coinInfo">
													<img src="image/icon-05.png" />
													<strong>BTC</strong>
													<span> - bitcion</span>
													<span className="notallowed" ></span>
												</li>
												<li className="coinInfo">
													<img src="image/icon-01.png" />
													<strong>BTC</strong>
													<span> - bitcion</span>
													<span className="notallowed" ></span>
												</li>
												<li className="coinInfo">
													<img src="image/icon-02.png" />
													<strong>BTC</strong>
													<span> - bitcion</span>
													<span className="notallowed" ></span>
												</li>
											</ul>
										</div>
										<div  style={{position:"relative"}}>
											<table className="curAsset">
												<colgroup style={{width:"120px"}}></colgroup>
												<colgroup style={{width:"180px"}}></colgroup>
												<tbody>
													<tr>
														<th>总额</th>
														<td>0.000000000  JRC</td>
													</tr>
													<tr>
														<th>下单冻结</th>
														<td>0.000000000  JRC</td>
													</tr>
													<tr>
														<th>可用余额</th>
														<td>0.000000000  JRC</td>
													</tr>
												</tbody>
											</table>
											<a href="javascript:;" target="_blank" className="binanceInfo" ><i className="iconfont icon-infoicoShi"></i>什么是JRC？</a>
											<div className="speBox" >
												<div className="importants">
													<strong>注意</strong>
													<ul>
														<li >禁止向JRC地址充值除JRC之外的资产，任何充入JRC地址的非JRC资产將不可找回。</li>
													</ul>
												</div>
												
												<div >
													<div className="depositAddress">
														<strong>JRC 充值地址</strong>
														<div className="chargeAddress text">curAsset.chargeAddress</div>
														<input style={{position:"absolute",zIndex:"-1"}} id="address" type="text"  readonly/>

														<div className="f-cb">
															
															<span  className="btn btn-white btn-disabled f-fr" style={{marginRight:"-2px"}}><i className="iconfont icon-copy"></i>复制到粘贴板</span>
															<span  className="btn btn-white btn-disabled f-fr"><i className="iconfont icon-ewm"></i>展示二维码</span>
															
														</div>
													</div>
												</div>
											</div>
											<div className="tips">
												<strong>温馨提示</strong>
												<ul >
													<li>使用JRC地址充值需要<span className="yellow">5</span>个网络确认才能到账。</li>
													<li>充值完成后，你可以进入
														<a href="javascript:;" className="yellow">历史记录</a>页面跟踪进度</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="asset-link" >
										<strong>去交易</strong>
										<div className="pairs">
											<a href="javascript:;" >JRC/BTC ></a>
										</div>
									</div>
								</div>
							</div>
							{/*充值记录 */}
							<div className="f-fr" style={{minHeight: "521px"}}>
								<div className="lists deposit">
									<div className="lists-title">
										历史记录
										<a href="javascript:;" className="more">更多</a>
										<span className="f-fr deposit-fail">
											充值未到账
											<i className="iconfont icon-wen" style={{marginLeft: "5px", fontSize: "13px"}}></i>
										</span>
									</div>
									<ul className="nodata">
										
									</ul>
									<div className="nodata">
										<img src={require('./image/zups.png')}/>
										<p className="ng-binding">无充值记录</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}

export default Recharge;
