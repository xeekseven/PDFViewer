<template>
	<div>
		<div class="uk-cover-background uk-position-relative div-img">
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
							<a href="#">行业教材</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="common-row common-main-center" style="width:100%;height:100rem">
			<div class="common-column common-main-start" style="width:20%;height:auto;border:0.1rem solid red">as</div>
			<div class="common-column common-main-start" style="width:60%;height:auto;border:0.1rem solid red">
				<div class="common-row common-main-start" style="margin-top:1rem;height:2rem;border:0.1rem solid red">
					<div>软件</div>
					<div>文件</div>
				</div>
				<div style="width:100%;border:0.1rem solid red">
					<form class="uk-form" style="width:100%">
						<fieldset data-uk-margin="">
							<input type="text" style="width:70%;height: 3.1em;" placeholder="Keywords, location, job type..." aria-label="Keywords, location, job type..." class="form-control">
							<button class="uk-button uk-button-large uk-button-primary" type="button">搜索</button>
						</fieldset>
					</form>
				</div>
				<div style="width:100%;height:1rem"></div>
				<div class="common-row common-main-start common-warp" style="border:0rem solid red">
					<div v-for="item in books" class="common-column common-main-start  content-card">
						<div style="width:100%;height:70%;"></div>
						<div class="common-column common-main-start" style="width:100%;height:33%;">
							<div style="width:100%;height:33%;border:0.1rem solid red">
								<span><<{{item.name}}>></span>
							</div>
							<div style="width:100%;height:33%;border:0.1rem solid red">
								<span><<{{item.description}}>></span>
							</div>
							<div style="width:100%;height:33%;border:0.1rem solid red"></div>
						</div>
					</div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
					<div class="content-card"></div>
				</div>
			</div>
			<div class="common-column common-main-start" style="width:20%;height:auto;border:0.1rem solid red">as</div>
		</div>
		<!-- <div class="uk-grid">
							<div class="uk-width-2-10 area">
							</div>
							<div class="uk-width-6-10">
								<div class="div-search">
									<div>
										<i class="uk-icon-search"></i>
										<span>搜索</span>
									</div>
									<div>
									</div>
									<form class="uk-form" style="width:100%">
										<fieldset data-uk-margin="">
											<input type="text" style="width:70%;height: 3.1em;" placeholder="Keywords, location, job type..." aria-label="Keywords, location, job type..." class="form-control">
											<button class="uk-button uk-button-large uk-button-primary" type="button">搜索</button>
										</fieldset>
									</form>
								</div>
							</div>
							<div class="uk-width-2-10 area">
								常
							</div>
						</div> -->
	</div>
</template>
<script>
	export default {
		data() {
			return {
				books: [{
						url: "",
						name: "C++开发",
						author: "小李",
						description: "这是一本C++通用的书籍"
					},
					{
						url: "",
						name: "C开发",
						author: "小李",
						description: "这是一本C通用的书籍"
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
	.content-card {
		width: 25%;
		height: 18.5rem;
		border: 0.1rem solid red;
		box-sizing: border-box;
	}
	.div-img {
		min-height: 25em;
		align: center;
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
		--color: aliceblue;
		padding: 12px;
		font-size: 1.12em;
		font-family: "微软雅黑";
		border: 1px solid transparent;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}
	.uk-tab li a:hover {
		margin-bottom: -1px;
		padding-bottom: 12px;
		--color: black;
	}
	.uk-active {
		--color: black;
	}
	.div-search {
		margin-top: 1em;
	}
	.btn-success {
		background-color: #42b983;
		border-color: #42b983;
	}
</style>
