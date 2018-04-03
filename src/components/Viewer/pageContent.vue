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
		<div class="common-row common-main-center" style="width:100%;height:100rem">
			<div class="common-column common-main-start" style="width:20%;height:auto;border:0.1rem solid red">as</div>
			<div class="common-column common-main-start" style="width:60%;height:auto;border:0.1rem solid red">
				<div class="common-row common-main-start" style="margin-top:1rem;height:2rem;border:0.1rem solid red">
	
				</div>
				<div style="width:100%;border:0.1rem solid red">
				</div>
				<div style="width:100%;height:1rem"></div>
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
				</div>
			</div>
			<div class="common-column common-main-start" style="width:20%;height:auto;border:0.1rem solid red">as</div>
		</div>
	</div>
</template>
<script>
	export default {
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
		border: 1px solid red;
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
</style>
