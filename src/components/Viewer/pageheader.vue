<template>
	<div class="uk-margin header-div">

		<nav class="uk-navbar header-nav ">

			<ul class="uk-navbar-nav uk-hidden-small ">
				<li class="uk-active">
					<a href="">logo</a>
				</li>
				<li>
					<a href="">Item</a>
				</li>
				<li class="uk-parent" data-uk-dropdown="" aria-haspopup="true" aria-expanded="false">
					<a href="">Parent</a>

					<div class="uk-dropdown uk-dropdown-navbar uk-dropdown-bottom" style="top: 40px; left: 0px;">
						<ul class="uk-nav uk-nav-navbar">
							<li>
								<a href="#">Item</a>
							</li>
							<li>
								<a href="#">Another item</a>
							</li>
							<li class="uk-nav-header">Header</li>
							<li>
								<a href="#">Item</a>
							</li>
							<li>
								<a href="#">Another item</a>
							</li>
							<li class="uk-nav-divider"></li>
							<li>
								<a href="#">Separated item</a>
							</li>
						</ul>
					</div>

				</li>
			</ul>

			<a href="#offcanvas-1" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas=""></a>

			<div class="uk-navbar-flip">

				<a href="" class="uk-navbar-toggle uk-navbar-toggle-alt uk-visible-small"></a>

				<ul class="uk-navbar-nav uk-hidden-small">
					<li class="uk-parent" data-uk-dropdown="" aria-haspopup="true" aria-expanded="false">
						<a href="">Parent</a>

						<div class="uk-dropdown uk-dropdown-navbar uk-dropdown-bottom" style="top: 40px; left: 0px;">
							<ul class="uk-nav uk-nav-navbar">
								<li>
									<a href="#">Item</a>
								</li>
								<li>
									<a href="#">Another item</a>
								</li>
								<li class="uk-nav-header">Header</li>
								<li>
									<a href="#">Item</a>
								</li>
								<li>
									<a href="#">Another item</a>
								</li>
								<li class="uk-nav-divider"></li>
								<li>
									<a href="#">Separated item</a>
								</li>
							</ul>
						</div>

					</li>
					<li>
						<a href="">Item</a>
					</li>
					<li class="uk-active">
						<a href="">Active</a>
					</li>
				</ul>

			</div>

		</nav>

		<!-- <nav class="uk-navbar-attached nav-height">
			<div class="uk-container uk-container-center">

				<a class="uk-navbar-brand uk-hidden-small" href="../index.html"><img class="uk-margin uk-margin-remove" src="../../static/image/logo.svg" width="30" height="30" title="UIkit" alt="UIkit"></a>

				<ul class="uk-navbar-nav uk-hidden-small" style="float:right">
					<li>
						<form class="uk-search" data-uk-search="{source:'my-results.json'}">

							<input class="uk-search-field" type="search" placeholder="">

							
							<div class="uk-dropdown uk-dropdown-search">
								<ul class="uk-nav uk-nav-search">...</ul>
							</div>

						</form>
					</li>
					<li>
						<a href="documentation_get-started.html">登录</a>
					</li>
					<li class="uk-active">
						<a href="core.html">注册</a>
					</li>
				</ul>
								<button class="uk-button uk-navbar-toggle uk-visible-small" data-uk-offcanvas="{target:'#offcanvas-3'}"></button>
				<div id="offcanvas-3" class="uk-offcanvas" aria-hidden="true">
					<div class="uk-offcanvas-bar">
						<ul class="uk-nav uk-nav-offcanvas uk-nav-parent-icon" data-uk-nav="">
							<li>
								<a href="">Item</a>
							</li>
							<li class="uk-active">
								<a href="">Active</a>
							</li>
							<li class="uk-parent" aria-expanded="false">
								<a href="#">Parent</a>
								<div style="overflow:hidden;height:0;position:relative;" class="uk-hidden">
									<ul class="uk-nav-sub">
										<li>
											<a href="">Sub item</a>
										</li>
										<li>
											<a href="">Sub item</a>
											<ul>
												<li>
													<a href="">Sub item</a>
												</li>
												<li>
													<a href="">Sub item</a>
												</li>
											</ul>
										</li>
									</ul>
								</div>
							</li>

							<li class="uk-parent" aria-expanded="false">
								<a href="#">Parent</a>
								<div style="overflow:hidden;height:0;position:relative;" class="uk-hidden">
									<ul class="uk-nav-sub">
										<li>
											<a href="">Sub item</a>
										</li>
										<li>
											<a href="">Sub item</a>
										</li>
									</ul>
								</div>
							</li>

							<li>
								<a href="">Item</a>
							</li>

							<li class="uk-nav-header">Header</li>
							<li class="uk-parent">
								<a href="">
									<i class="uk-icon-star"></i> Parent</a>
							</li>
							<li>
								<a href="">
									<i class="uk-icon-twitter"></i> Item</a>
							</li>
							<li class="uk-nav-divider"></li>
							<li>
								<a href="">
									<i class="uk-icon-rss"></i> Item</a>
							</li>
						</ul>

					</div>

				</div>
				<div class="uk-navbar-brand uk-navbar-center uk-visible-small"><img src="../../static/image/logo.svg" width="30" height="30" title="UIkit" alt="UIkit">
				</div>
			</div>
		</nav> -->
	</div>
</template>

<style scoped>
.nav-height {
  padding: 15px;
}
.header-div {
  position: fixed;
  width: 100%;
}
.header-nav {
  padding: 1em 0em;
}
</style>
