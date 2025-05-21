<?php $page = "home"; ?>
<!DOCTYPE html>
<html lang="en">

<head itemscope itemtype="http://www.schema.org/website">
	<title></title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta property="og:title" content="">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="">
	<meta property="og:url" content="https://.com">
	<meta property="og:image" content="https://.com/images/android-icon-192x192.png">
	<meta name="keywords" content="">
	<meta property="og:description" name="description" content="">
	<meta name="robots" content="all">
	<meta name="revisit-after" content="10 Days">
	<meta name="copyright" content="">
	<meta name="language" content="English">
	<meta name="distribution" content="Global">
	<meta name="web_author" content="srisoftwarez.com">
	<meta name="msapplication-TileImage" content="images/ms-icon-144x144.png">
	<link rel="icon" type="image/png" sizes="96x96" href="images/favicon-96x96.png">
	<link rel="apple-touch-icon" sizes="72x72" href="images/apple-icon-72x72.png">
	<link rel="icon" sizes="192x192" href="images/android-icon-192x192.png">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/hover-min.css">
	<link rel="stylesheet" href="css/swiper.css">
	<link rel="stylesheet" href="css/odometer-theme.css">
	<link rel="stylesheet" href="css/style.css">
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
</head>

<body itemscope itemtype="http://schema.org/WebPage">
	<?php include_once "header.php"; ?>
	<section class="home-carousel">
		<div class="swiper home-carousel-swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="images/index-slide-1.webp" class="img-fluid" alt="Fireworks Slide 1">
				</div>
				<div class="swiper-slide">
					<img src="images/index-slide-2.webp" class="img-fluid" alt="Fireworks Slide 2">
				</div>
			</div>
		</div>
	</section>
	<!-- index welcome section -->
	<!-- Welcome Section -->
	<section class="welcome-section">
		<div class="container-fluid">
			<div class="row">
				<div class="col-12 col-md-6 col-lg-6 welcome-section-text-container">
					<div class="welcome-section-content">
						<h1 class="welcome-section-title">Spectacular <span
								class="welcome-section-highlight">Fireworks</span></h1>
						<h2 class="welcome-section-subtitle">Light Up Your Celebrations</h2>
						<p class="welcome-section-description">Experience the magic of premium quality crackers for all
							your festive needs. We offer retail and wholesale options with the widest variety of
							fireworks in town.</p>
						<div class="welcome-section-buttons my-5 my-md-5 my-lg-0">
							<a href="products.php" class="btn welcome-section-btn-primary welcome-section-btn">Explore
								Products</a>
							<a href="products.php"
								class="btn welcome-section-btn-secondary welcome-section-btn">Wholesale Deals</a>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-6 welcome-section-visual-container">
					<div class="welcome-section-firework-animation">
						<div class="welcome-section-spark welcome-section-spark-1"><i class="bi bi-stars"></i></div>
						<div class="welcome-section-spark welcome-section-spark-2"><i class="bi bi-stars"></i></div>
						<div class="welcome-section-spark welcome-section-spark-3"><i class="bi bi-stars"></i></div>
						<div class="welcome-section-firework-center">
							<img src="images/hero.webp" alt="Firework Rocket" class="welcome-section-main-img">
						</div>
					</div>
					<div class="welcome-section-decoration">
						<div class="welcome-section-explosion welcome-section-explosion-1"></div>
						<div class="welcome-section-explosion welcome-section-explosion-2"></div>
						<div class="welcome-section-explosion welcome-section-explosion-3"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- index products section -->
	<section class="products-section">
		<!-- svg bg -->
		<div class="products-section-bg">
			<svg class="fireworks-bg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
				<!-- Firework elements will be added by GSAP -->
			</svg>
		</div>
		<div class="container">
			<div class="row mb-5">
				<div class="col-12">
					<div class="products-section-title">
						<h2 class="products-section-title-text">Our Premium Fireworks</h2>
						<p class="products-section-subtitle">Discover our spectacular collection of fireworks for
							all
							your celebration needs</p>
					</div>
				</div>
			</div>
		</div>

		<div class="products-section-wheel-container">
			<div class="products-section-wheel-wrapper">
				<div class="products-section-wheel">
					<div class="products-section-wheel-items">
						<!-- Product Card 1 -->
						<div class="products-section-product-card">
							<div class="products-section-product-card-inner">
								<div class="products-section-product-card-front">
									<div class="products-section-product-image">
										<img src="images/product-1.webp" alt="Celestial Burst Firework">
									</div>
									<div class="products-section-product-info">
										<h3 class="products-section-product-title">One Sound Bomb</h3>
										<div class="products-section-product-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-half"></i>
										</div>
									</div>
								</div>
								<div class="products-section-product-card-back">
									<h3 class="products-section-product-title">One Sound Bomb</h3>
									<p class="products-section-product-description">Our most powerful firework with
										thunderous booms and brilliant gold and silver crackling effects.</p>
									<ul class="products-section-product-features">
										<li><i class="bi bi-check-circle"></i> 25-shot aerial display</li>
										<li><i class="bi bi-check-circle"></i> 30-second duration</li>
										<li><i class="bi bi-check-circle"></i> 150ft height reach</li>
									</ul>
									<div class="products-section-product-actions">
										<a href="product.php"><button class="products-section-btn-buy-now">Buy
												Now</button></a>
									</div>
									<button class="products-section-btn-close"><i class="bi bi-x-lg"></i></button>
								</div>
							</div>
						</div>

						<!-- Product Card 2 -->
						<div class="products-section-product-card">
							<div class="products-section-product-card-inner">
								<div class="products-section-product-card-front">
									<div class="products-section-product-image">
										<img src="images/product-2.webp" alt="Thunder King Firework">
									</div>
									<div class="products-section-product-info">
										<h3 class="products-section-product-title">Ground Chakkar</h3>
										<div class="products-section-product-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
										</div>
									</div>
								</div>
								<div class="products-section-product-card-back">
									<h3 class="products-section-product-title">Ground Chakkar</h3>
									<p class="products-section-product-description">Variety that spins rapidly on the
										ground, creating a mesmerizing display of vibrant colors and sparks. Ideal for
										adding excitement and joy to your Diwali celebrations.</p>
									<ul class="products-section-product-features">
										<li><i class="bi bi-check-circle"></i> 36-shot display</li>
										<li><i class="bi bi-check-circle"></i> 45-second duration</li>
										<li><i class="bi bi-check-circle"></i> 200ft height reach</li>
									</ul>
									<div class="products-section-product-actions">
										<a href="product.php"><button class="products-section-btn-buy-now">Buy
												Now</button></a>
									</div>
									<button class="products-section-btn-close"><i class="bi bi-x-lg"></i></button>
								</div>
							</div>
						</div>

						<!-- Product Card 3 -->
						<div class="products-section-product-card">
							<div class="products-section-product-card-inner">
								<div class="products-section-product-card-front">
									<div class="products-section-product-image">
										<img src="images/product-3.webp" alt="Rainbow Fountain Firework">
									</div>
									<div class="products-section-product-info">
										<h3 class="products-section-product-title">Rainbow Fountain</h3>
										<div class="products-section-product-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star"></i>
										</div>
									</div>
								</div>
								<div class="products-section-product-card-back">
									<h3 class="products-section-product-title">Rainbow Fountain</h3>
									<p class="products-section-product-description">Beautiful ground fountain with seven
										changing colors creating a spectacular display.</p>
									<ul class="products-section-product-features">
										<li><i class="bi bi-check-circle"></i> 90-second duration</li>
										<li><i class="bi bi-check-circle"></i> 15ft spray height</li>
										<li><i class="bi bi-check-circle"></i> 7 vibrant colors</li>
									</ul>
									<div class="products-section-product-actions">
										<a href="product.php"><button class="products-section-btn-buy-now">Buy
												Now</button></a>
									</div>
									<button class="products-section-btn-close"><i class="bi bi-x-lg"></i></button>
								</div>
							</div>
						</div>

						<!-- Product Card 4 -->
						<div class="products-section-product-card">
							<div class="products-section-product-card-inner">
								<div class="products-section-product-card-front">
									<div class="products-section-product-image">
										<img src="images/product-4.webp" alt="Silver Sparklers Pack">
									</div>
									<div class="products-section-product-info">
										<h3 class="products-section-product-title">Silver/Gold Sparklers</h3>
										<div class="products-section-product-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star"></i>
										</div>
									</div>
								</div>
								<div class="products-section-product-card-back">
									<h3 class="products-section-product-title">Silver/Gold Sparklers</h3>
									<p class="products-section-product-description">Pack of 20 long-lasting sparklers
										perfect for celebrations, photos, and safe fun for all ages.</p>
									<ul class="products-section-product-features">
										<li><i class="bi bi-check-circle"></i> 20 sparklers per pack</li>
										<li><i class="bi bi-check-circle"></i> 60-second burn time</li>
										<li><i class="bi bi-check-circle"></i> Smokeless formula</li>
									</ul>
									<div class="products-section-product-actions">
										<a href="product.php"><button class="products-section-btn-buy-now">Buy
												Now</button></a>
									</div>
									<button class="products-section-btn-close"><i class="bi bi-x-lg"></i></button>
								</div>
							</div>
						</div>

						<!-- Product Card 5 -->
						<div class="products-section-product-card">
							<div class="products-section-product-card-inner">
								<div class="products-section-product-card-front">
									<div class="products-section-product-image">
										<img src="images/product-5.webp" alt="Rocket Pack Fireworks">
									</div>
									<div class="products-section-product-info">
										<h3 class="products-section-product-title">Rocket Pack</h3>
										<div class="products-section-product-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-half"></i>
										</div>
									</div>
								</div>
								<div class="products-section-product-card-back">
									<h3 class="products-section-product-title">Rocket Pack</h3>
									<p class="products-section-product-description">Pack of 12 assorted rockets with
										various effects including whistling, popping, and color-changing bursts.</p>
									<ul class="products-section-product-features">
										<li><i class="bi bi-check-circle"></i> 12 rockets per pack</li>
										<li><i class="bi bi-check-circle"></i> 100ft average height</li>
										<li><i class="bi bi-check-circle"></i> 4 different effects</li>
									</ul>
									<div class="products-section-product-actions">
										<a href="product.php"><button class="products-section-btn-buy-now">Buy
												Now</button></a>
									</div>
									<button class="products-section-btn-close"><i class="bi bi-x-lg"></i></button>
								</div>
							</div>
						</div>

						<!-- Product Card 6 -->
						<div class="products-section-product-card">
							<div class="products-section-product-card-inner">
								<div class="products-section-product-card-front">
									<div class="products-section-product-image">
										<img src="images/product-6.webp" alt="Party Popper Set">
									</div>
									<div class="products-section-product-info">
										<h3 class="products-section-product-title">Party Poppers</h3>
										<div class="products-section-product-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-half"></i>
											<i class="bi bi-star"></i>
										</div>
									</div>
								</div>
								<div class="products-section-product-card-back">
									<h3 class="products-section-product-title">Party Poppers</h3>
									<p class="products-section-product-description">Set of 30 confetti poppers perfect
										for celebrations, birthdays, and New Year's events.</p>
									<ul class="products-section-product-features">
										<li><i class="bi bi-check-circle"></i> 30 poppers per set</li>
										<li><i class="bi bi-check-circle"></i> Colorful confetti mix</li>
										<li><i class="bi bi-check-circle"></i> Safe for indoor use</li>
									</ul>
									<div class="products-section-product-actions">
										<a href="product.php"><button class="products-section-btn-buy-now">Buy
												Now</button></a>
									</div>
									<button class="products-section-btn-close"><i class="bi bi-x-lg"></i></button>
								</div>
							</div>
						</div>

						<!-- Product Card 7 -->
						<div class="products-section-product-card">
							<div class="products-section-product-card-inner">
								<div class="products-section-product-card-front">
									<div class="products-section-product-image">
										<img src="images/product-7.webp" alt="Phoenix Rising Firework">
									</div>
									<div class="products-section-product-info">
										<h3 class="products-section-product-title">Phoenix Rising</h3>
										<div class="products-section-product-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
										</div>
									</div>
								</div>
								<div class="products-section-product-card-back">
									<h3 class="products-section-product-title">Phoenix Rising</h3>
									<p class="products-section-product-description">Premium aerial display with red and
										gold effects creating a phoenix shape at the climax.</p>
									<ul class="products-section-product-features">
										<li><i class="bi bi-check-circle"></i> 49-shot display</li>
										<li><i class="bi bi-check-circle"></i> 60-second duration</li>
										<li><i class="bi bi-check-circle"></i> 180ft height reach</li>
									</ul>
									<div class="products-section-product-actions">
										<a href="product.php"><button class="products-section-btn-buy-now">Buy
												Now</button></a>
									</div>
									<button class="products-section-btn-close"><i class="bi bi-x-lg"></i></button>
								</div>
							</div>
						</div>

						<!-- Product Card 8 -->
						<div class="products-section-product-card">
							<div class="products-section-product-card-inner">
								<div class="products-section-product-card-front">
									<div class="products-section-product-image">
										<img src="images/product-8.webp" alt="Celebration Box Fireworks">
									</div>
									<div class="products-section-product-info">
										<h3 class="products-section-product-title">Celebration Box</h3>
										<div class="products-section-product-rating">
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-fill"></i>
											<i class="bi bi-star-half"></i>
										</div>
									</div>
								</div>
								<div class="products-section-product-card-back">
									<h3 class="products-section-product-title">Celebration Box</h3>
									<p class="products-section-product-description">Complete firework set with assorted
										rockets, fountains, and aerial displays for a full show.</p>
									<ul class="products-section-product-features">
										<li><i class="bi bi-check-circle"></i> 20+ different items</li>
										<li><i class="bi bi-check-circle"></i> 15-minute total show</li>
										<li><i class="bi bi-check-circle"></i> Step-by-step guide included</li>
									</ul>
									<div class="products-section-product-actions">
										<a href="product.php"><button class="products-section-btn-buy-now">Buy
												Now</button></a>
									</div>
									<button class="products-section-btn-close"><i class="bi bi-x-lg"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="products-section-wheel-controls">
			<button class="products-section-wheel-control products-section-wheel-prev">
				<i class="bi bi-chevron-left"></i>
			</button>
			<button class="products-section-wheel-control products-section-wheel-next">
				<i class="bi bi-chevron-right"></i>
			</button>
		</div>

		<!-- modal -->
		<div class="products-section-detail-modal">
			<div class="products-section-detail-container">
				<div class="products-section-detail-image">
					<img src="" alt="Product Image">
				</div>
				<div class="products-section-detail-content">
					<h3 class="products-section-detail-title"></h3>
					<p class="products-section-detail-description"></p>
					<div class="products-section-detail-specs"></div>
					<div class="products-section-detail-price"></div>
					<button class="products-section-detail-buy-now">Buy Now</button>
				</div>
				<button class="products-section-detail-close-btn">
					<i class="bi bi-x-lg"></i>
				</button>
			</div>
		</div>
	</section>
	<!-- Parallax Section HTML -->
	<section class="parallax-section">
		<div class="parallax-section-bg-wrapper">
			<img src="images/parallax.webp" alt="Background" class="parallax-section-bg" />
			<div class="parallax-overlay"></div>
		</div>

		<div class="parallax-section-content container">
			<h1 class="parallax-section-title-top">Celebrate With Fireworks</h1>
			<h2 class="parallax-section-title-bottom">Lighting up the sky</h2>

			<div class="parallax-section-buttons">
				<a href="products.php"><button class="parallax-section-btn-primary btn btn-lg">Shop Now</button></a>
				<a href="contact.php"><button
						class="parallax-section-btn-secondary btn btn-outline-warning btn-lg">Contact Us</button></a>
			</div>
		</div>
	</section>
	<!-- index counter -->
	<section class="our-achievements py-5">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="our-achievements-heading text-center mb-5">
						<h2 class="our-achievements-title">Our Achievements</h2>
						<p class="our-achievements-subtitle">Celebrating milestones in the fireworks industry</p>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-12 col-md-6 col-lg-3 mb-4">
					<div class="our-achievements-counter-box">
						<div class="our-achievements-icon">
							<i class="bi bi-trophy"></i>
						</div>
						<h3 class="our-achievements-counter-title">Years of Excellence</h3>
						<div class="our-achievements-counter">
							<span id="counter1" class="odometer">0</span>
							<span class="our-achievements-counter-suffix">+</span>
						</div>
						<p class="our-achievements-counter-text">Serving customers with quality products</p>
					</div>
				</div>

				<div class="col-12 col-md-6 col-lg-3 mb-4">
					<div class="our-achievements-counter-box">
						<div class="our-achievements-icon">
							<i class="bi bi-people"></i>
						</div>
						<h3 class="our-achievements-counter-title">Happy Customers</h3>
						<div class="our-achievements-counter">
							<span id="counter2" class="odometer">0</span>
							<span class="our-achievements-counter-suffix">K+</span>
						</div>
						<p class="our-achievements-counter-text">Creating memorable celebrations</p>
					</div>
				</div>

				<div class="col-12 col-md-6 col-lg-3 mb-4">
					<div class="our-achievements-counter-box">
						<div class="our-achievements-icon">
							<i class="bi bi-shop"></i>
						</div>
						<h3 class="our-achievements-counter-title">Retail Outlets</h3>
						<div class="our-achievements-counter">
							<span id="counter3" class="odometer">0</span>
							<span class="our-achievements-counter-suffix">+</span>
						</div>
						<p class="our-achievements-counter-text">Across the country for your convenience</p>
					</div>
				</div>

				<div class="col-12 col-md-6 col-lg-3 mb-4">
					<div class="our-achievements-counter-box">
						<div class="our-achievements-icon">
							<i class="bi bi-box-seam"></i>
						</div>
						<h3 class="our-achievements-counter-title">Products</h3>
						<div class="our-achievements-counter">
							<span id="counter4" class="odometer">0</span>
							<span class="our-achievements-counter-suffix">+</span>
						</div>
						<p class="our-achievements-counter-text">Unique fireworks for every occasion</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- safety section -->
	<!-- Index Safety Section -->
	<section class="index-safety position-relative py-5 overflow-hidden">
		<!-- Animated SVG Background -->
		<div class="neon-background">
			<div class="neon-stripe"></div>
		</div>
		<div class="container position-relative z-index-1">
			<div class="row align-items-center">
				<!-- Content Column -->
				<div class="col-12 col-lg-7 order-lg-2">
					<div class="index-safety-content">
						<span class="index-safety-subtitle d-block mb-2">Safe & Responsible Celebrations</span>
						<h2 class="index-safety-title mb-4">
							Ignite Joy
							With Complete
							<span class="index-safety-title-highlight">Safety Assurance</span>
						</h2>

						<div class="index-safety-features">
							<div class="index-safety-feature">
								<div class="index-safety-feature-icon">
									<i class="bi bi-shield-lock"></i>
								</div>
								<div class="index-safety-feature-content">
									<h4 class="index-safety-feature-title">Premium Safety Standards</h4>
									<p class="index-safety-feature-text">Our fireworks exceed all international safety
										regulations with triple-layer quality checks.</p>
								</div>
							</div>

							<div class="index-safety-feature">
								<div class="index-safety-feature-icon">
									<i class="bi bi-clipboard2-check"></i>
								</div>
								<div class="index-safety-feature-content">
									<h4 class="index-safety-feature-title">Expert Guidance</h4>
									<p class="index-safety-feature-text">Detailed multilingual instructions with QR-code
										linked video demonstrations.</p>
								</div>
							</div>

							<div class="index-safety-feature">
								<div class="index-safety-feature-icon">
									<i class="bi bi-people"></i>
								</div>
								<div class="index-safety-feature-content">
									<h4 class="index-safety-feature-title">Community Training</h4>
									<p class="index-safety-feature-text">Free annual safety workshops for retailers and
										bulk purchasers.</p>
								</div>
							</div>
						</div>

						<div class="index-safety-cta-wrapper mt-5">
							<a href="safetytips.php" class="index-safety-cta">
								<span class="index-safety-cta-text">Explore Safety Features</span>
								<span class="index-safety-cta-icon">
									<i class="bi bi-chevron-double-right"></i>
								</span>
							</a>
						</div>
					</div>
				</div>

				<!-- Image Column -->
				<div class="col-12 col-lg-5 order-lg-1 mt-4 mt-lg-0">
					<div class="index-safety-image-container">
						<div class="index-safety-image-wrapper hvr-grow">
							<img src="images/safety-index.webp" alt="Fireworks safety certification"
								class="index-safety-image img-fluid">
							<div class="index-safety-badge">
								<i class="bi bi-stars"></i>
								<span>ISO 9001 Certified</span>
							</div>
						</div>
						<div class="index-safety-pattern"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- index cta -->
	<section class="indexcta-section position-relative">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-12 col-lg-6">
					<h2 class="indexcta-title h1">Get in Touch with Demo Traders</h2>
					<h3 class="indexcta-subtitle">Your Premier Fireworks Partner</h3>
					<p class="indexcta-text">Ready to elevate your fireworks business? As a leading wholesale and retail
						supplier,
						we offer premium quality fireworks, competitive pricing, and exceptional customer service. Join
						our network of successful retailers and light up your profits with our extensive inventory of
						show-stopping pyrotechnics.</p>

					<div class="indexcta-contact-wrapper">
						<div class="indexcta-contact-item">
							<div class="indexcta-icon-wrapper">
								<i class="bi bi-telephone-fill indexcta-icon"></i>
							</div>
							<div class="indexcta-contact-info">
								<div class="indexcta-contact-label">Call Us Directly</div>
								<div class="indexcta-contact-value">+91 99999 99999</div>
							</div>
						</div>

						<div class="indexcta-contact-item">
							<div class="indexcta-icon-wrapper">
								<i class="bi bi-envelope-fill indexcta-icon"></i>
							</div>
							<div class="indexcta-contact-info">
								<div class="indexcta-contact-label">Email Us</div>
								<div class="indexcta-contact-value">contact@demotraders.com</div>
							</div>
						</div>

						<div class="indexcta-contact-item">
							<div class="indexcta-icon-wrapper">
								<i class="bi bi-geo-alt-fill indexcta-icon"></i>
							</div>
							<div class="indexcta-contact-info">
								<div class="indexcta-contact-label">Visit Our Office</div>
								<div class="indexcta-contact-value">123,Demo Building,Demo Street,Demo Colony,Sivakasi.
								</div>
							</div>
						</div>

						<div class="indexcta-contact-item">
							<div class="indexcta-icon-wrapper">
								<i class="bi bi-clock-fill indexcta-icon"></i>
							</div>
							<div class="indexcta-contact-info">
								<div class="indexcta-contact-label">Business Hours</div>
								<div class="indexcta-contact-value">Mon-Fri: 9am-6pm | Sat: 10am-4pm</div>
							</div>
						</div>
					</div>

					<div class="mt-4">
						<a href="contact.php" class="indexcta-btn">Contact Us</a>
					</div>
				</div>

				<div class="col-12 col-md-12 col-lg-6">
					<div class="indexcta-image-container">
						<img src="images/index-last.webp" alt="Fireworks Wholesale" class="indexcta-image">
						<div class="indexcta-sparkle indexcta-sparkle-1"></div>
						<div class="indexcta-sparkle indexcta-sparkle-2"></div>
						<div class="indexcta-sparkle indexcta-sparkle-3"></div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<?php include_once "footer.php"; ?>
	<div class="fixed point w0">
		<a href="https://api.whatsapp.com/send?phone=919999999999">
			<img src="images/whatsappicon.png" class="priceicn float-left" alt="whatsapp contact" title="demo traders">
		</a>
	</div>
	<div class="fixed point1 w0 d-none d-lg-block">
		<span class="time-of-year">
			<img src="images/callicon.png" class="priceicn float-left" alt="phone contact" title="Demo Traders">
			<div class="tooltip text-white carter text-center"> For More Details Call <br>
				<i class="fa fa-phone text-white"></i> +91 99999 99999
			</div>
		</span>
	</div>
	<div class="fixed point1 w0 d-lg-none">
		<a href="tel:+919999999999">
			<img src="images/callicon.png" class="priceicn float-left" alt="" title="Demo Traders">
		</a>
	</div>
	<div class="fixed point2">
		<a href="products.php">
			<img src="images/quickpurchase.png" class="priceicn2 float-right blink" alt="" title="">
		</a>
	</div>
	<script src="js/odometer.min.js"></script>
	<script src="js/swiper-bundle.min.js"></script>
	<script src="js/simpleParallax.js"></script>
	<script src="js/gsap.min.js"></script>
	<script src="js/SplitText.min.js"></script>
	<script src="js/ScrollTrigger.min.js"></script>
	<script src="js/MorphSVGPlugin.min.js"></script>
	<script src="js/MotionPathPlugin.min.js"></script>
	<script src="js/script.js"></script>
</body>

</html>