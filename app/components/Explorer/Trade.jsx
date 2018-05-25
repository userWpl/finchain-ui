import React from "react";
import {Link} from "react-router/es";
import Translate from "react-translate-component";
import Icon from "../Icon/Icon";

require("./jys.css");
require("./swiper.css");


class Trade extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = {test:0.00};
	    this.changeFrom = this.changeFrom.bind(this);
  	}
   changeFrom(e,a){
	    let str=a.replace("%","");
	    let b=str*0.01
	     this.setState(prevState => ({
	        test:b
	      }));
  	}
		
		
	
    render() {
    		 let v = {
            __html: "<script src='swiper.js' charset='utf-8' ><\/script>"
          };
          let l = {
            __html: "<script src='/lb.js' charset='utf-8' ><\/script>"
          };
		const data = ["25%","50%","75%","100%"];
    	const formBtn=data.map(
      		(num)=>
	      <li key={num.toString()}><button type="button"  onClick={(e)=>{this.changeFrom(e,num.toString())}} >
	        {num}
	      </button></li>);
		
        return (
        	<div className="my-box">
        	<div className="my-banner">
        	<h2 dangerouslySetInnerHTML={v}/>
        	<h3 dangerouslySetInnerHTML={l}/>
					<div className="swiper-container">
						<div className="swiper-wrapper">
							<div className="swiper-slide"><img src={require('./image/banner-01.png')}/></div>
							<div className="swiper-slide">111111111111111111111111111111111</div>
							<div className="swiper-slide"><img src={require('./image/banner-01.png')}/></div>
							<div className="swiper-slide"><img src={require('./image/banner-01.png')}/></div>
						</div>
						
						<div className="swiper-pagination"></div>

						
						<div className="swiper-button-prev"></div>
						<div className="swiper-button-next"></div>
					</div>
			</div>
			<div style={{background:"white",width:"100%"}}>
			
								
        	<div className="my-list">
					<div className="my-l">
						<div className="my-l-img">
							<img src={require('./image/icon-01.png')}/>
						</div>
						<div className="my-l-txt">
							<p style={{fontFamily: "MicrosoftYaHei-Bold",fontSize: "20px", color: "#4A5660"}}>GDEX.BTC</p>
							<div> <p>价格</p>   <p>57，999.99829</p></div>
							<div> <p>成交量</p>   <p>500.40K</p> </div>
							<div> <p>涨跌幅</p>    <p>  -8.65%</p> </div>
						</div>
					</div>
					<div className="my-l">
						<div className="my-l-img">
							<img src={require('./image/icon-02.png')}/>
						</div>
						<div className="my-l-txt">
							<p style={{fontFamily: "MicrosoftYaHei-Bold",fontSize: "20px", color: "#4A5660"}}>GDEX.BTC</p>
							<div> <p>价格</p> <p>57，999.99829</p></div>
							<div> <p>成交量</p> <p>500.40K</p> </div>
							<div> <p>涨跌幅</p><p>  -8.65%</p> </div>
						</div>
					</div>
					<div className="my-l">
						<div className="my-l-img">
							<img src={require('./image/icon-03.png')}/>
						</div>
						<div className="my-l-txt">
							<p style={{fontFamily: "MicrosoftYaHei-Bold",fontSize: "20px", color: "#4A5660"}}>GDEX.BTC</p>
							<div> <p>价格</p> <p>57，999.99829</p></div>
							<div> <p>成交量</p> <p>500.40K</p> </div>
							<div> <p>涨跌幅</p><p>  -8.65%</p> </div>
						</div>
					</div>
					<div className="my-l">
						<div className="my-l-img">
							<img src={require('./image/icon-04.png')}/>
						</div>
						<div className="my-l-txt">
							<p style={{fontFamily: "MicrosoftYaHei-Bold",fontSize: "20px", color: "#4A5660"}}>GDEX.BTC</p>
							<div> <p>价格</p> <p>57，999.99829</p></div>
							<div> <p>成交量</p> <p>500.40K</p> </div>
							<div> <p>涨跌幅</p><p>  -8.65%</p> </div>
						</div>
					</div>
					<div className="my-l">
						<div className="my-l-img">
							<img src={require('./image/icon-05.png')}/>
						</div>
						<div className="my-l-txt">
							<p style={{fontFamily: "MicrosoftYaHei-Bold",fontSize: "20px", color: "#4A5660"}}>GDEX.BTC</p>
							<div> <p>价格</p> <p>57，999.99829</p></div>
							<div> <p>成交量</p> <p>500.40K</p> </div>
							<div> <p>涨跌幅</p><p>  -8.65%</p> </div>
						</div>
					</div>
					<div className="my-l">
						<div className="my-l-img">
							<img src={require('./image/icon-06.png')}/>
						</div>
						<div className="my-l-txt">
							<p style={{fontFamily: "MicrosoftYaHei-Bold",fontSize: "20px", color: "#4A5660"}}>GDEX.BTC</p>
							<div> <p>价格</p> <p>57，999.99829</p></div>
							<div> <p>成交量</p> <p>500.40K</p> </div>
							<div> <p>涨跌幅</p><p>  -8.65%</p> </div>
						</div>
					</div>
					 <input type="text" value={this.state.test}/>
			<ul className="percent">	
									{formBtn}
								</ul>
			</div>
			</div>	
			<div className="my-jg"></div>
			<div style={{background:"white",width:"100%",overflow: "hidden"}}>
            <div className="my-footer">
					<div className="my-ft">
						<p>FinChain去中心化资产流转平台</p>
					</div>
					<div className="my-fb">
						<div>
							<img src={require('./image/group1.png')}/>
							<p className="t1">去中心化</p>
							<p className="t2">基于区块链构建<br />
分布式去中心化交易所</p>
						</div>
						<div>
							<img src={require('./image/group2.png')}/>
							<p className="t1">专业</p>
							<p className="t2">工业级业务处理能力<br />
每秒TPS3300 长期稳定</p>
						</div>
						<div>
							<img src={require('./image/group3.png')}/>
							<p className="t1">公平</p>
							<p className="t2">安全透明可信赖<br />
每一笔交易都记录在区块链上</p>
						</div>
					</div>
				</div>
				</div>	
				</div>
        );
    }
}

export default Trade;
