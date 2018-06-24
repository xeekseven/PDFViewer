<template>
	<div>
		<div class="common-column common-main-center uk-cover-background uk-position-relative div-img">
			<div class="common-row common-main-center" style="z-index:500;">
				<div class="common-column common-main-start uk-form" style="width:70%">
					<div class="common-row common-main-start" style="padding:0 14%;margin-bottom:-0.1rem">
						<ul class="uk-tab" data-uk-tab>
							<li class="uk-active"><a href="">PDF</a></li>
							<li><a href="">软件</a></li>
							<li><a href="">其他</a></li>
						</ul>
					</div>
					<div class="common-row common-main-center common-align-center" style="height:3.1rem;">
						<input type="text" style="width:70%;height: 99%;border-top-right-radius: 0rem;border-bottom-right-radius: 0rem;" placeholder="Keywords, location, job type..." aria-label="Keywords, location, job type..." class="form-control">
						<button class="uk-button uk-button-large uk-button-primary" style="height: 100%;border-top-right-radius: 0.2rem;border-bottom-right-radius: 0.2rem;" type="button">搜索</button>
					</div>
				</div>
			</div>
			<div class="uk-position-cover uk-flex uk-flex-bottom uk-flex-middle">
				<div class="uk-tab-center container" style="">
					<ul class="uk-tab" data-uk-tab="">
						<li class="uk-active uk-tab-li" aria-expanded="true">
							<a href="#">全部PDF</a>
						</li>
						<li aria-expanded="false" class="">
							<a href="#">常用软件</a>
						</li>
						<li aria-expanded="false" class="">
							<a href="#">行业PDF</a>
						</li>
						<li aria-expanded="false" class="">
							<a href="#">经典杂志</a>
						</li>
						<li aria-expanded="false" class="">
							<a href="#">行业</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="common-row common-main-center" style="width:100%;height:auto;border:0.7rem solid #FFF;">
			<div class="common-column common-main-start" style="width:20%;height:auto;border:0.0rem solid red">
				<searchRank></searchRank>
			</div>
			<div class="common-column common-main-start" style="width:60%;height:auto;border:0.0rem solid red">
				<div class="common-row common-main-between" style="padding:0rem 0rem;background-color:#FFF;border:0.7rem solid #F1F1F1">
					<div class="common-row common-main-start">
						<div class="filter-span">
							综合<span>上</span>
						</div>
						<div class="filter-span">
							下载量<span>上</span>
						</div>
						<div class="filter-span">
							评价<span>上</span>
						</div>
						<div class="filter-span">
							中英<span>上</span>
						</div>
						<div class="f-datagrid">
							<a href="javascript:;" class="fdg-item" data-range="0-50" data-tips="8%的用户喜欢的价位">
								<span class="def-bar" style="height:15%"></span>
							</a>
							<a href="javascript:;" class="fdg-item" data-range="50-76" data-tips="29%的用户喜欢的价位">
								<span class="def-bar" style="height:54%"></span>
							</a>
							<a href="javascript:;" class="fdg-item" data-range="76-270" data-tips="46%的用户喜欢的价位">
								<span class="def-bar" style="height:85%"></span>
							</a>
							<a href="javascript:;" class="fdg-item" data-range="270-414" data-tips="11%的用户喜欢的价位">
								<span class="def-bar" style="height:20%"></span>
							</a>
							<a href="javascript:;" class="fdg-item" data-range="414-¥" data-tips="6%的用户喜欢的价位">
								<span class="def-bar" style="height:11%"></span>
							</a>
						</div>
					</div>
					<div class="common-row common-main-center">
						<div class="common-row common-main-center">
							<div class="f-result-sum">共<span id="J_resCount" class="num">7.9万+</span>件商品</div>
							<div class="common-column common-main-center fp-text" style="margin:0 1rem">
								<div>
									<b>2</b><em>/</em><i>100</i>
								</div>
							</div>
							<div class="fp-prev" href="javascript:;" title="使用方向键左键也可翻到上一页哦！">&lt;</div>
							<div class="fp-next" href="javascript:;" title="使用方向键右键也可翻到下一页哦！">&gt;</div>
						</div>
					</div>
				</div>
				<div style="width:100%;border:0.0rem solid red">
				</div>
				<div class="common-row common-main-start common-warp" style="border:0rem solid red">
					<div v-for="item in books" class="common-column common-main-start  content-card" v-bind:style="{backgroundImage:'url(' + item.url + ')'}">
						<div class="mouse" style="width:100%;height:75%;background-size:100%"></div>
						<div class="common-column common-main-start" style="width:100%;height:25%; filter: blur(7px);font-size:0.5rem;color:#fff;background:rgba(0,0,0,0.8);">
							<!-- <div style="width:100%;height:33%;border:0.1rem solid red;z-index:1000">
																										<span><<{{item.name}}>></span>
																									</div>
																									<div style="width:100%;height:33%;border:0.1rem solid red">
																										<span><<{{item.description}}>></span>
																									</div>
																									<div style="width:100%;height:33%;border:0.1rem solid red">
																										<span>{{item.author}}</span>
																									</div> -->
						</div>
						<div class="common-column common-main-start" style="width:100%;height:25%;font-size:0.5rem; color:#fff;z-index:1000;margin-top:-4.1rem">
							<div class="common-row common-main-between" style="align:left; width:100%;height:auto;border:0.0rem solid red;box-sizing: border-box;text-align:left;padding:0 7%">
								<span class="mouse" style="margin:0 0.1rem;">{{item.displayName}}<i v-if="item.length>6">...</i></span>
								<span class="mouse" style="margin:0 0.1rem">{{item.author}}</span>
							</div>
							<div style="width:100%;height:33%;border:0.0rem solid red;box-sizing: border-box;text-align:left;padding-left:7%">
								<span class="mouse" style="margin:0 0.2rem"><i class="uk-icon-tags"></i>：{{item.tag}}</span>
							</div>
							<div class="common-row common-main-between" style="width:100%;height:33%;border:0.0rem solid red;box-sizing: border-box;text-align:left;padding:0 7%">
								<span class="mouse" style="margin:0 0.2rem"><i class="uk-icon-eye"></i>：{{item.description}}</span>
								<span class="mouse" style="margin:0 0.2rem"><i class="uk-icon-download"></i>：4213</span>
							</div>
						</div>
					</div>
					<div class="content-card">
					</div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
				</div>
				<div class="common-row common-main-center common-align-center div-seletPage">
					<ul class="uk-pagination">
						<li class="uk-disabled"><span><i class="uk-icon-angle-double-left"></i></span></li>
						<li class="uk-active"><span>1</span></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">4</a></li>
						<li><span>...</span></li>
						<li><a href="#">20</a></li>
						<li><a href="#"><i class="uk-icon-angle-double-right"></i></a></li>
					</ul>
				</div>
			</div>
			<div class="common-column common-main-start" style="width:20%;height:auto;border:0.0rem solid red">
				<downRank></downRank>
			</div>
		</div>
	</div>
