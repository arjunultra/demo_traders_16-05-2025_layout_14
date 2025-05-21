<!-- Marquee Topbar -->
<div id="headerTop" class="para-font sparkle-header-topbar py-2 text-center marquee-left">
    <i class="bi bi-stars text-warning"></i>Diwali sale is open now. Buy early for the best discounts! Happy
    Diwali...!!!!
    &nbsp; <i class="bi bi-whatsapp text-success"></i> +91 9999999999
    &nbsp; <i class="bi bi-telephone text-primary"></i> +91 8888888888, +91 7777777777
</div>

<!-- Main Header -->
<header>


    <!-- Main Navigation Section -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-red">
        <a class="navbar-brand" href="index.php">
            <img src="images/logo.webp" alt="logo" title="Demo Traders" class="img-fluid nav-logo">
        </a>
        <button class="navbar-toggler x" type="button" data-toggle="collapse" data-target="#navbarsExample05"
            aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample05">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item px-2 hvr-rectangle-out">
                    <a class="nav-link <?php if ($page == 'home')
                        echo 'active'; ?>" href="index.php">Home</a>
                </li>
                <li class="nav-item px-2 hvr-rectangle-out ">
                    <a class="nav-link <?php if ($page == 'about')
                        echo 'active'; ?>" href="about.php">About
                        Us</a>
                </li>
                <li class="nav-item px-2 hvr-rectangle-out">
                    <a class="nav-link <?php if ($page == 'products')
                        echo 'active'; ?>" href="products.php">Products</a>
                </li>
                <li class="nav-item px-2 hvr-rectangle-out">
                    <a class="nav-link <?php if ($page == 'safetytips')
                        echo 'active'; ?>" href="safetytips.php">Safety Tips</a>
                </li>
                <li class="nav-item px-2 hvr-rectangle-out">
                    <a class="nav-link <?php if ($page == 'contact')
                        echo 'active'; ?>" href="contact.php">Contact Us</a>
                </li>
            </ul>
        </div>
    </nav>
</header>





<script src="js/marquee.js"></script>
<script>
    $('.marquee-left').marquee({
        duration: 16000,
        gap: 150,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: false,
        pauseOnHover: true
    });
</script>