</template>
<script>
	import searchRank from "../componentView/searchRank.vue"
	import downRank from "../componentView/downRank.vue"
	export default {
		components: {
			searchRank,
			downRank
		},
		data() {
			return {
				books: [{
						url: "../../static/image/softwareJob.jpg",
						wholeName: "软件从入门到入坑阿发vavavava发发 阿服务费哇嘎",
						displayName: "软件开发到入坑",
						length: 12,
						author: "小李",
						tag: "计算机",
						description: "1323"
					},
					{
						url: "../../static/image/suanfa.jpg",
						wholeName: "算法第四版",
						displayName: "算法第四版",
						length: 5,
						author: "小李",
						tag: "计算机",
						description: "421"
					}
				]
			}
		}
	}
</script>
<style scoped>
	input {
		text-rendering: auto;
		color: initial;
		letter-spacing: normal;
		word-spacing: normal;
		text-transform: none;
		text-indent: 0px;
		text-shadow: none;
		display: inline-block;
		text-align: start;
		margin: 0em;
		font: 13.3333px Arial;
		border-radius: 4px;
	}
	.mouse {
		cursor: pointer;
	}
	.content-card {
		width: 20%;
		height: 16.5rem;
		border: 0.1rem solid red;
		box-sizing: border-box;
		transition: all 0.19s ease-in-out;
		background-size: 100%;
		background-position: center;
		/* background-repeat: no-repeat; */
		/* position: relative; */
	}
	.content-card:hover {
		background-size: 110%;
	}
	.div-img {
		min-height: 25em;
		background-image: url("../../../static/image/find.jpg");
		position: relative;
	}
	.container {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}
	.area {
		border: 0px solid red;
	}
	.uk-tab li a {
		--color: #fff;
		padding: 0.5rem;
		font-size: 1.12em;
		font-family: "微软雅黑";
		border: 1px solid transparent;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}
	.uk-tab li a:hover {
		margin-bottom: -1px;
		padding-bottom: 0.5rem;
		color: black;
	}
	.uk-active {
		color: black;
	}
	.div-search {
		margin-top: 1em;
	}
	.btn-success {
		background-color: #42b983;
		border-color: #42b983;
	}
	.filter-span {
		padding: 0 9px;
		height: 23px;
		border: 1px solid #CCC;
		line-height: 23px;
		margin-right: -1px;
		background: #FFF;
		color: #333;
		cursor: pointer;
	}
	.filter-span:hover {
		position: relative;
		text-decoration: none;
		border-color: #e4393c;
		color: #e4393c;
	}
	.f-datagrid {
		float: left;
		width: 71px;
		height: 25px;
		padding-left: 1px;
		margin-right: 12px;
		overflow: hidden;
		margin: 0 0 0 3rem;
	}
	.f-datagrid .fdg-item {
		position: relative;
		float: left;
		width: 13px;
		height: 23px;
		border: 1px solid #ccc;
		margin-left: -1px;
		display: inline;
		background: #fff;
	}
	.f-datagrid .def-bar {
		position: absolute;
		left: -1px;
		bottom: -1px;
		z-index: 2;
		width: 13px;
		height: 0;
		border: 1px solid #aaa;
		overflow: hidden;
		background: #e5e5e5;
	}
	.fp-next,
	.fp-prev {
		width: 46px;
		height: 23px;
		border: 1px solid #DDD;
		background: #FFF;
		line-height: 23px;
		font-family: "\5b8b\4f53";
		text-align: center;
		font-size: 16px;
		color: #AAA;
	}
	.f-pager .fp-text {
		line-height: 23px;
		margin-right: 10px;
		font-family: verdana;
	}
	.f-result-sum {
		float: right;
		height: 25px;
		line-height: 25px;
		margin-right: 0;
		color: #999;
	}
	.div-seletPage {
		margin: 3rem;
	}
</style>
